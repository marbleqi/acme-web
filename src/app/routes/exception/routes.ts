import { Routes } from '@angular/router';

import { ExceptionComponent, ExceptionTriggerComponent } from '.';

export const routes: Routes = [
  { path: '403', component: ExceptionComponent, data: { type: 403 } },
  { path: '404', component: ExceptionComponent, data: { type: 404 } },
  { path: '500', component: ExceptionComponent, data: { type: 500 } },
  { path: 'trigger', component: ExceptionTriggerComponent }
];
