import { handleSubmit } from "../src/client/js/formHandler"
   
describe("Testing the submit functionality", () => {
  
    test("Testing the handleSubmit() function", () => {
           var inputUrl ;
          var expectedValue
          expect(handleSubmit(inputUrl).toEqual(expectedValue))   
           expect(handleSubmit).toBeDefined();
})});