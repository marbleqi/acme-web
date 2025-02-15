import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SHARED_IMPORTS } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'passport-register-result',
  templateUrl: './register-result.component.html',
  imports: [RouterLink, ...SHARED_IMPORTS]
})
export class UserRegisterResultComponent {
  readonly msg = inject(NzMessageService);
  @Input() email = '';
}
