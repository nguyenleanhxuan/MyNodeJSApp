
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model food
 * 
 */
export type food = $Result.DefaultSelection<Prisma.$foodPayload>
/**
 * Model food_type
 * 
 */
export type food_type = $Result.DefaultSelection<Prisma.$food_typePayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model restaurant
 * 
 */
export type restaurant = $Result.DefaultSelection<Prisma.$restaurantPayload>
/**
 * Model sub_food
 * 
 */
export type sub_food = $Result.DefaultSelection<Prisma.$sub_foodPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Foods
 * const foods = await prisma.food.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Foods
   * const foods = await prisma.food.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.food`: Exposes CRUD operations for the **food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.foodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food_type`: Exposes CRUD operations for the **food_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Food_types
    * const food_types = await prisma.food_type.findMany()
    * ```
    */
  get food_type(): Prisma.food_typeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.restaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sub_food`: Exposes CRUD operations for the **sub_food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sub_foods
    * const sub_foods = await prisma.sub_food.findMany()
    * ```
    */
  get sub_food(): Prisma.sub_foodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    food: 'food',
    food_type: 'food_type',
    orders: 'orders',
    restaurant: 'restaurant',
    sub_food: 'sub_food',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "food" | "food_type" | "orders" | "restaurant" | "sub_food" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      food: {
        payload: Prisma.$foodPayload<ExtArgs>
        fields: Prisma.foodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.foodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.foodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          findFirst: {
            args: Prisma.foodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.foodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          findMany: {
            args: Prisma.foodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>[]
          }
          create: {
            args: Prisma.foodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          createMany: {
            args: Prisma.foodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.foodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          update: {
            args: Prisma.foodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          deleteMany: {
            args: Prisma.foodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.foodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.foodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$foodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.foodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.foodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      food_type: {
        payload: Prisma.$food_typePayload<ExtArgs>
        fields: Prisma.food_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.food_typeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.food_typeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          findFirst: {
            args: Prisma.food_typeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.food_typeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          findMany: {
            args: Prisma.food_typeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>[]
          }
          create: {
            args: Prisma.food_typeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          createMany: {
            args: Prisma.food_typeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.food_typeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          update: {
            args: Prisma.food_typeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          deleteMany: {
            args: Prisma.food_typeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.food_typeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.food_typeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$food_typePayload>
          }
          aggregate: {
            args: Prisma.Food_typeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood_type>
          }
          groupBy: {
            args: Prisma.food_typeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Food_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.food_typeCountArgs<ExtArgs>
            result: $Utils.Optional<Food_typeCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      restaurant: {
        payload: Prisma.$restaurantPayload<ExtArgs>
        fields: Prisma.restaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.restaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.restaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          findFirst: {
            args: Prisma.restaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.restaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          findMany: {
            args: Prisma.restaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>[]
          }
          create: {
            args: Prisma.restaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          createMany: {
            args: Prisma.restaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.restaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          update: {
            args: Prisma.restaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          deleteMany: {
            args: Prisma.restaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.restaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.restaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$restaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.restaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.restaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      sub_food: {
        payload: Prisma.$sub_foodPayload<ExtArgs>
        fields: Prisma.sub_foodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sub_foodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sub_foodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>
          }
          findFirst: {
            args: Prisma.sub_foodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sub_foodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>
          }
          findMany: {
            args: Prisma.sub_foodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>[]
          }
          create: {
            args: Prisma.sub_foodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>
          }
          createMany: {
            args: Prisma.sub_foodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sub_foodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>
          }
          update: {
            args: Prisma.sub_foodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>
          }
          deleteMany: {
            args: Prisma.sub_foodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sub_foodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sub_foodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sub_foodPayload>
          }
          aggregate: {
            args: Prisma.Sub_foodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSub_food>
          }
          groupBy: {
            args: Prisma.sub_foodGroupByArgs<ExtArgs>
            result: $Utils.Optional<Sub_foodGroupByOutputType>[]
          }
          count: {
            args: Prisma.sub_foodCountArgs<ExtArgs>
            result: $Utils.Optional<Sub_foodCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    food?: foodOmit
    food_type?: food_typeOmit
    orders?: ordersOmit
    restaurant?: restaurantOmit
    sub_food?: sub_foodOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    orders: number
    sub_food: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | FoodCountOutputTypeCountOrdersArgs
    sub_food?: boolean | FoodCountOutputTypeCountSub_foodArgs
  }

  // Custom InputTypes
  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountSub_foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sub_foodWhereInput
  }


  /**
   * Count Type Food_typeCountOutputType
   */

  export type Food_typeCountOutputType = {
    food: number
  }

  export type Food_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | Food_typeCountOutputTypeCountFoodArgs
  }

  // Custom InputTypes
  /**
   * Food_typeCountOutputType without action
   */
  export type Food_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food_typeCountOutputType
     */
    select?: Food_typeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Food_typeCountOutputType without action
   */
  export type Food_typeCountOutputTypeCountFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: foodWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    food_id: number | null
    price: number | null
    type_id: number | null
  }

  export type FoodSumAggregateOutputType = {
    food_id: number | null
    price: number | null
    type_id: number | null
  }

  export type FoodMinAggregateOutputType = {
    food_id: number | null
    food_name: string | null
    image: string | null
    price: number | null
    description: string | null
    is_deleted: boolean | null
    type_id: number | null
  }

  export type FoodMaxAggregateOutputType = {
    food_id: number | null
    food_name: string | null
    image: string | null
    price: number | null
    description: string | null
    is_deleted: boolean | null
    type_id: number | null
  }

  export type FoodCountAggregateOutputType = {
    food_id: number
    food_name: number
    image: number
    price: number
    description: number
    is_deleted: number
    type_id: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    food_id?: true
    price?: true
    type_id?: true
  }

  export type FoodSumAggregateInputType = {
    food_id?: true
    price?: true
    type_id?: true
  }

  export type FoodMinAggregateInputType = {
    food_id?: true
    food_name?: true
    image?: true
    price?: true
    description?: true
    is_deleted?: true
    type_id?: true
  }

  export type FoodMaxAggregateInputType = {
    food_id?: true
    food_name?: true
    image?: true
    price?: true
    description?: true
    is_deleted?: true
    type_id?: true
  }

  export type FoodCountAggregateInputType = {
    food_id?: true
    food_name?: true
    image?: true
    price?: true
    description?: true
    is_deleted?: true
    type_id?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food to aggregate.
     */
    where?: foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type foodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: foodWhereInput
    orderBy?: foodOrderByWithAggregationInput | foodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: foodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    food_id: number
    food_name: string | null
    image: string | null
    price: number | null
    description: string | null
    is_deleted: boolean
    type_id: number | null
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends foodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type foodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    food_id?: boolean
    food_name?: boolean
    image?: boolean
    price?: boolean
    description?: boolean
    is_deleted?: boolean
    type_id?: boolean
    food_type?: boolean | food$food_typeArgs<ExtArgs>
    orders?: boolean | food$ordersArgs<ExtArgs>
    sub_food?: boolean | food$sub_foodArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>



  export type foodSelectScalar = {
    food_id?: boolean
    food_name?: boolean
    image?: boolean
    price?: boolean
    description?: boolean
    is_deleted?: boolean
    type_id?: boolean
  }

  export type foodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"food_id" | "food_name" | "image" | "price" | "description" | "is_deleted" | "type_id", ExtArgs["result"]["food"]>
  export type foodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food_type?: boolean | food$food_typeArgs<ExtArgs>
    orders?: boolean | food$ordersArgs<ExtArgs>
    sub_food?: boolean | food$sub_foodArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $foodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "food"
    objects: {
      food_type: Prisma.$food_typePayload<ExtArgs> | null
      orders: Prisma.$ordersPayload<ExtArgs>[]
      sub_food: Prisma.$sub_foodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      food_id: number
      food_name: string | null
      image: string | null
      price: number | null
      description: string | null
      is_deleted: boolean
      type_id: number | null
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type foodGetPayload<S extends boolean | null | undefined | foodDefaultArgs> = $Result.GetResult<Prisma.$foodPayload, S>

  type foodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<foodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface foodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['food'], meta: { name: 'food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {foodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends foodFindUniqueArgs>(args: SelectSubset<T, foodFindUniqueArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {foodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends foodFindUniqueOrThrowArgs>(args: SelectSubset<T, foodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends foodFindFirstArgs>(args?: SelectSubset<T, foodFindFirstArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends foodFindFirstOrThrowArgs>(args?: SelectSubset<T, foodFindFirstOrThrowArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `food_id`
     * const foodWithFood_idOnly = await prisma.food.findMany({ select: { food_id: true } })
     * 
     */
    findMany<T extends foodFindManyArgs>(args?: SelectSubset<T, foodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food.
     * @param {foodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends foodCreateArgs>(args: SelectSubset<T, foodCreateArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {foodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends foodCreateManyArgs>(args?: SelectSubset<T, foodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Food.
     * @param {foodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends foodDeleteArgs>(args: SelectSubset<T, foodDeleteArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food.
     * @param {foodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends foodUpdateArgs>(args: SelectSubset<T, foodUpdateArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {foodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends foodDeleteManyArgs>(args?: SelectSubset<T, foodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends foodUpdateManyArgs>(args: SelectSubset<T, foodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food.
     * @param {foodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends foodUpsertArgs>(args: SelectSubset<T, foodUpsertArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends foodCountArgs>(
      args?: Subset<T, foodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {foodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends foodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: foodGroupByArgs['orderBy'] }
        : { orderBy?: foodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, foodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the food model
   */
  readonly fields: foodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__foodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food_type<T extends food$food_typeArgs<ExtArgs> = {}>(args?: Subset<T, food$food_typeArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends food$ordersArgs<ExtArgs> = {}>(args?: Subset<T, food$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sub_food<T extends food$sub_foodArgs<ExtArgs> = {}>(args?: Subset<T, food$sub_foodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the food model
   */
  interface foodFieldRefs {
    readonly food_id: FieldRef<"food", 'Int'>
    readonly food_name: FieldRef<"food", 'String'>
    readonly image: FieldRef<"food", 'String'>
    readonly price: FieldRef<"food", 'Float'>
    readonly description: FieldRef<"food", 'String'>
    readonly is_deleted: FieldRef<"food", 'Boolean'>
    readonly type_id: FieldRef<"food", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * food findUnique
   */
  export type foodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which food to fetch.
     */
    where: foodWhereUniqueInput
  }

  /**
   * food findUniqueOrThrow
   */
  export type foodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which food to fetch.
     */
    where: foodWhereUniqueInput
  }

  /**
   * food findFirst
   */
  export type foodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which food to fetch.
     */
    where?: foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for foods.
     */
    cursor?: foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * food findFirstOrThrow
   */
  export type foodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which food to fetch.
     */
    where?: foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for foods.
     */
    cursor?: foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * food findMany
   */
  export type foodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter, which foods to fetch.
     */
    where?: foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of foods to fetch.
     */
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing foods.
     */
    cursor?: foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * food create
   */
  export type foodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * The data needed to create a food.
     */
    data?: XOR<foodCreateInput, foodUncheckedCreateInput>
  }

  /**
   * food createMany
   */
  export type foodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many foods.
     */
    data: foodCreateManyInput | foodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * food update
   */
  export type foodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * The data needed to update a food.
     */
    data: XOR<foodUpdateInput, foodUncheckedUpdateInput>
    /**
     * Choose, which food to update.
     */
    where: foodWhereUniqueInput
  }

  /**
   * food updateMany
   */
  export type foodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update foods.
     */
    data: XOR<foodUpdateManyMutationInput, foodUncheckedUpdateManyInput>
    /**
     * Filter which foods to update
     */
    where?: foodWhereInput
    /**
     * Limit how many foods to update.
     */
    limit?: number
  }

  /**
   * food upsert
   */
  export type foodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * The filter to search for the food to update in case it exists.
     */
    where: foodWhereUniqueInput
    /**
     * In case the food found by the `where` argument doesn't exist, create a new food with this data.
     */
    create: XOR<foodCreateInput, foodUncheckedCreateInput>
    /**
     * In case the food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<foodUpdateInput, foodUncheckedUpdateInput>
  }

  /**
   * food delete
   */
  export type foodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    /**
     * Filter which food to delete.
     */
    where: foodWhereUniqueInput
  }

  /**
   * food deleteMany
   */
  export type foodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which foods to delete
     */
    where?: foodWhereInput
    /**
     * Limit how many foods to delete.
     */
    limit?: number
  }

  /**
   * food.food_type
   */
  export type food$food_typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    where?: food_typeWhereInput
  }

  /**
   * food.orders
   */
  export type food$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * food.sub_food
   */
  export type food$sub_foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    where?: sub_foodWhereInput
    orderBy?: sub_foodOrderByWithRelationInput | sub_foodOrderByWithRelationInput[]
    cursor?: sub_foodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Sub_foodScalarFieldEnum | Sub_foodScalarFieldEnum[]
  }

  /**
   * food without action
   */
  export type foodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
  }


  /**
   * Model food_type
   */

  export type AggregateFood_type = {
    _count: Food_typeCountAggregateOutputType | null
    _avg: Food_typeAvgAggregateOutputType | null
    _sum: Food_typeSumAggregateOutputType | null
    _min: Food_typeMinAggregateOutputType | null
    _max: Food_typeMaxAggregateOutputType | null
  }

  export type Food_typeAvgAggregateOutputType = {
    type_id: number | null
  }

  export type Food_typeSumAggregateOutputType = {
    type_id: number | null
  }

  export type Food_typeMinAggregateOutputType = {
    type_id: number | null
    type_name: string | null
  }

  export type Food_typeMaxAggregateOutputType = {
    type_id: number | null
    type_name: string | null
  }

  export type Food_typeCountAggregateOutputType = {
    type_id: number
    type_name: number
    _all: number
  }


  export type Food_typeAvgAggregateInputType = {
    type_id?: true
  }

  export type Food_typeSumAggregateInputType = {
    type_id?: true
  }

  export type Food_typeMinAggregateInputType = {
    type_id?: true
    type_name?: true
  }

  export type Food_typeMaxAggregateInputType = {
    type_id?: true
    type_name?: true
  }

  export type Food_typeCountAggregateInputType = {
    type_id?: true
    type_name?: true
    _all?: true
  }

  export type Food_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food_type to aggregate.
     */
    where?: food_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_types to fetch.
     */
    orderBy?: food_typeOrderByWithRelationInput | food_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: food_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned food_types
    **/
    _count?: true | Food_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Food_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Food_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Food_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Food_typeMaxAggregateInputType
  }

  export type GetFood_typeAggregateType<T extends Food_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateFood_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood_type[P]>
      : GetScalarType<T[P], AggregateFood_type[P]>
  }




  export type food_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: food_typeWhereInput
    orderBy?: food_typeOrderByWithAggregationInput | food_typeOrderByWithAggregationInput[]
    by: Food_typeScalarFieldEnum[] | Food_typeScalarFieldEnum
    having?: food_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Food_typeCountAggregateInputType | true
    _avg?: Food_typeAvgAggregateInputType
    _sum?: Food_typeSumAggregateInputType
    _min?: Food_typeMinAggregateInputType
    _max?: Food_typeMaxAggregateInputType
  }

  export type Food_typeGroupByOutputType = {
    type_id: number
    type_name: string | null
    _count: Food_typeCountAggregateOutputType | null
    _avg: Food_typeAvgAggregateOutputType | null
    _sum: Food_typeSumAggregateOutputType | null
    _min: Food_typeMinAggregateOutputType | null
    _max: Food_typeMaxAggregateOutputType | null
  }

  type GetFood_typeGroupByPayload<T extends food_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Food_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Food_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Food_typeGroupByOutputType[P]>
            : GetScalarType<T[P], Food_typeGroupByOutputType[P]>
        }
      >
    >


  export type food_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type_id?: boolean
    type_name?: boolean
    food?: boolean | food_type$foodArgs<ExtArgs>
    _count?: boolean | Food_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food_type"]>



  export type food_typeSelectScalar = {
    type_id?: boolean
    type_name?: boolean
  }

  export type food_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"type_id" | "type_name", ExtArgs["result"]["food_type"]>
  export type food_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | food_type$foodArgs<ExtArgs>
    _count?: boolean | Food_typeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $food_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "food_type"
    objects: {
      food: Prisma.$foodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      type_id: number
      type_name: string | null
    }, ExtArgs["result"]["food_type"]>
    composites: {}
  }

  type food_typeGetPayload<S extends boolean | null | undefined | food_typeDefaultArgs> = $Result.GetResult<Prisma.$food_typePayload, S>

  type food_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<food_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Food_typeCountAggregateInputType | true
    }

  export interface food_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['food_type'], meta: { name: 'food_type' } }
    /**
     * Find zero or one Food_type that matches the filter.
     * @param {food_typeFindUniqueArgs} args - Arguments to find a Food_type
     * @example
     * // Get one Food_type
     * const food_type = await prisma.food_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends food_typeFindUniqueArgs>(args: SelectSubset<T, food_typeFindUniqueArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {food_typeFindUniqueOrThrowArgs} args - Arguments to find a Food_type
     * @example
     * // Get one Food_type
     * const food_type = await prisma.food_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends food_typeFindUniqueOrThrowArgs>(args: SelectSubset<T, food_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeFindFirstArgs} args - Arguments to find a Food_type
     * @example
     * // Get one Food_type
     * const food_type = await prisma.food_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends food_typeFindFirstArgs>(args?: SelectSubset<T, food_typeFindFirstArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeFindFirstOrThrowArgs} args - Arguments to find a Food_type
     * @example
     * // Get one Food_type
     * const food_type = await prisma.food_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends food_typeFindFirstOrThrowArgs>(args?: SelectSubset<T, food_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Food_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Food_types
     * const food_types = await prisma.food_type.findMany()
     * 
     * // Get first 10 Food_types
     * const food_types = await prisma.food_type.findMany({ take: 10 })
     * 
     * // Only select the `type_id`
     * const food_typeWithType_idOnly = await prisma.food_type.findMany({ select: { type_id: true } })
     * 
     */
    findMany<T extends food_typeFindManyArgs>(args?: SelectSubset<T, food_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food_type.
     * @param {food_typeCreateArgs} args - Arguments to create a Food_type.
     * @example
     * // Create one Food_type
     * const Food_type = await prisma.food_type.create({
     *   data: {
     *     // ... data to create a Food_type
     *   }
     * })
     * 
     */
    create<T extends food_typeCreateArgs>(args: SelectSubset<T, food_typeCreateArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Food_types.
     * @param {food_typeCreateManyArgs} args - Arguments to create many Food_types.
     * @example
     * // Create many Food_types
     * const food_type = await prisma.food_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends food_typeCreateManyArgs>(args?: SelectSubset<T, food_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Food_type.
     * @param {food_typeDeleteArgs} args - Arguments to delete one Food_type.
     * @example
     * // Delete one Food_type
     * const Food_type = await prisma.food_type.delete({
     *   where: {
     *     // ... filter to delete one Food_type
     *   }
     * })
     * 
     */
    delete<T extends food_typeDeleteArgs>(args: SelectSubset<T, food_typeDeleteArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food_type.
     * @param {food_typeUpdateArgs} args - Arguments to update one Food_type.
     * @example
     * // Update one Food_type
     * const food_type = await prisma.food_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends food_typeUpdateArgs>(args: SelectSubset<T, food_typeUpdateArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Food_types.
     * @param {food_typeDeleteManyArgs} args - Arguments to filter Food_types to delete.
     * @example
     * // Delete a few Food_types
     * const { count } = await prisma.food_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends food_typeDeleteManyArgs>(args?: SelectSubset<T, food_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Food_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Food_types
     * const food_type = await prisma.food_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends food_typeUpdateManyArgs>(args: SelectSubset<T, food_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food_type.
     * @param {food_typeUpsertArgs} args - Arguments to update or create a Food_type.
     * @example
     * // Update or create a Food_type
     * const food_type = await prisma.food_type.upsert({
     *   create: {
     *     // ... data to create a Food_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food_type we want to update
     *   }
     * })
     */
    upsert<T extends food_typeUpsertArgs>(args: SelectSubset<T, food_typeUpsertArgs<ExtArgs>>): Prisma__food_typeClient<$Result.GetResult<Prisma.$food_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Food_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeCountArgs} args - Arguments to filter Food_types to count.
     * @example
     * // Count the number of Food_types
     * const count = await prisma.food_type.count({
     *   where: {
     *     // ... the filter for the Food_types we want to count
     *   }
     * })
    **/
    count<T extends food_typeCountArgs>(
      args?: Subset<T, food_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Food_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Food_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Food_typeAggregateArgs>(args: Subset<T, Food_typeAggregateArgs>): Prisma.PrismaPromise<GetFood_typeAggregateType<T>>

    /**
     * Group by Food_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {food_typeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends food_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: food_typeGroupByArgs['orderBy'] }
        : { orderBy?: food_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, food_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFood_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the food_type model
   */
  readonly fields: food_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for food_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__food_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends food_type$foodArgs<ExtArgs> = {}>(args?: Subset<T, food_type$foodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the food_type model
   */
  interface food_typeFieldRefs {
    readonly type_id: FieldRef<"food_type", 'Int'>
    readonly type_name: FieldRef<"food_type", 'String'>
  }
    

  // Custom InputTypes
  /**
   * food_type findUnique
   */
  export type food_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_type to fetch.
     */
    where: food_typeWhereUniqueInput
  }

  /**
   * food_type findUniqueOrThrow
   */
  export type food_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_type to fetch.
     */
    where: food_typeWhereUniqueInput
  }

  /**
   * food_type findFirst
   */
  export type food_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_type to fetch.
     */
    where?: food_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_types to fetch.
     */
    orderBy?: food_typeOrderByWithRelationInput | food_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for food_types.
     */
    cursor?: food_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of food_types.
     */
    distinct?: Food_typeScalarFieldEnum | Food_typeScalarFieldEnum[]
  }

  /**
   * food_type findFirstOrThrow
   */
  export type food_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_type to fetch.
     */
    where?: food_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_types to fetch.
     */
    orderBy?: food_typeOrderByWithRelationInput | food_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for food_types.
     */
    cursor?: food_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of food_types.
     */
    distinct?: Food_typeScalarFieldEnum | Food_typeScalarFieldEnum[]
  }

  /**
   * food_type findMany
   */
  export type food_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter, which food_types to fetch.
     */
    where?: food_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of food_types to fetch.
     */
    orderBy?: food_typeOrderByWithRelationInput | food_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing food_types.
     */
    cursor?: food_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` food_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` food_types.
     */
    skip?: number
    distinct?: Food_typeScalarFieldEnum | Food_typeScalarFieldEnum[]
  }

  /**
   * food_type create
   */
  export type food_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a food_type.
     */
    data?: XOR<food_typeCreateInput, food_typeUncheckedCreateInput>
  }

  /**
   * food_type createMany
   */
  export type food_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many food_types.
     */
    data: food_typeCreateManyInput | food_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * food_type update
   */
  export type food_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a food_type.
     */
    data: XOR<food_typeUpdateInput, food_typeUncheckedUpdateInput>
    /**
     * Choose, which food_type to update.
     */
    where: food_typeWhereUniqueInput
  }

  /**
   * food_type updateMany
   */
  export type food_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update food_types.
     */
    data: XOR<food_typeUpdateManyMutationInput, food_typeUncheckedUpdateManyInput>
    /**
     * Filter which food_types to update
     */
    where?: food_typeWhereInput
    /**
     * Limit how many food_types to update.
     */
    limit?: number
  }

  /**
   * food_type upsert
   */
  export type food_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the food_type to update in case it exists.
     */
    where: food_typeWhereUniqueInput
    /**
     * In case the food_type found by the `where` argument doesn't exist, create a new food_type with this data.
     */
    create: XOR<food_typeCreateInput, food_typeUncheckedCreateInput>
    /**
     * In case the food_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<food_typeUpdateInput, food_typeUncheckedUpdateInput>
  }

  /**
   * food_type delete
   */
  export type food_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
    /**
     * Filter which food_type to delete.
     */
    where: food_typeWhereUniqueInput
  }

  /**
   * food_type deleteMany
   */
  export type food_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which food_types to delete
     */
    where?: food_typeWhereInput
    /**
     * Limit how many food_types to delete.
     */
    limit?: number
  }

  /**
   * food_type.food
   */
  export type food_type$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    where?: foodWhereInput
    orderBy?: foodOrderByWithRelationInput | foodOrderByWithRelationInput[]
    cursor?: foodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * food_type without action
   */
  export type food_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food_type
     */
    select?: food_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food_type
     */
    omit?: food_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: food_typeInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    food_id: number | null
    amount: number | null
  }

  export type OrdersSumAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    food_id: number | null
    amount: number | null
  }

  export type OrdersMinAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    food_id: number | null
    amount: number | null
    code: string | null
    arr_sub_id: string | null
  }

  export type OrdersMaxAggregateOutputType = {
    order_id: number | null
    user_id: number | null
    food_id: number | null
    amount: number | null
    code: string | null
    arr_sub_id: string | null
  }

  export type OrdersCountAggregateOutputType = {
    order_id: number
    user_id: number
    food_id: number
    amount: number
    code: number
    arr_sub_id: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    order_id?: true
    user_id?: true
    food_id?: true
    amount?: true
  }

  export type OrdersSumAggregateInputType = {
    order_id?: true
    user_id?: true
    food_id?: true
    amount?: true
  }

  export type OrdersMinAggregateInputType = {
    order_id?: true
    user_id?: true
    food_id?: true
    amount?: true
    code?: true
    arr_sub_id?: true
  }

  export type OrdersMaxAggregateInputType = {
    order_id?: true
    user_id?: true
    food_id?: true
    amount?: true
    code?: true
    arr_sub_id?: true
  }

  export type OrdersCountAggregateInputType = {
    order_id?: true
    user_id?: true
    food_id?: true
    amount?: true
    code?: true
    arr_sub_id?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    order_id: number
    user_id: number | null
    food_id: number | null
    amount: number | null
    code: string | null
    arr_sub_id: string | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    user_id?: boolean
    food_id?: boolean
    amount?: boolean
    code?: boolean
    arr_sub_id?: boolean
    food?: boolean | orders$foodArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>



  export type ordersSelectScalar = {
    order_id?: boolean
    user_id?: boolean
    food_id?: boolean
    amount?: boolean
    code?: boolean
    arr_sub_id?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "user_id" | "food_id" | "amount" | "code" | "arr_sub_id", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | orders$foodArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      food: Prisma.$foodPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      user_id: number | null
      food_id: number | null
      amount: number | null
      code: string | null
      arr_sub_id: string | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends orders$foodArgs<ExtArgs> = {}>(args?: Subset<T, orders$foodArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends orders$usersArgs<ExtArgs> = {}>(args?: Subset<T, orders$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly order_id: FieldRef<"orders", 'Int'>
    readonly user_id: FieldRef<"orders", 'Int'>
    readonly food_id: FieldRef<"orders", 'Int'>
    readonly amount: FieldRef<"orders", 'Int'>
    readonly code: FieldRef<"orders", 'String'>
    readonly arr_sub_id: FieldRef<"orders", 'String'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data?: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.food
   */
  export type orders$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    where?: foodWhereInput
  }

  /**
   * orders.users
   */
  export type orders$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantAvgAggregateOutputType = {
    res_id: number | null
  }

  export type RestaurantSumAggregateOutputType = {
    res_id: number | null
  }

  export type RestaurantMinAggregateOutputType = {
    res_id: number | null
    res_name: string | null
    image: string | null
    description: string | null
  }

  export type RestaurantMaxAggregateOutputType = {
    res_id: number | null
    res_name: string | null
    image: string | null
    description: string | null
  }

  export type RestaurantCountAggregateOutputType = {
    res_id: number
    res_name: number
    image: number
    description: number
    _all: number
  }


  export type RestaurantAvgAggregateInputType = {
    res_id?: true
  }

  export type RestaurantSumAggregateInputType = {
    res_id?: true
  }

  export type RestaurantMinAggregateInputType = {
    res_id?: true
    res_name?: true
    image?: true
    description?: true
  }

  export type RestaurantMaxAggregateInputType = {
    res_id?: true
    res_name?: true
    image?: true
    description?: true
  }

  export type RestaurantCountAggregateInputType = {
    res_id?: true
    res_name?: true
    image?: true
    description?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurant to aggregate.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type restaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: restaurantWhereInput
    orderBy?: restaurantOrderByWithAggregationInput | restaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: restaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _avg?: RestaurantAvgAggregateInputType
    _sum?: RestaurantSumAggregateInputType
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    res_id: number
    res_name: string | null
    image: string | null
    description: string | null
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends restaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type restaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    res_id?: boolean
    res_name?: boolean
    image?: boolean
    description?: boolean
  }, ExtArgs["result"]["restaurant"]>



  export type restaurantSelectScalar = {
    res_id?: boolean
    res_name?: boolean
    image?: boolean
    description?: boolean
  }

  export type restaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"res_id" | "res_name" | "image" | "description", ExtArgs["result"]["restaurant"]>

  export type $restaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "restaurant"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      res_id: number
      res_name: string | null
      image: string | null
      description: string | null
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type restaurantGetPayload<S extends boolean | null | undefined | restaurantDefaultArgs> = $Result.GetResult<Prisma.$restaurantPayload, S>

  type restaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<restaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface restaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['restaurant'], meta: { name: 'restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {restaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends restaurantFindUniqueArgs>(args: SelectSubset<T, restaurantFindUniqueArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {restaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends restaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, restaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends restaurantFindFirstArgs>(args?: SelectSubset<T, restaurantFindFirstArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends restaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, restaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `res_id`
     * const restaurantWithRes_idOnly = await prisma.restaurant.findMany({ select: { res_id: true } })
     * 
     */
    findMany<T extends restaurantFindManyArgs>(args?: SelectSubset<T, restaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurant.
     * @param {restaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends restaurantCreateArgs>(args: SelectSubset<T, restaurantCreateArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {restaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends restaurantCreateManyArgs>(args?: SelectSubset<T, restaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurant.
     * @param {restaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends restaurantDeleteArgs>(args: SelectSubset<T, restaurantDeleteArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurant.
     * @param {restaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends restaurantUpdateArgs>(args: SelectSubset<T, restaurantUpdateArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {restaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends restaurantDeleteManyArgs>(args?: SelectSubset<T, restaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends restaurantUpdateManyArgs>(args: SelectSubset<T, restaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurant.
     * @param {restaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends restaurantUpsertArgs>(args: SelectSubset<T, restaurantUpsertArgs<ExtArgs>>): Prisma__restaurantClient<$Result.GetResult<Prisma.$restaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends restaurantCountArgs>(
      args?: Subset<T, restaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {restaurantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends restaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: restaurantGroupByArgs['orderBy'] }
        : { orderBy?: restaurantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, restaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the restaurant model
   */
  readonly fields: restaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__restaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the restaurant model
   */
  interface restaurantFieldRefs {
    readonly res_id: FieldRef<"restaurant", 'Int'>
    readonly res_name: FieldRef<"restaurant", 'String'>
    readonly image: FieldRef<"restaurant", 'String'>
    readonly description: FieldRef<"restaurant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * restaurant findUnique
   */
  export type restaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant findUniqueOrThrow
   */
  export type restaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant findFirst
   */
  export type restaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * restaurant findFirstOrThrow
   */
  export type restaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Filter, which restaurant to fetch.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for restaurants.
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * restaurant findMany
   */
  export type restaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Filter, which restaurants to fetch.
     */
    where?: restaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of restaurants to fetch.
     */
    orderBy?: restaurantOrderByWithRelationInput | restaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing restaurants.
     */
    cursor?: restaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` restaurants.
     */
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * restaurant create
   */
  export type restaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * The data needed to create a restaurant.
     */
    data?: XOR<restaurantCreateInput, restaurantUncheckedCreateInput>
  }

  /**
   * restaurant createMany
   */
  export type restaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many restaurants.
     */
    data: restaurantCreateManyInput | restaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * restaurant update
   */
  export type restaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * The data needed to update a restaurant.
     */
    data: XOR<restaurantUpdateInput, restaurantUncheckedUpdateInput>
    /**
     * Choose, which restaurant to update.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant updateMany
   */
  export type restaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update restaurants.
     */
    data: XOR<restaurantUpdateManyMutationInput, restaurantUncheckedUpdateManyInput>
    /**
     * Filter which restaurants to update
     */
    where?: restaurantWhereInput
    /**
     * Limit how many restaurants to update.
     */
    limit?: number
  }

  /**
   * restaurant upsert
   */
  export type restaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * The filter to search for the restaurant to update in case it exists.
     */
    where: restaurantWhereUniqueInput
    /**
     * In case the restaurant found by the `where` argument doesn't exist, create a new restaurant with this data.
     */
    create: XOR<restaurantCreateInput, restaurantUncheckedCreateInput>
    /**
     * In case the restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<restaurantUpdateInput, restaurantUncheckedUpdateInput>
  }

  /**
   * restaurant delete
   */
  export type restaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
    /**
     * Filter which restaurant to delete.
     */
    where: restaurantWhereUniqueInput
  }

  /**
   * restaurant deleteMany
   */
  export type restaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which restaurants to delete
     */
    where?: restaurantWhereInput
    /**
     * Limit how many restaurants to delete.
     */
    limit?: number
  }

  /**
   * restaurant without action
   */
  export type restaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the restaurant
     */
    select?: restaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the restaurant
     */
    omit?: restaurantOmit<ExtArgs> | null
  }


  /**
   * Model sub_food
   */

  export type AggregateSub_food = {
    _count: Sub_foodCountAggregateOutputType | null
    _avg: Sub_foodAvgAggregateOutputType | null
    _sum: Sub_foodSumAggregateOutputType | null
    _min: Sub_foodMinAggregateOutputType | null
    _max: Sub_foodMaxAggregateOutputType | null
  }

  export type Sub_foodAvgAggregateOutputType = {
    sub_id: number | null
    sub_price: number | null
    food_id: number | null
  }

  export type Sub_foodSumAggregateOutputType = {
    sub_id: number | null
    sub_price: number | null
    food_id: number | null
  }

  export type Sub_foodMinAggregateOutputType = {
    sub_id: number | null
    sub_name: string | null
    sub_price: number | null
    food_id: number | null
  }

  export type Sub_foodMaxAggregateOutputType = {
    sub_id: number | null
    sub_name: string | null
    sub_price: number | null
    food_id: number | null
  }

  export type Sub_foodCountAggregateOutputType = {
    sub_id: number
    sub_name: number
    sub_price: number
    food_id: number
    _all: number
  }


  export type Sub_foodAvgAggregateInputType = {
    sub_id?: true
    sub_price?: true
    food_id?: true
  }

  export type Sub_foodSumAggregateInputType = {
    sub_id?: true
    sub_price?: true
    food_id?: true
  }

  export type Sub_foodMinAggregateInputType = {
    sub_id?: true
    sub_name?: true
    sub_price?: true
    food_id?: true
  }

  export type Sub_foodMaxAggregateInputType = {
    sub_id?: true
    sub_name?: true
    sub_price?: true
    food_id?: true
  }

  export type Sub_foodCountAggregateInputType = {
    sub_id?: true
    sub_name?: true
    sub_price?: true
    food_id?: true
    _all?: true
  }

  export type Sub_foodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sub_food to aggregate.
     */
    where?: sub_foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_foods to fetch.
     */
    orderBy?: sub_foodOrderByWithRelationInput | sub_foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sub_foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sub_foods
    **/
    _count?: true | Sub_foodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Sub_foodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Sub_foodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Sub_foodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Sub_foodMaxAggregateInputType
  }

  export type GetSub_foodAggregateType<T extends Sub_foodAggregateArgs> = {
        [P in keyof T & keyof AggregateSub_food]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSub_food[P]>
      : GetScalarType<T[P], AggregateSub_food[P]>
  }




  export type sub_foodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sub_foodWhereInput
    orderBy?: sub_foodOrderByWithAggregationInput | sub_foodOrderByWithAggregationInput[]
    by: Sub_foodScalarFieldEnum[] | Sub_foodScalarFieldEnum
    having?: sub_foodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Sub_foodCountAggregateInputType | true
    _avg?: Sub_foodAvgAggregateInputType
    _sum?: Sub_foodSumAggregateInputType
    _min?: Sub_foodMinAggregateInputType
    _max?: Sub_foodMaxAggregateInputType
  }

  export type Sub_foodGroupByOutputType = {
    sub_id: number
    sub_name: string | null
    sub_price: number | null
    food_id: number | null
    _count: Sub_foodCountAggregateOutputType | null
    _avg: Sub_foodAvgAggregateOutputType | null
    _sum: Sub_foodSumAggregateOutputType | null
    _min: Sub_foodMinAggregateOutputType | null
    _max: Sub_foodMaxAggregateOutputType | null
  }

  type GetSub_foodGroupByPayload<T extends sub_foodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Sub_foodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Sub_foodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Sub_foodGroupByOutputType[P]>
            : GetScalarType<T[P], Sub_foodGroupByOutputType[P]>
        }
      >
    >


  export type sub_foodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sub_id?: boolean
    sub_name?: boolean
    sub_price?: boolean
    food_id?: boolean
    food?: boolean | sub_food$foodArgs<ExtArgs>
  }, ExtArgs["result"]["sub_food"]>



  export type sub_foodSelectScalar = {
    sub_id?: boolean
    sub_name?: boolean
    sub_price?: boolean
    food_id?: boolean
  }

  export type sub_foodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sub_id" | "sub_name" | "sub_price" | "food_id", ExtArgs["result"]["sub_food"]>
  export type sub_foodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | sub_food$foodArgs<ExtArgs>
  }

  export type $sub_foodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sub_food"
    objects: {
      food: Prisma.$foodPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      sub_id: number
      sub_name: string | null
      sub_price: number | null
      food_id: number | null
    }, ExtArgs["result"]["sub_food"]>
    composites: {}
  }

  type sub_foodGetPayload<S extends boolean | null | undefined | sub_foodDefaultArgs> = $Result.GetResult<Prisma.$sub_foodPayload, S>

  type sub_foodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sub_foodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Sub_foodCountAggregateInputType | true
    }

  export interface sub_foodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sub_food'], meta: { name: 'sub_food' } }
    /**
     * Find zero or one Sub_food that matches the filter.
     * @param {sub_foodFindUniqueArgs} args - Arguments to find a Sub_food
     * @example
     * // Get one Sub_food
     * const sub_food = await prisma.sub_food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sub_foodFindUniqueArgs>(args: SelectSubset<T, sub_foodFindUniqueArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sub_food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sub_foodFindUniqueOrThrowArgs} args - Arguments to find a Sub_food
     * @example
     * // Get one Sub_food
     * const sub_food = await prisma.sub_food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sub_foodFindUniqueOrThrowArgs>(args: SelectSubset<T, sub_foodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodFindFirstArgs} args - Arguments to find a Sub_food
     * @example
     * // Get one Sub_food
     * const sub_food = await prisma.sub_food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sub_foodFindFirstArgs>(args?: SelectSubset<T, sub_foodFindFirstArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sub_food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodFindFirstOrThrowArgs} args - Arguments to find a Sub_food
     * @example
     * // Get one Sub_food
     * const sub_food = await prisma.sub_food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sub_foodFindFirstOrThrowArgs>(args?: SelectSubset<T, sub_foodFindFirstOrThrowArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sub_foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sub_foods
     * const sub_foods = await prisma.sub_food.findMany()
     * 
     * // Get first 10 Sub_foods
     * const sub_foods = await prisma.sub_food.findMany({ take: 10 })
     * 
     * // Only select the `sub_id`
     * const sub_foodWithSub_idOnly = await prisma.sub_food.findMany({ select: { sub_id: true } })
     * 
     */
    findMany<T extends sub_foodFindManyArgs>(args?: SelectSubset<T, sub_foodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sub_food.
     * @param {sub_foodCreateArgs} args - Arguments to create a Sub_food.
     * @example
     * // Create one Sub_food
     * const Sub_food = await prisma.sub_food.create({
     *   data: {
     *     // ... data to create a Sub_food
     *   }
     * })
     * 
     */
    create<T extends sub_foodCreateArgs>(args: SelectSubset<T, sub_foodCreateArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sub_foods.
     * @param {sub_foodCreateManyArgs} args - Arguments to create many Sub_foods.
     * @example
     * // Create many Sub_foods
     * const sub_food = await prisma.sub_food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sub_foodCreateManyArgs>(args?: SelectSubset<T, sub_foodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sub_food.
     * @param {sub_foodDeleteArgs} args - Arguments to delete one Sub_food.
     * @example
     * // Delete one Sub_food
     * const Sub_food = await prisma.sub_food.delete({
     *   where: {
     *     // ... filter to delete one Sub_food
     *   }
     * })
     * 
     */
    delete<T extends sub_foodDeleteArgs>(args: SelectSubset<T, sub_foodDeleteArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sub_food.
     * @param {sub_foodUpdateArgs} args - Arguments to update one Sub_food.
     * @example
     * // Update one Sub_food
     * const sub_food = await prisma.sub_food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sub_foodUpdateArgs>(args: SelectSubset<T, sub_foodUpdateArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sub_foods.
     * @param {sub_foodDeleteManyArgs} args - Arguments to filter Sub_foods to delete.
     * @example
     * // Delete a few Sub_foods
     * const { count } = await prisma.sub_food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sub_foodDeleteManyArgs>(args?: SelectSubset<T, sub_foodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sub_foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sub_foods
     * const sub_food = await prisma.sub_food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sub_foodUpdateManyArgs>(args: SelectSubset<T, sub_foodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sub_food.
     * @param {sub_foodUpsertArgs} args - Arguments to update or create a Sub_food.
     * @example
     * // Update or create a Sub_food
     * const sub_food = await prisma.sub_food.upsert({
     *   create: {
     *     // ... data to create a Sub_food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sub_food we want to update
     *   }
     * })
     */
    upsert<T extends sub_foodUpsertArgs>(args: SelectSubset<T, sub_foodUpsertArgs<ExtArgs>>): Prisma__sub_foodClient<$Result.GetResult<Prisma.$sub_foodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sub_foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodCountArgs} args - Arguments to filter Sub_foods to count.
     * @example
     * // Count the number of Sub_foods
     * const count = await prisma.sub_food.count({
     *   where: {
     *     // ... the filter for the Sub_foods we want to count
     *   }
     * })
    **/
    count<T extends sub_foodCountArgs>(
      args?: Subset<T, sub_foodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Sub_foodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sub_food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Sub_foodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Sub_foodAggregateArgs>(args: Subset<T, Sub_foodAggregateArgs>): Prisma.PrismaPromise<GetSub_foodAggregateType<T>>

    /**
     * Group by Sub_food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sub_foodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sub_foodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sub_foodGroupByArgs['orderBy'] }
        : { orderBy?: sub_foodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sub_foodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSub_foodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sub_food model
   */
  readonly fields: sub_foodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sub_food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sub_foodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends sub_food$foodArgs<ExtArgs> = {}>(args?: Subset<T, sub_food$foodArgs<ExtArgs>>): Prisma__foodClient<$Result.GetResult<Prisma.$foodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sub_food model
   */
  interface sub_foodFieldRefs {
    readonly sub_id: FieldRef<"sub_food", 'Int'>
    readonly sub_name: FieldRef<"sub_food", 'String'>
    readonly sub_price: FieldRef<"sub_food", 'Float'>
    readonly food_id: FieldRef<"sub_food", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sub_food findUnique
   */
  export type sub_foodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * Filter, which sub_food to fetch.
     */
    where: sub_foodWhereUniqueInput
  }

  /**
   * sub_food findUniqueOrThrow
   */
  export type sub_foodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * Filter, which sub_food to fetch.
     */
    where: sub_foodWhereUniqueInput
  }

  /**
   * sub_food findFirst
   */
  export type sub_foodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * Filter, which sub_food to fetch.
     */
    where?: sub_foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_foods to fetch.
     */
    orderBy?: sub_foodOrderByWithRelationInput | sub_foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sub_foods.
     */
    cursor?: sub_foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sub_foods.
     */
    distinct?: Sub_foodScalarFieldEnum | Sub_foodScalarFieldEnum[]
  }

  /**
   * sub_food findFirstOrThrow
   */
  export type sub_foodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * Filter, which sub_food to fetch.
     */
    where?: sub_foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_foods to fetch.
     */
    orderBy?: sub_foodOrderByWithRelationInput | sub_foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sub_foods.
     */
    cursor?: sub_foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sub_foods.
     */
    distinct?: Sub_foodScalarFieldEnum | Sub_foodScalarFieldEnum[]
  }

  /**
   * sub_food findMany
   */
  export type sub_foodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * Filter, which sub_foods to fetch.
     */
    where?: sub_foodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sub_foods to fetch.
     */
    orderBy?: sub_foodOrderByWithRelationInput | sub_foodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sub_foods.
     */
    cursor?: sub_foodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sub_foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sub_foods.
     */
    skip?: number
    distinct?: Sub_foodScalarFieldEnum | Sub_foodScalarFieldEnum[]
  }

  /**
   * sub_food create
   */
  export type sub_foodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * The data needed to create a sub_food.
     */
    data?: XOR<sub_foodCreateInput, sub_foodUncheckedCreateInput>
  }

  /**
   * sub_food createMany
   */
  export type sub_foodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sub_foods.
     */
    data: sub_foodCreateManyInput | sub_foodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sub_food update
   */
  export type sub_foodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * The data needed to update a sub_food.
     */
    data: XOR<sub_foodUpdateInput, sub_foodUncheckedUpdateInput>
    /**
     * Choose, which sub_food to update.
     */
    where: sub_foodWhereUniqueInput
  }

  /**
   * sub_food updateMany
   */
  export type sub_foodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sub_foods.
     */
    data: XOR<sub_foodUpdateManyMutationInput, sub_foodUncheckedUpdateManyInput>
    /**
     * Filter which sub_foods to update
     */
    where?: sub_foodWhereInput
    /**
     * Limit how many sub_foods to update.
     */
    limit?: number
  }

  /**
   * sub_food upsert
   */
  export type sub_foodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * The filter to search for the sub_food to update in case it exists.
     */
    where: sub_foodWhereUniqueInput
    /**
     * In case the sub_food found by the `where` argument doesn't exist, create a new sub_food with this data.
     */
    create: XOR<sub_foodCreateInput, sub_foodUncheckedCreateInput>
    /**
     * In case the sub_food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sub_foodUpdateInput, sub_foodUncheckedUpdateInput>
  }

  /**
   * sub_food delete
   */
  export type sub_foodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
    /**
     * Filter which sub_food to delete.
     */
    where: sub_foodWhereUniqueInput
  }

  /**
   * sub_food deleteMany
   */
  export type sub_foodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sub_foods to delete
     */
    where?: sub_foodWhereInput
    /**
     * Limit how many sub_foods to delete.
     */
    limit?: number
  }

  /**
   * sub_food.food
   */
  export type sub_food$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the food
     */
    select?: foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the food
     */
    omit?: foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: foodInclude<ExtArgs> | null
    where?: foodWhereInput
  }

  /**
   * sub_food without action
   */
  export type sub_foodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sub_food
     */
    select?: sub_foodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sub_food
     */
    omit?: sub_foodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sub_foodInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    user_id: number | null
    age: number | null
  }

  export type UsersSumAggregateOutputType = {
    user_id: number | null
    age: number | null
  }

  export type UsersMinAggregateOutputType = {
    user_id: number | null
    full_name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    age: number | null
    totpSecret: string | null
    googleId: string | null
  }

  export type UsersMaxAggregateOutputType = {
    user_id: number | null
    full_name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    age: number | null
    totpSecret: string | null
    googleId: string | null
  }

  export type UsersCountAggregateOutputType = {
    user_id: number
    full_name: number
    email: number
    password: number
    avatar: number
    age: number
    totpSecret: number
    googleId: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    user_id?: true
    age?: true
  }

  export type UsersSumAggregateInputType = {
    user_id?: true
    age?: true
  }

  export type UsersMinAggregateInputType = {
    user_id?: true
    full_name?: true
    email?: true
    password?: true
    avatar?: true
    age?: true
    totpSecret?: true
    googleId?: true
  }

  export type UsersMaxAggregateInputType = {
    user_id?: true
    full_name?: true
    email?: true
    password?: true
    avatar?: true
    age?: true
    totpSecret?: true
    googleId?: true
  }

  export type UsersCountAggregateInputType = {
    user_id?: true
    full_name?: true
    email?: true
    password?: true
    avatar?: true
    age?: true
    totpSecret?: true
    googleId?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    user_id: number
    full_name: string | null
    email: string | null
    password: string | null
    avatar: string | null
    age: number | null
    totpSecret: string | null
    googleId: string | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    age?: boolean
    totpSecret?: boolean
    googleId?: boolean
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    user_id?: boolean
    full_name?: boolean
    email?: boolean
    password?: boolean
    avatar?: boolean
    age?: boolean
    totpSecret?: boolean
    googleId?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "full_name" | "email" | "password" | "avatar" | "age" | "totpSecret" | "googleId", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      full_name: string | null
      email: string | null
      password: string | null
      avatar: string | null
      age: number | null
      totpSecret: string | null
      googleId: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const usersWithUser_idOnly = await prisma.users.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly user_id: FieldRef<"users", 'Int'>
    readonly full_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly age: FieldRef<"users", 'Int'>
    readonly totpSecret: FieldRef<"users", 'String'>
    readonly googleId: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data?: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FoodScalarFieldEnum: {
    food_id: 'food_id',
    food_name: 'food_name',
    image: 'image',
    price: 'price',
    description: 'description',
    is_deleted: 'is_deleted',
    type_id: 'type_id'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const Food_typeScalarFieldEnum: {
    type_id: 'type_id',
    type_name: 'type_name'
  };

  export type Food_typeScalarFieldEnum = (typeof Food_typeScalarFieldEnum)[keyof typeof Food_typeScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    order_id: 'order_id',
    user_id: 'user_id',
    food_id: 'food_id',
    amount: 'amount',
    code: 'code',
    arr_sub_id: 'arr_sub_id'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    res_id: 'res_id',
    res_name: 'res_name',
    image: 'image',
    description: 'description'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const Sub_foodScalarFieldEnum: {
    sub_id: 'sub_id',
    sub_name: 'sub_name',
    sub_price: 'sub_price',
    food_id: 'food_id'
  };

  export type Sub_foodScalarFieldEnum = (typeof Sub_foodScalarFieldEnum)[keyof typeof Sub_foodScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    user_id: 'user_id',
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    age: 'age',
    totpSecret: 'totpSecret',
    googleId: 'googleId'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const foodOrderByRelevanceFieldEnum: {
    food_name: 'food_name',
    image: 'image',
    description: 'description'
  };

  export type foodOrderByRelevanceFieldEnum = (typeof foodOrderByRelevanceFieldEnum)[keyof typeof foodOrderByRelevanceFieldEnum]


  export const food_typeOrderByRelevanceFieldEnum: {
    type_name: 'type_name'
  };

  export type food_typeOrderByRelevanceFieldEnum = (typeof food_typeOrderByRelevanceFieldEnum)[keyof typeof food_typeOrderByRelevanceFieldEnum]


  export const ordersOrderByRelevanceFieldEnum: {
    code: 'code',
    arr_sub_id: 'arr_sub_id'
  };

  export type ordersOrderByRelevanceFieldEnum = (typeof ordersOrderByRelevanceFieldEnum)[keyof typeof ordersOrderByRelevanceFieldEnum]


  export const restaurantOrderByRelevanceFieldEnum: {
    res_name: 'res_name',
    image: 'image',
    description: 'description'
  };

  export type restaurantOrderByRelevanceFieldEnum = (typeof restaurantOrderByRelevanceFieldEnum)[keyof typeof restaurantOrderByRelevanceFieldEnum]


  export const sub_foodOrderByRelevanceFieldEnum: {
    sub_name: 'sub_name'
  };

  export type sub_foodOrderByRelevanceFieldEnum = (typeof sub_foodOrderByRelevanceFieldEnum)[keyof typeof sub_foodOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    full_name: 'full_name',
    email: 'email',
    password: 'password',
    avatar: 'avatar',
    totpSecret: 'totpSecret',
    googleId: 'googleId'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type foodWhereInput = {
    AND?: foodWhereInput | foodWhereInput[]
    OR?: foodWhereInput[]
    NOT?: foodWhereInput | foodWhereInput[]
    food_id?: IntFilter<"food"> | number
    food_name?: StringNullableFilter<"food"> | string | null
    image?: StringNullableFilter<"food"> | string | null
    price?: FloatNullableFilter<"food"> | number | null
    description?: StringNullableFilter<"food"> | string | null
    is_deleted?: BoolFilter<"food"> | boolean
    type_id?: IntNullableFilter<"food"> | number | null
    food_type?: XOR<Food_typeNullableScalarRelationFilter, food_typeWhereInput> | null
    orders?: OrdersListRelationFilter
    sub_food?: Sub_foodListRelationFilter
  }

  export type foodOrderByWithRelationInput = {
    food_id?: SortOrder
    food_name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    type_id?: SortOrderInput | SortOrder
    food_type?: food_typeOrderByWithRelationInput
    orders?: ordersOrderByRelationAggregateInput
    sub_food?: sub_foodOrderByRelationAggregateInput
    _relevance?: foodOrderByRelevanceInput
  }

  export type foodWhereUniqueInput = Prisma.AtLeast<{
    food_id?: number
    AND?: foodWhereInput | foodWhereInput[]
    OR?: foodWhereInput[]
    NOT?: foodWhereInput | foodWhereInput[]
    food_name?: StringNullableFilter<"food"> | string | null
    image?: StringNullableFilter<"food"> | string | null
    price?: FloatNullableFilter<"food"> | number | null
    description?: StringNullableFilter<"food"> | string | null
    is_deleted?: BoolFilter<"food"> | boolean
    type_id?: IntNullableFilter<"food"> | number | null
    food_type?: XOR<Food_typeNullableScalarRelationFilter, food_typeWhereInput> | null
    orders?: OrdersListRelationFilter
    sub_food?: Sub_foodListRelationFilter
  }, "food_id">

  export type foodOrderByWithAggregationInput = {
    food_id?: SortOrder
    food_name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    is_deleted?: SortOrder
    type_id?: SortOrderInput | SortOrder
    _count?: foodCountOrderByAggregateInput
    _avg?: foodAvgOrderByAggregateInput
    _max?: foodMaxOrderByAggregateInput
    _min?: foodMinOrderByAggregateInput
    _sum?: foodSumOrderByAggregateInput
  }

  export type foodScalarWhereWithAggregatesInput = {
    AND?: foodScalarWhereWithAggregatesInput | foodScalarWhereWithAggregatesInput[]
    OR?: foodScalarWhereWithAggregatesInput[]
    NOT?: foodScalarWhereWithAggregatesInput | foodScalarWhereWithAggregatesInput[]
    food_id?: IntWithAggregatesFilter<"food"> | number
    food_name?: StringNullableWithAggregatesFilter<"food"> | string | null
    image?: StringNullableWithAggregatesFilter<"food"> | string | null
    price?: FloatNullableWithAggregatesFilter<"food"> | number | null
    description?: StringNullableWithAggregatesFilter<"food"> | string | null
    is_deleted?: BoolWithAggregatesFilter<"food"> | boolean
    type_id?: IntNullableWithAggregatesFilter<"food"> | number | null
  }

  export type food_typeWhereInput = {
    AND?: food_typeWhereInput | food_typeWhereInput[]
    OR?: food_typeWhereInput[]
    NOT?: food_typeWhereInput | food_typeWhereInput[]
    type_id?: IntFilter<"food_type"> | number
    type_name?: StringNullableFilter<"food_type"> | string | null
    food?: FoodListRelationFilter
  }

  export type food_typeOrderByWithRelationInput = {
    type_id?: SortOrder
    type_name?: SortOrderInput | SortOrder
    food?: foodOrderByRelationAggregateInput
    _relevance?: food_typeOrderByRelevanceInput
  }

  export type food_typeWhereUniqueInput = Prisma.AtLeast<{
    type_id?: number
    AND?: food_typeWhereInput | food_typeWhereInput[]
    OR?: food_typeWhereInput[]
    NOT?: food_typeWhereInput | food_typeWhereInput[]
    type_name?: StringNullableFilter<"food_type"> | string | null
    food?: FoodListRelationFilter
  }, "type_id">

  export type food_typeOrderByWithAggregationInput = {
    type_id?: SortOrder
    type_name?: SortOrderInput | SortOrder
    _count?: food_typeCountOrderByAggregateInput
    _avg?: food_typeAvgOrderByAggregateInput
    _max?: food_typeMaxOrderByAggregateInput
    _min?: food_typeMinOrderByAggregateInput
    _sum?: food_typeSumOrderByAggregateInput
  }

  export type food_typeScalarWhereWithAggregatesInput = {
    AND?: food_typeScalarWhereWithAggregatesInput | food_typeScalarWhereWithAggregatesInput[]
    OR?: food_typeScalarWhereWithAggregatesInput[]
    NOT?: food_typeScalarWhereWithAggregatesInput | food_typeScalarWhereWithAggregatesInput[]
    type_id?: IntWithAggregatesFilter<"food_type"> | number
    type_name?: StringNullableWithAggregatesFilter<"food_type"> | string | null
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    order_id?: IntFilter<"orders"> | number
    user_id?: IntNullableFilter<"orders"> | number | null
    food_id?: IntNullableFilter<"orders"> | number | null
    amount?: IntNullableFilter<"orders"> | number | null
    code?: StringNullableFilter<"orders"> | string | null
    arr_sub_id?: StringNullableFilter<"orders"> | string | null
    food?: XOR<FoodNullableScalarRelationFilter, foodWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type ordersOrderByWithRelationInput = {
    order_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    food_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    arr_sub_id?: SortOrderInput | SortOrder
    food?: foodOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    _relevance?: ordersOrderByRelevanceInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    user_id?: IntNullableFilter<"orders"> | number | null
    food_id?: IntNullableFilter<"orders"> | number | null
    amount?: IntNullableFilter<"orders"> | number | null
    code?: StringNullableFilter<"orders"> | string | null
    arr_sub_id?: StringNullableFilter<"orders"> | string | null
    food?: XOR<FoodNullableScalarRelationFilter, foodWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "order_id">

  export type ordersOrderByWithAggregationInput = {
    order_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    food_id?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    code?: SortOrderInput | SortOrder
    arr_sub_id?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"orders"> | number
    user_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    food_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    amount?: IntNullableWithAggregatesFilter<"orders"> | number | null
    code?: StringNullableWithAggregatesFilter<"orders"> | string | null
    arr_sub_id?: StringNullableWithAggregatesFilter<"orders"> | string | null
  }

  export type restaurantWhereInput = {
    AND?: restaurantWhereInput | restaurantWhereInput[]
    OR?: restaurantWhereInput[]
    NOT?: restaurantWhereInput | restaurantWhereInput[]
    res_id?: IntFilter<"restaurant"> | number
    res_name?: StringNullableFilter<"restaurant"> | string | null
    image?: StringNullableFilter<"restaurant"> | string | null
    description?: StringNullableFilter<"restaurant"> | string | null
  }

  export type restaurantOrderByWithRelationInput = {
    res_id?: SortOrder
    res_name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _relevance?: restaurantOrderByRelevanceInput
  }

  export type restaurantWhereUniqueInput = Prisma.AtLeast<{
    res_id?: number
    AND?: restaurantWhereInput | restaurantWhereInput[]
    OR?: restaurantWhereInput[]
    NOT?: restaurantWhereInput | restaurantWhereInput[]
    res_name?: StringNullableFilter<"restaurant"> | string | null
    image?: StringNullableFilter<"restaurant"> | string | null
    description?: StringNullableFilter<"restaurant"> | string | null
  }, "res_id">

  export type restaurantOrderByWithAggregationInput = {
    res_id?: SortOrder
    res_name?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: restaurantCountOrderByAggregateInput
    _avg?: restaurantAvgOrderByAggregateInput
    _max?: restaurantMaxOrderByAggregateInput
    _min?: restaurantMinOrderByAggregateInput
    _sum?: restaurantSumOrderByAggregateInput
  }

  export type restaurantScalarWhereWithAggregatesInput = {
    AND?: restaurantScalarWhereWithAggregatesInput | restaurantScalarWhereWithAggregatesInput[]
    OR?: restaurantScalarWhereWithAggregatesInput[]
    NOT?: restaurantScalarWhereWithAggregatesInput | restaurantScalarWhereWithAggregatesInput[]
    res_id?: IntWithAggregatesFilter<"restaurant"> | number
    res_name?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
    image?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
    description?: StringNullableWithAggregatesFilter<"restaurant"> | string | null
  }

  export type sub_foodWhereInput = {
    AND?: sub_foodWhereInput | sub_foodWhereInput[]
    OR?: sub_foodWhereInput[]
    NOT?: sub_foodWhereInput | sub_foodWhereInput[]
    sub_id?: IntFilter<"sub_food"> | number
    sub_name?: StringNullableFilter<"sub_food"> | string | null
    sub_price?: FloatNullableFilter<"sub_food"> | number | null
    food_id?: IntNullableFilter<"sub_food"> | number | null
    food?: XOR<FoodNullableScalarRelationFilter, foodWhereInput> | null
  }

  export type sub_foodOrderByWithRelationInput = {
    sub_id?: SortOrder
    sub_name?: SortOrderInput | SortOrder
    sub_price?: SortOrderInput | SortOrder
    food_id?: SortOrderInput | SortOrder
    food?: foodOrderByWithRelationInput
    _relevance?: sub_foodOrderByRelevanceInput
  }

  export type sub_foodWhereUniqueInput = Prisma.AtLeast<{
    sub_id?: number
    AND?: sub_foodWhereInput | sub_foodWhereInput[]
    OR?: sub_foodWhereInput[]
    NOT?: sub_foodWhereInput | sub_foodWhereInput[]
    sub_name?: StringNullableFilter<"sub_food"> | string | null
    sub_price?: FloatNullableFilter<"sub_food"> | number | null
    food_id?: IntNullableFilter<"sub_food"> | number | null
    food?: XOR<FoodNullableScalarRelationFilter, foodWhereInput> | null
  }, "sub_id">

  export type sub_foodOrderByWithAggregationInput = {
    sub_id?: SortOrder
    sub_name?: SortOrderInput | SortOrder
    sub_price?: SortOrderInput | SortOrder
    food_id?: SortOrderInput | SortOrder
    _count?: sub_foodCountOrderByAggregateInput
    _avg?: sub_foodAvgOrderByAggregateInput
    _max?: sub_foodMaxOrderByAggregateInput
    _min?: sub_foodMinOrderByAggregateInput
    _sum?: sub_foodSumOrderByAggregateInput
  }

  export type sub_foodScalarWhereWithAggregatesInput = {
    AND?: sub_foodScalarWhereWithAggregatesInput | sub_foodScalarWhereWithAggregatesInput[]
    OR?: sub_foodScalarWhereWithAggregatesInput[]
    NOT?: sub_foodScalarWhereWithAggregatesInput | sub_foodScalarWhereWithAggregatesInput[]
    sub_id?: IntWithAggregatesFilter<"sub_food"> | number
    sub_name?: StringNullableWithAggregatesFilter<"sub_food"> | string | null
    sub_price?: FloatNullableWithAggregatesFilter<"sub_food"> | number | null
    food_id?: IntNullableWithAggregatesFilter<"sub_food"> | number | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    user_id?: IntFilter<"users"> | number
    full_name?: StringNullableFilter<"users"> | string | null
    email?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    age?: IntNullableFilter<"users"> | number | null
    totpSecret?: StringNullableFilter<"users"> | string | null
    googleId?: StringNullableFilter<"users"> | string | null
    orders?: OrdersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    user_id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    totpSecret?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    full_name?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    avatar?: StringNullableFilter<"users"> | string | null
    age?: IntNullableFilter<"users"> | number | null
    totpSecret?: StringNullableFilter<"users"> | string | null
    googleId?: StringNullableFilter<"users"> | string | null
    orders?: OrdersListRelationFilter
  }, "user_id" | "email">

  export type usersOrderByWithAggregationInput = {
    user_id?: SortOrder
    full_name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    totpSecret?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"users"> | number
    full_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"users"> | string | null
    age?: IntNullableWithAggregatesFilter<"users"> | number | null
    totpSecret?: StringNullableWithAggregatesFilter<"users"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type foodCreateInput = {
    food_name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    is_deleted?: boolean
    food_type?: food_typeCreateNestedOneWithoutFoodInput
    orders?: ordersCreateNestedManyWithoutFoodInput
    sub_food?: sub_foodCreateNestedManyWithoutFoodInput
  }

  export type foodUncheckedCreateInput = {
    food_id?: number
    food_name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    is_deleted?: boolean
    type_id?: number | null
    orders?: ordersUncheckedCreateNestedManyWithoutFoodInput
    sub_food?: sub_foodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type foodUpdateInput = {
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    food_type?: food_typeUpdateOneWithoutFoodNestedInput
    orders?: ordersUpdateManyWithoutFoodNestedInput
    sub_food?: sub_foodUpdateManyWithoutFoodNestedInput
  }

  export type foodUncheckedUpdateInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: ordersUncheckedUpdateManyWithoutFoodNestedInput
    sub_food?: sub_foodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type foodCreateManyInput = {
    food_id?: number
    food_name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    is_deleted?: boolean
    type_id?: number | null
  }

  export type foodUpdateManyMutationInput = {
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type foodUncheckedUpdateManyInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type food_typeCreateInput = {
    type_name?: string | null
    food?: foodCreateNestedManyWithoutFood_typeInput
  }

  export type food_typeUncheckedCreateInput = {
    type_id?: number
    type_name?: string | null
    food?: foodUncheckedCreateNestedManyWithoutFood_typeInput
  }

  export type food_typeUpdateInput = {
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    food?: foodUpdateManyWithoutFood_typeNestedInput
  }

  export type food_typeUncheckedUpdateInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
    food?: foodUncheckedUpdateManyWithoutFood_typeNestedInput
  }

  export type food_typeCreateManyInput = {
    type_id?: number
    type_name?: string | null
  }

  export type food_typeUpdateManyMutationInput = {
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type food_typeUncheckedUpdateManyInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersCreateInput = {
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    food?: foodCreateNestedOneWithoutOrdersInput
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    order_id?: number
    user_id?: number | null
    food_id?: number | null
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
  }

  export type ordersUpdateInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    food?: foodUpdateOneWithoutOrdersNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersCreateManyInput = {
    order_id?: number
    user_id?: number | null
    food_id?: number | null
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
  }

  export type ordersUpdateManyMutationInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type restaurantCreateInput = {
    res_name?: string | null
    image?: string | null
    description?: string | null
  }

  export type restaurantUncheckedCreateInput = {
    res_id?: number
    res_name?: string | null
    image?: string | null
    description?: string | null
  }

  export type restaurantUpdateInput = {
    res_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type restaurantUncheckedUpdateInput = {
    res_id?: IntFieldUpdateOperationsInput | number
    res_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type restaurantCreateManyInput = {
    res_id?: number
    res_name?: string | null
    image?: string | null
    description?: string | null
  }

  export type restaurantUpdateManyMutationInput = {
    res_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type restaurantUncheckedUpdateManyInput = {
    res_id?: IntFieldUpdateOperationsInput | number
    res_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sub_foodCreateInput = {
    sub_name?: string | null
    sub_price?: number | null
    food?: foodCreateNestedOneWithoutSub_foodInput
  }

  export type sub_foodUncheckedCreateInput = {
    sub_id?: number
    sub_name?: string | null
    sub_price?: number | null
    food_id?: number | null
  }

  export type sub_foodUpdateInput = {
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
    food?: foodUpdateOneWithoutSub_foodNestedInput
  }

  export type sub_foodUncheckedUpdateInput = {
    sub_id?: IntFieldUpdateOperationsInput | number
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type sub_foodCreateManyInput = {
    sub_id?: number
    sub_name?: string | null
    sub_price?: number | null
    food_id?: number | null
  }

  export type sub_foodUpdateManyMutationInput = {
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type sub_foodUncheckedUpdateManyInput = {
    sub_id?: IntFieldUpdateOperationsInput | number
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type usersCreateInput = {
    full_name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    user_id?: number
    full_name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    user_id?: number
    full_name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
  }

  export type usersUpdateManyMutationInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Food_typeNullableScalarRelationFilter = {
    is?: food_typeWhereInput | null
    isNot?: food_typeWhereInput | null
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type Sub_foodListRelationFilter = {
    every?: sub_foodWhereInput
    some?: sub_foodWhereInput
    none?: sub_foodWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sub_foodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type foodOrderByRelevanceInput = {
    fields: foodOrderByRelevanceFieldEnum | foodOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type foodCountOrderByAggregateInput = {
    food_id?: SortOrder
    food_name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    description?: SortOrder
    is_deleted?: SortOrder
    type_id?: SortOrder
  }

  export type foodAvgOrderByAggregateInput = {
    food_id?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
  }

  export type foodMaxOrderByAggregateInput = {
    food_id?: SortOrder
    food_name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    description?: SortOrder
    is_deleted?: SortOrder
    type_id?: SortOrder
  }

  export type foodMinOrderByAggregateInput = {
    food_id?: SortOrder
    food_name?: SortOrder
    image?: SortOrder
    price?: SortOrder
    description?: SortOrder
    is_deleted?: SortOrder
    type_id?: SortOrder
  }

  export type foodSumOrderByAggregateInput = {
    food_id?: SortOrder
    price?: SortOrder
    type_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FoodListRelationFilter = {
    every?: foodWhereInput
    some?: foodWhereInput
    none?: foodWhereInput
  }

  export type foodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type food_typeOrderByRelevanceInput = {
    fields: food_typeOrderByRelevanceFieldEnum | food_typeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type food_typeCountOrderByAggregateInput = {
    type_id?: SortOrder
    type_name?: SortOrder
  }

  export type food_typeAvgOrderByAggregateInput = {
    type_id?: SortOrder
  }

  export type food_typeMaxOrderByAggregateInput = {
    type_id?: SortOrder
    type_name?: SortOrder
  }

  export type food_typeMinOrderByAggregateInput = {
    type_id?: SortOrder
    type_name?: SortOrder
  }

  export type food_typeSumOrderByAggregateInput = {
    type_id?: SortOrder
  }

  export type FoodNullableScalarRelationFilter = {
    is?: foodWhereInput | null
    isNot?: foodWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type ordersOrderByRelevanceInput = {
    fields: ordersOrderByRelevanceFieldEnum | ordersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ordersCountOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
    code?: SortOrder
    arr_sub_id?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
    code?: SortOrder
    arr_sub_id?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
    code?: SortOrder
    arr_sub_id?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    order_id?: SortOrder
    user_id?: SortOrder
    food_id?: SortOrder
    amount?: SortOrder
  }

  export type restaurantOrderByRelevanceInput = {
    fields: restaurantOrderByRelevanceFieldEnum | restaurantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type restaurantCountOrderByAggregateInput = {
    res_id?: SortOrder
    res_name?: SortOrder
    image?: SortOrder
    description?: SortOrder
  }

  export type restaurantAvgOrderByAggregateInput = {
    res_id?: SortOrder
  }

  export type restaurantMaxOrderByAggregateInput = {
    res_id?: SortOrder
    res_name?: SortOrder
    image?: SortOrder
    description?: SortOrder
  }

  export type restaurantMinOrderByAggregateInput = {
    res_id?: SortOrder
    res_name?: SortOrder
    image?: SortOrder
    description?: SortOrder
  }

  export type restaurantSumOrderByAggregateInput = {
    res_id?: SortOrder
  }

  export type sub_foodOrderByRelevanceInput = {
    fields: sub_foodOrderByRelevanceFieldEnum | sub_foodOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type sub_foodCountOrderByAggregateInput = {
    sub_id?: SortOrder
    sub_name?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrder
  }

  export type sub_foodAvgOrderByAggregateInput = {
    sub_id?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrder
  }

  export type sub_foodMaxOrderByAggregateInput = {
    sub_id?: SortOrder
    sub_name?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrder
  }

  export type sub_foodMinOrderByAggregateInput = {
    sub_id?: SortOrder
    sub_name?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrder
  }

  export type sub_foodSumOrderByAggregateInput = {
    sub_id?: SortOrder
    sub_price?: SortOrder
    food_id?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    user_id?: SortOrder
    age?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    user_id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar?: SortOrder
    age?: SortOrder
    totpSecret?: SortOrder
    googleId?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    user_id?: SortOrder
    age?: SortOrder
  }

  export type food_typeCreateNestedOneWithoutFoodInput = {
    create?: XOR<food_typeCreateWithoutFoodInput, food_typeUncheckedCreateWithoutFoodInput>
    connectOrCreate?: food_typeCreateOrConnectWithoutFoodInput
    connect?: food_typeWhereUniqueInput
  }

  export type ordersCreateNestedManyWithoutFoodInput = {
    create?: XOR<ordersCreateWithoutFoodInput, ordersUncheckedCreateWithoutFoodInput> | ordersCreateWithoutFoodInput[] | ordersUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutFoodInput | ordersCreateOrConnectWithoutFoodInput[]
    createMany?: ordersCreateManyFoodInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type sub_foodCreateNestedManyWithoutFoodInput = {
    create?: XOR<sub_foodCreateWithoutFoodInput, sub_foodUncheckedCreateWithoutFoodInput> | sub_foodCreateWithoutFoodInput[] | sub_foodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: sub_foodCreateOrConnectWithoutFoodInput | sub_foodCreateOrConnectWithoutFoodInput[]
    createMany?: sub_foodCreateManyFoodInputEnvelope
    connect?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<ordersCreateWithoutFoodInput, ordersUncheckedCreateWithoutFoodInput> | ordersCreateWithoutFoodInput[] | ordersUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutFoodInput | ordersCreateOrConnectWithoutFoodInput[]
    createMany?: ordersCreateManyFoodInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type sub_foodUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<sub_foodCreateWithoutFoodInput, sub_foodUncheckedCreateWithoutFoodInput> | sub_foodCreateWithoutFoodInput[] | sub_foodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: sub_foodCreateOrConnectWithoutFoodInput | sub_foodCreateOrConnectWithoutFoodInput[]
    createMany?: sub_foodCreateManyFoodInputEnvelope
    connect?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type food_typeUpdateOneWithoutFoodNestedInput = {
    create?: XOR<food_typeCreateWithoutFoodInput, food_typeUncheckedCreateWithoutFoodInput>
    connectOrCreate?: food_typeCreateOrConnectWithoutFoodInput
    upsert?: food_typeUpsertWithoutFoodInput
    disconnect?: food_typeWhereInput | boolean
    delete?: food_typeWhereInput | boolean
    connect?: food_typeWhereUniqueInput
    update?: XOR<XOR<food_typeUpdateToOneWithWhereWithoutFoodInput, food_typeUpdateWithoutFoodInput>, food_typeUncheckedUpdateWithoutFoodInput>
  }

  export type ordersUpdateManyWithoutFoodNestedInput = {
    create?: XOR<ordersCreateWithoutFoodInput, ordersUncheckedCreateWithoutFoodInput> | ordersCreateWithoutFoodInput[] | ordersUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutFoodInput | ordersCreateOrConnectWithoutFoodInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutFoodInput | ordersUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: ordersCreateManyFoodInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutFoodInput | ordersUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutFoodInput | ordersUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type sub_foodUpdateManyWithoutFoodNestedInput = {
    create?: XOR<sub_foodCreateWithoutFoodInput, sub_foodUncheckedCreateWithoutFoodInput> | sub_foodCreateWithoutFoodInput[] | sub_foodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: sub_foodCreateOrConnectWithoutFoodInput | sub_foodCreateOrConnectWithoutFoodInput[]
    upsert?: sub_foodUpsertWithWhereUniqueWithoutFoodInput | sub_foodUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: sub_foodCreateManyFoodInputEnvelope
    set?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    disconnect?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    delete?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    connect?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    update?: sub_foodUpdateWithWhereUniqueWithoutFoodInput | sub_foodUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: sub_foodUpdateManyWithWhereWithoutFoodInput | sub_foodUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: sub_foodScalarWhereInput | sub_foodScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<ordersCreateWithoutFoodInput, ordersUncheckedCreateWithoutFoodInput> | ordersCreateWithoutFoodInput[] | ordersUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutFoodInput | ordersCreateOrConnectWithoutFoodInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutFoodInput | ordersUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: ordersCreateManyFoodInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutFoodInput | ordersUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutFoodInput | ordersUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type sub_foodUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<sub_foodCreateWithoutFoodInput, sub_foodUncheckedCreateWithoutFoodInput> | sub_foodCreateWithoutFoodInput[] | sub_foodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: sub_foodCreateOrConnectWithoutFoodInput | sub_foodCreateOrConnectWithoutFoodInput[]
    upsert?: sub_foodUpsertWithWhereUniqueWithoutFoodInput | sub_foodUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: sub_foodCreateManyFoodInputEnvelope
    set?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    disconnect?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    delete?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    connect?: sub_foodWhereUniqueInput | sub_foodWhereUniqueInput[]
    update?: sub_foodUpdateWithWhereUniqueWithoutFoodInput | sub_foodUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: sub_foodUpdateManyWithWhereWithoutFoodInput | sub_foodUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: sub_foodScalarWhereInput | sub_foodScalarWhereInput[]
  }

  export type foodCreateNestedManyWithoutFood_typeInput = {
    create?: XOR<foodCreateWithoutFood_typeInput, foodUncheckedCreateWithoutFood_typeInput> | foodCreateWithoutFood_typeInput[] | foodUncheckedCreateWithoutFood_typeInput[]
    connectOrCreate?: foodCreateOrConnectWithoutFood_typeInput | foodCreateOrConnectWithoutFood_typeInput[]
    createMany?: foodCreateManyFood_typeInputEnvelope
    connect?: foodWhereUniqueInput | foodWhereUniqueInput[]
  }

  export type foodUncheckedCreateNestedManyWithoutFood_typeInput = {
    create?: XOR<foodCreateWithoutFood_typeInput, foodUncheckedCreateWithoutFood_typeInput> | foodCreateWithoutFood_typeInput[] | foodUncheckedCreateWithoutFood_typeInput[]
    connectOrCreate?: foodCreateOrConnectWithoutFood_typeInput | foodCreateOrConnectWithoutFood_typeInput[]
    createMany?: foodCreateManyFood_typeInputEnvelope
    connect?: foodWhereUniqueInput | foodWhereUniqueInput[]
  }

  export type foodUpdateManyWithoutFood_typeNestedInput = {
    create?: XOR<foodCreateWithoutFood_typeInput, foodUncheckedCreateWithoutFood_typeInput> | foodCreateWithoutFood_typeInput[] | foodUncheckedCreateWithoutFood_typeInput[]
    connectOrCreate?: foodCreateOrConnectWithoutFood_typeInput | foodCreateOrConnectWithoutFood_typeInput[]
    upsert?: foodUpsertWithWhereUniqueWithoutFood_typeInput | foodUpsertWithWhereUniqueWithoutFood_typeInput[]
    createMany?: foodCreateManyFood_typeInputEnvelope
    set?: foodWhereUniqueInput | foodWhereUniqueInput[]
    disconnect?: foodWhereUniqueInput | foodWhereUniqueInput[]
    delete?: foodWhereUniqueInput | foodWhereUniqueInput[]
    connect?: foodWhereUniqueInput | foodWhereUniqueInput[]
    update?: foodUpdateWithWhereUniqueWithoutFood_typeInput | foodUpdateWithWhereUniqueWithoutFood_typeInput[]
    updateMany?: foodUpdateManyWithWhereWithoutFood_typeInput | foodUpdateManyWithWhereWithoutFood_typeInput[]
    deleteMany?: foodScalarWhereInput | foodScalarWhereInput[]
  }

  export type foodUncheckedUpdateManyWithoutFood_typeNestedInput = {
    create?: XOR<foodCreateWithoutFood_typeInput, foodUncheckedCreateWithoutFood_typeInput> | foodCreateWithoutFood_typeInput[] | foodUncheckedCreateWithoutFood_typeInput[]
    connectOrCreate?: foodCreateOrConnectWithoutFood_typeInput | foodCreateOrConnectWithoutFood_typeInput[]
    upsert?: foodUpsertWithWhereUniqueWithoutFood_typeInput | foodUpsertWithWhereUniqueWithoutFood_typeInput[]
    createMany?: foodCreateManyFood_typeInputEnvelope
    set?: foodWhereUniqueInput | foodWhereUniqueInput[]
    disconnect?: foodWhereUniqueInput | foodWhereUniqueInput[]
    delete?: foodWhereUniqueInput | foodWhereUniqueInput[]
    connect?: foodWhereUniqueInput | foodWhereUniqueInput[]
    update?: foodUpdateWithWhereUniqueWithoutFood_typeInput | foodUpdateWithWhereUniqueWithoutFood_typeInput[]
    updateMany?: foodUpdateManyWithWhereWithoutFood_typeInput | foodUpdateManyWithWhereWithoutFood_typeInput[]
    deleteMany?: foodScalarWhereInput | foodScalarWhereInput[]
  }

  export type foodCreateNestedOneWithoutOrdersInput = {
    create?: XOR<foodCreateWithoutOrdersInput, foodUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: foodCreateOrConnectWithoutOrdersInput
    connect?: foodWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type foodUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<foodCreateWithoutOrdersInput, foodUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: foodCreateOrConnectWithoutOrdersInput
    upsert?: foodUpsertWithoutOrdersInput
    disconnect?: foodWhereInput | boolean
    delete?: foodWhereInput | boolean
    connect?: foodWhereUniqueInput
    update?: XOR<XOR<foodUpdateToOneWithWhereWithoutOrdersInput, foodUpdateWithoutOrdersInput>, foodUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type foodCreateNestedOneWithoutSub_foodInput = {
    create?: XOR<foodCreateWithoutSub_foodInput, foodUncheckedCreateWithoutSub_foodInput>
    connectOrCreate?: foodCreateOrConnectWithoutSub_foodInput
    connect?: foodWhereUniqueInput
  }

  export type foodUpdateOneWithoutSub_foodNestedInput = {
    create?: XOR<foodCreateWithoutSub_foodInput, foodUncheckedCreateWithoutSub_foodInput>
    connectOrCreate?: foodCreateOrConnectWithoutSub_foodInput
    upsert?: foodUpsertWithoutSub_foodInput
    disconnect?: foodWhereInput | boolean
    delete?: foodWhereInput | boolean
    connect?: foodWhereUniqueInput
    update?: XOR<XOR<foodUpdateToOneWithWhereWithoutSub_foodInput, foodUpdateWithoutSub_foodInput>, foodUncheckedUpdateWithoutSub_foodInput>
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type food_typeCreateWithoutFoodInput = {
    type_name?: string | null
  }

  export type food_typeUncheckedCreateWithoutFoodInput = {
    type_id?: number
    type_name?: string | null
  }

  export type food_typeCreateOrConnectWithoutFoodInput = {
    where: food_typeWhereUniqueInput
    create: XOR<food_typeCreateWithoutFoodInput, food_typeUncheckedCreateWithoutFoodInput>
  }

  export type ordersCreateWithoutFoodInput = {
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutFoodInput = {
    order_id?: number
    user_id?: number | null
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
  }

  export type ordersCreateOrConnectWithoutFoodInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutFoodInput, ordersUncheckedCreateWithoutFoodInput>
  }

  export type ordersCreateManyFoodInputEnvelope = {
    data: ordersCreateManyFoodInput | ordersCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type sub_foodCreateWithoutFoodInput = {
    sub_name?: string | null
    sub_price?: number | null
  }

  export type sub_foodUncheckedCreateWithoutFoodInput = {
    sub_id?: number
    sub_name?: string | null
    sub_price?: number | null
  }

  export type sub_foodCreateOrConnectWithoutFoodInput = {
    where: sub_foodWhereUniqueInput
    create: XOR<sub_foodCreateWithoutFoodInput, sub_foodUncheckedCreateWithoutFoodInput>
  }

  export type sub_foodCreateManyFoodInputEnvelope = {
    data: sub_foodCreateManyFoodInput | sub_foodCreateManyFoodInput[]
    skipDuplicates?: boolean
  }

  export type food_typeUpsertWithoutFoodInput = {
    update: XOR<food_typeUpdateWithoutFoodInput, food_typeUncheckedUpdateWithoutFoodInput>
    create: XOR<food_typeCreateWithoutFoodInput, food_typeUncheckedCreateWithoutFoodInput>
    where?: food_typeWhereInput
  }

  export type food_typeUpdateToOneWithWhereWithoutFoodInput = {
    where?: food_typeWhereInput
    data: XOR<food_typeUpdateWithoutFoodInput, food_typeUncheckedUpdateWithoutFoodInput>
  }

  export type food_typeUpdateWithoutFoodInput = {
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type food_typeUncheckedUpdateWithoutFoodInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    type_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersUpsertWithWhereUniqueWithoutFoodInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutFoodInput, ordersUncheckedUpdateWithoutFoodInput>
    create: XOR<ordersCreateWithoutFoodInput, ordersUncheckedCreateWithoutFoodInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutFoodInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutFoodInput, ordersUncheckedUpdateWithoutFoodInput>
  }

  export type ordersUpdateManyWithWhereWithoutFoodInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutFoodInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    order_id?: IntFilter<"orders"> | number
    user_id?: IntNullableFilter<"orders"> | number | null
    food_id?: IntNullableFilter<"orders"> | number | null
    amount?: IntNullableFilter<"orders"> | number | null
    code?: StringNullableFilter<"orders"> | string | null
    arr_sub_id?: StringNullableFilter<"orders"> | string | null
  }

  export type sub_foodUpsertWithWhereUniqueWithoutFoodInput = {
    where: sub_foodWhereUniqueInput
    update: XOR<sub_foodUpdateWithoutFoodInput, sub_foodUncheckedUpdateWithoutFoodInput>
    create: XOR<sub_foodCreateWithoutFoodInput, sub_foodUncheckedCreateWithoutFoodInput>
  }

  export type sub_foodUpdateWithWhereUniqueWithoutFoodInput = {
    where: sub_foodWhereUniqueInput
    data: XOR<sub_foodUpdateWithoutFoodInput, sub_foodUncheckedUpdateWithoutFoodInput>
  }

  export type sub_foodUpdateManyWithWhereWithoutFoodInput = {
    where: sub_foodScalarWhereInput
    data: XOR<sub_foodUpdateManyMutationInput, sub_foodUncheckedUpdateManyWithoutFoodInput>
  }

  export type sub_foodScalarWhereInput = {
    AND?: sub_foodScalarWhereInput | sub_foodScalarWhereInput[]
    OR?: sub_foodScalarWhereInput[]
    NOT?: sub_foodScalarWhereInput | sub_foodScalarWhereInput[]
    sub_id?: IntFilter<"sub_food"> | number
    sub_name?: StringNullableFilter<"sub_food"> | string | null
    sub_price?: FloatNullableFilter<"sub_food"> | number | null
    food_id?: IntNullableFilter<"sub_food"> | number | null
  }

  export type foodCreateWithoutFood_typeInput = {
    food_name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    is_deleted?: boolean
    orders?: ordersCreateNestedManyWithoutFoodInput
    sub_food?: sub_foodCreateNestedManyWithoutFoodInput
  }

  export type foodUncheckedCreateWithoutFood_typeInput = {
    food_id?: number
    food_name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    is_deleted?: boolean
    orders?: ordersUncheckedCreateNestedManyWithoutFoodInput
    sub_food?: sub_foodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type foodCreateOrConnectWithoutFood_typeInput = {
    where: foodWhereUniqueInput
    create: XOR<foodCreateWithoutFood_typeInput, foodUncheckedCreateWithoutFood_typeInput>
  }

  export type foodCreateManyFood_typeInputEnvelope = {
    data: foodCreateManyFood_typeInput | foodCreateManyFood_typeInput[]
    skipDuplicates?: boolean
  }

  export type foodUpsertWithWhereUniqueWithoutFood_typeInput = {
    where: foodWhereUniqueInput
    update: XOR<foodUpdateWithoutFood_typeInput, foodUncheckedUpdateWithoutFood_typeInput>
    create: XOR<foodCreateWithoutFood_typeInput, foodUncheckedCreateWithoutFood_typeInput>
  }

  export type foodUpdateWithWhereUniqueWithoutFood_typeInput = {
    where: foodWhereUniqueInput
    data: XOR<foodUpdateWithoutFood_typeInput, foodUncheckedUpdateWithoutFood_typeInput>
  }

  export type foodUpdateManyWithWhereWithoutFood_typeInput = {
    where: foodScalarWhereInput
    data: XOR<foodUpdateManyMutationInput, foodUncheckedUpdateManyWithoutFood_typeInput>
  }

  export type foodScalarWhereInput = {
    AND?: foodScalarWhereInput | foodScalarWhereInput[]
    OR?: foodScalarWhereInput[]
    NOT?: foodScalarWhereInput | foodScalarWhereInput[]
    food_id?: IntFilter<"food"> | number
    food_name?: StringNullableFilter<"food"> | string | null
    image?: StringNullableFilter<"food"> | string | null
    price?: FloatNullableFilter<"food"> | number | null
    description?: StringNullableFilter<"food"> | string | null
    is_deleted?: BoolFilter<"food"> | boolean
    type_id?: IntNullableFilter<"food"> | number | null
  }

  export type foodCreateWithoutOrdersInput = {
    food_name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    is_deleted?: boolean
    food_type?: food_typeCreateNestedOneWithoutFoodInput
    sub_food?: sub_foodCreateNestedManyWithoutFoodInput
  }

  export type foodUncheckedCreateWithoutOrdersInput = {
    food_id?: number
    food_name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    is_deleted?: boolean
    type_id?: number | null
    sub_food?: sub_foodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type foodCreateOrConnectWithoutOrdersInput = {
    where: foodWhereUniqueInput
    create: XOR<foodCreateWithoutOrdersInput, foodUncheckedCreateWithoutOrdersInput>
  }

  export type usersCreateWithoutOrdersInput = {
    full_name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    user_id?: number
    full_name?: string | null
    email?: string | null
    password?: string | null
    avatar?: string | null
    age?: number | null
    totpSecret?: string | null
    googleId?: string | null
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type foodUpsertWithoutOrdersInput = {
    update: XOR<foodUpdateWithoutOrdersInput, foodUncheckedUpdateWithoutOrdersInput>
    create: XOR<foodCreateWithoutOrdersInput, foodUncheckedCreateWithoutOrdersInput>
    where?: foodWhereInput
  }

  export type foodUpdateToOneWithWhereWithoutOrdersInput = {
    where?: foodWhereInput
    data: XOR<foodUpdateWithoutOrdersInput, foodUncheckedUpdateWithoutOrdersInput>
  }

  export type foodUpdateWithoutOrdersInput = {
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    food_type?: food_typeUpdateOneWithoutFoodNestedInput
    sub_food?: sub_foodUpdateManyWithoutFoodNestedInput
  }

  export type foodUncheckedUpdateWithoutOrdersInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    sub_food?: sub_foodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    totpSecret?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type foodCreateWithoutSub_foodInput = {
    food_name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    is_deleted?: boolean
    food_type?: food_typeCreateNestedOneWithoutFoodInput
    orders?: ordersCreateNestedManyWithoutFoodInput
  }

  export type foodUncheckedCreateWithoutSub_foodInput = {
    food_id?: number
    food_name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    is_deleted?: boolean
    type_id?: number | null
    orders?: ordersUncheckedCreateNestedManyWithoutFoodInput
  }

  export type foodCreateOrConnectWithoutSub_foodInput = {
    where: foodWhereUniqueInput
    create: XOR<foodCreateWithoutSub_foodInput, foodUncheckedCreateWithoutSub_foodInput>
  }

  export type foodUpsertWithoutSub_foodInput = {
    update: XOR<foodUpdateWithoutSub_foodInput, foodUncheckedUpdateWithoutSub_foodInput>
    create: XOR<foodCreateWithoutSub_foodInput, foodUncheckedCreateWithoutSub_foodInput>
    where?: foodWhereInput
  }

  export type foodUpdateToOneWithWhereWithoutSub_foodInput = {
    where?: foodWhereInput
    data: XOR<foodUpdateWithoutSub_foodInput, foodUncheckedUpdateWithoutSub_foodInput>
  }

  export type foodUpdateWithoutSub_foodInput = {
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    food_type?: food_typeUpdateOneWithoutFoodNestedInput
    orders?: ordersUpdateManyWithoutFoodNestedInput
  }

  export type foodUncheckedUpdateWithoutSub_foodInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    type_id?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: ordersUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type ordersCreateWithoutUsersInput = {
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
    food?: foodCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    order_id?: number
    food_id?: number | null
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type ordersCreateManyFoodInput = {
    order_id?: number
    user_id?: number | null
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
  }

  export type sub_foodCreateManyFoodInput = {
    sub_id?: number
    sub_name?: string | null
    sub_price?: number | null
  }

  export type ordersUpdateWithoutFoodInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutFoodInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersUncheckedUpdateManyWithoutFoodInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sub_foodUpdateWithoutFoodInput = {
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type sub_foodUncheckedUpdateWithoutFoodInput = {
    sub_id?: IntFieldUpdateOperationsInput | number
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type sub_foodUncheckedUpdateManyWithoutFoodInput = {
    sub_id?: IntFieldUpdateOperationsInput | number
    sub_name?: NullableStringFieldUpdateOperationsInput | string | null
    sub_price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type foodCreateManyFood_typeInput = {
    food_id?: number
    food_name?: string | null
    image?: string | null
    price?: number | null
    description?: string | null
    is_deleted?: boolean
  }

  export type foodUpdateWithoutFood_typeInput = {
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    orders?: ordersUpdateManyWithoutFoodNestedInput
    sub_food?: sub_foodUpdateManyWithoutFoodNestedInput
  }

  export type foodUncheckedUpdateWithoutFood_typeInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    orders?: ordersUncheckedUpdateManyWithoutFoodNestedInput
    sub_food?: sub_foodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type foodUncheckedUpdateManyWithoutFood_typeInput = {
    food_id?: IntFieldUpdateOperationsInput | number
    food_name?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ordersCreateManyUsersInput = {
    order_id?: number
    food_id?: number | null
    amount?: number | null
    code?: string | null
    arr_sub_id?: string | null
  }

  export type ordersUpdateWithoutUsersInput = {
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
    food?: foodUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    food_id?: NullableIntFieldUpdateOperationsInput | number | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    code?: NullableStringFieldUpdateOperationsInput | string | null
    arr_sub_id?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}