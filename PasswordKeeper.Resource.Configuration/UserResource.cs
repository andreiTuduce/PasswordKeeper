using PasswordKeeper.Database.Models;
using System.Linq;

namespace PasswordKeeper.Resource.Configuration
{
    public interface IUserResource
    {
        void Save(UserProfile userProfile);

        UserProfile LoadUser(string username, string password);
    }

    public class UserResource : IUserResource
    {
        private readonly Database.PasswordKeeperDbContext passwordKeeperDbContext;

        public UserResource(Database.PasswordKeeperDbContext passwordKeeperDbContext)
        {
            this.passwordKeeperDbContext = passwordKeeperDbContext;
        }

        public void Save(UserProfile userProfile)
        {
            passwordKeeperDbContext.UserProfiles.Add(userProfile);

            passwordKeeperDbContext.SaveChanges();
        }

        public UserProfile LoadUser(string username, string password)
        {
            return passwordKeeperDbContext.UserProfiles.Where(userProfile => userProfile.Username == username && userProfile.Password == password).FirstOrDefault();
        }
    }
}