import { Injectable } from '@angular/core';
import { ListService } from '@shared';

@Injectable()
export class AcmeCertService extends ListService {
  /**
   * 构造函数
   */
  constructor() {
    super('cert');
  }
}
