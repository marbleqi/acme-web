import { Injectable, inject } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { ListService } from '@shared';

@Injectable()
export class AcmeAccountService extends ListService {
  /**
   * 构造函数
   */
  constructor() {
    super('account');
  }
}
