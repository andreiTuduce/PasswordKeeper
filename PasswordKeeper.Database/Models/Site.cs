using System;

namespace PasswordKeeper.Database.Models
{
    public class Site
    {
        public Guid ID { get; set; }

        public Guid UserID { get; set; }

        public string SiteName { get; set; }
    }
}