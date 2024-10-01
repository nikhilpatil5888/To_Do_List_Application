import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NickLogComponent } from './nick-log.component';

describe('NickLogComponent', () => {
  let component: NickLogComponent;
  let fixture: ComponentFixture<NickLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NickLogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NickLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
