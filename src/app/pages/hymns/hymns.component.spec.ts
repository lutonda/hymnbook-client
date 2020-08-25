import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HymnsComponent } from './hymns.component';

describe('HymnsComponent', () => {
  let component: HymnsComponent;
  let fixture: ComponentFixture<HymnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HymnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HymnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
