function getShippingCost(country) {
  let price = 0;
  switch (country) {
    case "China":
      price = 100;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Chile":
      price = 250;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Australia":
      price = 170;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Jamaica":
      price = 120;
      return `Shipping to ${country} will cost ${price} credits`;
      break;

    default:
      return "Sorry, there is no delivery to your country";
      break;
  }
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
