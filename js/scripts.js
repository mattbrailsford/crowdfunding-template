$(function(){

    // Configure tabs
    $('.tabs__tab a').on('click', function (e) {
        e.preventDefault();
        $('.tabs__content').removeClass('tabs__content--active');
        $($(this).attr('href')).addClass('tabs__content--active');
        $('.tabs__tab').removeClass('tabs__tab--active');
        $(this).closest('.tabs__tab').addClass('tabs__tab--active');
    })

    // Show pledge dialog
    $('.btn--pledge:not([disabled]), .reward:not([disabled])').on('click', function (e) {
        e.preventDefault();
        var reward = $(this).data('reward');
        $('select[name=reward]').val(reward);
        $('html').addClass('no-scroll');
        $('.modal').show();
    })

    // Hide pledge dialog
    $('.modal__cancel').on('click', function (e) {
        e.preventDefault();
        $('html').removeClass('no-scroll');
        $('.modal').hide();
    })

});