using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Client
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.AddDbContext<PasswordKeeper.Database.PasswordKeeperDbContext>(options =>
            {
                options.UseLoggerFactory(new LoggerFactory(new[] { new Microsoft.Extensions.Logging.Debug.DebugLoggerProvider() }));
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
            });

            Configure_CompositionRoot(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }

        private void Configure_CompositionRoot(IServiceCollection services)
        {
            //Managers
            services.AddTransient<PasswordKeeper.Manager.Configuration.IUserManager, PasswordKeeper.Manager.Configuration.UserManager>();
            services.AddTransient<PasswordKeeper.Manager.Configuration.ISiteManager, PasswordKeeper.Manager.Configuration.SiteManager>();
            services.AddTransient<PasswordKeeper.Manager.Configuration.IPasswordManager, PasswordKeeper.Manager.Configuration.PasswordManager>();

            //Resources
            services.AddTransient<PasswordKeeper.Resource.Configuration.IUserResource, PasswordKeeper.Resource.Configuration.UserResource>();
            services.AddTransient<PasswordKeeper.Resource.Configuration.ISiteResource, PasswordKeeper.Resource.Configuration.SiteResource>();
            services.AddTransient<PasswordKeeper.Resource.Configuration.IPasswordResource, PasswordKeeper.Resource.Configuration.PasswordResource>();
        }
    }
}