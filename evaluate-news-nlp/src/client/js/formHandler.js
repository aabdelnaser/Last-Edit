import {checkForWebsite} from "./checkForWebsite"
export { handleSubmit }
async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('website').value
  //  Client.checkForWebsite(formText)
   // console.log("::: URL Submitted :::")
    if(checkForWebsite(formText))
    {
        try {
        let submit = document.getElementById("submit-button")  
      const serverCall = await fetch('http://localhost:8081/evaluate/',
          {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({submittedUrl : formText}),
            })
           
            const serverResponse = await serverCall.json();
    
      
            
        document.getElementById('agreement').innerHTML = serverResponse.agreement.toLowerCase();

    }
catch (error)
{console.log("error")}
    

    }
}
