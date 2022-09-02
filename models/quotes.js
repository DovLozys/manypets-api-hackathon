export function getAllQuotes(body) {
  const response = body;

  let petsPriceQuote = [];

  // base price £120

  // age of pet to apply 5% or 10%
  for (let count = 0; count < response.length; count++) {
    const age = response[count].age;
    switch (age) {
      case 1:
        petsPriceQuote.push(126);
        break;
      case 2:
        petsPriceQuote.push(132);
        break;

      case 3:
        petsPriceQuote.push(138);
        break;

      case 4:
        petsPriceQuote.push(144);
        break;

      case 5:
        petsPriceQuote.push(150);
        break;

      case 6:
        petsPriceQuote.push(162);
        break;

      case 7:
        petsPriceQuote.push(174);
        break;

      case 8:
        petsPriceQuote.push(186);
        break;

      case 9:
        petsPriceQuote.push(198);
        break;
      case 10:
        petsPriceQuote.push(210);
        break;
    }
  }

  // No of breeds

  // Apply a 15% higher price to 3 address areas
  // london, birmingham, liverpool will have a higher price

  for (let count = 0; count < response.length; count++) {
    if (
    response[count].address.includes ("London") ||
    response[count].address.includes ("Birmingham") ||
    response[count].address.includes ("Liverpool")) {
      for (let i = 0; i < petsPriceQuote.length; i++) {
        petsPriceQuote[i] = petsPriceQuote[i] * 1.15;
      }
      break;
    }
  }

  // Apply the multi-pet discount at 10% for each pet when 2 or more pets are included

  if(response.length > 2) {
    for (let i = 0; i < petsPriceQuote.length; i++) {
      petsPriceQuote[i] *= 0.9;
    }
  }


  // sum it up to get price

  console.log(petsPriceQuote);

  return petsPriceQuote;

  // validation
}
