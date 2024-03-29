import { Component, TemplateRef } from '@angular/core';

import { every } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Evento } from '@app/Models/Evento';
import { EventoService } from '@app/Services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-lista',
  templateUrl: './eventos-lista.component.html',
  styleUrls: ['./eventos-lista.component.scss']
})
export class EventosListaComponent {
modalRef?: BsModalRef;

  public eventos: Evento[] = [];
  public eventosFilters: Evento[] = [];

  public widthImg: number = 150;
  public marginImg: number = 2;
  public showImg: boolean = true;
  private _filterList: string = '';

  public get filterList(): string {
    return this._filterList;
  }

  public set filterList(value: string) {
    this._filterList = value;
    this.eventosFilters = this._filterList ? this.filterEvent(this._filterList) : this.eventos;
  }

  public filterEvent(filterBy: string): Evento[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: {tema: string; local: string;}) => evento.tema.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
      evento.local.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router) {}

  public ngOnInit(): void {
    this.spinner.show();
    this.getEventos();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  public alterarImagem(): void {
    this.showImg = !this.showImg;
  }

  public getEventos(): void{
    this.eventoService.getEvento().subscribe(
      (_eventos: Evento[]) => {
        this.eventos = _eventos;
        this.eventosFilters = this.eventos;
      },
      error => (error: any)=> {
        this.spinner.hide();
        this.toastr.error('Erro ao carregar os Eventos', 'Erro!')
      }
    );
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastr.success('O Evento foi deletado com sucesso', 'Deletado!!');
  }

  decline(): void {
    this.modalRef?.hide();
  }

  detalheEvento(id: number): void{
    this.router.navigate([`/eventos/detalhe/${id}`]);
  }
}
