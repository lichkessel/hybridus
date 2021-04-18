const deepmerge = require('deepmerge');

const checkPath = (context, path)=>{
  let currentContext = context;
  for(let step of path) {
    if(step === 'root') {
      return true;
    } else
    if(currentContext[step] === undefined) {
      return false;
    } else {
      currentContext = currentContext[step];
    }
  }
  return currentContext;
}

const mergeConfig = (context, configs) => {
  const { HY, ENV } = context;
  let output = {};
  for(let config of configs) {
    try {
      if(checkPath(HY, config.path)) {
        let substCode = eval("`" + config.code + "`");
        let substObj = JSON.parse(substCode);
        output = deepmerge(output, substObj);
      }
    } catch(error) {
      console.error(error);
    }
  }
  return output;
}

module.exports = mergeConfig;