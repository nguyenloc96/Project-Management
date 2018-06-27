import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateNoteComponent } from './user-create-note.component';

describe('UserCreateNoteComponent', () => {
  let component: UserCreateNoteComponent;
  let fixture: ComponentFixture<UserCreateNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCreateNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
