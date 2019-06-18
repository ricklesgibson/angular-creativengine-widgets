import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetInfoComponent } from './widget-info/widget-info.component';
import { WidgetAddComponent } from './widget-add/widget-add.component';
import { WidgetEditComponent } from './widget-edit/widget-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetsComponent,
    WidgetInfoComponent,
    WidgetAddComponent,
    WidgetEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
