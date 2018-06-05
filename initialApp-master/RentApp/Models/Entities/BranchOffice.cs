using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Drawing;
namespace RentApp.Models.Entities
{
    public class BranchOffice
    {
        public int Id { get; set; }
        public string BranchOfficeImage { get; set; }

        public double Latitude { get; set; }
        public double Longitude { get; set; }

        //public int ServiceFromBranchOfficeId { get; set; }
        //public Service ServiceFromBranchOffice { get; set; }

        //public List<Vehicle> Vehicles { get; set; }
    }
}