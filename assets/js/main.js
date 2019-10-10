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

			$('.complete-overlay-close').on('click', function() {
				$('.complete-overlay').addClass('hide');

				if (window.matterEngine) {
					Matter.World.clear(window.matterEngine.world);
        			Matter.Engine.clear(window.matterEngine);
					$('.complete-overlay canvas').remove();
					delete window.matterEngine;
				}
			});

			$('section, .nav-list li').on('click', function() {
				$('.nav-list').removeClass('open');
				$('.nav-toggle').removeClass('open');
			});

			$('.rsvp-already-completed').on('click', function(){
				initGame();
				$('.rsvp-form').addClass('hide');
				$('.rsvp-thanks').removeClass('hide');
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

		//Discover Game state
		window.gameState = {
			achievements: {
				bottomScroll: {
					completed: false,
					title: 'Deep Down Explorer',
					icon: 'fa-sort-amount-down-alt',
					tip: 'Scroll down to the deep dark depths. ' +
						'Make sure to check things out along the way!'
				},
				pics: {
					completed: false,
					title: 'Picture Perfect',
					icon: 'fa-camera',
					tip: 'We have lots of photos to share with you. ' +
						'Click through and check out our favorites!'
				},
				tetris: {
					completed: false,
					title: 'Tetris Champ',
					icon: 'fa-shapes',
					tip: 'We are going old school. After you RSVP, ' +
						'test your skills by getting on the scoreboard! ' +
						'If you already RSVP\'d, no need to send another!'
				},
				weather: {
					completed: false,
					title: 'Rainman',
					icon: 'fa-cloud-sun-rain',
					tip: 'Not sure what to wear? The weather in the PNW ' +
						'is beautiful, but can be unpredictable. Check it out ' +
						'before you go!'
				},
				flipper: {
					completed: false,
					title: 'Flipper',
					icon: 'fa-sync-alt',
					tip: 'We have lots on the schedule. Check out the cards ' +
						'so you are up to speed before you go!'
				},
				carpet: {
					completed: false,
					title: 'Hipster Icon',
					icon: 'fa-glasses',
					tip: 'Portlanders are nearly as weird as the city itself. ' +
						'Find just one of the things that has a cult following ' +
						'in PDX.'
				},
				puppy: {
					completed: false,
					title: 'Puppy Can\'t Hang',
					icon: 'fa-paw',
					tip: 'We love all of our dogs so much! We also love it ' +
						'when they just need a snooze. Check out our precious ' +
						'Insta-famous pups!'
				},
				cedarvale: {
					completed: false,
					title: 'I Know Where I\'m Going',
					icon: 'fa-tree',
					tip: 'We were so enamored with the Cedars that line our ' +
						'wedding venue. We can\'t wait to share it with you. ' +
						'Feel free to check it out before you go!'
				},
				// welcome: {
				// 	completed: false,
				// 	message: 'You Showed Up!',
				// 	icon: 'fa-eye'
				// },
				// challenge10: {
				// 	completed: false,
				// 	message: 'Challenge 10',
				// }
			},
			score: 0,
			achievementCompleted: function(achievementId) {
				const achievement = window.gameState.achievements[achievementId];

				if (!achievement) {
					return false;
				}

				if (!achievement.completed) {
					achievement.completed = true;
					const itemsCompleted = Object.keys(window.gameState.achievements)
						.filter(key => window.gameState.achievements[key].completed).length;
					const totalItems = Object.keys(window.gameState.achievements).length;
					window.gameState.score = Math.min(100, Math.ceil(itemsCompleted / totalItems * 100) );

					Toastify({
					  text: formatAchievmentText(achievement.title),
					  backgroundColor: "#8cd1a8",
					  className: "info",
					  duration: 6000,
					  gravity: 'bottom',
					  stopOnFocus: true
					}).showToast();

					window.gameState.updateScoreboard();

					if (Object.keys(window.gameState.achievements)
						.every(key => window.gameState.achievements[key].completed)) {
							window.gameState.gameWon();
						}
				}
			},
			gameWon: function() {
				$('.complete-overlay').removeClass('hide');
				popcorn();
				Toastify({
				  text: `You won! Enjoy some of our favorite snack!`,
				  backgroundColor: "#8cd1a8",
				  className: "info",
				  duration: 10000,
				  gravity: 'bottom',
				  stopOnFocus: true
				}).showToast();

				$('.scoreboard-progess-msg').addClass('hide');
				$('.scoreboard-complete-msg').removeClass('hide');
			},
			updateScoreboard: function() {
				$('.score-value').text(window.gameState.score);

				const updatedListItems = Object.keys(window.gameState.achievements)
					.map(key => ({
						key: key,
						achievement: window.gameState.achievements[key]
					}))
					.sort((a,b) => a.achievement.completed - b.achievement.completed)
					.map(obj => {
						const achievement = obj.achievement;
						const key = obj.key;
						return `<li class="score-item ${achievement.completed ? 'complete' : ''}" data-id='${key}'><i class="major fas fa-md ${achievement.icon}"></i> ${achievement.title}</li>`
					});
				$('.score-list').html(updatedListItems);
			}
		};
		window.gameState.updateScoreboard();

		$('.score').on('click', function() {
			$('.scoreboard-overlay').removeClass('hide');
		});

		$('body').on('click', '.achieve-toast', function() {
			$('.scoreboard-overlay').removeClass('hide');
		});

		$('.scoreboard-close').on('click', function() {
			$('.scoreboard-overlay').addClass('hide');
		});

		$('.score-list').on('mouseover', '.score-item', function() {
			const achievementId = $(this).attr('data-id');
			const achievement = window.gameState.achievements[achievementId];
			if (achievement.tip) {
				$('.score-description').text(achievement.tip);
			}
		});

		var photoArrowCount = 0;
		$('.slick-arrow').on('click', function() {
			photoArrowCount++;
			if (photoArrowCount === 5) {
				window.gameState.achievementCompleted('pics');
			}
		});

		$('.pdx-carpet').on('click', function() {
			window.gameState.achievementCompleted('carpet');
		});

		$('.puppy-link').on('click', function() {
			window.gameState.achievementCompleted('puppy');
		});

		$('.weather-overlay').on('click', function() {
			window.gameState.achievementCompleted('weather');
		});

		$('.cedarvale-link').on('click', function() {
			window.gameState.achievementCompleted('cedarvale');
		});

		setTimeout(function() {
			window.gameState.achievementCompleted('welcome');
		}, 3000);

		var flipCount = {};
		$('.flip-toggle').on('click', function() {
			const uniqueId = $(this).attr('data-id');
			if (uniqueId) {
				flipCount[uniqueId] = 1;
				if (Object.keys(flipCount).length === 4) {
					window.gameState.achievementCompleted('flipper');
				}
			}
		});

		// Game events
		$window.scroll(function() {
		    if ($window.scrollTop() + $window.height() == $(document).height()) {
		       window.gameState.achievementCompleted('bottomScroll');
		    }

			if ($window.scrollTop() > $window.height()) {
				window.gameState.achievementCompleted('welcome');
			}
		});

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
			onLine: function(lines, scoreIncrement, score) {
				window.gameState.achievementCompleted('tetris');
			}
		});
	}

	function popcorn() {
		// module aliases
		var Engine = Matter.Engine,
		    Render = Matter.Render,
		    World = Matter.World,
		    Bodies = Matter.Bodies;

		// create an engine
		var engine = Engine.create();

		// create a renderer
		var width = $(window).width();
		var height = $(window).height();
		var render = Render.create({
		    element: document.getElementById('falling-canvas'),
		    engine: engine,
			//canvas: document.getElementById('myCanvas')
			options: {
				width: width,
				height: $(window).height(),
				wireframes: false,
    			background: 'rgba(0,0,0,0)'
			}
		});

		// create two walls and a ground
		var ground = Bodies.rectangle(400, 610, width + 500, 60, { isStatic: true });
		var left = Bodies.rectangle(-60, 0, 60, height + 500, { isStatic: true });
		var right = Bodies.rectangle(width+60, 0, 60, height + 500, { isStatic: true });

		// add all of the bodies to the world
		World.add(engine.world, [ground, right, left]);

		var count = 0;
		var int = setInterval(function(){
			count++;
			if (count > 300) {
				clearInterval(int);
				setTimeout(function(){
					Render.stop(render);
				}, 10000);
			}
			var body = Bodies.circle(Math.floor(Math.random() * Math.floor(width)) + 50, 0, 20, {
				render: {
                    sprite: {
                        texture: './assets/images/popcorn.png'
                    }
                },
				density: 0.1
			});
			engine.world = World.addBody(engine.world, body);
		}, 30);

		// run the engine
		Engine.run(engine);

		// run the renderer
		Render.run(render);

		window.matterEngine = engine;
	}

	function formatAchievmentText(name) {
		return `<div class="achieve-toast" title="Open Scoreboard"><h4>Completed: ${name}</h4><span>See More...</span></div>`;
	}

})(jQuery);

// WeatherWidget.io
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');
