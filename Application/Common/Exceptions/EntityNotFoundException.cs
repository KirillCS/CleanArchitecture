using System;

namespace Application.Common.Exceptions
{
    public class EntityNotFoundException : Exception
    {
        public EntityNotFoundException() : base()
        { }

        public EntityNotFoundException(string message) : base(message)
        { }

        public EntityNotFoundException(string entityType, string id) : base($"Entity \"{entityType}\" with id \"{id}\" was not found")
        { }
    }
}
