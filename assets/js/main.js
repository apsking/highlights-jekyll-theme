/*
	Highlights by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		large: '(max-width: 1680px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$html = $('html');

		//Countdown timer
		var end = new Date('08/08/2020 4:00 PM');

	    var _second = 1000;
	    var _minute = _second * 60;
	    var _hour = _minute * 60;
	    var _day = _hour * 24;
	    var timer;

	    function showRemaining() {
	        var now = new Date();
	        var distance = end - now;
	        if (distance < 0) {

	            clearInterval(timer);
	            $('#countdown').hide();

	            return;
	        } else {
				$('#countdown').show();
			}
	        var days = Math.floor(distance / _day);
	        var hours = Math.floor((distance % _day) / _hour);
	        var minutes = Math.floor((distance % _hour) / _minute);
	        var seconds = Math.floor((distance % _minute) / _second);

	        document.getElementById('countdown-d').innerHTML = days;
	        document.getElementById('countdown-h').innerHTML = hours;
	        document.getElementById('countdown-m').innerHTML = minutes;
	        document.getElementById('countdown-s').innerHTML = seconds;

			if (days === 1) {
				$('#countdown-s-d').hide();
			} else {
				$('#countdown-s-d').show();
			}

			if (hours === 1) {
				$('#countdown-s-h').hide();
			} else {
				$('#countdown-s-h').show();
			}

			if (minutes === 1) {
				$('#countdown-s-m').hide();
			} else {
				$('#countdown-s-m').show();
			}

			if (seconds === 1) {
				$('#countdown-s-s').hide();
			} else {
				$('#countdown-s-s').show();
			}
	    }

	    timer = setInterval(showRemaining, 1000);

		// Disable animations/transitions until the page has loaded.
			$html.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$html.removeClass('is-loading');
				}, 0);
			});

		// Touch mode.
			if (skel.vars.mobile) {

				var $wrapper;

				// Create wrapper.
					$body.wrapInner('<div id="wrapper" />');
					$wrapper = $('#wrapper');

					// Hack: iOS vh bug.
						if (skel.vars.os == 'ios')
							$wrapper
								.css('margin-top', -25)
								.css('padding-bottom', 25);

					// Pass scroll event to window.
						$wrapper.on('scroll', function() {
							$window.trigger('scroll');
						});

				// Scrolly.
					$window.on('load.hl_scrolly', function() {

						$('.scrolly').scrolly({
							speed: 1500,
							parent: $wrapper,
							pollOnce: true
						});

						$window.off('load.hl_scrolly');

					});

				// Enable touch mode.
					$html.addClass('is-touch');

			}
			else {

				// Scrolly.
					$('.scrolly').scrolly({
						speed: 1500
					});

			}

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			var $header = $('#header'),
				$headerTitle = $header.find('header'),
				$headerContainer = $header.find('.container');

			// Make title fixed.
				if (!skel.vars.mobile) {

					$window.on('load.hl_headerTitle', function() {

						skel.on('-medium !medium', function() {

							$headerTitle
								.css('position', 'fixed')
								.css('height', 'auto')
								.css('top', '50%')
								.css('left', '0')
								.css('width', '100%')
								.css('margin-top', ($headerTitle.outerHeight() / -2));

						});

						skel.on('+medium', function() {

							$headerTitle
								.css('position', '')
								.css('height', '')
								.css('top', '')
								.css('left', '')
								.css('width', '')
								.css('margin-top', '');

						});

						$window.off('load.hl_headerTitle');

					});

				}

			// Scrollex.
				skel.on('-small !small', function() {
					$header.scrollex({
						terminate: function() {

							$headerTitle.css('opacity', '');

						},
						scroll: function(progress) {

							// Fade out title as user scrolls down.
								if (progress > 0.5)
									x = 1 - progress;
								else
									x = progress;

								$headerTitle.css('opacity', Math.max(0, Math.min(1, x * 2)));

						}
					});
				});

				skel.on('+small', function() {

					$header.unscrollex();

				});

		// Main sections.
			$('.main').each(function() {

				var $this = $(this),
					$primaryImg = $this.find('.image.primary > img'),
					$bg,
					options;

				// No primary image? Bail.
					if ($primaryImg.length == 0)
						return;

				// Hack: IE8 fallback.
					if (skel.vars.IEVersion < 9) {

						$this
							.css('background-image', 'url("' + $primaryImg.attr('src') + '")')
							.css('-ms-behavior', 'url("assets/css/ie/backgroundsize.min.htc")');

						return;

					}

				// Create bg and append it to body.
					$bg = $('<div class="main-bg" id="' + $this.attr('id') + '-bg"></div>')
						.css('background-image', (
							'url("assets/css/images/overlay.png"), url("' + $primaryImg.attr('src') + '")'
						))
						.appendTo($body);

				// Scrollex.
					options = {
						mode: 'middle',
						delay: 200,
						top: '-10vh',
						bottom: '-10vh'
					};

					if (skel.canUse('transition')) {

						options.init = function() { $bg.removeClass('active'); };
						options.enter = function() { $bg.addClass('active'); };
						options.leave = function() { $bg.removeClass('active'); };

					}
					else {

						$bg
							.css('opacity', 1)
							.hide();

						options.init = function() { $bg.fadeOut(0); };
						options.enter = function() { $bg.fadeIn(400); };
						options.leave = function() { $bg.fadeOut(400); };

					}

					$this.scrollex(options);

			});

	});

})(jQuery);

// WeatherWidget.io
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
