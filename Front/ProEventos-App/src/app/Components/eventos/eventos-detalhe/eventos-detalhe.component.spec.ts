import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosDetalheComponent } from './eventos-detalhe.component';

describe('EventosDetalheComponent', () => {
  let component: EventosDetalheComponent;
  let fixture: ComponentFixture<EventosDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventosDetalheComponent]
    });
    fixture = TestBed.createComponent(EventosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
