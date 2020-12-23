using System;

namespace Client.Models
{
    public class UserProfile
    {
        public Guid ID { get; set; }

        public string Username { get; set; }

        public string Password { get; set; }
    }
}