module.exports = {
  apps : [{
    name: 'blog',
    script: 'hexo-server.js',
    watch: ["hexo-server.js", "*.yml", "source"],
    // ignore_watch: ["[\/\\]\./", "node_modules"],
  },],
};
