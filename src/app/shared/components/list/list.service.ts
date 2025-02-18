import { BaseService } from '@shared';
import { Observable, map } from 'rxjs';

/**通用对象服务 */
export class ListService extends BaseService {
  /**最新操作ID */
  private operateId: number = -1;
  /**缓存的数据列表 */
  dataMap: Map<number | string, any> = new Map<number | string, any>();

  /**
   * 获取用户列表
   * @param init 重置标记
   */
  index(init: boolean = false): Observable<any[]> {
    if (init) {
      this.operateId = -1;
      this.dataMap.clear();
    }
    return this.http.get(`${this.baseUrl}/index`, { operateId: this.operateId }).pipe(
      map((res: any[]) => {
        if (res.length) {
          for (const item of res) {
            this.dataMap.set(item.id, item);
          }
          this.operateId = Math.max(...res.map(item => item.update.operateId));
        }
        return Array.from(this.dataMap.values());
      })
    );
  }

  /**
   * 获取对象详情
   * @param id 对象ID
   * @returns 对象详情
   */
  show(pk: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}/show/${pk}`);
  }

  /**
   * 获取对象变更日志
   * @param id 对象ID
   * @returns 对象变更日志
   */
  log(pk: number | string): Observable<any[]> {
    return this.http.get(`${this.baseUrl}/log/${pk}`);
  }

  /**
   * 创建对象
   * @param value 新对象值
   * @returns 后端响应报文
   */
  create(value: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, value);
  }

  /**
   * 更新对象
   * @param value 新对象值
   * @returns 后端响应报文
   */
  update(pk: number | string, value: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/update/${pk}`, value);
  }

  /**
   * 批量更新对象状态
   * @param ids 对象ID数组
   * @param status 新状态
   * @returns 后端响应报文
   */
  status(pks: number[] | string[], status: boolean): Observable<any> {
    return this.http.post(`${this.baseUrl}/status`, { pks, status });
  }
}
