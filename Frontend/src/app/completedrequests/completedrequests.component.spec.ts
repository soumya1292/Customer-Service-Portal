import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedrequestsComponent } from './completedrequests.component';

describe('CompletedrequestsComponent', () => {
  let component: CompletedrequestsComponent;
  let fixture: ComponentFixture<CompletedrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedrequestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
