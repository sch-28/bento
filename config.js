// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// General
	name: 'Jan',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: '$ wake --mode=productive',
	greetingAfternoon: '$ uptime: afternoon',
	greetingEvening: '$ status: winding down',
	greetingNight: '$ systemctl suspend',

	// Weather
	weatherKey: 'InsertYourAPIKeyHere123456',
	weatherIcons: 'OneDark',
	weatherUnit: 'C',
	language: 'en',

	trackLocation: true,
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,
	changeThemeByOS: true,
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┬ ┬┌─┐┬─┐┬┌─┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐
	// ││││ │├┬┘├┴┐└─┐├─┘├─┤│  ├┤ └─┐
	// └┴┘└─┘┴└─┴ ┴└─┘┴  ┴ ┴└─┘└─┘└─┘

	workspaces: [
		{
			id: 1,
			name: 'general',
			bookmarks: [
				{ name: 'github',    icon: 'github',     link: 'https://github.com/sch-28' },
				{ name: 'mail',      icon: 'mail',        link: 'https://mail.protonmail.com/' },
				{ name: 'calendar',  icon: 'calendar',    link: 'https://calendar.proton.me/u/0' },
				{ name: 'whatsapp',  icon: 'message-circle', link: 'https://web.whatsapp.com/' },
			],
		},
		{
			id: 2,
			name: 'information',
			bookmarks: [
				{ name: 'reddit',    icon: 'glasses',   link: 'https://reddit.com' },
				{ name: 'hn',        icon: 'terminal',  link: 'https://news.ycombinator.com' },
				{ name: 'lobsters',  icon: 'rss',       link: 'https://lobste.rs' },
				{ name: 'arxiv',     icon: 'file-text', link: 'https://arxiv.org' },
				{ name: 'wikipedia', icon: 'book-open', link: 'https://wikipedia.org' },
				{ name: 'devto',     icon: 'code-2',    link: 'https://dev.to' },
				{ name: 'dribbble', icon: 'dribbble',   link: 'https://www.dribbble.com' },
				{ name: 'hashnode', icon: 'pen-line',   link: 'https://hashnode.com/' },
			],
		},
		{
			id: 3,
			name: 'entertainment',
			bookmarks: [
				{ name: 'youtube',  icon: 'youtube',    link: 'https://www.youtube.com/' },
				{ name: 'twitch',   icon: 'tv-2',        link: 'https://twitch.tv' },
				{ name: 'netflix',  icon: 'popcorn',     link: 'https://www.netflix.com/' },
				{ name: 'disney+',  icon: 'wand-2',      link: 'https://www.disneyplus.com/' },
				{ name: 'amazon',   icon: 'play-circle',  link: 'https://www.amazon.com/video' },
			],
		},
	],
};
