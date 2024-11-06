import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocsShellComponent } from './docs-shell.component';

describe('DocsShellComponent', () => {
  let component: DocsShellComponent;
  let fixture: ComponentFixture<DocsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocsShellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
