import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupRecordEditComponent} from './group-record-edit.component';

describe('GroupRecordEditComponent', () => {
  let component: GroupRecordEditComponent;
  let fixture: ComponentFixture<GroupRecordEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupRecordEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRecordEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
