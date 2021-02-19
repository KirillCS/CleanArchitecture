using Domain.Enums;
using System;

namespace Domain.Entities
{
    public class Person
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string LastName { get; set; }

        public Sex Sex { get; set; }

        public DateTime? BirthDate { get; set; }
    }
}
