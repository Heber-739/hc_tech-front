import { CompanyData } from './../../../interfaces/company';
import { Component, inject, input, output, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { companyDefault } from '../../../common/constants/company-default';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-company',
  imports: [DividerModule, ButtonModule, DatePickerModule, AvatarModule, SelectModule, InputTextModule, ReactiveFormsModule, DatePickerModule],
  templateUrl: './company.html',
  styleUrl: './company.css'
})
export class Company {
  companies = input.required<CompanyData[]>();
  close = output<void>()
  pushCompany = output<CompanyData>()
  deleteyCompany = output<string>()
  fb = inject(FormBuilder);

  protected currentCompany = signal<CompanyData>(companyDefault)
  protected labelAction = signal<string>("Seleccionar")
  companyForm;


  constructor(){
    this.companyForm = this.fb.group({
      id: [''],
      image: [''],
      name: ['', [Validators.required]],
      web_page: ['', [Validators.required]],
      address: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      fundation_year: [undefined as Date | undefined, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: [
        undefined as number | undefined,
        [Validators.required, Validators.pattern(/^\w{11,13}$/)],
      ]
    })

    this.companyForm.valueChanges.pipe(debounceTime(300)).subscribe({
          next: (v: any) => {
            if(typeof v.name === 'object') {
              this.labelAction.set("Seleccionar")
              this.currentCompany.set(v.name);
              const {image,...company} = v.name;
              this.companyForm.patchValue({...company},{ emitEvent: false });
            } else {
              this.labelAction.set("Guardar")
              const {image,...values} = v
              this.currentCompany.update((c)=>({...c,...values}))
            }
          },
        });

  }

  loadFile(event: Event) {
    const input = event.target as HTMLInputElement;
    const file: File = input.files?.[0]!;
    const reader = new FileReader();
    reader.onload = () =>
      this.companyForm.controls.image.setValue(reader.result as string);
    reader.readAsDataURL(file);
  }

  submit(){
    if(this.companyForm.invalid) return;
    this.pushCompany.emit(this.currentCompany());
  }

  delete(){
    this.deleteyCompany.emit(this.currentCompany().id);
  }

  closeForm(){
    this.close.emit();
  }

  includesCompany(){
    return this.companies().some((c)=>c.id === this.currentCompany().id)
  }

}
