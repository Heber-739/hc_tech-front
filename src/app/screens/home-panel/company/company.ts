import { Companies, CompanyData } from './../../../interfaces/company';
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
import storeService from '../../../common/services/store-service';
import { UserData } from '../../../interfaces/user';
import { CompanyService } from '../../../common/services/company';
import { ModalActions } from '../../../common/components/modal-actions/modal-actions';

@Component({
  selector: 'app-company',
  imports: [DividerModule, ButtonModule, DatePickerModule, AvatarModule, SelectModule, InputTextModule, ReactiveFormsModule, DatePickerModule, ModalActions],
  templateUrl: './company.html',
  styleUrl: './company.css'
})
export class Company {
  protected companies;
  close = output<void>()
  modalKey = signal<string>("");

  fb = inject(FormBuilder);
  companyService = inject(CompanyService);

  protected currentCompany = signal<Companies>(companyDefault)
  protected labelAction = signal<'Seleccionar' | 'Guardar'>("Seleccionar")
  companyForm;


  constructor(){
    this.companies = signal(storeService.get<Companies[]>("companies-list"));
    const user = storeService.get<UserData>("user-data");
    this.companyForm = this.fb.group({
      id:[],
      user_id:[user.id],
      nombre: ['', [Validators.required]],
      pag_web: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      razon_social: ['', [Validators.required]],
      created_at: [undefined as Date | undefined, [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: [
        undefined as string | undefined,
        [Validators.required, Validators.pattern(/^.{11,13}$/)],
      ],
      imagen: [''],
      cuit: ['']
    })

    this.companyForm.valueChanges.pipe(debounceTime(300)).subscribe({
          next: (v: any) => {
            if(typeof v.nombre === 'object') {
              this.labelAction.set("Seleccionar")
              this.currentCompany.set(v.nombre);
              const {imagen,...company} = v.nombre;
              this.companyForm.patchValue({...company},{ emitEvent: false });
            } else {
              this.labelAction.set("Guardar")
              const {imagen,...values} = v
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
      this.companyForm.controls.imagen.setValue(reader.result as string);
    reader.readAsDataURL(file);
  }

  async submit(){
    console.log(this.companyForm.value)
    if(this.companyForm.invalid) return;
    this.labelAction() === "Guardar" && await this.companyService.updateCompany(this.currentCompany());
    // this.pushCompany.emit(this.currentCompany());
  }

  openConfirmModal(){
    this.modalKey.set("delete");
  }

  closeModal(result:boolean){
    this.modalKey.set("");
    result && this.delete();
  }
  async delete(){
    const {data, error} = await this.companyService.deleteCompany(this.currentCompany().id);
    if(error) return;
    this.companies.update((cs)=> cs.filter((c)=> c.id !== this.currentCompany().id ));
    this.companyForm.reset();
  }

  closeForm(){
    storeService.set("update-employees",true);
    this.close.emit();
  }

  includesCompany(){
    return this.companies().some((c)=>c.id === this.currentCompany().id)
  }

}
