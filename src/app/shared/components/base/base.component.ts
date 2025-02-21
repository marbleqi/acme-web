import { Component, inject, signal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { SettingsService } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

/**基础组件 */
@Component({ selector: 'app-base', template: '' })
export class BaseComponent {
  /**加载状态 */
  loading = signal<boolean>(false);
  /**路由服务 */
  protected readonly router = inject(Router);
  /**消息服务 */
  protected readonly message = inject(NzMessageService);
  /**当前路由快照 */
  protected readonly route = inject(ActivatedRoute);
  /**项目配置服务 */
  protected readonly settingSrv = inject(SettingsService);
  /**路由复用服务 */
  protected readonly reuseSrv = inject(ReuseTabService);
}
