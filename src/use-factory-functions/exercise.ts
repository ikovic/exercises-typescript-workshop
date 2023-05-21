import { assertType } from "type-plus";

type Email = `${string}@${string}`;

type User = {
  id: string;
  email: Email;
  name: string;
  age?: number;
};

type UserOptions = {
  // has all fields optional and the email has no shape constraints
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
