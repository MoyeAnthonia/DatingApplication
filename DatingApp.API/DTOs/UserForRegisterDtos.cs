using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.DTOs
{
    public class UserForRegisterDtos
    {
        [Required]
        public string Username { get; set;}

        [Required]
        [StringLength(8, MinimumLength=4, ErrorMessage = "password is short")]
        public string Password { get; set;}
    }
}