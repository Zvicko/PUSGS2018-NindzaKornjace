using System.Collections.Generic;

namespace RentApp.Models.Entities
{
    public class VehicleType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual List<Vehicle> Vehicles { get; set; }
    }
}