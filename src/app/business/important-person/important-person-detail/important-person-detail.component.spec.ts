import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImportantPersonDetailComponent} from './important-person-detail.component';

describe('ImportantPersonDetailComponent', () => {
  let component: ImportantPersonDetailComponent;
  let fixture: ComponentFixture<ImportantPersonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImportantPersonDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantPersonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
