import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProvidersViewprovidersComponent } from './providers-viewproviders/providers-viewproviders.component';
import { ProvidersViewprovidersModule } from './providers-viewproviders/providers-viewproviders.module';
import { ResolutionModifiersComponent } from './resolution-modifiers/resolution-modifiers.component';
import { ResolutionModifiersModule } from './resolution-modifiers/resolution-modifiers.module';

@NgModule({
  declarations: [
    AppComponent,
    ProvidersViewprovidersComponent,
    ResolutionModifiersComponent,    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ResolutionModifiersModule,
    ProvidersViewprovidersModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
