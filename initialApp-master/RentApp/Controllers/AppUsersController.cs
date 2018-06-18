using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using RentApp.Models.Entities;
using RentApp.Persistance;
using RentApp.Persistance.UnitOfWork;

namespace RentApp.Controllers
{
    public class AppUsersController : ApiController
    {
        //private RADBContext db = new RADBContext();
        private readonly IUnitOfWork unitOfWork;

        public AppUsersController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }



        // GET: api/AppUsers
        public IEnumerable<User> GetAppUsers()
        {
            return unitOfWork.AppUsers.GetAll();
        }

        // GET: api/AppUsers/5
        [ResponseType(typeof(User))]
        public IHttpActionResult GetAppUser(int id)
        {
            User appUser =  unitOfWork.AppUsers.Get(id);
            if (appUser == null)
            {
                return NotFound();
            }

            return Ok(appUser);
        }

        // PUT: api/AppUsers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAppUser(Guid id, User appUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != appUser.Id)
            {
                return BadRequest();
            }

          

            try
            {
                unitOfWork.AppUsers.Update(appUser);
                unitOfWork.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppUserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/AppUsers
        [ResponseType(typeof(User))]
        public IHttpActionResult PostAppUser(User appUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            unitOfWork.AppUsers.Add(appUser);
            unitOfWork.Complete();

            return CreatedAtRoute("DefaultApi", new { id = appUser.Id }, appUser);
        }

        // DELETE: api/AppUsers/5
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteAppUser(Guid id)
        {
            User appUser = unitOfWork.AppUsers.Find(u=> u.Id == id).FirstOrDefault();
            if (appUser == null)
            {
                return NotFound();
            }

            unitOfWork.AppUsers.Remove(appUser);
            unitOfWork.Complete();

            return Ok(appUser);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                unitOfWork.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AppUserExists(Guid id)
        {
            return unitOfWork.AppUsers.Find(u => u.Id == id).FirstOrDefault() != null;
        }
    }
}