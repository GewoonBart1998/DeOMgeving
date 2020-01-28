import {NgModule} from '@angular/core';
import {AppRoutingModule} from '../app-routing.modules';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmActionComponent} from './components/confirm-action.component';


@NgModule({
  declarations: [ConfirmActionComponent],
  imports: [AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [ConfirmActionComponent]

})
export class SharedModule {
}
