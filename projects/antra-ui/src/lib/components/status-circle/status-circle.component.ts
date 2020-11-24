import { Component, Input, OnInit } from '@angular/core';
/**
 * `antra-status-circle` component provides a default style using input properties `percentage`, `radius` and different `.scss` classes.
 *
 * ### Usage
 *  `import { AntraUiModule } from 'antra-ui';`
 */
@Component({
  selector: 'antra-status-circle',
  templateUrl: './status-circle.component.html',
  styleUrls: ['./status-circle.component.scss'],
})
/**
 * Example of usage:
 * <example-url>http://127.0.0.1:4200/components/status-circle</example-url>
 */
export class StatusCircleComponent implements OnInit {
  @Input() percentage = 0;
  @Input() radius = 4;

  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {
  }
}
