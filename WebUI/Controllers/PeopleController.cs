using Application.People.Queries.GetAllPeople;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    public class PeopleController : ApiControllerBase
    {
        [HttpGet]
        public async Task<IEnumerable<Person>> GetAllPeople()
        {
            var query = new GetAllPeopleQuery();
            return await Mediator.Send(query);
        }
    }
}
