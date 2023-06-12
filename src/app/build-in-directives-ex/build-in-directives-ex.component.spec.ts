import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildInDirectivesExComponent } from './build-in-directives-ex.component';

describe('BuildInDirectivesExComponent', () => {
  let component: BuildInDirectivesExComponent;
  let fixture: ComponentFixture<BuildInDirectivesExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildInDirectivesExComponent]
    });
    fixture = TestBed.createComponent(BuildInDirectivesExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
