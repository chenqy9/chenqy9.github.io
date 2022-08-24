module.exports = {
  apps : [{
    name: 'blog',
    script: 'hexo-server.js',
    watch: ["*.yml", "source"],
    // ignore_watch: ["[\/\\]\./", "node_modules"],
  },],
};
