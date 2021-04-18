module.exports = {
  $id: "hybridus/package.json",
  $ref : "platform.json",
  type: "object",
  properties: {
    desktop: { $ref: "desktop.js" }
  },
  required: ["appId", "productName", "companyName", "desktop"]
}