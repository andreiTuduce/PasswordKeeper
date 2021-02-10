using PasswordKeeper.Manager.Configuration.Models;
using PasswordKeeper.Resource.Configuration;
using Runtime.Mapper;
using System;

namespace PasswordKeeper.Manager.Configuration
{
    public class SiteManager : ISiteManager
    {
        private readonly ISiteResource siteResource;

        public SiteManager(ISiteResource siteResource)
        {
            this.siteResource = siteResource;
        }

        public void AddSite(Site site)
        {
            siteResource.AddSite(site.DeepCopyTo<Database.Models.Site>());
        }

        public Site[] GetSites(Guid userID)
        {
            return siteResource.GetSites(userID).DeepCopyTo<Site[]>();
        }
    }
}