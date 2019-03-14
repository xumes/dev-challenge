module.exports = function(api) {
  api.cache(false);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ],
      '@babel/preset-react'
    ],
    plugins: [
      '@babel/plugin-syntax-import-meta',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-export-default-from'
    ]
  };
};
