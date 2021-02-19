using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.People.Commands.DeletePerson
{
    public class DeletePersonCommand : IRequest
    {
        public int Id { get; set; }
    }

    public class DeletePersonCommandHandler : IRequestHandler<DeletePersonCommand>
    {
        private readonly IApplicationDbContext context;

        public DeletePersonCommandHandler(IApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<Unit> Handle(DeletePersonCommand request, CancellationToken cancellationToken)
        {
            var person = await context.People.FindAsync(request.Id);
            if (person == null)
            {
                throw new EntityNotFoundException(nameof(Person), request.Id.ToString());
            }

            context.People.Remove(person);
            await context.SaveChanges(cancellationToken);

            return Unit.Value;
        }
    }
}
