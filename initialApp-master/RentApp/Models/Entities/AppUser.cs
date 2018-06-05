using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Drawing;
namespace RentApp.Models.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string LastName { get; set; }
        public DateTime? BirthDate { get; set; }
        //public string Mail { get; set; }

        public string DocumentPhoto { get; set; }

        public bool Approved { get; set; }

        public List<Reservation> Reservations { get; set; }
        //public string Password { get; set; }
    }
}