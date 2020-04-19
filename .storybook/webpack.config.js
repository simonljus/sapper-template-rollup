const sass = require('node-sass');
const path = require('path');
const styleRules =[
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        'style-loader','css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [
                'src/theme',
                'node_modules'
              ]
            }
          }
        }
      ]
    }
  ]
const preprocessStyle=async ({ content, attributes }) => {
    if (attributes.type !== 'text/scss') {
        return;
    }

    const result = await sass.renderSync({
        data: content,
        sourceMap: 'style.css.map',
        omitSourceMapUrl: true,
    });

    return {
        code: result.css.toString('utf8'),
        map: result.map.toString('utf8'),
    };
}
module.exports = async ({ config, mode }) => {
    let j;
    // Find svelteloader from the webpack config
    const svelteloader = config.module.rules.find((r, i) => {
        if (r.loader && r.loader.includes('svelte-loader')) {
            j = i;
            return true;
        }
    });

    // safely inject preprocess into the config
    config.module.rules[j] = {
        ...svelteloader,
        options: {
            ...svelteloader.options,
            preprocess:{
                ...svelteloader.options.preprocess,
                style: preprocessStyle
            }
            
        }
    }
    config.module.rules.push(...styleRules)

    // return the overridden config
    return config;
}