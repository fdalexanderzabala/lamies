$(document).ready(function() {
    
   
    
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: true,
            auto: true
    
    
        });
    }
    
      
        var map = L.map('mapa').setView([6.2492005, -75.5641227], 17);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([6.2492005, -75.5641227]).addTo(map)
            .bindPopup('Tienda Naturista.<br> La Mies.')
            .openPopup();



        // Scroll arriba de la web
        $('.subir').click(function(e) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: 0
            }, 500);

            return false;
        });


    }

);

document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 4,
        indicators: true,
        noWrap: false

        

});
});