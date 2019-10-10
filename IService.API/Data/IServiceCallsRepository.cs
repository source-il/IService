using System.Collections.Generic;
using System.Threading.Tasks;
using IService.API.Models;

namespace IService.API.Data
{
    public interface IServiceCallsRepository
    {
         void Add<T>(T entity) where T: class;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<User>> GetUsers();
         Task<User> GetUser(int id);
    }
}