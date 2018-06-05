using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Web;

namespace RentApp.Persistance.UnitOfWork
{
    public class UnitOfWork:IUnitOfWork
    {
       private readonly DbContext _context;

    //[Dependency]
    //public IServiceRepository Services { get; set; }

    public UnitOfWork(DbContext context)
    {
        _context = context;
    }

    public int Complete()
    {
        return _context.SaveChanges();
    }

    public void Dispose()
    {
        _context.Dispose();
    }
}
}