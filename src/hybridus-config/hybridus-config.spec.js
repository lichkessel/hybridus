const { validate } = require('./index');
const isInvalid = data => {
  let result = validate(data, true);
  return result ? result.map(x=>x.message) : null;
}

describe("root properties", ()=>{
  it("must not pass an empty object", async ()=>{
    expect(isInvalid({ })).not.toEqual(null);
  })
  it("parses schema", async ()=> {
    expect(isInvalid({ appId:"xxx", productName: "xxx", companyName:"xxx", desktop:{} })).toEqual(null);
  })
})