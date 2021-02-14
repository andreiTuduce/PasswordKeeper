using Client.Models;
using Microsoft.AspNetCore.Mvc;
using PasswordKeeper.Manager.Configuration;
using Runtime.Mapper;
using System;

namespace Client.Controllers
{
    public class HomeController : Controller
    {
        private readonly ISiteManager siteManager;
        private readonly IPasswordManager passwordManager;

        public HomeController(
            ISiteManager siteManager,
            IPasswordManager passwordManager)
        {
            this.siteManager = siteManager;
            this.passwordManager = passwordManager;
        }

        [HttpPost]
        public Site[] GetSites([FromBody] ModelTest model)
        {
            return siteManager.GetSites(model.UserID).DeepCopyTo<Site[]>();
        }

        [HttpGet]
        public GeneratedPassword GetGeneratedPassword(Guid siteID)
        {
            return passwordManager.GetPassword(siteID).DeepCopyTo<GeneratedPassword>();
        }

        [HttpPost]
        public IActionResult AddSite([FromBody] Site site)
        {
            if(site.ID == Guid.Empty)
            site.ID = Guid.NewGuid();

            siteManager.AddSite(site.DeepCopyTo<PasswordKeeper.Manager.Configuration.Models.Site>());

            return Ok();
        }

        [HttpPost]
        public IActionResult AddPassword([FromBody] GeneratedPassword generatedPassword)
        {
            passwordManager.AddPassword(generatedPassword.DeepCopyTo<PasswordKeeper.Manager.Configuration.Models.GeneratedPassword>());

            return Ok();
        }

        public class ModelTest
        {
            public Guid UserID { get; set; }
        }
    }
}