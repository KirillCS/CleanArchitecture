using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using Domain.Enums;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Application.People.Commands.UpdatePerson
{
    public class UpdatePersonCommand : IRequest
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string LastName { get; set; }

        public Sex Sex { get; set; }

        public DateTime? BirthDate { get; set; }
    }

    public class UpdatePersonCommandHandler : IRequestHandler<UpdatePersonCommand>
    {
        private readonly IApplicationDbContext context;

        public UpdatePersonCommandHandler(IApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<Unit> Handle(UpdatePersonCommand request, CancellationToken cancellationToken)
        {
            var person = await context.People.FindAsync(request.Id);
            if (person == null)
            {
                throw new EntityNotFoundException(nameof(Person), request.Id.ToString());
            }

            person.Name = request.Name;
            person.LastName = request.LastName;
            person.Sex = request.Sex;
            person.BirthDate = request.BirthDate;

            await context.SaveChanges(cancellationToken);

            return Unit.Value;
        }
    }
}
