export { checkForWebsite }

function checkForWebsite(inputText) {
    console.log("::: Running checkForWebsite :::", inputText);
    // I searched about the Regex Expressions and I learned it from google and stack overflow 
    // https://regexr.com/37i6s and this source made me understand easliy
     let shape = new RegExp (/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/);
    let urlSubmitted = shape
   let condition =  urlSubmitted.test(inputText);
   if (condition === true)   {
   return urlSubmitted.test(inputText)
    }
else { 
    alert("Enter a Valid URL")
}
}