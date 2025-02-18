import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import { SHARED_IMPORTS, ListComponent } from '@shared';

import { AcmeKeyService, AcmeKeyEditComponent } from '..';

@Component({
  selector: 'app-acme-key',
  templateUrl: './key.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...SHARED_IMPORTS]
})
export class AcmeKeyComponent extends ListComponent {
  constructor(private readonly keySrv: AcmeKeyService) {
    super(keySrv);
    this.columns = [
      { title: '编号', index: 'id' },
      { title: '密钥名称', index: 'config.name' },
      { title: '密钥说明', index: 'config.description' },
      {
        title: '云服务商',
        index: 'config.provider',
        format: (item: any, col: STColumn, index: number) => {
          if (item.config.provider === 'aws') {
            return '亚马逊';
          } else if (item.config.provider === 'aliyun') {
            return '阿里云';
          } else if (item.config.provider === 'tencent') {
            return '腾讯云';
          } else {
            return '未知';
          }
        }
      },
      { title: 'key', index: 'config.key' },
      { title: '启用状态', index: 'config.status', type: 'yn' },
      { title: '创建时间', index: 'create.at', type: 'date', dateFormat: 'yyyy-MM-dd HH:mm:ss.SSS' },
      { title: '更新时间', index: 'update.at', type: 'date', dateFormat: 'yyyy-MM-dd HH:mm:ss.SSS' },
      {
        title: '操作',
        buttons: [
          {
            text: '编辑',
            icon: 'edit',
            type: 'static',
            modal: { component: AcmeKeyEditComponent, params: (record: any) => ({ type: 'edit', pk: record.id }) },
            click: () => this.reload()
          },
          {
            text: '克隆',
            icon: 'copy',
            type: 'static',
            modal: { component: AcmeKeyEditComponent, params: (record: any) => ({ type: 'copy', pk: record.id }) },
            click: () => this.reload()
          }
        ]
      }
    ];
  }

  add(): void {
    this.modal.createStatic(AcmeKeyEditComponent, { type: 'add' }).subscribe(() => this.reload());
  }
}
