import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../../Services/evento.service';
import { every } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { Evento } from '../../Models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  // providers: [EventoService]
})
export class EventosComponent implements OnInit{

  constructor() {}

  ngOnInit(): void {

  }
}
