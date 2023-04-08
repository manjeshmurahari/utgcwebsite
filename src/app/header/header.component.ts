import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('tg');
    translate.use('tg');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
}
}
