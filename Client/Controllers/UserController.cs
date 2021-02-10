using Client.Models;
using Microsoft.AspNetCore.Mvc;
using PasswordKeeper.Manager.Configuration;
using Runtime.Mapper;
using System;

namespace Client.Controllers
{
    public class UserController : Controller
    {
        private readonly IUserManager userManager;

        public UserController(IUserManager userManager)
        {
            this.userManager = userManager;
        }

        [HttpPost]
        public IActionResult SaveUser([FromBody]UserProfile userProfile)
        {
            userProfile.ID = Guid.NewGuid();

            userManager.SaveUser(userProfile.DeepCopyTo<PasswordKeeper.Manager.Configuration.Models.UserProfile>());

            return Ok();
        }

        [HttpPost]
        public UserProfile LoadProfile([FromBody]UserProfile userProfile)
        {
            return userManager.LoadProfile(userProfile.Username, userProfile.Password).DeepCopyTo<UserProfile>();
        }
    }
}