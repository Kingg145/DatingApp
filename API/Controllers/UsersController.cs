using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _mapper = mapper;
            _userRepository = userRepository;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            return Ok(await _userRepository.GetMembersAsync());

        }

        // api/users/id=1,2,3,..

        [HttpGet("id/{id}")]
        public async Task<ActionResult<MemberDto>> GetUsersById(int id)
        {
            var users = await _userRepository.GetUserByIdAsync(id);

            return _mapper.Map<MemberDto>(users);
        }

        [HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUsersByUsername(string username)
        {
            return await _userRepository.GetMemberByUsernameAsync(username);
        }





    }
}