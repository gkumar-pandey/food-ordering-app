const sortByPrice = (data: any, sortBy: any) => {
  if (sortBy === "PRICE_LOW_TO_HIGH") {
    return data.sort((a: any, b: any) => a.price - b.price);
  }

  if (sortBy === "PRICE_HIGH_TO_LOW") {
    return data.sort((a: any, b: any) => b.price - a.price);
  }

  return data;
};

export default sortByPrice;
