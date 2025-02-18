import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { STComponent, STColumn, STChange, STData } from '@delon/abc/st';
import { ListService, BaseComponent } from '@shared';

/**通用列表组件 */
@Component({ selector: 'app-list', template: '' })
export class ListComponent extends BaseComponent implements OnInit {
  @ViewChild('st') protected readonly st!: STComponent;

  columns: STColumn[] = [];
  /**表格数据 */
  data: STData[] = [];
  /**已选中数据 */
  protected checked: STData[] = [];
  /**批量操作按钮的可用状态Map */
  protected enableMap: Map<string, boolean> = new Map<string, boolean>();

  constructor(private readonly listSrv: ListService) {
    super();
  }

  ngOnInit(): void {
    this.columns = this.columns.map((item: STColumn) => ({ ...item, className: 'text-center' }));
    this.reload();
  }

  reload() {
    this.listSrv.index().subscribe(res => {
      this.data = res;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  /**可用状态Map刷新，可重写 */
  enable() {
    this.enableMap.set(
      'enable',
      this.checked.every(item => !item['status'])
    );
    this.enableMap.set(
      'disable',
      this.checked.every(item => item['status'])
    );
  }

  /**表格变动事件 */
  change(e: STChange) {
    console.debug(e);
    if (e.type === 'checkbox') {
      if (e.checkbox && e.checkbox.length) {
        this.checked = e.checkbox;
        this.enable();
      } else {
        this.checked = [];
        this.enableMap.clear();
      }
    }
  }

  /**获取批量操作按钮禁用状态 */
  disable(button: string): boolean {
    return !this.enableMap.get(button);
  }
}
