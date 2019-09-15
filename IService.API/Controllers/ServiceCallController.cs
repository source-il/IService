using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IService.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IService.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceCallController : ControllerBase
    {
        private readonly DataContext _context;

        public ServiceCallController(DataContext context)
        {
            _context = context;
        }
        // GET api/values
        [Authorize]
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> GetSerivceCalls()
        {
            var sercalls = await _context.ServiceCalls.ToListAsync();

            return Ok(sercalls);
        }

        // GET api/values/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetServiceCall(int id)
        {
            var sercall = await _context.ServiceCalls.FirstOrDefaultAsync(x => x.Id==id);
            
            return Ok(sercall);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
