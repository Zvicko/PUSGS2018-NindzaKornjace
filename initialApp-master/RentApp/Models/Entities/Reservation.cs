using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RentApp.Models.Entities
{
    public class Reservation
    {

        public string Id { get; set; }
        public DateTime? Taken { get; set; }
        public DateTime? Returned { get; set; }
        public BranchOffice BranchOffice { get; set; }
        public Vehicle Vehicle { get; set; }



       
    }
}