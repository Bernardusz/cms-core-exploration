import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,vue,svelte}',
        './public/index.html',
        // Django templates (adjust paths if needed)
        '../**/templates/**/*.html',
        '../../**/templates/**/*.html',
    ],
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Helvetica', 'Arial'],
            },
            spacing: {
                '9/16': '56.25%', // useful for responsive iframes
            },
        },
    },
    plugins: [],
};

export default config;