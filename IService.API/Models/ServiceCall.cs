using System;

namespace IService.API.Models
{
    public class ServiceCall
    {
        public int Id { get; set; }
        public DateTime CallDate { get; set; }
        public string CallDesc { get; set; }
        public Customer Customer { get; set; }
        public int CustomerId { get; set; }

    }
}