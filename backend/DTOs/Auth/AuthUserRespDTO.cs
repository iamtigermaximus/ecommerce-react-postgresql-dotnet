using System;
using backend.Models;

namespace backend.DTOs.Auth;

public class AuthUserRespDTO: BaseModel
{
  public string Token { get; set; } = string.Empty;
}