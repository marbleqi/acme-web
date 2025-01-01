import { Routes } from '@angular/router';
import { LayoutPassportComponent } from '@layout';

import { UserLoginComponent, CallbackComponent } from '.';

export const routes: Routes = [
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [{ path: 'login', component: UserLoginComponent, data: { title: '登录' } }]
  },
  // 单页不包裹Layout
  { path: 'passport/callback/:type', component: CallbackComponent }
];
