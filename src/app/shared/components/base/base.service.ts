import { inject } from '@angular/core';
import { _HttpClient, SettingsService } from '@delon/theme';

/**基础服务 */
export class BaseService {
  /**基本路径 */
  protected readonly baseUrl: string;
  /**http服务 */
  protected http = inject(_HttpClient);
  /**项目配置服务 */
  protected settingSrv = inject(SettingsService);

  /**
   * 构造函数
   * @param baseUrl 基本路径
   */
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
}
