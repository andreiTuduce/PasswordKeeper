using PasswordKeeper.Manager.Configuration.Models;
using System;

namespace PasswordKeeper.Manager.Configuration
{
    public interface IPasswordManager
    {
        GeneratedPassword GetPassword(Guid siteID);

        void AddPassword(GeneratedPassword generatedPassword);
    }
}