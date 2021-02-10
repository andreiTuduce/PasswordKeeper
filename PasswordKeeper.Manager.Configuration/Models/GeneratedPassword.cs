using System;

namespace PasswordKeeper.Manager.Configuration.Models
{
    public class GeneratedPassword
    {
        public Guid ID { get; set; }

        public Guid SiteID { get; set; }

        public string Password { get; set; }
    }
}