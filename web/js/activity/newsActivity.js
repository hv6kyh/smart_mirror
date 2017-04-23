define([ 'system', 'jquery' ],function (system, $) {
    
    return {
        
        id : 'newsActivity',
        title : '뉴스',
        icon : 'ic_news.png',
        layoutHTML : 'activity_news.html',
        
        init : function () {
            console.log('news init');
        },
        
        resume : function () {
            console.log('news resume');
            
            $('#newsActivity ul').empty();
            
            $.ajax({
                url : 'php/News_action.php',
                success : function (data) {
                     $('#newsActivity h1').html(data.items[0].title);
                     $('#newsActivity #hotimg').css('background-image', 'url(' + data.items[0].image + ')');
                    
                    for (var n = 1; n < 8; ++n) {
                        $('<li></li>').html(data.items[n].title).appendTo('#newsActivity ul');
                    }
                }
            })
        },
        
        pause : function () {
            console.log('news pause');
        },
        
        destroy : function () {
            console.log('news destroy');
        },
    }
})