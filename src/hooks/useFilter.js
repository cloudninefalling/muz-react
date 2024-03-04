export default function useFilter(products, filter) {
  let res = products;

  for (const key in filter) {
    if (filter[key].length === 0) continue;

    res = products.filter((product) => {
      return filter[key].includes(product[key]);
    });
  }

  return res;
}
