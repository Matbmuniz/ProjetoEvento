import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eventos-detalhe',
  templateUrl: './eventos-detalhe.component.html',
  styleUrls: ['./eventos-detalhe.component.scss']
})
export class EventosDetalheComponent implements OnInit{

    form!: FormGroup;

    get f(): any {
      return this.form.controls;
    }
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.validation();
    }

    public validation(): void{
      this.form = this.fb.group({
        local: [
          '', Validators.required
        ],
        dataEvento: [
          '', Validators.required
        ],
        tema: [
          '', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]
        ],
        qtdPessoas: [
          '', [Validators.required, Validators.max(12000)]
        ],
        imagemURL: [
          '', Validators.required
        ],
        telefone: [
          '', Validators.required
        ],
        email: [
          '', [Validators.required, Validators.email]
        ]
      });
    }

    public resetForm(): void {
      this.form.reset();
    }
}
