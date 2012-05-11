/**
 * expandy! plugin
 * one big, many small. clicky clicky. alternative type carousely thing.
 * @author Phil Steer
 * https://github.com/pdincubus/
 * initial settings are based on four li items in a 1000px wide space
 * Include Easing plugin for further animation options
 * see demo page for six item showcase and some basic CSS for it all to work nicely.
 */
 
 (function($){
  $.fn.expandy = function(options){
  
	// Create some defaults, extending them with any options that were provided
	var settings = $.extend( {
	  'slideElement' 			: 'li',
	  'animationDuration' 		: 500,			//milliseconds
	  'slideEasing'				: 'swing',		//default options are swing or linear
	  'textSizeEasing'			: 'swing',
	  'compressedSize'			: '164px',
	  'expandedSize'			: '500px',
	  'fontSizeLarge'			: '60px',
	  'fontSizeSmall'			: '20px',
	  'firstOpen'				: 0				//eq starts from zero, not one.
	}, options);

	//apparently this lets us do some chains and stuff.
	return this.each(function() {
		var slides = '#' + $(this).attr('id');
		var slideLink = slides + ' > ' + settings.slideElement + ' > a';
		
		//do some initial stuff
		var first = $($(slides + ' ' + settings.slideElement).get(settings.firstOpen));
		
		first.animate({
			width : settings.expandedSize
		}, settings.animationDuration, settings.slideEasing, function(){
			$(this).find(settings.textElement).animate({
				fontSize : settings.fontSizeLarge
			}, settings.animationDuration, settings.textSizeEasing);
		}).addClass('active');
		
		$(slideLink).on('click', function(event){
			event.preventDefault();
			
			if($(this).parent().hasClass('active')){
			
				//it's already big, go to the link!
				var $url = $(this).attr('href');
				window.location.href = $url;
				
			}else{
			
				//it's not expanded yet, so do it!
				$(this).parent().siblings().animate({
					width : settings.compressedSize
				}, settings.animationDuration, settings.slideEasing, function(){
					$(this).find(settings.textElement).animate({
						fontSize : settings.fontSizeSmall
					}, settings.animationDuration, settings.textSizeEasing);
				}).removeClass('active');
				
				$(this).parent().animate({
					width : settings.expandedSize
				}, settings.animationDuration, settings.slideEasing, function(){
					$(this).find(settings.textElement).animate({
						fontSize : settings.fontSizeLarge
					}, settings.animationDuration, settings.textSizeEasing);
				}).addClass('active');
				
			}
		});

	});
  };
})(jQuery);