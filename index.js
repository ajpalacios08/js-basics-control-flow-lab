function scuberGreetingForFeet(numberFeet){
  if (numberFeet <= 400){
    return 'This one is on me!';
  }else if (numberFeet > 2000, numberFeet < 2500) {
    return 'I will gladly take your thirty bucks.';
  }else if (numberFeet > 2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(cityTrip){
  const eitherWay = cityTrip === 'NYC' ? "Ok, sounds good." : "No go.";
  return eitherWay;
}

function switchOnCharmFromTip(tip){
  let responseToTip;
  switch (tip) {
    case tip === 'generous':
      responseToTip = "Thank you so much.";
      break;

    case tip === 'not as generous':
      responseToTip = "Thank you.";
      break;

    case tip === '':
      responseToTip = "Bye.";
      break;
  }
  return responseToTip;
}