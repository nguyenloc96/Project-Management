import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllProjectComponent } from './get-all-project.component';

describe('GetAllProjectComponent', () => {
  let component: GetAllProjectComponent;
  let fixture: ComponentFixture<GetAllProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
