using Application.Common.Exceptions;
using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace Application.People.Queries.GetPerson
{
    public class GetPersonQuery : IRequest<Person>
    {
        public int Id { get; set; }
    }

    public class GetPersonQueryHandler : IRequestHandler<GetPersonQuery, Person>
    {
        private readonly IApplicationDbContext context;

        public GetPersonQueryHandler(IApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<Person> Handle(GetPersonQuery request, CancellationToken cancellationToken)
        {
            var person = await context.People.FindAsync(request.Id);
            if (person is null)
            {
                throw new EntityNotFoundException(nameof(Person), request.Id.ToString());
            }

            return person;
        }
    }
}
