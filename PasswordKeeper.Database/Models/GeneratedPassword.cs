using System;

namespace PasswordKeeper.Database.Models
{
    public class GeneratedPassword
    {
        public Guid ID { get; set; }

        public Guid SiteID { get; set; }

        public string Password { get; set; }
    }
}