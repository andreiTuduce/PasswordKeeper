using PasswordKeeper.Manager.Configuration.Models;
using PasswordKeeper.Resource.Configuration;
using Runtime.Mapper;

namespace PasswordKeeper.Manager.Configuration
{
    public class UserManager : IUserManager
    {
        private readonly IUserResource userResource;

        public UserManager(IUserResource userResource)
        {
            this.userResource = userResource;
        }

        public void SaveUser(UserProfile userProfile)
        {
            userResource.Save(userProfile.DeepCopyTo<Database.Models.UserProfile>());
        }

        public UserProfile LoadProfile(string username, string password)
        {
           return userResource.LoadUser(username, password).DeepCopyTo<UserProfile>();
        }
    }
}