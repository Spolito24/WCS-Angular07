import { Component, OnInit } from '@angular/core';
import { Developer } from '../models/Developer';
import { Skill } from '../models/Skill';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss'],
})
export class DeveloperComponent implements OnInit {
  skill: Skill = new Skill('', '', '');
  developer: Developer = new Developer('', '', 0, '', '', this.skill);

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    alert(this.developer);
  }
}
