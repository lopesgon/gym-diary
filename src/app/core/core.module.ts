import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CORE_COMPONENTS } from './components';
import { CORE_SERVICES } from './services';

import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    CoreRoutingModule
  ],
  declarations: [
    CORE_COMPONENTS
  ],
  providers: [
    CORE_SERVICES
  ],
  exports: []
})
export class CoreModule { }
