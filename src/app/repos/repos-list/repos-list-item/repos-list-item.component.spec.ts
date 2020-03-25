import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposListItemComponent } from './repos-list-item.component';

describe('ReposListItemComponent', () => {
  let component: ReposListItemComponent;
  let fixture: ComponentFixture<ReposListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
