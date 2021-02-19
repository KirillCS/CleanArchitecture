using Application.Common.Interfaces;
using Domain.Entities;
using Domain.Enums;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.People.Commands.CreatePerson
{
    public class CreatePersonCommand : IRequest<int>
    {
        public string Name { get; set; }

        public string LastName { get; set; }

        public Sex Sex { get; set; }

        public DateTime? BirthDate { get; set; }
    }

    public class CreatePersonCommandHandler : IRequestHandler<CreatePersonCommand, int>
    {
        private readonly IApplicationDbContext context;

        public CreatePersonCommandHandler(IApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<int> Handle(CreatePersonCommand request, CancellationToken cancellationToken)
        {
            var person = new Person
            {
                Name = request.Name,
                LastName = request.LastName,
                Sex = request.Sex,
                BirthDate = request.BirthDate
            };

            context.People.Add(person);
            await context.SaveChanges(cancellationToken);

            return person.Id;
        }
    }
}
