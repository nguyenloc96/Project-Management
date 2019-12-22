import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchScreenComponent } from './user-search-screen.component';

describe('UserSearchScreenComponent', () => {
  let component: UserSearchScreenComponent;
  let fixture: ComponentFixture<UserSearchScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
