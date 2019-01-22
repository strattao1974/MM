/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: 'calendar_monthly',
			position: 'top_left',
			config: {
					// The config property is optional
					// Without a config, a default month view is shown
					// Please see the 'Configuration Options' section for more information
			}
		},
//		{
//			module: "updatenotification",
//			position: "top_center",	// This can be any of the regions.
//			config: {
//				// The config property is optional.
//				// See 'Configuration options' for more information.
//			}
//		},
		{
			module: 'MMM-CalendarExt',
			position: "bottom_bar",
			config: {
				system: {
					show: ["daily", ""],
					locale: 'en',
					redrawInterval:30000,
				},
				views: {
					daily: {
						position:'bottom_bar',
						counts:7,
					},
					upcoming: {
						position:'top_left',
						limit:5
					},
				},
				defaultCalendar: {
					maxEntries:50,
					maxDays:180,
					interval: 30000,
				},
				calendars :[
					{
						name: "Home",
						symbol: "calendar-o",
						styleName: "style6",
						url: "https://calendar.google.com/calendar/ical/strattao%40gmail.com/private-97d0027edf6c7925f0e0b16568e4fe31/basic.ics"
					},
					{
						name: "Holidays",
						symbol: "calendar@fa",
						styleName: "style6",
						url: "https://calendar.google.com/calendar/ical/en.australian%23holiday%40group.v.calendar.google.com/public/basic.ics"
					},
				],
			}
		},
		{
			disabled: false,
			module: "MMM-BMW-DS",
			position: "bottom_bar",               // bottom_bar is best
			config: {
				apiKey: "1a790d452ad795558c6774cbf080dd74", // Free API key @ darksky.net
				tempUnits: "C",		              // C of F
				lat: '-33.401707',
				lng: '151.290430',
				css: "2", // 1=default, 2=Clean, 3=Lord of the Rings, 4=handwriting, 5=Julee, 6=Englebert, "" = returns default css
				ownTitle: "Current Conditions",   // Use your own language and statement
				playSounds: "no", // yes = weather sounds, no = no weather sounds
				useHeader: false,               
				header: "Weather Forecast",
				maxWidth: "100%",
			}
		},	
		{
			module: 'MMM-BackgroundSlideshow',
    			position: 'fullscreen_below',
    			config: {
      				imagePaths: ['modules/MMM-BackgroundSlideshow/images'],
      				transitionImages: true,
      				randomizeImageOrder: true,
				slideshowSpeed: 300000,
				gradient: ["rgba(0, 0, 0, 0.6) 0%", "rgba(0, 0, 0, 0.6) 100%"]
				}
  		},
 		{
			module: 'MMM-SystemStats',
			position: 'top_right', // This can be any of the regions.
			// classes: 'small dimmed', // Add your own styling. OPTIONAL.
			// header: 'System Stats', // Set the header text OPTIONAL
			config: {
				updateInterval: 10000, // every 10 seconds
				align: 'right', // align labels
				view: 'text',
			},
		},
		{
			module: "MMM-Wunderlist",
			position: "top_right",	// This can be any of the regions. Best results in left or right regions.
			header: "No More Jobs List", // This is optional
			config: {
				accessToken: "2b153dfe0600898961f9b1d2e620a32bb46bf53c1ca3290e9353c29c6cab",
				clientID: "b7e487eaa066d4c70d0e",
				lists: [
                                 'Inbox',
                                 'Work'
                               ],
                        interval: 30, 
                        fade: true  
                        }
		},
		{
			module: "newsfeed",
			position: "lower_third",
			config: {
				feeds: [
					{
						title: "Shower Thoughts",
						url: "http://www.reddit.com/r/showerthoughts/top/.rss?t=week",
					}
				],
				showSourceTitle: false,
				showPublishDate: false,
				updateInterval: 30000
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
