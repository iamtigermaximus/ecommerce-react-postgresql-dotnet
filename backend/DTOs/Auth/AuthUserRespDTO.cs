using System;
using backend.Models;

namespace backend.DTOs.Auth;

public class AuthUserRespDTO: BaseModel
{
        public string Token { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Initials { get; set; }

}