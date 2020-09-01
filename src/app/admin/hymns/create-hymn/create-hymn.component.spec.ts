import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHymnComponent } from './create-hymn.component';

describe('CreateHymnComponent', () => {
  let component: CreateHymnComponent;
  let fixture: ComponentFixture<CreateHymnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHymnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHymnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
