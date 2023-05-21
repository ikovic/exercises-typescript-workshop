import { assertType } from "type-plus";

type Price = {
  amount: number;
  currency: "usd" | "eur";
};

type ProductNames = "bag" | "shirt";

// we need to define a type that represents an object where keys are product names and the values belong to the type Price
type Products = null;

const validProducts = {
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
