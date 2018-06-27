import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteProjectComponent } from './note-project.component';

describe('NoteProjectComponent', () => {
  let component: NoteProjectComponent;
  let fixture: ComponentFixture<NoteProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
