import { assertType } from "type-plus";

type Price = {
  amount: number;
  currency: "usd" | "eur";
};

type ProductNames = "bag" | "shirt";

// #2 Use a Record type
type Products = Record<ProductNames, Price>;

const validProducts: Products = {
  bag: {
    amount: 100,
    currency: "usd",
  },
  shirt: {
    amount: 20,
    currency: "eur",
  },
};

const invalidProducts = {
  bag: {
    amount: "100",
    currency: "usd",
  },
  shirt: {
    amount: 20,
    currency: "hrk",
  },
};

const incorrectProductName = {
  car: {
    amount: 20000,
    currency: "eur",
  },
};

assertType<Products>(validProducts);
// @ts-expect-error
assertType<Products>(invalidProducts);
// @ts-expect-error
assertType<Products>(incorrectProductName);
