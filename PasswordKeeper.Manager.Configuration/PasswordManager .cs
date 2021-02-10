using PasswordKeeper.Manager.Configuration.Models;
using PasswordKeeper.Resource.Configuration;
using Runtime.Mapper;
using System;

namespace PasswordKeeper.Manager.Configuration
{
    public class PasswordManager : IPasswordManager
    {
        private readonly IPasswordResource passwordResource;

        public PasswordManager(IPasswordResource passwordResource)
        {
            this.passwordResource = passwordResource;
        }
        public void AddPassword(GeneratedPassword generatedPassword)
        {
            passwordResource.AddPassword(generatedPassword.DeepCopyTo<Database.Models.GeneratedPassword>());
        }

        public GeneratedPassword GetPassword(Guid siteID)
        {
            return passwordResource.GetPassword(siteID).DeepCopyTo<GeneratedPassword>();
        }
    }
}