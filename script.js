document.addEventListener("DOMContentLoaded", function() {
    var flipbook = document.querySelector('.flipbook');

    var totalPages = 10; // Change this to the number of your screenshots

    for (var i = 1; i <= totalPages; i++) {
        var page = document.createElement('div');
        page.classList.add('page');
        page.style.backgroundImage = 'url(screenshots/page' + i + '.png)';
        flipbook.appendChild(page);
    }

    $('.flipbook').turn({
        width: '100%',
        height: '100%',
        autoCenter: true
    });
});
