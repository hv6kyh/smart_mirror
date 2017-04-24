
define([ 'system', 

    'jquery' ,
    'jquery-draggable'

],function (system, $) {
    
    
    
    return {
        
        id : 'youtubeActivity',
        title : '유튜브',
        icon : 'ic_youtube.png',
        layoutHTML : 'activity_youtube.html',
        
        init : function () {
            console.log('youtube init');
        },
        
        resume : function () {
            $('#results').draggable({axis:'y'});
            
            $(function () {
  
    $('.submit').click(function (e) {
        e.preventDefault();
        var searchTerm = $('#query').val();
        if (searchTerm == undefined || searchTerm == ''){
              swal('oops')
        }
        else {
        $('iframe').remove();
        console.log(searchTerm);
        var url = 'https://www.googleapis.com/youtube/v3/search?part=id&q=' + searchTerm + '&type=video&key=AIzaSyASFltS6aSwHYy6q9ft-KIH8wAB0-rEHfs'
        var createIframe = function (videoId) {
            var iframe = "";
            iframe += "<iframe class='video-results' width='400' height='400' src='https://www.youtube.com/embed/"
            iframe += videoId + "'"
            iframe += "frameborder='0' allowfullscreen='true'></iframe>"
            return iframe;
        
        }
        }
        $.getJSON(url, function (response) {
            response.items.forEach(function (video, index) {
                $('#results').append(createIframe(video.id.videoId))
            })
        })
    });
    //alert with "sweet alert"
});
        },
        
        pause : function () {
            console.log('youtube pause');
        },
        
        destroy : function () {
            console.log('youtube destroy');
        },
    }
    
})
