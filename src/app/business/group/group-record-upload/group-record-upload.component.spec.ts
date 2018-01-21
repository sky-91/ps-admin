import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupRecordUploadComponent} from './group-record-upload.component';

describe('GroupRecordUploadComponent', () => {
  let component: GroupRecordUploadComponent;
  let fixture: ComponentFixture<GroupRecordUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupRecordUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRecordUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
