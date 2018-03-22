import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupRecordDetailComponent} from './group-record-detail.component';

describe('GroupRecordDetailComponent', () => {
  let component: GroupRecordDetailComponent;
  let fixture: ComponentFixture<GroupRecordDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupRecordDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
