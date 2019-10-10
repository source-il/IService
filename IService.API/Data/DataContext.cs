using IService.API.Models;
using Microsoft.EntityFrameworkCore;

namespace IService.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}

        public DbSet<ServiceCall> ServiceCalls { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Customer> Customers { get; set; }

    }
}