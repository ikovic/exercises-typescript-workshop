import { isType } from "type-plus";

/* 
    Record<Keys, Type>

    Constructs an object type whose property keys are Keys and whose property values are Type.
    This utility can be used to map the properties of a type to another type.
*/
type OurRecord<Key extends string | symbol | number, Value> = {
  [k in Key]: Value;
};

type Key = string;
type Value = string;
isType.equal<true, Record<Key, Value>, OurRecord<Key, Value>>();

/* 
    Pick<Type, Keys>

    Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
*/
type OurPick<Type, Keys extends keyof Type> = {
  [Key in Keys]: Type[Key];
};

type Car = {
  manufacturer: string;
  model: string;
  year: number;
};
type ModelYear = "model" | "year";
isType.equal<true, Pick<Car, ModelYear>, OurPick<Car, ModelYear>>();

/* 
    Partial<Type>

    Constructs a type with all properties of Type set to optional. 
    This utility will return a type that represents all subsets of a given type.
 */
type OurPartial<T> = {
  [Key in keyof T]?: T[Key];
};

isType.equal<true, Partial<Car>, OurPartial<Car>>();

/* 
    Extract<Type, Union>

    Constructs a type by extracting from Type all union members that are assignable to Union.
*/
type OurExtract<Type, Union> = Type extends Union ? Type : never;
type Union = "a" | "b" | "c";
type Keys = "a" | "b" | "f";
isType.equal<true, Extract<Union, Keys>, OurExtract<Union, Keys>>();
