using RentApp.Models.Entities;
using RentApp.Persistance.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace RentApp.Persistance.Repository
{
    public class AppUserRepository:Repository<AppUser,int>,IAppUserRepository
    {
        protected RADBContext rADBContext { get { return context as RADBContext; } }

        public AppUserRepository(DbContext context):base(context)
        {

        }

        public IEnumerable<AppUser> GetAll(int pageIndex, int pageSize)
        {
            return rADBContext.AppUsers.Skip((pageIndex - 1) * pageSize).Take(pageSize);
        }
    }
}