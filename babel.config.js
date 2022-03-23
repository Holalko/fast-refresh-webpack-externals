module.exports =  {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        useBuiltIns: false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
      '@babel/plugin-transform-runtime',
    ['babel-plugin-styled-components', { ssr: true }],
    '@loadable/babel-plugin',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-transform-object-assign',

        ['@babel/plugin-proposal-class-properties', { loose: false }],
        '@babel/plugin-proposal-json-strings',
        [
            'transform-imports',
            {
                '@notino/react-styleguide': {
                    transform: (importName) =>
                        `@notino/react-styleguide/dist/es/${importName}`,
                    preventFullImport: true,
                    skipDefaultConversion: true,
                },
            },
        ],
    ]

};