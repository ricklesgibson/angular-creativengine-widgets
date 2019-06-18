import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WidgetsComponent} from './widgets/widgets.component';
import {WidgetInfoComponent} from './widget-info/widget-info.component';
import {WidgetAddComponent} from './widget-add/widget-add.component';
import {WidgetEditComponent} from './widget-edit/widget-edit.component';

const routes: Routes = [
  {
    path: 'widgets',
    component: WidgetsComponent,
    data: { title: 'Here be Widgets' }
  },
  {
    path: 'widget-info/:id',
    component: WidgetInfoComponent,
    data: { title: 'Widget Deets' }
  },
  {
    path: 'widget-add',
    component: WidgetAddComponent,
    data: { title: 'Add a widget' }
  },
  {
    path: 'widget-edit/:id',
    component: WidgetEditComponent,
    data: { title: 'Modify a Widget' }
  },
  {
    path: '',
    redirectTo: '/widgets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
