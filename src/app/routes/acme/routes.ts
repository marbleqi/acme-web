import { Routes } from '@angular/router';

import { AcmeAccountService, AcmeKeyService, AcmeCertService, AcmeAccountComponent, AcmeKeyComponent, AcmeCertComponent } from '.';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    providers: [AcmeAccountService, AcmeKeyService, AcmeCertService],
    children: [
      { path: 'account', component: AcmeAccountComponent },
      { path: 'key', component: AcmeKeyComponent },
      { path: 'cert', component: AcmeCertComponent }
    ]
  }
];
