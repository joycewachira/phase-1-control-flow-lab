function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";

   }


   switch (feet) {
    case 2001:
      return 'I will gladly take your thirty bucks.'
       
    case 2501:

       return 'No can do.';
       default:
      break; 

  // Write your code here!
}
}

function ternaryCheckCity(city) {

let visit = city === "NYC" ? "Ok, sounds good.": "No go." ;
return visit;




  // if (city === "NYC") {
  //   return "Ok, sounds good.";
  // } else if (city != "NYC") {
  //   return "No go.";
  // }
  // Write your code here!
}

function switchOnCharmFromTip(tip) {
  // Write your code

switch (tip) {
  case "generous":
    return "Thank you so much.";
    
  case "not as generous":
    return "Thank you.";

  default:
    return "Bye.";

}

}