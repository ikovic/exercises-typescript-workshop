import { assertType } from "type-plus";

type User = {};

type UserOptions = {
  id: string;
  email: string;
  name: string;
  age: number;
};

const createUser = (options: UserOptions): User => {
  return options;
};

const validUserOptions = {
  id: "1",
  email: "email@mail.com",
  name: "name",
  age: 1,
};

const invalidUserOptions = {
  id: 1,
  email: "not an email",
};

assertType<User>(createUser(validUserOptions));
// @ts-expect-error
assertType<User>(createUser(invalidUserOptions));
