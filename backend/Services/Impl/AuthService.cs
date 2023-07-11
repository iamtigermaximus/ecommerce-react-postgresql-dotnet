using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using AutoMapper;
using backend.Data;
using backend.DTOs.Auth;
using backend.DTOs.User;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using BCrypt;

namespace backend.Services.Impl
{
    public class AuthService : IAuthService
    {
        private readonly IMapper _mapper;
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;

        public AuthService(IMapper mapper, DataContext context, IConfiguration configuration)
        {
            _mapper = mapper;
            _context = context;
            _configuration = configuration;
        }

        public async Task<ServiceResponse<AuthUserRespDTO>> Login(AuthUserReqDTO request)
        {
            var serviceResponse = new ServiceResponse<AuthUserRespDTO>();
            try
            {
                var dbUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
                if (dbUser == null)
                {
                    serviceResponse.Success = false;
                    serviceResponse.Message = "Email not found.";
                    return serviceResponse;
                }

                if (!BCrypt.Net.BCrypt.Verify(request.Password, dbUser.Password))
                {
                    serviceResponse.Success = false;
                    serviceResponse.Message = "Wrong password.";
                    return serviceResponse;
                }

                var token = GenerateToken(dbUser);
                var authResponse = new AuthUserRespDTO
                {
                    Token = token
                };
                serviceResponse.Data = authResponse;
            }
            catch (Exception ex)
            {
                serviceResponse.Success = false;
                serviceResponse.Message = ex.Message;
            }

            return serviceResponse;
        }

        private string GenerateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenKey = Encoding.UTF8.GetBytes(_configuration["AppSettings:Token"]);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Email, user.Email),
                    new Claim(ClaimTypes.Role, "Admin"),
                    new Claim(ClaimTypes.Role, "Customer")
                }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha512)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
