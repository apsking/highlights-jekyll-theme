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

			//Enable sticky header
			stickybits('#navigation');

			//Enable Image carousel
			$('.image-carousel').slick({
			    dots: true,
				adaptiveHeight: true,
				autoplay: true,
				autoplaySpeed: 7000,
			});

			//Add form validation
			$('#rsvp-form').on('submit', handleFormSubmit);

			$('.flip-toggle').on('click', function() {
				const $this = $(this);
				const cardParent = $this.parents('.flip-card');
				if (cardParent.hasClass('flipped')) {
					cardParent.removeClass('flipped');
				} else {
					cardParent.addClass('flipped');
				}
			})

			$('.nav-toggle').on('click', function() {
				const $navList = $('.nav-list');
				const $this = $(this);

				if ($navList.hasClass('open')) {
					$navList.removeClass('open');
				} else {
					$navList.addClass('open');
				}

				if ($this.hasClass('open')) {
					$this.removeClass('open');
				} else {
					$this.addClass('open');
				}
			});

			$('section, .nav-list li').on('click', function() {
				$('.nav-list').removeClass('open');
				$('.nav-toggle').removeClass('open');
			});

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

							// $headerTitle
							// 	.css('position', 'fixed')
							// 	.css('height', 'auto')
							// 	.css('top', '50%')
							// 	.css('left', '0')
							// 	.css('width', '100%')
							// 	.css('margin-top', ($headerTitle.outerHeight() / -2));

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
	});

	function handleFormSubmit(event) {  // handles form submit without any jquery
		event.preventDefault();
		$('.form-overlay').removeClass('hide');      // we are submitting via xhr below
		var form = event.target;
		var formData = getFormData(form);
		var isValid = validateForm(form);

		if (!isValid) {
			$('.form-overlay').addClass('hide');
			return false;
		}
		var data = formData.data;

		// If a honeypot field is filled, assume it was done so by a spam bot.
		if (formData.honeypot) {
			$('.form-overlay').addClass('hide');
		  	return false;
		}

		var url = form.action;

		var encoded = Object.keys(data).map(function(k) {
		     return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
		}).join('&');

		$.ajax({
		    url: url,
		    type: 'post',
		    data: data,
		    dataType: 'json',
		    success: function(data, status, xhr) {
				if (xhr.status === 200) {
				    form.reset();

					initGame();
					$('.rsvp-form').addClass('hide');
					$('.rsvp-thanks').removeClass('hide');
				} else {
					$('.rsvp-error').removeClass('hide');
				}
			}
		})
		.fail(function() {
		    $('rsvp-error').removeClass('hide)');
		})
		.always(function() {
			$('.form-overlay').removeClass('hide');
		});
	}

	function validateForm(form) {
		var valid = true;
		Array.from(form.elements).map(item => $(item))
		.filter(function($item){
			return $item.hasClass('required');
		}).forEach(function($input){
			const validationMsg = $input.parent().children('.form-validation-msg');
			if ($input.val() === "") {
				valid = false;
				validationMsg.removeClass('invisible');
			} else {
				validationMsg.addClass('invisible');
			}
		});

		return valid;
	}

	// get all data in form and return object
	function getFormData(form) {
		var elements = form.elements;
		var honeypot;

		var fields = Object.keys(elements).filter(function(k) {
		  if (elements[k].className === "awesome") {
			honeypot = elements[k].value;
			return false;
		  }
		  return true;
		}).map(function(k) {
		  if(elements[k].name !== undefined) {
			return elements[k].name;
		  // special case for Edge's html collection
		  }else if(elements[k].length > 0){
			return elements[k].item(0).name;
		  }
		}).filter(function(item, pos, self) {
		  return self.indexOf(item) == pos && item;
	  	});

		var formData = {};
		fields.forEach(function(name){
		  var element = elements[name];

		  // singular form elements just have one value
		  formData[name] = element.value;

		  // when our element has multiple items, get their values
		  if (element.length) {
			var data = [];
			for (var i = 0; i < element.length; i++) {
			  var item = element.item(i);
			  if (item.checked || item.selected) {
				data.push(item.value);
			  }
			}
			formData[name] = data.join(', ');
		  }
		});

		// add form-specific values into the data
		formData.formDataNameOrder = JSON.stringify(fields);
		formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name

		return {data: formData, honeypot: honeypot};
	}

	function initGame() {
		$('.game').blockrain({
			theme: 'vim',
			playText: 'Let\'s play some Tetris. Use your arrow keys!',
		});
	}

})(jQuery);

// WeatherWidget.io
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
