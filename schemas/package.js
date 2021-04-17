module.exports = {
  $id: "hybridus/package.json",
  $ref : "platform.json",
  type: "object",
  properties: {
    desktop: { $ref: "desktop.json" }
  },
  required: ["appId", "productName", "companyName", "desktop"]
}