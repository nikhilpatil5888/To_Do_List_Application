import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NickFormComponent } from './nick-form.component';

describe('NickFormComponent', () => {
  let component: NickFormComponent;
  let fixture: ComponentFixture<NickFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NickFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NickFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
