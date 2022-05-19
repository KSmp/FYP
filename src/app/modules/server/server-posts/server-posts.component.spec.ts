import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerPostsComponent } from './server-posts.component';

describe('ServerPostsComponent', () => {
  let component: ServerPostsComponent;
  let fixture: ComponentFixture<ServerPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
