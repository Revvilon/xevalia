document.getElementById("c2").innerHTML = '<div class="left"><span>xevalia#8080</span></div><div class="right"><a href="">projects</a><a href="">about</a><a href="">contact</a></div>'
document.getElementById("c1").innerHTML = '<div class="container"><div class="left"><h1>Socials</h1><p>Revvilon</p><p>xevalia#8080</p></div><img src="images/profil.png" alt="face"><div class="right"> <h1>Socials</h1><p>Revvilon</p><p>xevalia#8080</p></div></div>'

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});