using PasswordKeeper.Database.Models;

namespace PasswordKeeper.Resource.Configuration
{
    public interface IUserResource
    {
        UserProfile LoadUser();

        void Save(UserProfile userProfile);
    }

    public class UserResource : IUserResource
    {
        private readonly Database.PasswordKeeperDbContext passwordKeeperDbContext;

        public UserResource(Database.PasswordKeeperDbContext passwordKeeperDbContext)
        {
            this.passwordKeeperDbContext = passwordKeeperDbContext;
        }

        public UserProfile LoadUser()
        {
            throw new System.NotImplementedException();
        }

        public void Save(UserProfile userProfile)
        {
            passwordKeeperDbContext.UserProfiles.Add(userProfile);

            passwordKeeperDbContext.SaveChanges();
        }
    }
}