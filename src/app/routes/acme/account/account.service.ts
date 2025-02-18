import { Injectable } from '@angular/core';
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
