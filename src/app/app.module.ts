import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MainComponent } from './core/components';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
