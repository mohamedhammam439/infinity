module.exports = function(api) {
  api.cache(true);
  return {
    'presets': ['babel-preset-expo'],
    'plugins': [
      "react-native-classname-to-style",
      [
        "react-native-platform-specific-extensions",
        { extensions: ["scss", "sass"] }
      ],
      '@babel/transform-runtime',
      '@babel/plugin-transform-spread',
      '@babel/plugin-transform-flow-strip-types',
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      '@babel/plugin-syntax-dynamic-import',
      [
        '@babel/plugin-proposal-decorators',
        {
          'legacy': true,
        },
      ],
      [
        'transform-imports',
        {
          'lodash': {
            'transform': 'lodash/${member}',
            'preventFullImport': false,
          },
          'moment': {
            'transform': 'moment/${member}',
            'preventFullImport': false,
          },
        },
      ],
      [
        'module-resolver',
        {
          'root': [
            './src',
          ],
        },
      ],
      '@babel/transform-modules-commonjs',
    ],
  };
};
