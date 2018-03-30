(document).ready(function() {
 setInterval(function() {
    $('body').animate( { background-image: 'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0 , 0.75)), url(wall1.jpg)' }, 300)
    .animate( { background-image: 'linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0 , 0.75)), url(wall2.jpg)' }, 300);
    }, 1000);

 });
