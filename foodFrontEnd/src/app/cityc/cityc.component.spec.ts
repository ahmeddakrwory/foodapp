import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitycComponent } from './cityc.component';

describe('CitycComponent', () => {
  let component: CitycComponent;
  let fixture: ComponentFixture<CitycComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitycComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
