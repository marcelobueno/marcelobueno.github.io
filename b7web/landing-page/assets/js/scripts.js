function changeBanner(){

    var section = document.getElementById('banner');

    if (section.classList.contains('banner1'))
    {
        section.classList.remove('banner1');
        section.classList.add('banner2');

        var title1 = document.getElementById('banner_title1');
        var desc1 = document.getElementById('banner_desc1');
        var title2 = document.getElementById('banner_title2');
        var desc2 = document.getElementById('banner_desc2');

        title1.style.display = 'block';
        desc1.style.display = 'block';

        title2.style.display = 'none';
        desc2.style.display = 'none';
    } else 
    {
        section.classList.remove('banner2');
        section.classList.add('banner1');

        var title1 = document.getElementById('banner_title1');
        var desc1 = document.getElementById('banner_desc1');
        var title2 = document.getElementById('banner_title2');
        var desc2 = document.getElementById('banner_desc2');

        title2.style.display = 'block';
        desc2.style.display = 'block';

        title1.style.display = 'none';
        desc1.style.display = 'none';
    }

}

setInterval(function(){changeBanner()}, 20000);

window.onload = function() {
    document.querySelector('.menu_icon').addEventListener('click', function(){
        if (document.querySelector(".menu_mobile").style.display == "flex"){
            document.querySelector(".menu_mobile").style.display = "none";
        } else {
            document.querySelector(".menu_mobile").style.display = "flex";
        }
    });
}