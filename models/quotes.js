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
//   async function breed() {
//     response.forEach(item => 
        
        
//         breeds.push(item.breed));
//     console.log(breeds)
//   }
//     breed();

async function discountedPriceNoOfBreeds(breed) {

    response.filter(item => {
        return item === "Pitbull" || "Pug" || "York";
    })

    if(breed === response.breed ){
        console.log(petsPriceQuote.forEach(item => item * 0.9))
    }
}
discountedPriceNoOfBreeds();
  // is more than 3 address

  // 2 or more multi pet discount

  // sum it up to get price
  console.log(petsPriceQuote);
  return petsPriceQuote;

  // validation
}
