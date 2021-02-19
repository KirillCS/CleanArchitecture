using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Common.Interfaces
{
    interface IApplicationDbContext
    {
        DbSet<Person> People { get; set; }

        Task<int> SaveChanges(CancellationToken cancellationToken);
    }
}
