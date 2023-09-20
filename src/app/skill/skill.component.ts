import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent implements OnInit {
  @Input()
  name: string = 'PHP';

  @Input()
  logo: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png';

  @Input()
  site: string = 'https://www.php.net/';

  constructor() {}

  ngOnInit(): void {}
}
