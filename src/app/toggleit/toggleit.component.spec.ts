import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleitComponent } from './toggleit.component';

describe('ToggleitComponent', () => {
  let component: ToggleitComponent;
  let fixture: ComponentFixture<ToggleitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
