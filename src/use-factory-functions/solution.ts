import { assertType } from "type-plus";

type Email = `${string}@${string}`;

type User = {
  id: string;
  email: Email;
  name: string;
  age: number;
};

type UserOptions = Partial<
  Pick<User, "id" | "name" | "age"> & { email: string }
>;

const createEmail = (email: string): Email => {
  if (!email || !email.includes("@")) throw new Error("invalid email");

  return email as Email;
};

const createUser = (options: UserOptions): User => {
  if (!options.id || typeof options.id != "string")
    throw new Error("id is required");
  if (typeof options.name != "string") throw new Error("name is required");
  if (typeof options.age != "number") throw new Error("age is required");

  if (typeof options.email != "string" || !options.email.includes("@"))
    throw new Error("email is invalid");

  const user: User = {
    id: options.id,
    name: options.name,
    age: options.age,
    email: createEmail(options.email),
  };

  return user;
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
