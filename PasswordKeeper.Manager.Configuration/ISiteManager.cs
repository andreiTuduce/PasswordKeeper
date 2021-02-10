using PasswordKeeper.Manager.Configuration.Models;
using System;

namespace PasswordKeeper.Manager.Configuration
{
    public interface ISiteManager
    {
        Site[] GetSites(Guid userID);

        void AddSite(Site site);
    }
}