import { Routes } from '@angular/router';
import { LayoutPassportComponent } from '@layout';

import { CallbackComponent, UserLockComponent, UserLoginComponent, UserRegisterComponent, UserRegisterResultComponent } from '.';

export const routes: Routes = [
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      { path: 'login', component: UserLoginComponent, data: { title: '登录' } },
      { path: 'callback/:type', component: CallbackComponent },
      { path: 'register', component: UserRegisterComponent, data: { title: '注册' } },
      { path: 'register-result', component: UserRegisterResultComponent, data: { title: '注册结果' } },
      { path: 'lock', component: UserLockComponent, data: { title: '锁屏' } }
    ]
  }
];
