import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTypePartComponent } from './update-type-part.component';

describe('UpdateTypePartComponent', () => {
  let component: UpdateTypePartComponent;
  let fixture: ComponentFixture<UpdateTypePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTypePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTypePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
