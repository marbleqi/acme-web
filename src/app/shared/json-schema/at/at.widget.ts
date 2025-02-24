import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlWidget, DelonFormModule } from '@delon/form';
import { format, fromUnixTime } from 'date-fns';

@Component({
  selector: 'sf-widget-at',
  templateUrl: './at.widget.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DelonFormModule]
})
export class AtWidget extends ControlWidget {
  /**小部件key */
  static readonly KEY = 'at';
  /**时间 */
  at!: string;

  override reset(value: number) {
    super.reset(value);
    if (value) {
      if (this.schema?.['timestamp'] && this.schema['timestamp'] === 's') {
        this.at = format(fromUnixTime(value), 'yyyy-MM-dd HH:mm:ss');
      } else {
        this.at = format(value, 'yyyy-MM-dd HH:mm:ss.SSS');
      }
    }
  }
}
