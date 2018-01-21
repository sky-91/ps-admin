import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRecordListComponent } from './group-record-list.component';

describe('GroupRecordListComponent', () => {
  let component: GroupRecordListComponent;
  let fixture: ComponentFixture<GroupRecordListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupRecordListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
