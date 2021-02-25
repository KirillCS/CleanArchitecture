﻿using Application.People.Commands.CreatePerson;
using Application.People.Commands.DeletePerson;
using Application.People.Commands.UpdatePerson;
using Application.People.Queries.GetAllPeople;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace WebUI.Controllers
{
    public class PeopleController : ApiControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> GetAllPeople()
        {
            var query = new GetAllPeopleQuery();
            return Ok(await Mediator.Send(query));
        }

        [HttpPost]
        public async Task<IActionResult> CreatePerson([FromBody]CreatePersonCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpPut]
        public async Task<IActionResult> UpdatePerson([FromBody]UpdatePersonCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }

        [HttpDelete]
        public async Task<IActionResult> DeletePerson([FromQuery]DeletePersonCommand command)
        {
            await Mediator.Send(command);

            return NoContent();
        }
    }
}
