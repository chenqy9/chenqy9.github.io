module.exports = {
  apps : [{
    name: 'blog',
    script: 'hexo-server.js',
    watch: ["*.yml"],
    ignore_watch: ["[\/\\]\./", "node_modules"],
  },],
};
