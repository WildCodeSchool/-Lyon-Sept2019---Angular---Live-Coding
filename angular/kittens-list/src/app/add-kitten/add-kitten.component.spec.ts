import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKittenComponent } from './add-kitten.component';

describe('AddKittenComponent', () => {
  let component: AddKittenComponent;
  let fixture: ComponentFixture<AddKittenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKittenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
