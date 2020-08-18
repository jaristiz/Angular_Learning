import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventService,
  EventsListResolver,
  EventThumbnailComponent
}
  from './events/index'

import { NavBarComponent } from './nav/navbar.component'
import { ToastrService } from './common/toastr.service'

import { Error404Component } from './errors/404.component'
import { EventsAppComponent } from './events-app.component'
import { appRoutes } from './routes'
import { ReturnStatement } from '@angular/compiler';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventsListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('No se han guardado los cambios para este evento, realmente desea cancelar?')

  return true

}