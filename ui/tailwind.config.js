const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            grey: {
                50: 'hsl(216, 20%, 95%)', // #f0f2f5
                100: 'hsl(219, 18%, 85%)', // #d2d7e0
                200: 'hsl(217, 19%, 75%)', // #b3bccb
                300: 'hsl(216, 18%, 65%)', // #95a2b6
                400: 'hsl(218, 19%, 55%)', // #7787a2
                500: 'hsl(218, 19%, 45%)', // #5d6d88
                600: 'hsl(218, 18%, 35%)', // #49556a
                700: 'hsl(218, 19%, 25%)', // #343d4c
                800: 'hsl(219, 18%, 15%)', // #1f242d
                900: 'hsl(216, 20%, 5%)' // #0a0c0f
            },
            teal: {
                50: 'hsl(184, 54%, 95%)', // #ebf8f9
                100: 'hsl(187, 55%, 85%)', // #c4e9ee
                200: 'hsl(186, 55%, 75%)', // #9cdbe2
                300: 'hsl(186, 54%, 65%)', // #75ccd6
                400: 'hsl(186, 55%, 55%)', // #4ebecb
                500: 'hsl(186, 55%, 45%)', // #34a4b1
                600: 'hsl(186, 54%, 35%)', // #29808a
                700: 'hsl(187, 55%, 25%)', // #1d5b63
                800: 'hsl(186, 55%, 15%)', // #11373b
                900: 'hsl(189, 54%, 5%)' // #061214
            },
            purple: {
                50: 'hsl(248, 62%, 95%)', // #eceafa
                100: 'hsl(249, 64%, 85%)', // #c8c0f1
                200: 'hsl(247, 64%, 75%)', // #a096e8
                300: 'hsl(248, 64%, 65%)', // #7c6ddf
                400: 'hsl(248, 63%, 55%)', // #5744d5
                500: 'hsl(248, 63%, 45%)', // #3e2abb
                600: 'hsl(248, 64%, 35%)', // #2f2092
                700: 'hsl(248, 64%, 25%)', // #221769
                800: 'hsl(247, 64%, 15%)', // #130e3f
                900: 'hsl(248, 62%, 5%)' // #070515
            },
            pink: {
                50: 'hsl(330, 85%, 95%)', //#fde7f2
                100: 'hsl(332, 87%, 85%)', // #fab8d7
                200: 'hsl(332, 86%, 75%)', // #f688bc
                300: 'hsl(332, 87%, 65%)', // #f359a2
                400: 'hsl(332, 86%, 55%)', // #ef2987
                500: 'hsl(332, 86%, 45%)', // #d6106e
                600: 'hsl(332, 87%, 35%)', // #a60c55
                700: 'hsl(332, 86%, 25%)', // #77093d
                800: 'hsl(331, 87%, 15%)', // #470525
                900: 'hsl(333, 85%, 5%)' // #18020c
            },
            peach: {
                50: 'hsl(8, 62%, 95%)', // #faecea
                100: 'hsl(8, 63%, 85%)', // #f1c7c1
                200: 'hsl(8, 62%, 75%)', // #e7a298
                300: 'hsl(8, 62%, 65%)', // #dd7d6e
                400: 'hsl(8, 62%, 55%)', // #d45845
                500: 'hsl(8, 62%, 45%)', // #ba3f2b
                600: 'hsl(8, 62%, 35%)', // #913122
                700: 'hsl(8, 62%, 25%)', // #672318
                800: 'hsl(9, 63%, 15%)', // #3e150e
                900: 'hsl(8, 62%, 5%)' // #150705
            },
            blue: {
                50: 'hsl(198, 100%, 95%)', // #e5f7ff
                100: 'hsl(200, 100%, 85%)', // #b3e6ff
                200: 'hsl(200, 100%, 75%)', // #80d5ff
                300: 'hsl(200, 100%, 65%)', // #4dc4ff
                400: 'hsl(200, 100%, 55%)', // #1ab3ff
                500: 'hsl(200, 100%, 45%)', // #0099e6
                600: 'hsl(200, 100%, 35%)', // #0077b3
                700: 'hsl(200, 100%, 25%)', // #005580
                800: 'hsl(200, 100%, 15%)', // #00334d
                900: 'hsl(201, 100%, 5%)' // #00111a
            },
            yellow: {
                50: 'hsl(46, 100%, 95%)', // #fff9e5
                100: 'hsl(47, 100%, 85%)', // #ffeeb3
                200: 'hsl(47, 100%, 75%)', // #ffe380
                300: 'hsl(47, 100%, 65%)', // #ffd74d
                400: 'hsl(47, 100%, 55%)', // #ffcc1a
                500: 'hsl(47, 100%, 45%)', // #e6b300
                600: 'hsl(47, 100%, 35%)', // #b38b00
                700: 'hsl(46, 100%, 25%)', // #806300
                800: 'hsl(46, 100%, 15%)', // #4d3b00
                900: 'hsl(46, 100%, 5%)' // #1a1400
            },
            white: '#ffffff',
            black: '#000000'
        },
        fontFamily: {
            inter: ['Inter', ...defaultTheme.fontFamily.sans],
            montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans]
        },
        extend: {
            fontSize: {
                xxs: '0.625rem'
            },
            strokeWidth: {
                4: 4
            },
            screens: {
                '3xl': '1700px'
            }
        }
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
