import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHymnComponent } from './update-hymn.component';

describe('UpdateHymnComponent', () => {
  let component: UpdateHymnComponent;
  let fixture: ComponentFixture<UpdateHymnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHymnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHymnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
