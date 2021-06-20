module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            center: true
        },
        extend: {
            colors: {
                primary: '#112700',
                secondary: '#A9935A'
            },
            textColor: {
                primary: '#112700',
                secondary: '#A9935A'
            },
            backgroundColor: theme => ({
                ...theme('colors'),
                primary: '#112700',
                secondary: '#A9935A',
                cream: '#FCFBF9'
            }),
            inset: {
                '1/20': '5%',
                '1/10': '10%',
                '1/5': '20%',
                '3/10': '30%',
                '3/8': '38%',
                '9/10': '90%'
            },
            grayscale: {
                85: '85%',
            }
        }
    },
    variants: {
        extend: {
            grayscale: ['hover']
        }
    },
    plugins: [],
}
