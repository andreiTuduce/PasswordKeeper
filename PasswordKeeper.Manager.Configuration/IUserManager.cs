using PasswordKeeper.Manager.Configuration.Models;

namespace PasswordKeeper.Manager.Configuration
{
    public interface IUserManager
    {
        void SaveUser(UserProfile userProfile);

        UserProfile LoadProfile(string username, string password);
    }
}