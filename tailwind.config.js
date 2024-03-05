/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}','node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      colors: {
        'xblack': '#11151C',
        'blue3': '#5FBFF9',
        'blue2': '#16BAC5',
        'blue1': '#5863F8',
        'xwhite': '#EFE9F4',
      },
      backgroundImage: {
        'header-image': "url('https://cdn.vox-cdn.com/thumbor/hiQ7OL1QpnxMU4l2ZoD5RHqJvzs=/0x0:3701x2467/1200x800/filters:focal(2751x590:3343x1182)/cdn.vox-cdn.com/uploads/chorus_image/image/60320111/988400468.jpg.0.jp')",
    },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],
}

