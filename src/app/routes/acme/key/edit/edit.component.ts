import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { SHARED_IMPORTS, EditComponent } from '@shared';

import { AcmeKeyService } from '../..';

@Component({
  selector: 'app-acme-key-edit',
  templateUrl: './edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...SHARED_IMPORTS],
  providers: [AcmeKeyService]
})
export class AcmeKeyEditComponent extends EditComponent {
  schema: SFSchema = {
    properties: {
      id: { type: 'integer', title: '编号' },
      config: {
        type: 'object',
        properties: {
          name: { type: 'string', title: '密钥名称' },
          description: { type: 'string', title: '密钥说明' },
          provider: {
            type: 'string',
            title: '云服务商',
            default: 'aws',
            enum: [
              { value: 'aws', label: '亚马逊' },
              { value: 'aliyun', label: '阿里云' },
              { value: 'tencent', label: '腾讯云' }
            ]
          },
          key: { type: 'string', title: 'key', default: '' },
          secret: { type: 'string', title: 'secret', default: '' },
          status: { type: 'boolean', title: '启用状态', default: true }
        },
        required: ['name', 'description', 'provider', 'key', 'secret', 'status']
      },
      create: { type: 'object', properties: { at: { type: 'integer', title: '创建时间' } } },
      update: { type: 'object', properties: { at: { type: 'integer', title: '更新时间' } } }
    }
  };
  ui: SFUISchema = {
    '*': { spanLabelFixed: 100, grid: { span: 24 } },
    $id: { widget: 'text' },
    $config: {
      $key: { widget: 'textarea', autosize: { minRows: 5, maxRows: 10 } },
      $secret: { widget: 'textarea', autosize: { minRows: 5, maxRows: 10 } }
    },
    $create: { $at: { widget: 'at' } },
    $update: { $at: { widget: 'at' } }
  };

  constructor(private readonly keySrv: AcmeKeyService) {
    super(keySrv);
    this.name = '云密钥';
    this.i = { id: 0, config: { email: '', description: '', staging: true, status: true }, create: { at: 0 }, update: { at: 0 } };
  }

  override save(value: any): void {
    super.save(value.config);
  }
}
