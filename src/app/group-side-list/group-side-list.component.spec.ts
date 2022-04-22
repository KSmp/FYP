import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSideListComponent } from './group-side-list.component';

describe('GroupSideListComponent', () => {
  let component: GroupSideListComponent;
  let fixture: ComponentFixture<GroupSideListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupSideListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupSideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
