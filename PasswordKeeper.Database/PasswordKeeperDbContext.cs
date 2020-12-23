using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace PasswordKeeper.Database
{
    public class PasswordKeeperDbContext : IdentityDbContext
    {
        public DbSet<Models.UserProfile> UserProfiles { get; set; }

        public DbSet<Models.Site> Sites { get; set; }
        
        public DbSet<Models.GeneratedPassword> GeneratedPasswords { get; set; }

        public PasswordKeeperDbContext(DbContextOptions<PasswordKeeperDbContext> options)
    : base(options)
        { }

    }
}