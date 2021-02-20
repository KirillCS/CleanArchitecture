using FluentValidation;

namespace Application.People.Commands.CreatePerson
{
    public class CreatePersonCommandValidator : AbstractValidator<CreatePersonCommand>
    {
        public CreatePersonCommandValidator()
        {
            RuleFor(c => c.Name)
                .NotNull().NotEmpty().WithMessage("Name cannot be null or empty")
                .MaximumLength(128).WithMessage("Maximum length of name is 128 characters");

            RuleFor(c => c.LastName)
                .NotNull().NotEmpty().WithMessage("Last name cannot be null or empty")
                .MaximumLength(128).WithMessage("Maximum length of last name is 128 characters");

            RuleFor(c => c.Sex).IsInEnum().WithMessage("Incorrect value of sex property");
        }
    }
}
