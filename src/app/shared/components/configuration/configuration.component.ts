import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Option } from '../dropdown/dropdown.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationService } from '../../../core/services/configuration.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent {
  private languages = environment.languages;

  constructor(
    private configurationService: ConfigurationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public languageOptions: Option[] = [
    { label: 'español', value: this.languages[0] },
    { label: 'ingles', value: this.languages[1] }
  ];

  public courseOptions: Option[] = [
    { label: 'infant', value: '1' },
    { label: 'infant', value: '2' }
  ];

  configurationForm = this.formBuilder.group({
    language: [this.languages[0]],
    course: ['1']
  });

  updateConfig(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.configurationForm.value,
      queryParamsHandling: 'merge'
    });
    this.closeConfiguration();
  }

  closeConfiguration(): void {
    this.configurationService.toggleConfiguration(false);
  }
}
