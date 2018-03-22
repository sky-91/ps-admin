import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GroupSummaryDetailComponent} from './group-summary-detail.component';

describe('GroupSummaryDetailComponent', () => {
  let component: GroupSummaryDetailComponent;
  let fixture: ComponentFixture<GroupSummaryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GroupSummaryDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSummaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
