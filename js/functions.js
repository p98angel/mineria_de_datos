$(document).ready(function () {
    $('#toogle_menu').text('menu');
    let menu = (event) => {
        let toogle_on = $('#toogle_menu').text() == 'menu';
        let toogle_menu_text = toogle_on ? 'close' : 'menu';
        let toogle_menu_css = toogle_on ? '16px 16px 150vh 150vw' : '16px';
        let navbar_display = toogle_on ? 'block' : 'none';
        let text_navbar = toogle_on ? 'text_navbar_activar' : 'text_navbar_desactivar';
        // cambiar propiedades
        $('#toogle_menu').text(toogle_menu_text);
        $('#toogle_menu').css({'padding' : toogle_menu_css});
        $('#navbar').css({ 'animation-name' : text_navbar, 'display' : navbar_display});  
        event.preventDefault();
    };

    $('#toogle_menu').click(menu);
    $('#navbar a').click(menu);
});
AOS.init({
    duration: 1000,
    once: true,
});
