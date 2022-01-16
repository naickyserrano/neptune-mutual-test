/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins')
const withAntdLess = require('next-plugin-antd-less')

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  webpack(config) {
    return config
  },
}

const pluginAntdLess = withAntdLess({
  // plugin for antd to support less files in order to customize
  lessVarsFilePath: './styles/variables.less',
})

module.exports = withPlugins([[pluginAntdLess]], nextConfig)
