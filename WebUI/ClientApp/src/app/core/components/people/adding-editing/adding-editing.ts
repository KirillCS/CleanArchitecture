import { Sex } from "src/app/core/enums/sex";
import { Person } from "src/app/core/models/person";

export interface AddingEditing {
  title: string;
  submitButtonName: string;
  sex: typeof Sex;
  person: Person

  submitHandler(isValid: boolean): void;
  goBack(): void;
}