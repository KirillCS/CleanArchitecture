using Application.Common.Interfaces;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Application.People.Queries.GetAllPeople
{
    public class GetAllPeopleQuery : IRequest<IEnumerable<Person>>
    { }

    public class GetAllPeopleQueryHandler : IRequestHandler<GetAllPeopleQuery, IEnumerable<Person>>
    {
        private readonly IApplicationDbContext context;

        public GetAllPeopleQueryHandler(IApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<IEnumerable<Person>> Handle(GetAllPeopleQuery request, CancellationToken cancellationToken)
        {
            var people = await context.People.ToListAsync();

            return people;
        }
    }
}
