import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ImportantPersonEditComponent} from './important-person-edit.component';

describe('ImportantPersonEditComponent', () => {
  let component: ImportantPersonEditComponent;
  let fixture: ComponentFixture<ImportantPersonEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImportantPersonEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantPersonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
