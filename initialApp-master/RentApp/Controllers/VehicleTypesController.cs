﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using RentApp.Models.Entities;
using RentApp.Persistance;
using RentApp.Persistance.UnitOfWork;

namespace RentApp.Controllers
{
    public class VehicleTypesController : ApiController
    {
        //private RADBContext db = new RADBContext();
        private IUnitOfWork unitOfWork;

        public VehicleTypesController(IUnitOfWork context)
        {
            this.unitOfWork = context;
        }


        // GET: api/VehicleTypes
        public IEnumerable<VehicleType> GetVehicleTypes()
        {
            return unitOfWork.VehicleTypes.GetAll();
        }

        // GET: api/VehicleTypes/5
        [ResponseType(typeof(VehicleType))]
        public IHttpActionResult GetVehicleType(int id)
        {
            VehicleType vehicleType = unitOfWork.VehicleTypes.Find(vt => vt.Id == id).FirstOrDefault();
            if (vehicleType == null)
            {
                return NotFound();
            }

            return Ok(vehicleType);
        }

        // PUT: api/VehicleTypes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutVehicleType(int id, VehicleType vehicleType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vehicleType.Id)
            {
                return BadRequest();
            }

            

            try
            {
                unitOfWork.VehicleTypes.Update(vehicleType);
                unitOfWork.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleTypeExists(id))
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

        // POST: api/VehicleTypes
        [ResponseType(typeof(VehicleType))]
        public IHttpActionResult PostVehicleType(VehicleType vehicleType)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            unitOfWork.VehicleTypes.Add(vehicleType);
            unitOfWork.Complete();

            return CreatedAtRoute("DefaultApi", new { id = vehicleType.Id }, vehicleType);
        }

        // DELETE: api/VehicleTypes/5
        [ResponseType(typeof(VehicleType))]
        public IHttpActionResult DeleteVehicleType(int id)
        {
            VehicleType vehicleType = unitOfWork.VehicleTypes.Find(vt => vt.Id == id).FirstOrDefault();
            if (vehicleType == null)
            {
                return NotFound();
            }

            unitOfWork.VehicleTypes.Remove(vehicleType);
            unitOfWork.Complete();

            return Ok(vehicleType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                unitOfWork.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VehicleTypeExists(int id)
        {
            return unitOfWork.VehicleTypes.Find(vt => vt.Id == id).FirstOrDefault() != null;
        }
    }
}