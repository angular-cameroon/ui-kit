import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { NgDocThemeService } from '@ng-doc/app/services/theme';
import { isPlatformBrowser } from '@angular/common';
import { faBrandIcon } from './utils/icon.utils';

@Component({
  selector: 'cam-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ui-kit';
  private systemDarkModeListener: MediaQueryList | undefined;
  protected readonly faBrandIcon = faBrandIcon

  constructor(
    private ngDocThemeService: NgDocThemeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.systemDarkModeListener = window.matchMedia('(prefers-color-scheme: dark)');
    }
  }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.ngDocThemeService.themeChanges().subscribe((theme) => {
      theme === 'auto' ? this.applySystemTheme() : this.updateTailwindTheme(theme);
    });

    this.systemDarkModeListener?.addEventListener('change', this.applySystemTheme);

    // Apply the initial theme
    this.ngDocThemeService.currentTheme === 'auto' 
      ? this.applySystemTheme() 
      : this.updateTailwindTheme(this.ngDocThemeService.currentTheme);
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.systemDarkModeListener) {
      this.systemDarkModeListener.removeEventListener('change', this.applySystemTheme);
    }
  }

  /**
   * Apply the system theme based on the user's OS setting.
   */
  private applySystemTheme = (): void => {
    const isSystemDark = this.systemDarkModeListener?.matches;
    this.updateTailwindTheme(isSystemDark ? 'dark' : 'light');
  };

  /**
   * Update the TailwindCSS theme based on the specified theme.
   * @param theme - The current theme, either 'dark' or 'light'.
   */
  private updateTailwindTheme(theme: string | null): void {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
}