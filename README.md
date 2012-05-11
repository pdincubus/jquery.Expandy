# jquery.Expandy plugin

Lets you turn a list (or a div with things in it) into an expandable quasi-carousel.

## Basic example

### HTML

I'd usually use an unordered list, but i guess this should work just as well with a div with a load of divs inside it too.

```html
<ul class="cf" id="expandy">
	<li>
		<a href="http://www.google.co.uk">
			<h2>Google</h2>
		</a>
	</li>
	<li>
		<a href="http://www.bing.co.uk">
			<h2>Bing</h2>
		</a>
	</li>
	<li>
		<a href="http://www.yahoo.co.uk">
			<h2>Yahoo</h2>
		</a>
	</li>
	<li>
		<a href="http://www.duckduckgo.com">
			<h2>Duck Duck Go</h2>
		</a>
	</li>
	<li>
		<a href="http://www.lmgtfy.com">
			<h2>Let Me Google That For you</h2>
		</a>
	</li>
	<li>
		<a href="http://www.github.com">
			<h2>GitHub</h2>
		</a>
	</li>
</ul>
```

### CSS

Chuck a bit of CSS in there.

The important parts are to ensure that the container has a set width and height, and that overflow is set to hidden for both the container and each list item (see the demo for the text hiding off-edge).

```css
#expandy {
	list-style: none;
	padding: 0;
	margin: 0;
	position: relative;
	overflow: hidden;
	width: 1000px;
	height: 240px;
}
	
#expandy li {
	float: left;
	position: relative;
	margin: 0;
	width: 100px;
	height: 240px;
	overflow: hidden;
	cursor: pointer;
}
	
#expandy li a {
	display: block;
	color: #fff;
	text-decoration: none;
	height: 240px;
	position: relative;
}
	
	
#expandy li h2 {
	font-size: 14px;
	margin: 0;
	width: 800px;
	overflow: hidden;
	position: absolute;
	bottom: 30px;
	left: 30px;
}
	
#expandy li p {
	width: 800px;
	font-size: 14px;
	margin: 0;
	position: absolute;
	top: 30px;
	left: 30px;
}

/*clearfix for fixing clears*/

.cf:before, .cf:after { content: ""; display: table; }
.cf:after { clear: both; }
.cf { *zoom: 1; }
```

### jQuery

Make sure you have called jQuery, pulled in the expandy js file (and easing if you want those effects too) before you try to run expandy:

```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script type="text/javascript" src="http://cachedcommons.org/cache/jquery-easing/1.3.0/javascripts/jquery-easing-min.js"></script>
<script type="text/javascript" src="/path/to/js/jquery.Expandy.js"></script>
```

Call expandy to run. This doesn't have to be $(window).load, it could be $(document).ready if that makes you happy. $(window).load is better if you're waiting for images and so forth to finish loading before you invoke expandy to start.

```javascript
$(window).load(function() {
	$('#expandy').expandy({
		'animationDuration' : 250,
		'slideEasing'		: 'easeOutBounce',
		'textSizeEasing'	: 'easeInOutExpo',
		'fontSizeSmall'		: '14px',
		'fontSizeLarge'		: '30px',
		'compressedSize'	: '100px',
		'expandedSize'		: '500px',
		'firstOpen'			: 0
	});
});
```

The full list of configurable settings (and the defaults) are as follows:

```javascript
'slideElement' 			: 'li',			//the elements under the container that will be expandable
'animationDuration' 	: 500,			//milliseconds - currently applied to both text and box resizing
'slideEasing'			: 'swing',		//default options are swing or linear
'textSizeEasing'		: 'swing',		//include easing plugin for more options (see demo)
'compressedSize'		: '164px',		//size of boxes when small
'expandedSize'			: '500px',		//size of the "expandy"
'fontSizeLarge'			: '60px',		//size for font when expanded
'fontSizeSmall'			: '20px',		//size for font when small again (this should really match the size you've set in the css!)
'firstOpen'				: 0,			//eq starts from zero, not one. which box should be opened first automatically
'textElement'			: 'h2'			//which element to apply the text resizing on
```

The default settings are based on the container for the expandy being 1000px wide and containing 4 child items. You'll need to adjust accordingly depending on how many expandy boxes you want.

## Browsers

I've tested and seen this working on Chrome, Safari, Opera, and Firefox on Mac OSX. It should work fine in Internet Explorer 6 (maybe?) onwards. Further testing to be done when I decide I really want to open that browser to do the testing!
