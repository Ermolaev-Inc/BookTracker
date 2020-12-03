using System;
using System.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Npgsql;

namespace BookTracker
{
    public class Program
    {
        public static void Main(string[] args)
        {
            TestConnection();
            Console.ReadKey();
            CreateHostBuilder(args).Build().Run();
        }

        private static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });

        private static void TestConnection()
        {
            using var con = GetConnection();
            con.Open();
            if (con.State == ConnectionState.Open)
            {
                Console.WriteLine("Connected");
            }
        }
        
        private static NpgsqlConnection GetConnection() => new NpgsqlConnection(@"Server=localhost;Port=5432;User Id=ilyaermolaev;Database=booktracker;");
    }
}