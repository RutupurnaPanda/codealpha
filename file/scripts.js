document.addEventListener('DOMContentLoaded',function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

});
document.addEventListener('DOMContentLoaded',function(){
    const skillbutton = document.querySelector('.toggle-btn');
    const toolbutton = document.querySelector('.toggle-btn1');
    const skillslist = document.querySelector('.skills-list');
    const toolslist = document.querySelector('.tools-list');

    function showskills() {
        skillslist.style.display = 'grid';
        toolslist.style.display = 'none';
        skillbutton.classList.add('active');
        toolbutton.classList.remove('active');
    }

    function showtools() {
        skillslist.style.display = 'none';
        toolslist.style.display = 'grid';
        skillbutton.classList.remove('active');
        toolbutton.classList.add('active');
    }

    skillbutton.addEventListener('click',showskills);
    toolbutton.addEventListener('click',showtools);
    showskills();

});
document.addEventListener('DOMContentLoaded',function(){
    const downloadbtn=document.getElementsById('.downloadCV');
     
    downloadbtn.addEventListener('click',function(){
        const cvpath='file\cv.pdf';

        const templink=document.createElement('a');
        templink.href=cvpath;
        templink.download='cv.pdf';

        document.body.appendChild(templink);
        templink.click();

        document.body.removeChild(templink);
    });
});

document.addEventListener('DOMContentLoaded',function(){
    const hireme=document.getElementById()
})
