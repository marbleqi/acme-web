import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { SHARED_IMPORTS, EditComponent } from '@shared';
import { map } from 'rxjs';

import { AcmeAccountService, AcmeKeyService, AcmeCertService } from '../..';

@Component({
  selector: 'app-acme-cert-edit',
  templateUrl: './edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...SHARED_IMPORTS],
  providers: [AcmeAccountService, AcmeKeyService, AcmeCertService]
})
export class AcmeCertEditComponent extends EditComponent {
  protected readonly accountSrv = inject(AcmeAccountService);
  protected readonly keySrv = inject(AcmeKeyService);

  schema: SFSchema = {
    properties: {
      id: { type: 'integer', title: '编号' },
      config: {
        type: 'object',
        properties: {
          accountId: { type: 'integer', title: '所属账户' },
          domain: { type: 'string', title: '域名' },
          dns: { type: 'integer', title: '云服务商' },
          status: { type: 'boolean', title: '启用状态', default: true }
        },
        required: ['accountId', 'domain', 'dns', 'status']
      },
      create: { type: 'object', properties: { at: { type: 'integer', title: '创建时间' } } },
      update: { type: 'object', properties: { at: { type: 'integer', title: '更新时间' } } }
    }
  };
  ui: SFUISchema = {
    '*': { spanLabelFixed: 100, grid: { span: 24 } },
    $id: { widget: 'text' },
    $config: {
      $accountId: {
        widget: 'select',
        asyncData: () => this.accountSrv.index().pipe(map(res => res.map(item => ({ value: item.id, label: item.config.email }))))
      },
      $dns: {
        widget: 'select',
        asyncData: () => this.keySrv.index().pipe(map(res => res.map(item => ({ value: item.id, label: item.config.name }))))
      }
    },
    $create: { $at: { widget: 'at' } },
    $update: { $at: { widget: 'at' } }
  };

  constructor(private readonly certSrv: AcmeCertService) {
    super(certSrv);
    this.name = '证书';
    this.i.set({ id: 0, create: { at: 0 }, update: { at: 0 } });
  }

  override save(value: any): void {
    super.save(value.config);
  }
}
