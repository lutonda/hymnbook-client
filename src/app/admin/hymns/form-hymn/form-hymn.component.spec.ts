import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHymnComponent } from './form-hymn.component';

describe('FormHymnComponent', () => {
  let component: FormHymnComponent;
  let fixture: ComponentFixture<FormHymnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHymnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHymnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
