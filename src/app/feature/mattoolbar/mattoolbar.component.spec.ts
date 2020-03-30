import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattoolbarComponent } from './mattoolbar.component';

describe('MattoolbarComponent', () => {
  let component: MattoolbarComponent;
  let fixture: ComponentFixture<MattoolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattoolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
