function showSidebar() {
    $('.ui.labeled.icon.sidebar')
    //.sidebar('setting', 'transition', 'scale down')
    //    .sidebar('setting', 'transition', 'overlay')
        .sidebar('show')
    ;
}

function toggleSidebar() {
    $('.ui.labeled.icon.sidebar')
        //.sidebar('setting', 'transition', 'overlay')
        .sidebar('toggle')
    ;
}


function initialize() {

    showSidebar();

    $('#menuButton')
        .sticky({
            context: '#sideBar'
        });

    $('#menuButton').click(function () {
        $('.ui.labeled.icon.sidebar')
            //.sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle')
        ;
    });

}

window.onload = initialize();


