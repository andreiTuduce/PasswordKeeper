using PasswordKeeper.Resource.Configuration;
using System;

namespace PasswordKeeper.Manager.Configuration
{
    public class UserManager : IUserManager
    {
        private readonly IUserResource userResource;

        public UserManager(IUserResource userResource)
        {
            this.userResource = userResource;
        }
    }
}