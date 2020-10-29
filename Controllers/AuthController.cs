using System;
using Microsoft.AspNetCore.Mvc;

namespace BookTracker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        [HttpGet]
        public void Get()
        {
            // TODO
        }
    }
}