const path = require('path')

export default {
  menu: [
    'Home',
    {
      name: 'Home'
    },
    {
      name: 'Content',
      menu: [
        'Actionable language',
        'Design values',
        'Error messaging',
        'Grammar',
        'Internationalization',
        'Naming',
        'Voice & tone',
        'Writing content'
      ]
    },
    {
      name: 'Style',
      menu: [
        'Branding',
        'Color',
        'Icons',
        'Spacing',
        'Illustration',
        'Typography'
      ]
    },
    {
      name: 'Components',
      menu: ['Buttons', 'Toggle']
    },
    {
      name: 'Patterns',
      menu: ['Destructive actions']
    },
    {
      name: 'Resources',
      menu: [
        'Branding assets',
        'Creator assets',
        'Illustrations',
        'Press materials'
      ]
    }
  ],
  title: 'Brave Design Language',
  wrapper: 'src/wrapper',
  themeConfig: {
    showPlaygroundEditor: false,
    mode: 'light'
  },
  onCreateWebpackChain: (config, isDev, argv) =>
    config.resolve.alias
      .set(
        'styled-components',
        path.resolve(__dirname, 'node_modules', 'styled-components')
      )
      .set('utilities', path.resolve(__dirname, 'src', 'utilities'))
}
