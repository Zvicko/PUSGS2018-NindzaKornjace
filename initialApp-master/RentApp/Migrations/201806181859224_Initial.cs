namespace RentApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.BranchOffices",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        ImageUrl = c.String(),
                        Adress = c.String(),
                        Latitude = c.Double(nullable: false),
                        Longitude = c.Double(nullable: false),
                        Service_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Services", t => t.Service_Id)
                .Index(t => t.Service_Id);
            
            CreateTable(
                "dbo.Vehicles",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Model = c.String(),
                        Producer = c.String(),
                        YearOfProduction = c.Int(nullable: false),
                        PricePerHour = c.Double(nullable: false),
                        IsAvailable = c.Boolean(nullable: false),
                        VehicleImage = c.String(),
                        Description = c.String(),
                        ImageUrl = c.String(),
                        BranchOffice_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.BranchOffices", t => t.BranchOffice_Id)
                .Index(t => t.BranchOffice_Id);
            
            CreateTable(
                "dbo.Reservations",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Start = c.DateTime(),
                        End = c.DateTime(),
                        EndBranchOffice_Id = c.Guid(),
                        Service_Id = c.Guid(),
                        StartBranchOffice_Id = c.Guid(),
                        Vehicle_Id = c.Guid(),
                        User_Id = c.Guid(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.BranchOffices", t => t.EndBranchOffice_Id)
                .ForeignKey("dbo.Services", t => t.Service_Id)
                .ForeignKey("dbo.BranchOffices", t => t.StartBranchOffice_Id)
                .ForeignKey("dbo.Vehicles", t => t.Vehicle_Id)
                .ForeignKey("dbo.Users", t => t.User_Id)
                .Index(t => t.EndBranchOffice_Id)
                .Index(t => t.Service_Id)
                .Index(t => t.StartBranchOffice_Id)
                .Index(t => t.Vehicle_Id)
                .Index(t => t.User_Id);
            
            CreateTable(
                "dbo.Services",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Name = c.String(),
                        Email = c.String(),
                        Description = c.String(),
                        LogoUrl = c.String(),
                        Aproved = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.AspNetRoles",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
            CreateTable(
                "dbo.AspNetUserRoles",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.AspNetRoles", t => t.RoleId, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId)
                .Index(t => t.RoleId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        FirsName = c.String(),
                        LastName = c.String(),
                        Email = c.String(),
                        BirthDate = c.DateTime(),
                        Password = c.String(),
                        ImageUrl = c.String(),
                        Approved = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.AspNetUsers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        AppUserId = c.Guid(nullable: false),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.AppUserId, cascadeDelete: true)
                .Index(t => t.AppUserId)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.AspNetUserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(nullable: false, maxLength: 128),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.AspNetUserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUserRoles", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserLogins", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUserClaims", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUsers", "AppUserId", "dbo.Users");
            DropForeignKey("dbo.Reservations", "User_Id", "dbo.Users");
            DropForeignKey("dbo.AspNetUserRoles", "RoleId", "dbo.AspNetRoles");
            DropForeignKey("dbo.Reservations", "Vehicle_Id", "dbo.Vehicles");
            DropForeignKey("dbo.Reservations", "StartBranchOffice_Id", "dbo.BranchOffices");
            DropForeignKey("dbo.Reservations", "Service_Id", "dbo.Services");
            DropForeignKey("dbo.BranchOffices", "Service_Id", "dbo.Services");
            DropForeignKey("dbo.Reservations", "EndBranchOffice_Id", "dbo.BranchOffices");
            DropForeignKey("dbo.Vehicles", "BranchOffice_Id", "dbo.BranchOffices");
            DropIndex("dbo.AspNetUserLogins", new[] { "UserId" });
            DropIndex("dbo.AspNetUserClaims", new[] { "UserId" });
            DropIndex("dbo.AspNetUsers", "UserNameIndex");
            DropIndex("dbo.AspNetUsers", new[] { "AppUserId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "RoleId" });
            DropIndex("dbo.AspNetUserRoles", new[] { "UserId" });
            DropIndex("dbo.AspNetRoles", "RoleNameIndex");
            DropIndex("dbo.Reservations", new[] { "User_Id" });
            DropIndex("dbo.Reservations", new[] { "Vehicle_Id" });
            DropIndex("dbo.Reservations", new[] { "StartBranchOffice_Id" });
            DropIndex("dbo.Reservations", new[] { "Service_Id" });
            DropIndex("dbo.Reservations", new[] { "EndBranchOffice_Id" });
            DropIndex("dbo.Vehicles", new[] { "BranchOffice_Id" });
            DropIndex("dbo.BranchOffices", new[] { "Service_Id" });
            DropTable("dbo.AspNetUserLogins");
            DropTable("dbo.AspNetUserClaims");
            DropTable("dbo.AspNetUsers");
            DropTable("dbo.Users");
            DropTable("dbo.AspNetUserRoles");
            DropTable("dbo.AspNetRoles");
            DropTable("dbo.Services");
            DropTable("dbo.Reservations");
            DropTable("dbo.Vehicles");
            DropTable("dbo.BranchOffices");
        }
    }
}
