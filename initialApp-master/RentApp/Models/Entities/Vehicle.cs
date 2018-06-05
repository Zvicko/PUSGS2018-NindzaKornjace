using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Drawing;
namespace RentApp.Models.Entities
{
    public class Vehicle
    {
        public int Id { get; set; }
        public string Model { get; set; }
        public string Manufactor { get; set; }
        public int YearOfProduction { get; set; }

        public bool Available { get; set; }

        public string VehicleImage { get; set; }

        public string Description { get; set; }

        public double PricePerHour { get; set; }

        public VehicleType TypeOfVehicle { get; set; }
        public List<string> Images { get; set; }
        public List<Vehicle> Vehicles { get; set; }
        public List<BranchOffice> BranchOffices { get; set; }
        //public int ReservationOfVehicleId { get; set; }
        //public Reservation ReservationOfVehicle { get; set; }

        //public BranchOffice InBrancheOffice { get; set; }
    }
}