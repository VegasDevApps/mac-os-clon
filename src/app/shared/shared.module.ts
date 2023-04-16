import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiModule } from '../shared-ui/shared-ui.module';
import { ClockComponent } from './components/clock/clock.component';

import { 
  DialogService,
    DynamicDialogRef,
    DynamicDialogConfig
 } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    ClockComponent
  ],
  imports: [
    CommonModule,
    SharedUiModule
  ],
  exports: [
    SharedUiModule,
    ClockComponent
  ],
  providers: [
    DialogService,
    DynamicDialogRef,
    DynamicDialogConfig
  ]
})
export class SharedModule { }
