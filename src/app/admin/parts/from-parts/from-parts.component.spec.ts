import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromPartsComponent } from './from-parts.component';

describe('FromPartsComponent', () => {
  let component: FromPartsComponent;
  let fixture: ComponentFixture<FromPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
