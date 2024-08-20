using System;
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
                    
                    var port = Environment.GetEnvironmentVariable("PORT") ?? "8080";
                    webBuilder.UseStartup<startup>()
                              .UseUrls($"http://0.0.0.0:{port}");
                });
    }
}
