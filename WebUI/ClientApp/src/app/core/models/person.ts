import { Sex } from '../enums/sex';

export class Person {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public sex: Sex,
    public birthDate: Date
  ) { }
}