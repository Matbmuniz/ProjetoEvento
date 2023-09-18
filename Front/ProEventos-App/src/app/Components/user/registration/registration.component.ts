import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControlOptions} from '@angular/forms';
import { ValidatorField } from '@app/helpers/ValidatorField';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form!: FormGroup;
  public formOptions: AbstractControlOptions;
  constructor(public fb: FormBuilder){}

  get f(): any {return this.form?.controls; }

  ngOnInit(): void {
    this.validation();
  }

  public validation(): void {

    setTimeout(() => {
      this.formOptions = {
        validators: ValidatorField.MustMatch('senha', 'confirmeSenha')
      };
    }, 1000);

    this.form = this.fb.group({
      primeiroNome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      email: [
        '', [Validators.required, Validators.email]
    ],
      userName: ['', Validators.required],
      senha: [
        '', [Validators.required, Validators.minLength(6)]
      ],
      confirmarSenha: ['', Validators.required],
    }, this.formOptions);
  }

}
