import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CreatePostModalComponent } from './create-post-modal/create-post-modal.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ModalComponent, CreatePostModalComponent],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    PickerModule,
    FormsModule
  ],
  exports: [ModalComponent, CreatePostModalComponent],
  entryComponents: [CreatePostModalComponent]
})
export class SharedComponentsModule { }
