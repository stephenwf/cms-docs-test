const MetalsmithPlugin = require('@fesk/plugin-metalsmith');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  type: 'web-app',
  webpack: {
    publicPath: '/assets/',
    extra: {
      plugins: [
        new MetalsmithPlugin({ config: 'documentation' }),
        new ManifestPlugin({
          filter: ({ path }) => path.endsWith('.map') === false,
        }),
      ],
    },
  },
};
