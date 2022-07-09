export default () => [
    {
        text: 'Guide',
        link: '/guide/what-is-vitepress',
        activeMatch: '/guide/'
    },
    {
        text: 'Configs',
        link: '/config/introduction',
        activeMatch: '/config/'
    },
    {
        text: 'Dropdown Menu',
        items: [
            {
                text: 'Changelog',
                link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
            },
            {
                text: 'Contributing',
                link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
            },
        ],
    },
];