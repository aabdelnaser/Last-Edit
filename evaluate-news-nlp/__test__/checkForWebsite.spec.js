import { checkForWebsite } from "../src/client/js/checkForWebsite"
   
describe("Testing the submit functionality", () => {
  
    test("Testing the checkForWebsite() function", () => {
           var inputUrl;
           var checkedUrl;
           expect(checkForWebsite(inputUrl).toEqual(checkedUrl))
           expect(checkForWebsite).toBeDefined();
})});