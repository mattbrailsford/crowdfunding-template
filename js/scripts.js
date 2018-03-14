(function () {

    // Configure tabs
    var tabTabs = document.getElementsByClassName('tabs__tab');
    var tabContents = document.getElementsByClassName('tabs__content');

    [].forEach.call(tabTabs, function(tab) {
        var a = tab.getElementsByTagName('a')[0];
        a.addEventListener('click', function (e){
            e.preventDefault();

            // Toggle content
            [].forEach.call(tabContents, function(t) {
                t.classList.remove('tabs__content--active')
            });
            document.getElementById(this.getAttribute('href').substr(1)).classList.add('tabs__content--active');

            // Toggle tabs
            [].forEach.call(tabTabs, function(t) {
                t.classList.remove('tabs__tab--active')
            });
            this.parentElement.classList.add('tabs__tab--active')

        })
    });

})();