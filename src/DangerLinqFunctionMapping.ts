import { DangerLinqFunction } from "./DangerLinqFunction";
import { DontCallThisError } from "./Errors/DontCallThisError";
import { Grouping } from "./Types/Grouping";

export const DangerLinqFunctionMapping = {
  [DangerLinqFunction.Aggregate]: <T, U>(xs: Array<T>, seed: U, reducer: ((memo: U, val: T) => U)): U => {
    throw new DontCallThisError();
  },
  [DangerLinqFunction.Aggregate2]: <T, U, V>(xs: Array<T>, seed: U, reducer: (memo: U, val: T) => U, resultSelector: ((val: U) => V)): V => {
    throw new DontCallThisError();
  },
  [DangerLinqFunction.Aggregate1]: <T>(xs: Array<T>, reducer: (memo: T, val: T) => T): T => {
    throw new DontCallThisError();
  },
  [DangerLinqFunction.GroupBy]: <T, U>(xs: Array<T>, keySelector: (x: T) => U): Array<Grouping<U, T>> => {
    throw new DontCallThisError();
  },
  [DangerLinqFunction.Map]: <T, U>(arr: Array<T>, xform: (x: T) => U): Array<U> => {
    throw new DontCallThisError();
  },
  [DangerLinqFunction.SleepSort]: <T>(arr: Array<T>, ord: (x: T) => number): Promise<Array<T>> => {
    throw new DontCallThisError();
  },
};
