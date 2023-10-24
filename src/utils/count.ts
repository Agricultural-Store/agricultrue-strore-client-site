export const calcPriceDiscount = (original?: number, discountPercent?: number) => {
  if (original && discountPercent) return (original * discountPercent) / 100;
  return 0;
};

export const calcPrice = (original?: number, discountPercent?: number) => {
  const priceDiscount = calcPriceDiscount(original, discountPercent);
  if (original) return original - priceDiscount;
  return 0;
};
