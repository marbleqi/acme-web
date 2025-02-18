import { Injectable } from '@angular/core';
import { ListService } from '@shared';

@Injectable()
export class AcmeKeyService extends ListService {
  /**
   * 构造函数
   */
  constructor() {
    super('key');
  }
}
