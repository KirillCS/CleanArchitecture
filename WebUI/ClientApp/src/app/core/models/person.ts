import { Sex } from 'src/app/core/enums/sex';

export class Person {
  private _birthDate: Date;

  public set birthDate(value : Date) {
    this._birthDate = !value ? null : value;
  }
  
  public get birthDate() : Date {
    return this._birthDate;
  }
  
  constructor(
    public id: number = 0,
    public name: string = '',
    public lastName: string = '',
    public sex: Sex = Sex.Male,
    birthDate: Date = null
  ) { 
    this.birthDate = birthDate;
  }
}