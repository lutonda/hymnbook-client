import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTypePartComponent } from './create-type-part.component';

describe('CreateTypePartComponent', () => {
  let component: CreateTypePartComponent;
  let fixture: ComponentFixture<CreateTypePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTypePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTypePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
