using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore;
using MilenioBus.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MilenioBus
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Pessoa>().HasKey(t => t.Id);
            modelBuilder.Entity<Pessoa>().HasMany(t => t.Endereco).WithOne(t => t.Pessoa);
            modelBuilder.Entity<Endereco>().HasKey(t => t.Id);

        }


    }
}
