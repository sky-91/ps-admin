import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {IPRecordEditComponent} from './i-p-record-edit.component';

describe('IPRecordEditComponent', () => {
  let component: IPRecordEditComponent;
  let fixture: ComponentFixture<IPRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IPRecordEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IPRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
