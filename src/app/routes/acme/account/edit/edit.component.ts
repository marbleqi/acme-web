import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { SHARED_IMPORTS, EditComponent } from '@shared';

import { AcmeAccountService } from '../..';

@Component({
  selector: 'app-acme-account-edit',
  templateUrl: './edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...SHARED_IMPORTS],
  providers: [AcmeAccountService]
})
export class AcmeAccountEditComponent extends EditComponent {
  schema: SFSchema = {
    properties: {
      id: { type: 'integer', title: '编号' },
      config: {
        type: 'object',
        properties: {
          email: { type: 'string', title: '电子邮箱' },
          description: { type: 'string', title: '备注说明' },
          staging: { type: 'boolean', title: '测试环境', default: true },
          status: { type: 'boolean', title: '启用状态', default: true }
        },
        required: ['email', 'description', 'staging', 'status']
      },
      create: { type: 'object', properties: { at: { type: 'integer', title: '创建时间' } } },
      update: { type: 'object', properties: { at: { type: 'integer', title: '更新时间' } } }
    }
  };
  ui: SFUISchema = {
    '*': { spanLabelFixed: 100, grid: { span: 24 } },
    $id: { widget: 'text' },
    $create: { $at: { widget: 'at' } },
    $update: { $at: { widget: 'at' } }
  };

  constructor(private readonly accountSrv: AcmeAccountService) {
    super(accountSrv);
    this.name = '证书账户';
    this.i.set({ id: 0, create: { at: 0 }, update: { at: 0 } });
  }

  override save(value: any): void {
    super.save(value.config);
  }
}
