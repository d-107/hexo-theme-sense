$(function () {
    let articles = new Array();
    $('.nav-toggle-btn').click(() => {
        if ($('.site-nav').hasClass('show-nav')) {
            $('.nav-toggle-btn').children('i').html('&#xe600;');
            $('.site-nav').removeClass('show-nav');
        } else {
            $('.nav-toggle-btn').children('i').html('&#xe77c;');
            $('.site-nav').addClass('show-nav');
        }
        return false;
    });

    $(document).on('click',function(){
        hideMenu();
    });
    //滚动事件
    $(document).on('mousewheel',function(){
        hideMenu();
    });
    //滑动事件
    $(document).on('touchmove',function(){
        hideMenu();
    });

    function hideMenu(){
        if ($('.site-nav').hasClass('show-nav')) {
            $('.nav-toggle-btn').children('i').html('&#xe600;');
            $('.site-nav').removeClass('show-nav');
        }
    }

    $('#go-top').click(() => {
        $('body,html').animate({scrollTop: 0}, 700);
    });

    function scrollBar() {
        document.body.clientWidth > 860 && $(window).scroll(() => {
            let e = $(window).scrollTop();
            let t = $(document).height();
            let o = $(window).height();
            let a = parseInt(e / (t - o) * 100);
            $('#bar').css('width', `${a}%`);
        });
    }

    function goTop() {
        let e = $('#go-top');
        $(window).scroll(function () {
            $(this).scrollTop() > 200
                ? (e.addClass('go-top-is-visible'),
                    $('.header').css({'box-shadow': '0 1px 40px -8px rgba(0, 0, 0, .5)'}),
                    $(window).height() > 950
                        ? $('.go-top.go-top-is-visible').css('top', '0')
                        : $('.go-top.go-top-is-visible').css('top', `${$(window).height() - 950}px`))
                : ($('.go-top.go-top-is-visible').css('top', '-900px'),
                    e.removeClass('go-top-is-visible go-top-fade-out'),
                    $('.header').css({'box-shadow': 'none'}));
            $(this).scrollTop() > 1200 && e.addClass('go-top-fade-out');
        });
    }

    function find(value) {
        const lists = $('.search-article');
        //每次查询前,隐藏
        lists.each(function(){
            $(this).addClass('hide');
        });
        let arr = new Array();
        if(value.trim().length<=0)return arr;
        let isTag = false;
        let index = -1;

        if(value.indexOf('#') == 0) {
            isTag =true;
            value = value.replace('#','');
        }
        for(let i=0;i<articles.length;i++) {
            let article = articles[i];
            index = -1;
            if(isTag) {
                if(article.tags.indexOf(value) >=0){
                    index = article.index;
                }
            }else {
                if(article.name.indexOf(value) >=0) {
                    index = article.index;
                }
            }
            if(index>0) {
                //console.log(article);
                arr.push(index);
            }
        }
        if(arr.length>0) {
            for(let i=0;i<lists.length;i++) {
                if(arr.indexOf(i) >=0) {
                    $(lists[i]).removeClass('hide');
                }
            }
        }
    }

    function initArticles() {
        const lists = $('#search-articles').children();
        //console.log(lists);
        let index = 0;
        lists.each(function () {
            const name = $(this).attr('data-name');
            const url = $(this).attr('data-url');
            const date = $(this).attr('data-date');
            const tags = [];
            $(this).find('.search-articles-tag').each(function () {
                const tag = $(this).html().trim();
                if (tags.indexOf(tag) < 0) {
                    tags.push(tag);
                }
            });
            const model = { name: name, url: url, date: date, tags: tags, index: index };
            articles.push(model);
            index++;
        });
        //console.log(articles);
    }

    $('#txtsearch').on('input', function () {
        search();
    });

    $('#search-tags').children().each(function(){
        $(this).on('click',function(){
            $('#txtsearch').val('');
            const value = '#'+$(this).html().trim();
            $('#txtsearch').val(value);
            find(value);
        });
    });

    scrollBar();
    goTop();

    initArticles();
});
