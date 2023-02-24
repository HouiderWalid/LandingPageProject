module.exports = {
  apps : [{
    name: 'maxcom-sale-page-test',
    exec_mode: 'cluster',
    instances: 'max',
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start'
  },]
};
