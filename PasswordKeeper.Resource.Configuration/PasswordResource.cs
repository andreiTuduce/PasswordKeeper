using PasswordKeeper.Database.Models;
using System;
using System.Linq;

namespace PasswordKeeper.Resource.Configuration
{
    public interface IPasswordResource
    {
        void AddPassword(GeneratedPassword generatedPassword);

        GeneratedPassword GetPassword(Guid siteID);
    }

    public class PasswordResource : IPasswordResource
    {
        private readonly Database.PasswordKeeperDbContext passwordKeeperDbContext;

        public PasswordResource(Database.PasswordKeeperDbContext passwordKeeperDbContext)
        {
            this.passwordKeeperDbContext = passwordKeeperDbContext;
        }

        public void AddPassword(GeneratedPassword generatedPassword)
        {
            passwordKeeperDbContext.GeneratedPasswords.Add(generatedPassword);
        }

        public GeneratedPassword GetPassword(Guid siteID)
        {
            return passwordKeeperDbContext.GeneratedPasswords.Where(x => x.SiteID == siteID).FirstOrDefault();
        }
    }
}