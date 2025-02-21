import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SHARED_IMPORTS, ListComponent } from '@shared';

import { AcmeCertService, AcmeCertEditComponent } from '..';

@Component({
  selector: 'app-acme-cert',
  templateUrl: './cert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...SHARED_IMPORTS]
})
export class AcmeCertComponent extends ListComponent {
  constructor(private readonly certSrv: AcmeCertService) {
    super(certSrv);
    this.columns = [
      { title: '编号', index: 'id' },
      { title: '所属账户', index: 'config.accountId' },
      { title: '域名', index: 'config.domain' },
      { title: '云服务商', index: 'config.dns' },
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
            modal: { component: AcmeCertEditComponent, params: (record: any) => ({ type: 'edit', pk: record.id }) },
            click: () => this.reload()
          },
          {
            text: '克隆',
            icon: 'copy',
            type: 'static',
            modal: { component: AcmeCertEditComponent, params: (record: any) => ({ type: 'copy', pk: record.id }) },
            click: () => this.reload()
          }
        ]
      }
    ];
  }

  add(): void {
    this.modal.createStatic(AcmeCertEditComponent, { type: 'add' }).subscribe(() => this.reload());
  }
}
