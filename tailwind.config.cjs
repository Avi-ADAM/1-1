
const colors = require('tailwindcss/colors');

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: { 
		scale: {
			'0': '0',
		   '25': '.25',
			'50': '.5',
			'75': '.75',
			'90': '.9',
		   '95': '.95',
			'100': '1',
		   '105': '1.05',
		   '110': '1.1',
			'125': '1.25',
			'150': '1.5',
		   '200': '2',
		  },
		extend: {
			colors: {
					barbi: '#FF0092',
					gold: '#EEE8AA',
					lturk: 'rgb(103, 232, 249)',
					mturk: 'rgb(34, 211, 238)',
					sturk: '#CCFBF1',
					lpink: 'rgb(251, 207, 232)', 
					mpink: 'rgb(244, 114, 182)',
		}
		
		
	  }
			}

	
};

module.exports = config;
