/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          'body': ['Charmonman'],
        },
        colors: {
          'blaze-orange': {
            '50': '#fff8ec',
            '100': '#fff0d3',
            '200': '#ffdea5',
            '300': '#ffc56d',
            '400': '#ffa032',
            '500': '#ff830a',
            '600': '#ff6a00',
            '700': '#cc4c02',
            '800': '#a13b0b',
            '900': '#82330c',
          },
          'tabasco': {
            '50': '#fff3f1',
            '100': '#ffe4e0',
            '200': '#ffcfc7',
            '300': '#ffac9f',
            '400': '#FF6A00',
            '500': '#fa5339',
            '600': '#e8361a',
            '700': '#c32a12',
            '800': '#ad2914',
            '900': '#852617',
        },
        'illusion': {
          '50': '#fdf2f7',
          '100': '#fce7f1',
          '200': '#fad0e4',
          '300': '#f8aecf',
          '400': '#f274aa',
          '500': '#e94b8a',
          '600': '#d82a66',
          '700': '#bb1b4d',
          '800': '#9b1940',
          '900': '#811a39',
        },
        'toast': {
          '50': '#f6f2f0',
          '100': '#e7e0da',
          '200': '#d2c1b6',
          '300': '#b79d8d',
          '400': '#a27f6d',
          '500': '#966f60',
          '600': '#7e5950',
          '700': '#664642',
          '800': '#573d3c',
          '900': '#4d3636',
      },
      }
    }
  },
  plugins: [],
}
