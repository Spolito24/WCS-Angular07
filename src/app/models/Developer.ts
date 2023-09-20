import { Skill } from './Skill';

export class Developer {
  constructor(
    public firstname: string,
    public lastname: string,
    public age: number,
    public gender: string,
    public bio: string,
    public skill: Skill
  ) {}
}
