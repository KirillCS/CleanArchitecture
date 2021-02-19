using Application.People.Queries.GetAllPeople;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly IMediator mediator;

        public PeopleController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet]
        public async Task<IEnumerable<Person>> GetAllPeople()
        {
            var query = new GetAllPeopleQuery();
            return await mediator.Send(query);
        }
    }
}
