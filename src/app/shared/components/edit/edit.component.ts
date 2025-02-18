import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { SFComponent, SFUISchema } from '@delon/form';
import { BaseComponent, ListService } from '@shared';
import { NzModalRef } from 'ng-zorro-antd/modal';

/**通用编辑组件 */
@Component({ selector: 'app-edit', template: '' })
export class EditComponent extends BaseComponent implements OnInit {
  /**页面类型：创建、编辑、复制 */
  type!: 'add' | 'edit' | 'copy';
  /**主键 */
  pk!: number | string;
  /**对象名称 */
  name!: string;
  /**主标题 */
  title!: string;
  /**提交按钮文字 */
  buttonName!: string;
  /**表单 */
  @ViewChild('sf') readonly sf!: SFComponent;
  /**表单初始数据 */
  i: any;
  private readonly modal = inject(NzModalRef);

  constructor(private readonly listSrv: ListService) {
    super();
  }

  ngOnInit(): void {
    console.debug('type', this.type, 'pk', this.pk);
    if (this.type === 'add') {
      this.title = `新建${this.name}`;
      this.buttonName = '创建';
      this.loading = false;
      console.debug('i', this.i);
      this.cdr.detectChanges();
    } else {
      if (this.type === 'edit') {
        this.title = `修改${this.name}`;
        this.buttonName = '保存';
      } else {
        this.title = `克隆${this.name}`;
        this.buttonName = '创建';
      }
      this.listSrv.show(this.pk).subscribe(res => {
        console.debug(`${this.name}数据`, res);
        this.i = res;
        this.loading = false;
        this.cdr.detectChanges();
      });
    }
  }

  /**
   * 提交，可重写
   */
  save(value: any): void {
    this.loading = true;
    console.debug(`提交${this.name}数据`, value);
    if (this.type === 'edit') {
      this.listSrv.update(this.pk, value).subscribe({
        next: res => {
          console.debug(`修改${this.name}`, res);
          this.message.success(`${this.name}修改成功`);
          this.modal.close(true);
        },
        error: (err: HttpErrorResponse) => {
          this.message.error(err.error.message);
        }
      });
    } else {
      this.listSrv.create(value).subscribe({
        next: res => {
          console.debug(`创建${this.name}`, res);
          this.message.success(`${this.name}创建成功`);
          this.modal.close(true);
        },
        error: (err: HttpErrorResponse) => {
          this.message.error(err.error.message);
        }
      });
    }
  }

  close(): void {
    this.modal.destroy();
  }
}
