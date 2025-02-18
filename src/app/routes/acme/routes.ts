import { Routes } from '@angular/router';

import { AcmeAccountComponent, AcmeCertComponent } from '.';

export const routes: Routes = [
  { path: 'account', component: AcmeAccountComponent },
  { path: 'cert', component: AcmeCertComponent }
];
