if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
    console.log(navigator.geolocation)
}

function showLocation(position){
    const long = position.coords.longitude;
    const lat = position.coords.latitude;

    const url = `https://maps.google.com/maps?q=${lat},${long}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    
    window.open(url,'map');
}

var lastScrollTop = 100;
    header = document.getElementById('header')
window.addEventListener ('scroll', () => {
    var scrolled = window.scrollY;
    console.log(scrolled);

    if (lastScrollTop < scrolled) {
        header.style.top = "-70px";
    } else {
        header.style.top = "0px";
    }

});