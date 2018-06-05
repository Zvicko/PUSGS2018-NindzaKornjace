namespace RentApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class prvaMigracija : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Reservations",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Taken = c.DateTime(),
                        Returned = c.DateTime(),
                        BranchOffice_Id = c.Int(),
                        Vehicle_Id = c.Int(),
                        AppUser_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.BranchOffices", t => t.BranchOffice_Id)
                .ForeignKey("dbo.Vehicles", t => t.Vehicle_Id)
                .ForeignKey("dbo.AppUsers", t => t.AppUser_Id)
                .Index(t => t.BranchOffice_Id)
                .Index(t => t.Vehicle_Id)
                .Index(t => t.AppUser_Id);
            
            CreateTable(
                "dbo.BranchOffices",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BranchOfficeImage = c.String(),
                        Latitude = c.Double(nullable: false),
                        Longitude = c.Double(nullable: false),
                        Vehicle_Id = c.Int(),
                        Service_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Vehicles", t => t.Vehicle_Id)
                .ForeignKey("dbo.Services", t => t.Service_Id)
                .Index(t => t.Vehicle_Id)
                .Index(t => t.Service_Id);
            
            CreateTable(
                "dbo.Vehicles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Model = c.String(),
                        Manufactor = c.String(),
                        YearOfProduction = c.Int(nullable: false),
                        Available = c.Boolean(nullable: false),
                        VehicleImage = c.String(),
                        Description = c.String(),
                        PricePerHour = c.Double(nullable: false),
                        TypeOfVehicle_Id = c.Int(),
                        Vehicle_Id = c.Int(),
                        Service_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.VehicleTypes", t => t.TypeOfVehicle_Id)
                .ForeignKey("dbo.Vehicles", t => t.Vehicle_Id)
                .ForeignKey("dbo.Services", t => t.Service_Id)
                .Index(t => t.TypeOfVehicle_Id)
                .Index(t => t.Vehicle_Id)
                .Index(t => t.Service_Id);
            
            CreateTable(
                "dbo.VehicleTypes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.AppUsers", "Name", c => c.String());
            AddColumn("dbo.AppUsers", "LastName", c => c.String());
            AddColumn("dbo.AppUsers", "BirthDate", c => c.DateTime());
            AddColumn("dbo.AppUsers", "DocumentPhoto", c => c.String());
            AddColumn("dbo.AppUsers", "Approved", c => c.Boolean(nullable: false));
            AddColumn("dbo.Services", "Email", c => c.String());
            AddColumn("dbo.Services", "Description", c => c.String());
            AddColumn("dbo.Services", "Logo", c => c.String());
            DropColumn("dbo.AppUsers", "FullName");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AppUsers", "FullName", c => c.String());
            DropForeignKey("dbo.Vehicles", "Service_Id", "dbo.Services");
            DropForeignKey("dbo.BranchOffices", "Service_Id", "dbo.Services");
            DropForeignKey("dbo.Reservations", "AppUser_Id", "dbo.AppUsers");
            DropForeignKey("dbo.Reservations", "Vehicle_Id", "dbo.Vehicles");
            DropForeignKey("dbo.Vehicles", "Vehicle_Id", "dbo.Vehicles");
            DropForeignKey("dbo.Vehicles", "TypeOfVehicle_Id", "dbo.VehicleTypes");
            DropForeignKey("dbo.BranchOffices", "Vehicle_Id", "dbo.Vehicles");
            DropForeignKey("dbo.Reservations", "BranchOffice_Id", "dbo.BranchOffices");
            DropIndex("dbo.Vehicles", new[] { "Service_Id" });
            DropIndex("dbo.Vehicles", new[] { "Vehicle_Id" });
            DropIndex("dbo.Vehicles", new[] { "TypeOfVehicle_Id" });
            DropIndex("dbo.BranchOffices", new[] { "Service_Id" });
            DropIndex("dbo.BranchOffices", new[] { "Vehicle_Id" });
            DropIndex("dbo.Reservations", new[] { "AppUser_Id" });
            DropIndex("dbo.Reservations", new[] { "Vehicle_Id" });
            DropIndex("dbo.Reservations", new[] { "BranchOffice_Id" });
            DropColumn("dbo.Services", "Logo");
            DropColumn("dbo.Services", "Description");
            DropColumn("dbo.Services", "Email");
            DropColumn("dbo.AppUsers", "Approved");
            DropColumn("dbo.AppUsers", "DocumentPhoto");
            DropColumn("dbo.AppUsers", "BirthDate");
            DropColumn("dbo.AppUsers", "LastName");
            DropColumn("dbo.AppUsers", "Name");
            DropTable("dbo.VehicleTypes");
            DropTable("dbo.Vehicles");
            DropTable("dbo.BranchOffices");
            DropTable("dbo.Reservations");
        }
    }
}
