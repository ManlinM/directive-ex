import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BuildInDirectivesExComponent } from './build-in-directives-ex/build-in-directives-ex.component';
import { MsgComponentComponent } from './msg-component/msg-component.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildInDirectivesExComponent,
    MsgComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
