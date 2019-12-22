import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainScreenComponent } from './user-main-screen.component';

describe('UserMainScreenComponent', () => {
  let component: UserMainScreenComponent;
  let fixture: ComponentFixture<UserMainScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMainScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMainScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
