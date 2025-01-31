/*
	Highlights by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

const attendeeGroups = [
	{ id: 1, maxCount: 2, attendees: ["Maureen Lowell", "Douglas Lowell"] },
	{ id: 2, maxCount: 2, attendees: ["Shannon Howard", "Robert Howard"] },
	{ id: 3, maxCount: 2, attendees: ["Heather Lowell", "Jarod Diaz"] },
	{ id: 4, maxCount: 3, attendees: ["Edrina Anderson", "Phil Anderson"], addlAttendees: ["Joanna Anderson"] },
	{ id: 5, maxCount: 2, attendees: ["Taiga Harimoto", "Molly O'Conner"] },
	{ id: 6, maxCount: 2, attendees: ["Harriet Courts", "John Courts"] },
	{ id: 7, maxCount: 2, attendees: ["Nigel King", "Cassandra King"] },
	{ id: 8, maxCount: 4, attendees: ["Ashley Taylor", "Jacob Taylor"], addlAttendees: ["Maebie Taylor-Fuss", "Seraphie Taylor-Fuss"] },
	{ id: 9, maxCount: 2, attendees: ["Monika Fuss", "Peter Fuss"] },
	{ id: 10, maxCount: 5, attendees: ["Ingrid Gerbino", "Tony Gerbino", "Nicola Gerbino","Chris Gerbino","Mia Gerbino"] },
	{ id: 11, maxCount: 2, attendees: ["Jeanette Hipskind", "Linda Thomas"] },
	{ id: 12, maxCount: 1, attendees: ["Julianne Hipskind"] },
	{ id: 13, maxCount: 1, attendees: ["Tim Hipskind, SJ"] },
	{ id: 14, maxCount: 3, attendees: ["Jim Hipskind"] },
	{ id: 15, maxCount: 5, attendees: ["Suzanne McHugh", "Phil McHugh", "Philip McHugh","Erin McHugh","Patrick McHugh"] },
	{ id: 16, maxCount: 3, attendees: ["Colleen Sweeney", "Brian Sweeney"], addlAttendees: ["Finnegan Sweeney"] },
	{ id: 17, maxCount: 5, attendees: ["Kevin Hipskind", "Michelle Hipskind","Grace Hipskind","Dan Hipskind","Sarah Hipskind"] },
	{ id: 18, maxCount: 4, attendees: ["Anne Roberts", "Tim Roberts"], addlAttendees: ["Felix Roberts", "Simon Roberts"] },
	{ id: 19, maxCount: 2, attendees: ["Dean Lowell", "Norma Lowell"] },
	{ id: 20, maxCount: 5, attendees: ["Dave Lowell", "Jeanne Lowell","Abigail Lowell","Sara Lowell","Sydney Lowell"] },
	{ id: 21, maxCount: 2, attendees: ["Kevin Lowell", "Chris Lowell"] },
	{ id: 22, maxCount: 2, attendees: ["Anna Cassell", "Tom Cassell"] },
	{ id: 23, maxCount: 2, attendees: ["Jessica Lowell", "Joe Meilahn"] },
	{ id: 24, maxCount: 4, attendees: ["Randy Lowell", "Heather Barr Lowell"], addlAttendees: ["Ben Lowell", "Lauren Lowell"] },
	{ id: 25, maxCount: 2, attendees: ["Dayna Nham", "Bryston Nham"] },
	{ id: 26, maxCount: 2, attendees: ["Grace Ferrara"], addlAttendees: ["Guest"] },
	{ id: 27, maxCount: 2, attendees: ["Michael Lim", "Becca Zavala"] },
	{ id: 28, maxCount: 2, attendees: ["Rocío de la Vega"] },
	{ id: 29, maxCount: 2, attendees: ["Denise Robison", "Rich Robison"] },
	{ id: 30, maxCount: 4, attendees: ["Martin Robison", "Kate Robison"], addlAttendees: ["Ben Robison", "Cole Robison"] },
	{ id: 31, maxCount: 4, attendees: ["Mike Frerichs", "Jordan Frerichs"], addlAttendees: ["Everett Frerichs", "Harper Frerichs"] },
	{ id: 32, maxCount: 2, attendees: ["Erik Omlid"], addlAttendees: ["Guest"] },
	{ id: 33, maxCount: 2, attendees: ["Jesse Peters", "Trisha Peters"] },
	{ id: 34, maxCount: 2, attendees: ["Jesse Pratt"], addlAttendees: ["Guest"] },
	{ id: 35, maxCount: 2, attendees: ["Travis Tallan"], addlAttendees: ["Guest"] },
	{ id: 36, maxCount: 3, attendees: ["Roman Daberkow", "Valerie Daberkow"], addlAttendees: ["Claire Daberkow"] },
	{ id: 37, maxCount: 4, attendees: ["Grant Hedrick", "Bergenn Hedrick"], addlAttendees: ["Lee Hedrick", "Leighton Hedrick"] },
	{ id: 38, maxCount: 2, attendees: ["Luis Rodriguez"], addlAttendees: ["Guest"] },
	{ id: 39, maxCount: 3, attendees: ["Michael Clements", "Jaclyn Clements"], addlAttendees: ["Connor Clements"] },
	{ id: 40, maxCount: 2, attendees: ["Jason Clements", "Brandi Clements"] },
	{ id: 41, maxCount: 2, attendees: ["KelliNicole Shipman", "Ryan Shipman"] },
	{ id: 42, maxCount: 2, attendees: ["Paul Harimoto", "Ruth Harimoto"] },
	{ id: 43, maxCount: 1, attendees: ["Julie Lim"] },
	{ id: 44, maxCount: 3, attendees: ["John Melville", "Susan Anderson", "Sam Melville"] },
	{ id: 45, maxCount: 5, attendees: ["Jim Lobdell", "Colleen Anderson-Lobdell"], addlAttendees: ["Lexi Lobdell", "Chris Lobdell", "Grace Lobdell"] },
	{ id: 46, maxCount: 4, attendees: ["Phil Kiekhaefer", "Christine Kiekhaefer"], addlAttendees: ["Ted Kiekhaefer", "Claire Kiekhaefer"] },
	{ id: 47, maxCount: 4, attendees: ["Nanette Nazaradeh", "Edward Nazaradeh"], addlAttendees: ["Eddie Nazaradeh", "Anthony Nazaradeh"] },
	{ id: 49, maxCount: 2, attendees: ["Alex Lux", "Thomas Lux"] },
	{ id: 97, maxCount: 2, attendees: ["Zach Soulliard", "Jerry Veiga"] },
	{ id: 51, maxCount: 1, attendees: ["Tim Hipskind Sr."] },
	{ id: 98, maxCount: 3, attendees: ["Wendy Hipskind Lear", "Scott Lear"], addlAttendees: ["Gracelyn Lear"] },
	{ id: 99, maxCount: 2, attendees: ["Kim Fleer"], addlAttendees: ["Guest"] },
	{ id: 54, maxCount: 2, attendees: ["Peter Bergene"], addlAttendees: ["Guest"] },
	{ id: 55, maxCount: 2, attendees: ["Eric Kenji Lee"], addlAttendees: ["Guest"] },
	{ id: 57, maxCount: 2, attendees: ["Clive King", "Anne King"] },
	{ id: 58, maxCount: 1, attendees: ["Robert King"] },
	{ id: 59, maxCount: 4, attendees: ["Jane Verde", "Mark Verde"], addlAttendees: ["Adam Verde", "Gemma Verde"] },
	{ id: 63, maxCount: 2, attendees: ["Allison Ma", "Nate Novotny"] },
	{ id: 64, maxCount: 2, attendees: ["Madeline Berry", "Reid Fredrickson"] },
	{ id: 65, maxCount: 2, attendees: ["Westley Dang"], addlAttendees: ["Guest"] },
	{ id: 67, maxCount: 2, attendees: ["Drew Anderson"], addlAttendees: ["Guest"] },
	{ id: 69, maxCount: 3, attendees: ["Christian Foster", "Sarah Foster"], addlAttendees: ["Baby Foster"] },
	{ id: 74, maxCount: 2, attendees: ["Austin Burns", "Monica Kruse"] },
	{ id: 84, maxCount: 3, attendees: ["Maria Kraemer", "Daniel Kraemer"], addlAttendees: ["Baby Kraemer"] },
	{ id: 100, maxCount: 3, attendees: ["Andy Ten", "Katya Ten"], addlAttendees: ["Aden Ten"] },
	{ id: 101, maxCount: 2, attendees: ["Maria Ivanteeva"], addlAttendees: ["Guest"] },
	{ id: 102, maxCount: 2, attendees: ["Emily Burke"], addlAttendees: ["Guest"] },
	{ id: 103, maxCount: 2, attendees: ["Riyaz Shah", "Xio Alvarez"] },
	{ id: 104, maxCount: 2, attendees: ["Sarah Khasrovi"], addlAttendees: ["Guest"] },
	{ id: 105, maxCount: 2, attendees: ["Sally Geisse", "Josep Maria Vericat"] },
	{ id: 106, maxCount: 2, attendees: ["Barbara Wenger"], addlAttendees: ["Guest"] },
	{ id: 107, maxCount: 2, attendees: ["Katrina Saladin", "Chris Saladin"] },
	{ id: 94, maxCount: 2, attendees: ["Bella Fiorenzo", "Morgan McAslan"] },
	{ id: 96, maxCount: 2, attendees: ["John Hanley", "Jeanie Hanley"] },
];

const attendees = attendeeGroups
	.map(a => a.attendees)
	.flat()
	.sort((a,b) => a.localeCompare(b));

function substringMatcher(strs) {
	return (q, cb) => {
		// regex used to determine if a string contains the substring `q`
		const substrRegex = new RegExp(`^${q}`, 'i');

		// iterate through the pool of strings and for any string that
		// contains the substring `q`, add it to the `matches` array
		const matches = strs.filter(str => {
			return substrRegex.test(str.replace('í','i')) ||
			str.split(/[\s-]/).some(sub => substrRegex.test(sub.replace('í','i')))
		});

		cb(matches);
	};
};

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

			//Enable Image carousel
			$('.image-carousel').slick({
			    dots: true,
				adaptiveHeight: true,
				autoplay: true,
				autoplaySpeed: 7000,
			});

			//Add form validation
			$('#rsvp-form').on('submit', handleFormSubmit);

			$('#rsvp_attending').on('change', function() {
				const $this = $(this);
				const $rsvpMessage = $('#rsvp_message');
				$rsvpMessage.parent().removeClass('hidden');

				if ($this.val() === "1") {
					$('.attending-only').removeClass('hidden');
					$rsvpMessage.attr('placeholder', 'Food restrictions? Any accommodations needed?');
				} else {
					$('.attending-only').addClass('hidden');
					$rsvpMessage.attr('placeholder', 'You will be missed! Feel free to drop us a note, if you wish!');
				}
			});

			// Handle passphrase form
			$("#rsvp_passphrase").keyup(function(e) {
				if ($("#rsvp_passphrase").val().toLowerCase() === "popcorn") {
					$(".password_only").removeClass("hidden");
					$(".passphrase").addClass("hidden");
					$("#rsvp_n").focus();
				}
			})

			// Handle Guest RSVP inputs
			$("#rsvp_attendees").on("keyup", function(e) {
				const target = $(e.target);
				$(`#${target.attr('data-checkbox')}`).val(target.val())
			})

			//RSVP TypeAhead

			$('#rsvp_n').typeahead({
			  hint: true,
			  highlight: true,
			  minLength: 2
			},
			{
			  name: 'attendees',
			  source: substringMatcher(attendees),
			  limit: 8
			});

			$('#rsvp_n').on('typeahead:select', handleRSVPSelection)

			// Hack to update this value to stop chrome from auto filling
			$('#rsvp_n').prev().attr('autocomplete', 'off');
			$('#rsvp_n').attr('autocomplete', 'off');

			async function handleRSVPSelection(){
				const value = $(this).val();

				if (!attendees.includes(value)) {
					if (value !== "") {
						$('.typeahead-validation-msg').addClass('hidden');
					}
					$('#rsvp_attending').attr('disabled', 'disabled');
					$('#submit_rsvp').attr('disabled', 'disabled');
					$(".already-rsvp-validation-msg").addClass('hidden');

				} else {
					const group = attendeeGroups.filter(group => {
						return group.attendees.includes(value);
					})[0];

					$('.typeahead-validation-loading').removeClass('hidden');
					$(".already-rsvp-validation-msg").addClass('hidden');
					const response = await $.get('https://script.google.com/macros/s/AKfycbwQmAxftVODeeKa2PJUUVGS_UXU4_08m6LslnvUP3TYdYUC_TKbfP3HmlcemtFi-V1Y/exec',
						`groupId=${group.id}`);
					$('.typeahead-validation-loading').addClass('hidden');

					$('#rsvp_attending').removeAttr('disabled');

					if (response.data.found) {
						const rsvpLabel = response.data.count === "" ? "" :
							response.data.count === 1 ? ' for 1 person' : ` for ${response.data.count} people`;
						$(".already-rsvp-validation-msg .rsvp-count").text(rsvpLabel);
						$(".already-rsvp-validation-msg").removeClass('hidden');
					} else {
						$('.typeahead-validation-msg').addClass('hidden');
						$(".already-rsvp-validation-msg").addClass('hidden');
					}

					$('#submit_rsvp').removeAttr('disabled');

					$('#rsvp_group_id').val(group.id);

					const $rsvpAttendees  = $('#rsvp_attendees');
					const attendees = group.attendees.concat((group.addlAttendees || []))
						.map((name, i) => `<input type="checkbox" id="rsvp_attendee_${i}" name="rsvp_attendee_${i}" value="${name}">
						${name !== "Guest" ? `<label for="rsvp_attendee_${i}"> ${name}</label>` :
						`<label for="rsvp_attendee_${i}"></label><input type="text" class="attendee_guest" val="Guest" placeholder="Type guest's name" data-checkbox="rsvp_attendee_${i}"></input>`
					}`)
						.join('');
					$rsvpAttendees.empty();
					$rsvpAttendees.append(attendees);

				}
			}

			//Add immediate input validation
			$('#rsvp_n').on('blur', handleRSVPSelection);

			//Select all on click
			$('#rsvp_n').on('click', function(){
				$(this).select();
			});

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

			$('#family-desc-collapse').on('click', function() {
				const $this = $(this);

				if ($this.hasClass('collapsed')) {
					$('.collapse').removeClass('collapsed');
					$this.removeClass('collapsed');
				} else {
					$('.collapse').addClass('collapsed');
					$this.addClass('collapsed');
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
			var end = new Date('06/25/2022 4:00 PM');

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
					  backgroundColor: "#B8C0FF",
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

		var flipCount = {};
		$('.flip-toggle').on('click', function() {
			const uniqueId = $(this).attr('data-id');
			if (uniqueId) {
				flipCount[uniqueId] = 1;
				if (Object.keys(flipCount).length === 2) {
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
		const form = event.target;
		const formData = getFormData(form);

		const isValid = validateForm(form);

		if (!isValid) {
			$('.form-overlay').addClass('hide');
			return false;
		}
		let data = formData.data;
		let cleaned = Object.keys(data).reduce((acc, cur) => {
			const val = data[cur];
			if (val !== "") {
				acc[cur] = val;
			}
			return acc;
		}, {});

		// If a honeypot field is filled, assume it was done so by a spam bot.
		if (formData.honeypot) {
			$('.form-overlay').addClass('hide');
		  	return false;
		}

		// If additional fields are added
		if (JSON.parse(cleaned.formDataNameOrder).some(name => !name.includes('rsvp'))) {
			$('.form-overlay').addClass('hide');
			return false;
		}

		var url = form.action;

		$.ajax({
		    url: url,
		    type: 'post',
		    data: cleaned,
		    dataType: 'json',
		    success: function(data, status, xhr) {
				if (xhr.status === 200) {
					if (data.error && data.error.message === 'Invalid Passphrase') {
					    $('.passphrase-validation-msg').removeClass('hidden');
					    $('#rsvp_passphrase').parent()
					   		.children('.form-validation-msg-required')
							.addClass('invisible');

				    } else {
					    form.reset();

	   					initGame();
	   					$('.rsvp-form').addClass('hide');
	   					$('.rsvp-thanks').removeClass('hide');
				    }
				} else {
					$('.rsvp-error').removeClass('hide');
				}
			}
		})
		.fail(function() {
		    $('rsvp-error').removeClass('hide)');
		})
		.always(function() {
			$('.form-overlay').addClass('hide');
		});
	}

	function validateForm(form) {
		let valid = true;
		const attendingVal = $('#rsvp_attending').val();
		const isAttendingClass = attendingVal === "1" ? 'required-attending' : 'required-non-attending';

		Array.from(form.elements).map(item => $(item))
		.filter(function($item){
			return $item.hasClass(isAttendingClass) && !$item.hasClass('tt-hint');
		}).forEach(function($input){
			const validationMsg = $input.parent().children('.form-validation-msg-required');
			if ($input.is('select') ? $input.children('option:selected').val() === "" : $input.val() === "") {
				valid = false;
				validationMsg.removeClass('invisible');
			} else if($input.attr('name') === 'rsvp_name' ) {
				if (!attendees.includes($input.val())) {
					valid = false;
					$('.typeahead-validation-msg').removeClass('hidden');
 				} else {
					$('.typeahead-validation-msg').addClass('hidden');
				}

			} else if($input.attr('name') === 'rsvp_passphrase' ) {
				if ($input.val() === "") {
					valid = false;
					validationMsg.removeClass('invisible');
					$('.passphrase-validation-msg').removeClass('hidden');
				} else {
					$('.passphrase-validation-msg').addClass('hidden');
					validationMsg.addClass('invisible');
				}

			} else {
				validationMsg.addClass('invisible');
			}
		});

		if ($("#rsvp_attending").val() === "1" && Array.from(form.elements)
			.filter(elem => elem.id.includes("attendee") && elem.checked)
			.length === 0) {
			$("#rsvp_attendees_validation").removeClass("invisible");
			valid = false;
		} else {
			$("#rsvp_attendees_validation").addClass("invisible");
		}

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
			if (element.type === 'checkbox' && !element.checked) {
				return;
			}
			formData[name] = element.value;

			// when our element has multiple items, get their values
			if (element.length) {
				const data = [];
				for (var i = 0; i < element.length; i++) {
					var item = element.item(i);
					if (item.checked || item.selected) {
						const val = element.className.includes('yes-no') ?
							item.value.replace("1", "Yes").replace("2", "No") :
							item.value;
						data.push(val);
					}
				}
				formData[name] = data.join(', ');
			}
		});

		formData['rsvp_count'] = Object.keys(formData).filter(key => key.includes('attendee')).length;
		fields.push('rsvp_count')

		// add form-specific values into the data
		formData.formDataNameOrder = JSON.stringify(fields);
		formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name

		return {data: formData, honeypot: honeypot};
	}

	function initGame() {
		$('.game').blockrain({
			theme: {
				background: '#000000',
			    backgroundGrid: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAIAAAC0Ujn1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZTg0NzU4MC00ODk3LTRkNjAtOWNhYi1mZTk1NzQ5NzhiNjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTEzOEQwMDc5MDQyMTFFNDlBMzlFNzY4RjBCNkNENzMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTEzOEQwMDY5MDQyMTFFNDlBMzlFNzY4RjBCNkNENzMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDplNDRjOWZiNC0yNzE5LTQ3NDYtYmRmMi0wMmY2ZTA4ZjAxMmUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzMwNTNEOTk5MDM1MTFFNDlBMzlFNzY4RjBCNkNENzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Y01+zAAAAMklEQVR42mJgGAWjYBSMgkEJGIlUd+j/WjjbjjGYGC1MtHP10DR6FIyCUTAKBikACDAA0NoDCLGGjH8AAAAASUVORK5CYII=',
			    primary: '#b8c0ff',
			    secondary: '#b8c0ff',
			    stroke: '#000000',
			    strokeWidth: 3,
			    innerStroke: null
			},
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
