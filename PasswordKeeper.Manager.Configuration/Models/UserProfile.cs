using System;

namespace PasswordKeeper.Manager.Configuration.Models
{
    public class UserProfile
    {
        public Guid ID { get; set; }

        public string Username { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }
    }
}