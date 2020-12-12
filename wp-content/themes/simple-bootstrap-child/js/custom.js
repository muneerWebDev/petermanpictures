jQuery(document).ready(function () {

    containerMl = jQuery('.container').css("margin-left");

    if (jQuery('.banner').length > 0) {

        bannerVideoHeight = jQuery(window).height() - jQuery('.banner').offset().top;
        jQuery('.banner-video .elementor-wrapper').css('padding-bottom', bannerVideoHeight);
        jQuery('.banner-video video').height(bannerVideoHeight);

    }

    jQuery('.navbar-toggler').click(function () {
        jQuery('header .navbar #navbarSupportedContent').toggleClass('active');
    });

    //Photography
    jQuery('main.photography .images .foreImage, main.photography .images .backImage').attr("src", jQuery('main.photography .caption li:first-child a').attr('sourceUrl'));
    jQuery('main.photography .images .backImage').addClass('fade');

    jQuery('main.photography .caption li a').mouseover(function () {

        var newImage = jQuery(this).attr('sourceUrl');
        var newTitle = jQuery(this).html();
        var newDesc = jQuery(this).attr('desc');

        jQuery('.detail-lightbox .image img').attr("src", newImage);
        jQuery('.detail-lightbox .desc h2 span.title').html(newTitle);
        jQuery('.detail-lightbox .desc p').html(newDesc);

        if (jQuery('main.photography .images .backImage').hasClass('fade')) {

            jQuery('main.photography .images .backImage').attr("src", newImage);

        } else {

            jQuery('main.photography .images .foreImage').attr("src", newImage);

        }

        jQuery('main.photography .images .foreImage, main.photography .images .backImage').toggleClass('fade');



    });
    jQuery('main.photography .caption li a, .detail-lightbox .desc h2 span.back').click(function () {
        jQuery('.detail-lightbox').toggleClass('active');
    });

    function getId(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        console.log(match);

        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return 'error';
        }
    }


        jQuery(".videosRow div").each(function () {
            var moddedUrl = getId(jQuery(this).find('iframe').attr("src"));
            // alert(jQuery(this).find('iframe').attr("src"));
            jQuery(this).find('iframe').attr("src", 'https://www.youtube.com/embed/' +  moddedUrl);
        })



});