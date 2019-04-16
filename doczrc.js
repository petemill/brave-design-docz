const path = require('path')

export default {
  menu: ['Foundations', 'Components', 'Patterns'],
  title: 'Brave Design Language',
  wrapper: 'src/wrapper',
  themeConfig: {
    showPlaygroundEditor: false
  },
  onCreateWebpackChain: (config, isDev, argv) => config.resolve.alias
    .set('styled-components', path.resolve(__dirname, 'node_modules', 'styled-components'))
    .set('utilities', path.resolve(__dirname, 'src', 'utilities'))
  
}