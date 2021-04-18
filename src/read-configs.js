const { resolve, extname, basename, sep } = require('path');
const { readFileSync } = require('fs');
const { readdir } = require('fs').promises;

async function getFiles(dir,ext) {
  const direntities = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(direntities.map((direntity) => {
    const res = resolve(dir, direntity.name);
    return direntity.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files).filter(path=>{
    return ext ? extname(path).toLowerCase() === ext : true
  });
}
const readConfigs = async (rootDir, ext) => {
  const filePaths = await getFiles(rootDir,ext);
  return filePaths.map(path=>{
    let level = path.split(sep).length;
    if(basename(path, ext) === 'root') {
      level--;
    }
    return { path, level: level }
  })
    .sort((a,b)=>(a.level - b.level))
    .map(cfg => ({
      path: cfg.path.substr(rootDir.length+1).replace(/.[^.]+$/g,'').split(sep),
      code: readFileSync(cfg.path, "utf8" )
    }))
}

module.exports = readConfigs;