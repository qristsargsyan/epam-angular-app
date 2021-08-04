import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './providers-viewproviders/child/child.component';
import { InspectorComponent } from './providers-viewproviders/inspector/inspector.component';
import { ProvidersViewprovidersComponent } from './providers-viewproviders/providers-viewproviders.component';
import { HostChildComponent } from './resolution-modifiers/host-child/host-child.component';
import { HostParentComponent } from './resolution-modifiers/host-parent/host-parent.component';
import { HostComponent } from './resolution-modifiers/host/host.component';
import { OptionalComponent } from './resolution-modifiers/optional/optional.component';
import { ResolutionModifiersComponent } from './resolution-modifiers/resolution-modifiers.component';
import { SelfNoDataComponent } from './resolution-modifiers/self-no-data/self-no-data.component';
import { SelfComponent } from './resolution-modifiers/self/self.component';
import { SkipselfComponent } from './resolution-modifiers/skipself/skipself.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvidersViewprovidersComponent,
    ResolutionModifiersComponent,
    OptionalComponent,
    SelfComponent,
    SelfNoDataComponent,
    HostComponent,
    SkipselfComponent,
    HostParentComponent,
    HostChildComponent,
    ChildComponent,
    InspectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
