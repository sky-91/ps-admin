import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupSummaryUploadComponent} from './group-summary-upload.component';

describe('GroupSummaryUploadComponent', () => {
  let component: GroupSummaryUploadComponent;
  let fixture: ComponentFixture<GroupSummaryUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupSummaryUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSummaryUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
