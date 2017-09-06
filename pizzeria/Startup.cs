using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(pizzeria.Startup))]
namespace pizzeria
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
