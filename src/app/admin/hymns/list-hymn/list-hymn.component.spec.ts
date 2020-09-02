import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHymnComponent } from './list-hymn.component';

describe('ListHymnComponent', () => {
  let component: ListHymnComponent;
  let fixture: ComponentFixture<ListHymnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHymnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHymnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
