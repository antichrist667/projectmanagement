using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;

namespace documentservices
{
    public class program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<startup>();
                });
    }
}
