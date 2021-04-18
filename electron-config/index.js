const readConfigs = require('../src/read-configs');
const mergeConfigs = require('../src/merge-config-json');
const { resolve } = require('path');

const configRoot = "./templates";

const generate = async () => {
  const context = {
    ENV : { ...process.env },
    HY: {
      appId: "xxx",
      productName: "yyy",
      companyName: "zzz",
      desktop: {
        secureSources: true,
        windows: {
          installer : {
            nsis : true,
            squirrel: true
          }
        },
        macos: {}
      }
    }
  }
  return mergeConfigs(context, await readConfigs(resolve(__dirname, configRoot), ".json"));
}

module.exports = {generate};