using PasswordKeeper.Database.Models;
using System;
using System.Linq;

namespace PasswordKeeper.Resource.Configuration
{
    public interface ISiteResource
    {
        void AddSite(Site site);

        Site[] GetSites(Guid userID);
    }

    public class SiteResource : ISiteResource
    {
        private readonly Database.PasswordKeeperDbContext passwordKeeperDbContext;

        public SiteResource(Database.PasswordKeeperDbContext passwordKeeperDbContext)
        {
            this.passwordKeeperDbContext = passwordKeeperDbContext;
        }

        public void AddSite(Site site)
        {
            passwordKeeperDbContext.Sites.Add(site);
        }

        public Site[] GetSites(Guid userID)
        {
            return passwordKeeperDbContext.Sites.Where(site => site.UserID == userID).ToArray();
        }
    }
}