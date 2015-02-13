jQuery(window).load(function(){
	SC.initialize({
	    client_id: "140bce7dc2791093a3b48cba66b819cf",
	    client_secret: '724d4cc2023ca29e846a36f21e7c175f'
	});
	makeSC(35129656);
});
function makeSC(trackId){
	var $playBtn = jQuery('#play-sc');
	SC.get("/tracks/"+trackId, function(track){
		jQuery.ajax({
			url: "http://waveformjs.org/w?callback=?",
			dataType: 'json',
			async: false,
			data: {
				url: track.waveform_url
			},
			success: function(d){
				console.log("wave is ready");
				jQuery('.preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
				jQuery('body').delay(350).css({'overflow':'visible'});
				//jQuery('html').css({"display": "block"});
				var sound;
				waveform = new Waveform({
        		  container: $j('.sc-waveform-container')[0],
        		  innerColor: function(x){
        			  var ctx = this.context;
        			  
        			  var gradientLoaded = ctx.createLinearGradient(0, 0, 0, this.height);
        			  gradientLoaded.addColorStop(0, "rgba(255, 255, 255, 0.55)");
        			  gradientLoaded.addColorStop(0.702020202020202, "rgba(255, 255, 255, 0.35)");
        			  gradientLoaded.addColorStop(0.7121212121212122, "rgba(255, 255, 255, 0.4)");
        			  gradientLoaded.addColorStop(0.7222222222222222, "rgba(255, 255, 255, 0.13)");
        			  gradientLoaded.addColorStop(0.9848484848484849, "rgba(255, 255, 255, 0.10)");
        			  gradientLoaded.addColorStop(1, "rgba(255, 255, 255, 0.26)");
        			  
        			  var gradient = ctx.createLinearGradient(0, 0, 0, this.height);
        			  gradient.addColorStop(0, "rgba(255, 255, 255, 0.65)");
        			  gradient.addColorStop(0.702020202020202, "rgba(255, 255, 255, 0.5)");
        			  gradient.addColorStop(0.7121212121212122, "rgba(255, 255, 255, 0.5)");
        			  gradient.addColorStop(0.7222222222222222, "rgba(255, 255, 255, 0.23)");
        			  gradient.addColorStop(0.9848484848484849, "rgba(255, 255, 255, 0.20)");
        			  gradient.addColorStop(1, "rgba(255, 255, 255, 0.26)");

        			  var gradientPlayed = ctx.createLinearGradient(0, 0, 0, this.height);
        			  gradientPlayed.addColorStop(0, "rgb(232, 0, 66)");
        			  gradientPlayed.addColorStop(0.702020202020202, "rgb(128, 0, 36)");
        			  gradientPlayed.addColorStop(0.7121212121212122, "rgba(232, 0, 66, 0.33)");
        			  gradientPlayed.addColorStop(0.9848484848484849, "rgba(232, 0, 66, 0.26)");
        			  gradientPlayed.addColorStop(1, "rgba(232, 0, 66, 0.26)");
        			  
        	          if(sound && x < sound.position / sound.durationEstimate){
        	            return gradientPlayed;
        	          }else if(sound && x < sound.bytesLoaded / sound.bytesTotal){
        	            return gradient;
        	          }else{
        	            return gradientLoaded;
        	          }
        	        },
        	        data: d
				 });
	        	var events = {
	        		whileloading : waveform.redraw,
	        		whileplaying: waveform.redraw,
	        		onfinish: function(){
	        			jQuery('#play-sc-'+ this.id).removeClass('playing').addClass('pause');;
	        		}
	        	}
	        	$playBtn.css('display', 'inline-block');
          		jQuery('.sc-artist').text(track.title);
	          	SC.stream(track.uri, events,  function(stream){
	          		sound = stream;
	          		window['stream_'+trackId] = stream;
	          		stream.play();
	          		$playBtn.click(function(){
	          			if (jQuery(this).hasClass('playing')){
	          				jQuery(this).removeClass('playing').addClass('pause');
	          				stream.pause();
	          			} else if (jQuery(this).hasClass('pause')){
	          				jQuery(this).removeClass('pause').addClass('playing');
	          				stream.resume();
	          			} else if (jQuery(this).hasClass('ready')) {
	          				jQuery(this).removeClass('ready').addClass('playing');
	          				stream.play();
	          			}
          				
          			});
	        	});
	          	
	          	
			}
		});
	});
}