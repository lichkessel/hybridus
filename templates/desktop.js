{
  "build": {
    "appId": "${HY.appId}",
    "productName": "${HY.productName}",
    "win": {
      "sign": "node_modules/hybridus/tools/windows_sign.js"
    },
    "mac": {
      "requirements": "assets/requirements.rqset",
      "hardenedRuntime": true,
      "gatekeeperAssess": false,
      "entitlements": "assets/entitlements.plist",
      "entitlementsInherit": "assets/entitlements.plist"
    },
    "dmg": {
      "sign": false
    },
    "afterSign": "node_modules/hybridus/tools/macos_notarize.js",
    "directories": {
      "app": ".dist",
      "output": ".publish"
    }
  }
}