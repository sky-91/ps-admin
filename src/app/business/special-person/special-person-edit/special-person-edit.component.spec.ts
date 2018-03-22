import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpecialPersonEditComponent} from './special-person-edit.component';

describe('SpecialPersonEditComponent', () => {
  let component: SpecialPersonEditComponent;
  let fixture: ComponentFixture<SpecialPersonEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialPersonEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialPersonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
