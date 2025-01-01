import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalFooterModule } from '@delon/abc/global-footer';
import { DA_SERVICE_TOKEN } from '@delon/auth';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'layout-passport',
  template: `
    <div class="container">
      <div class="wrap">
        <div class="top">
          <div class="head">
            <img class="logo" src="./assets/logo.svg" />
            <span class="title">证书管理平台</span>
          </div>
          <div class="desc">Let's Encrypt证书自动化管理平台</div>
        </div>
        <router-outlet />
        <global-footer [links]="links">
          Copyright
          <i class="anticon anticon-copyright"></i> 2025 <a href="//github.com/marbleqi" target="_blank">闲思暇想</a>出品
        </global-footer>
      </div>
    </div>
  `,
  styleUrls: ['./passport.component.less'],
  standalone: true,
  imports: [RouterOutlet, GlobalFooterModule, NzIconModule]
})
export class LayoutPassportComponent implements OnInit {
  private tokenService = inject(DA_SERVICE_TOKEN);

  links = [
    {
      title: '帮助',
      href: ''
    },
    {
      title: '隐私',
      href: ''
    },
    {
      title: '条款',
      href: ''
    }
  ];

  ngOnInit(): void {
    this.tokenService.clear();
  }
}
