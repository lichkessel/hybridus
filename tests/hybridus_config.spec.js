const validate = require('../src/hybridus_config');
const isInvalid = data => {
  let result = validate(data, true);
  return result ? result.map(x=>x.message) : null;
}

describe("root properties", ()=>{
  it("must not pass an empty object", async ()=>{
    expect(isInvalid({ })).toEqual(["must have required property 'appId'"]);
  })
  it("parses schema", async ()=> {
    expect(isInvalid({ appId:"xxx", productName: "xxx", companyName:"xxx" })).toEqual(null);
  })
})