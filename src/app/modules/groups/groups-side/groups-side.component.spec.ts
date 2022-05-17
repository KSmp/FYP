import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsSideComponent } from './groups-side.component';

describe('GroupsSideComponent', () => {
  let component: GroupsSideComponent;
  let fixture: ComponentFixture<GroupsSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupsSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
