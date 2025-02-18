import { HttpErrorResponse } from '@angular/common/http';
import { EnvironmentProviders, Injectable, Provider, inject, provideAppInitializer } from '@angular/core';
import { Router } from '@angular/router';
import { ACLService } from '@delon/acl';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { _HttpClient, MenuService, SettingsService, TitleService } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable, of, catchError, map, mergeMap } from 'rxjs';

/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
export function provideStartup(): Array<Provider | EnvironmentProviders> {
  return [
    StartupService,
    provideAppInitializer(() => {
      const initializerFn = (
        (startupService: StartupService) => () =>
          startupService.load()
      )(inject(StartupService));
      return initializerFn();
    })
  ];
}

@Injectable()
export class StartupService {
  private router = inject(Router);
  private http = inject(_HttpClient);
  private titleSrv = inject(TitleService);
  private settingSrv = inject(SettingsService);
  private tokenSrv = inject(DA_SERVICE_TOKEN);
  private menuService = inject(MenuService);
  private aclSrv = inject(ACLService);

  load(): Observable<void> {
    return this.http.get('assets/config/api.json').pipe(
      map((res: NzSafeAny) => {
        console.debug(`获取API配置`, res.baseUrl, typeof res.baseUrl, typeof res.baseUrl !== 'string');
        if (typeof res?.baseUrl !== 'string') {
          throw '未配置有效后端地址！';
        }
        this.settingSrv.setData('baseUrl', res.baseUrl);
        console.debug(`获取token`, this.tokenSrv.get());
        const token = this.tokenSrv.get()?.token;

        const app: any = {
          name: `NG-ALAIN`,
          description: `NG-ZORRO admin panel front-end framework`
        };
        const user: any = {
          name: 'Admin',
          avatar: './assets/tmp/img/avatar.jpg',
          email: 'cipchk@qq.com',
          token: '123456789'
        };
        // Application information: including site name, description, year
        this.settingSrv.setApp(app);
        // User information: including name, avatar, email address
        this.settingSrv.setUser(user);
        // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
        this.aclSrv.setFull(true);
        // Menu data, https://ng-alain.com/theme/menu
        this.menuService.add([
          {
            text: 'Main',
            group: true,
            children: [
              { text: 'Dashboard', link: '/dashboard', icon: { type: 'icon', value: 'appstore' } },
              { text: '账户', link: '/acme/account', icon: { type: 'icon', value: 'appstore' } },
              { text: '证书', link: '/acme/cert', icon: { type: 'icon', value: 'appstore' } }
            ]
          }
        ]);
        // Can be set page suffix title, https://ng-alain.com/theme/title
        this.titleSrv.suffix = app.name;
        // return of(void 0);
      }),
      catchError((err: HttpErrorResponse) => {
        console.warn('发生异常：', err);
        this.router.navigateByUrl(this.tokenSrv.login_url!);
        return of(undefined);
      })
    );
  }
}
