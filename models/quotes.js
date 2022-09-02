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

  // is more than 3 address
  for ( let count = 0; count < response.length; count++) {

if (response[count].address.includes ("London") || response[count].address.includes ("Birmingham") || response[count].address.includes ("Liverpool")) {

  petsPriceQuote[0] = petsPriceQuote[0] * 1.15; 

  };

//london, birmingham, liverpool - 15% higher

  // 2 or more multi pet discount

  // sum it up to get price
  console.log(petsPriceQuote);
  return petsPriceQuote;

  // validation
}
