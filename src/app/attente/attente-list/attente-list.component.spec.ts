import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttenteListComponent } from './attente-list.component';

describe('AttenteListComponent', () => {
  let component: AttenteListComponent;
  let fixture: ComponentFixture<AttenteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttenteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
