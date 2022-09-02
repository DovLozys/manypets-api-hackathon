export async function getAllQuotes(body) {
  const response = await body;

  let petsPriceQuote = [];

  // base price £120

  // age of pet to apply 5% or 10%
  async function getAllQuotes() {
    function agePrice(num) {
      const age = num.age;

      // up to 5yrs, 5%
      if (age <= 5) {
        petsPriceQuote.push(120 * (0.05 * age + 1));
      } else if (5 < age <= 10) {
        // up to 10yrs, 10%
        petsPriceQuote.push(120 * (0.1 * (age - 5) + 1 + 0.25));
      }
    }

    response.forEach(agePrice);
  }

  getAllQuotes();

  // No of breeds
  let discountedBreeds = ["Pitbull", "Pug", "York"];
  let clientDiscountedBreeds = [];

  function checkDiscountedBreed() {
    for (let count = 0; count < response.length; count++) {
      if (response[count].breed === "Pitbull") {
        clientDiscountedBreeds.push("Pitbull");
        petsPriceQuote[count] = petsPriceQuote[count] * 0.9;
      } else if (response[count].breed === "Pug") {
        clientDiscountedBreeds.push("Pug");
        petsPriceQuote[count] = petsPriceQuote[count] * 0.9;
      } else if (response[count].breed === "York") {
        clientDiscountedBreeds.push("York");
        petsPriceQuote[count] = petsPriceQuote[count] * 0.9;
      }
    }
  }
  checkDiscountedBreed();

  // is more than 3 address

  // 2 or more multi pet discount

  // sum it up to get price
  console.log(clientDiscountedBreeds);
  console.log(petsPriceQuote);
  return petsPriceQuote;

  // validation
}
