using System.Collections.Generic;

namespace IService.API.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public string Hp { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
        public ICollection<ServiceCall> ServiceCalls { get; set; }
    }
}