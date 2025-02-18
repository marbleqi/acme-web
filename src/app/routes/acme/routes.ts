import { Routes } from '@angular/router';

import { AcmeAccountService, AcmeAccountComponent, AcmeCertComponent } from '.';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    providers: [AcmeAccountService],
    children: [
      { path: 'account', component: AcmeAccountComponent },
      { path: 'cert', component: AcmeCertComponent }
    ]
  }
];
