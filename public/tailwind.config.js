/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['*.{html,js}'],
    theme: {
        container: {
            padding: {
                DEFAULT: '15px',
            },
        },
        screens: {
            sm: '450px',
            md: '768px',
            lg: '960px',
            xl: '1120px',
        },
        fontFamily: {
            primary: 'Inter',
        },
        backgroundImage: {
            hero: 'url(/assets/section-hero/hero.png)',
            grid: 'url(/assets/grid.png)',
            gridDark: 'url(/assets/component/grid-dark.png)',
            chartHero: 'url(/assets/section-hero/chart-hero.png)',
            charHeroSmall: 'url(/assets/section-hero/chart-hero-small.png)',
            whyus: 'url(/assets/section-whyus/whyus.png)',
            whyUsGrid: 'url(/assets/section-whyus/grid.png)',
            clientTele: 'url(/assets/section-clientele/clientele.png)',
            chartClientTele: 'url(/assets/section-clientele/chart.png)',
            chartClientTeleSmall:
                'url(/assets/section-clientele/chart-small.png)',
            whoweare: 'url(/assets/section-whoweare/whoweare.png)',
            value: 'url(/assets/section-value/value.png)',
            footerGrid: 'url(/assets/footer/grid.png)',
            backgroundFooter: 'url(/assets/footer/bgfooter.png)',
            backgroundFooter2: 'url(/assets/footer/bgfooter2.png)',
            backgroundHero: 'url(/assets/section-hero/bg-hero.png)',
            backgroundArticle: 'url(/assets/section-articleevent/backgroundArticle.png)'
        },

        extend: {
            colors: {
                primary: {
                    DEFAULT: '#011C28',
                },
                navLink: {
                    DEFAULT: '#011C28',
                    text: '#FFFFFF',
                    hover: '#E96C12',
                },
                hero: {
                    title: '#F5F7F7',
                    subTitle: '#FFFFFF',
                },
            },
        },
    },
    plugins: [],
}
