import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SHARED_IMPORTS, ListComponent } from '@shared';

import { AcmeAccountService, AcmeAccountEditComponent } from '..';

@Component({
  selector: 'app-acme-account',
  templateUrl: './account.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...SHARED_IMPORTS]
})
export class AcmeAccountComponent extends ListComponent {
  constructor(private readonly accountSrv: AcmeAccountService) {
    super(accountSrv);
    this.columns = [
      { title: '编号', index: 'id' },
      { title: '电子邮箱', index: 'config.email' },
      { title: '备注说明', index: 'config.description' },
      { title: '测试环境', index: 'config.staging', type: 'yn' },
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
            modal: { component: AcmeAccountEditComponent, params: (record: any) => ({ type: 'edit', pk: record.id }) },
            click: () => this.reload()
          },
          {
            text: '克隆',
            icon: 'copy',
            type: 'static',
            modal: { component: AcmeAccountEditComponent, params: (record: any) => ({ type: 'copy', pk: record.id }) },
            click: () => this.reload()
          }
        ]
      }
    ];
  }

  add(): void {
    this.modal.createStatic(AcmeAccountEditComponent, { type: 'add' }).subscribe(() => this.reload());
  }
}
