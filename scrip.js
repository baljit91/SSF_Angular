// add overlay


    var player = videojs('my-video');
  player.imageOverlay({
    image_url: "http://assets0.ordienetworks.com/misc/JimCarreyEyebrow.jpg",
    click_url:"https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?id=624854547",
    opacity: 0.5,
    height: '20%'
  });
  
  
  
  //  sharing
  
  
   var video = videojs('my-video');
  video.socialShare({
    facebook: { // optional, includes a Facebook share button (See the [Facebook documentation](https://developers.facebook.com/docs/sharing/reference/share-dialog) for more information)
      shareUrl: '', // optional, defaults to window.location.href
      shareImage: '', // optional, defaults to the Facebook-scraped image
      shareText: ''
    },
    twitter: { // optional, includes a Twitter share button (See the [Twitter documentation](https://dev.twitter.com/web/tweet-button/web-intent) for more information)
      handle: '', // optional, appends `via @handle` to the end of the tweet
      shareUrl: '', // optional, defaults to window.location.href
      shareText: ''
    }
  });



//afk moniter


  var video = videojs('my-video');
    video.AFKMonitor();
    
    
    
    $('#transcript').draggable();
    
    
    
    
    // panorama(will give  condition on video source  for that one particular video)
    var video = videojs('my-video')

    video.panorama({
    clickAndDrag: true,
    callback: function () {
      player.play();
    }
});








//scroll trick

    $(function () {

		var vid = $('.video-container');

    var top = vid.offset().top - parseFloat(vid.css('margin-top').replace(/auto/, 0));

	$(window).on('scroll', function(event) {
		// what the y position of the scroll is
		var y = $(this).scrollTop();

		// whether that's below the form
		if (y >= top) {
			// if so, ad the fixed class
			if ( vid.is('.aside') ) {
				return;
			}
			vid.addClass('aside');
		} else {
			// otherwise remove it
			vid.removeClass('aside');
		}
	});

});
