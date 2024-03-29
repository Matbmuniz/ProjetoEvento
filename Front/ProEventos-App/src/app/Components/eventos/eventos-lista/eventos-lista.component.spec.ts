import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosListaComponent } from './eventos-lista.component';

describe('EventosListaComponent', () => {
  let component: EventosListaComponent;
  let fixture: ComponentFixture<EventosListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosListaComponent]
    });
    fixture = TestBed.createComponent(EventosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
