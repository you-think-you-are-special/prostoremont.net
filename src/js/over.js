var gallery = {

    slideScroll: 1000,
    left: $('#imgprevgallery1'),
    right: $('#imgnextgallery1'),
    max: 10,
    min: 1,
    bigPicture: $('#imagegallery1 img'),
    tab: $('#tabs li'),

    init: function() {
        this.initEvents();
    },


    initEvents: function(){
        var _this = this;
        this.left.click(function(){
            _this._initLeft();
        });

        this.right.click(function(){
            _this._initRight();
        });

        this._initTab();

        $('#slidergallery1 img').click(function () {
            _this.bigPicture.attr('src', '/img/000' + $(this).attr('alt') + '.jpg');
            return false;
        });

        $('#slideleftgallery1').hover(function () {
            _this._hoverScroll('left');
        });

        $('#sliderightgallery1').hover(function () {
            _this._hoverScroll('right');
        });

        $('#slideleftgallery1, #sliderightgallery1').mouseout(function(){
            $("#slidergallery1").stop();
        });
    },

    _initLeft: function(){
        this.right.show();
        var src = this.bigPicture.attr('src');
        var picture = src.replace('/img/', '').replace('.jpg', '');
        var new_picture = parseInt(picture) - 1;
        if(new_picture == this.min){
            this.left.hide();
        }

        src = src.replace(picture, '000' + new_picture);
        this.bigPicture.attr('src', src);
    },

    _initRight: function(){
        this.left.show();
        var src = this.bigPicture.attr('src');
        var picture = src.replace('/img/', '').replace('.jpg', '');
        var new_picture = parseInt(picture) + 1;
        if(new_picture == this.max){
            this.right.hide();
        }

        src = src.replace(picture, '000' + new_picture);
        this.bigPicture.attr('src', src);
    },

    _initTab: function(){
        var _this = this;
        this.tab.click(function () {
            _this.tab.removeClass('active');
            $(this).addClass("active");
            $(".tab_content").hide();
            var selected_tab = $(this).find("a").attr("href").replace('/', '');
            $(selected_tab).fadeIn();
            return false;
        });
    },

    _hoverScroll: function (side) {

        if (side == 'right') {

            $("#slidergallery1").stop().animate({
                left: "-504px"
            }, this.slideScroll, function () {});

        } else if(side == 'left'){
            $("#slidergallery1").stop().animate({
                left: "0"
            }, this.slideScroll, function () {});
        }

    }
};

$(function(){
    gallery.init();
});
