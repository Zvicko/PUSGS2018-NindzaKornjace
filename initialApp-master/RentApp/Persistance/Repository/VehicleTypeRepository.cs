using RentApp.Models.Entities;
using RentApp.Persistance.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using RentApp.Persistance;

namespace RentApp.Persistance.Repository
{
    public class VehicleTypeRepository : Repository<VehicleType, int>, IVehicleTypeRepository
    {
        protected RADBContext rADBContext { get { return context as RADBContext; } }

        public VehicleTypeRepository(DbContext context) : base(context)
        {

        }

        public IEnumerable<VehicleType> GetAll(int pageIndex, int pageSize)
        {
            return rADBContext.VehicleTypes.Skip((pageIndex - 1) * pageSize).Take(pageSize);
        }
    }
}