import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddneAreaComponent } from './addne-area.component';

describe('AddneAreaComponent', () => {
  let component: AddneAreaComponent;
  let fixture: ComponentFixture<AddneAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddneAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddneAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
