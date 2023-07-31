
let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function(e) {
document.querySelector('body').classList.toggle('mobile-nav-active');
this.classList.toggle('fa-xmark')
})
let typed =new Typed('.auto-input',{
    strings: ['Full-stack web developer','UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:2000,
    loop:true,
})
function Send()
      {
        console.log("function call");
         Email.send({
         Host : "smtp.elasticemail.com",
         Username : "ramchowdhary73@gmail.com",
         Password : "C73D3398F46C5840780CDEB108E17BC1F1C0",
         To : 'ramchowdhary73@gmail.com',
         From : document.getElementById("email").value,
         Subject : "A new Member arrived to our site",
         Body : "Name"+document.getElementById("name").value
                +"<br> Email:"+document.getElementById("email").value
                +"<br> Phone number:"+document.getElementById("phone").value
                +"<br> Message:"+document.getElementById("message").value
            }).then(
              message => alert("Message sent Succesfully")
            );
      }