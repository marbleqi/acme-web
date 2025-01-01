import { Routes } from '@angular/router';
import { LayoutPassportComponent } from '@layout';

import { CallbackComponent } from './callback.component';
import { UserLoginComponent } from './login/login.component';

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
