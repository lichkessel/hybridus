module.exports = {
  $id: "hybridus/desktop.json",
  $ref : "platform.json",
  type: "object",
  properties: {
    windows : { type: "object" },
    macos : { type: "object" }
  },
  required: ["windows"]
}