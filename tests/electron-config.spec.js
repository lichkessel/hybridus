const {generate} = require('../electron-config');

describe("electron config generator", ()=>{
  it("must generate a config", async ()=>{
    console.log(await generate());
  })
})