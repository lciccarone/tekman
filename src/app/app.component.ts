import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from './core/services/configuration.service';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tekman';
  private defaultLanguage = environment.languages[0];
  public isConfigurationOpen$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private configurationService: ConfigurationService,
    private translate: TranslateService
  ) {
    translate.addLangs(['en', 'es']);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.translate.use(queryParams['language'] ?? this.defaultLanguage);
    });
    this.isConfigurationOpen$ = this.configurationService.configuration$;
  }
}
