export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: number;
  uuid: string;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "customer" */
export type Customer = {
  __typename?: 'customer';
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  ip_address: Maybe<Scalars['String']>;
  last_name: Maybe<Scalars['String']>;
  /** An array relationship */
  orders: Array<Order>;
  /** An aggregate relationship */
  orders_aggregate: OrderAggregate;
  phone: Maybe<Scalars['String']>;
  username: Maybe<Scalars['String']>;
};


/** columns and relationships of "customer" */
export type CustomerOrdersArgs = {
  distinct_on: InputMaybe<Array<OrderSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<OrderOrderBy>>;
  where: InputMaybe<OrderBoolExp>;
};


/** columns and relationships of "customer" */
export type CustomerOrdersAggregateArgs = {
  distinct_on: InputMaybe<Array<OrderSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<OrderOrderBy>>;
  where: InputMaybe<OrderBoolExp>;
};

/** aggregated selection of "customer" */
export type CustomerAggregate = {
  __typename?: 'customer_aggregate';
  aggregate: Maybe<CustomerAggregateFields>;
  nodes: Array<Customer>;
};

/** aggregate fields of "customer" */
export type CustomerAggregateFields = {
  __typename?: 'customer_aggregate_fields';
  avg: Maybe<CustomerAvgFields>;
  count: Scalars['Int'];
  max: Maybe<CustomerMaxFields>;
  min: Maybe<CustomerMinFields>;
  stddev: Maybe<CustomerStddevFields>;
  stddev_pop: Maybe<CustomerStddevPopFields>;
  stddev_samp: Maybe<CustomerStddevSampFields>;
  sum: Maybe<CustomerSumFields>;
  var_pop: Maybe<CustomerVarPopFields>;
  var_samp: Maybe<CustomerVarSampFields>;
  variance: Maybe<CustomerVarianceFields>;
};


/** aggregate fields of "customer" */
export type CustomerAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<CustomerSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type CustomerAvgFields = {
  __typename?: 'customer_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "customer". All fields are combined with a logical 'AND'. */
export type CustomerBoolExp = {
  _and?: InputMaybe<Array<CustomerBoolExp>>;
  _not?: InputMaybe<CustomerBoolExp>;
  _or?: InputMaybe<Array<CustomerBoolExp>>;
  email?: InputMaybe<StringComparisonExp>;
  first_name?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  ip_address?: InputMaybe<StringComparisonExp>;
  last_name?: InputMaybe<StringComparisonExp>;
  orders?: InputMaybe<OrderBoolExp>;
  orders_aggregate?: InputMaybe<OrderAggregateBoolExp>;
  phone?: InputMaybe<StringComparisonExp>;
  username?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "customer" */
export enum CustomerConstraint {
  /** unique or primary key constraint on columns "id" */
  CustomerPkey = 'customer_pkey'
}

/** input type for incrementing numeric columns in table "customer" */
export type CustomerIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "customer" */
export type CustomerInsertInput = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  ip_address?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  orders?: InputMaybe<OrderArrRelInsertInput>;
  phone?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type CustomerMaxFields = {
  __typename?: 'customer_max_fields';
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  ip_address: Maybe<Scalars['String']>;
  last_name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  username: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type CustomerMinFields = {
  __typename?: 'customer_min_fields';
  email: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  ip_address: Maybe<Scalars['String']>;
  last_name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  username: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "customer" */
export type CustomerMutationResponse = {
  __typename?: 'customer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Customer>;
};

/** input type for inserting object relation for remote table "customer" */
export type CustomerObjRelInsertInput = {
  data: CustomerInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<CustomerOnConflict>;
};

/** on_conflict condition type for table "customer" */
export type CustomerOnConflict = {
  constraint: CustomerConstraint;
  update_columns?: Array<CustomerUpdateColumn>;
  where?: InputMaybe<CustomerBoolExp>;
};

/** Ordering options when selecting data from "customer". */
export type CustomerOrderBy = {
  email?: InputMaybe<OrderBy>;
  first_name?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  ip_address?: InputMaybe<OrderBy>;
  last_name?: InputMaybe<OrderBy>;
  orders_aggregate?: InputMaybe<OrderAggregateOrderBy>;
  phone?: InputMaybe<OrderBy>;
  username?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: customer */
export type CustomerPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "customer" */
export enum CustomerSelectColumn {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "customer" */
export type CustomerSetInput = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  ip_address?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type CustomerStddevFields = {
  __typename?: 'customer_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type CustomerStddevPopFields = {
  __typename?: 'customer_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type CustomerStddevSampFields = {
  __typename?: 'customer_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "customer" */
export type CustomerStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CustomerStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CustomerStreamCursorValueInput = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  ip_address?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type CustomerSumFields = {
  __typename?: 'customer_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "customer" */
export enum CustomerUpdateColumn {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IpAddress = 'ip_address',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Phone = 'phone',
  /** column name */
  Username = 'username'
}

export type CustomerUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CustomerIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CustomerSetInput>;
  /** filter the rows which have to be updated */
  where: CustomerBoolExp;
};

/** aggregate var_pop on columns */
export type CustomerVarPopFields = {
  __typename?: 'customer_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type CustomerVarSampFields = {
  __typename?: 'customer_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type CustomerVarianceFields = {
  __typename?: 'customer_variance_fields';
  id: Maybe<Scalars['Float']>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "customer" */
  delete_customer: Maybe<CustomerMutationResponse>;
  /** delete single row from the table: "customer" */
  delete_customer_by_pk: Maybe<Customer>;
  /** delete data from the table: "order" */
  delete_order: Maybe<OrderMutationResponse>;
  /** delete single row from the table: "order" */
  delete_order_by_pk: Maybe<Order>;
  /** delete data from the table: "race_drivers" */
  delete_race_drivers: Maybe<RaceDriversMutationResponse>;
  /** delete single row from the table: "race_drivers" */
  delete_race_drivers_by_pk: Maybe<RaceDrivers>;
  /** delete data from the table: "race_results" */
  delete_race_results: Maybe<RaceResultsMutationResponse>;
  /** delete single row from the table: "race_results" */
  delete_race_results_by_pk: Maybe<RaceResults>;
  /** delete data from the table: "race_teams" */
  delete_race_teams: Maybe<RaceTeamsMutationResponse>;
  /** delete single row from the table: "race_teams" */
  delete_race_teams_by_pk: Maybe<RaceTeams>;
  /** delete data from the table: "race_venue" */
  delete_race_venue: Maybe<RaceVenueMutationResponse>;
  /** delete single row from the table: "race_venue" */
  delete_race_venue_by_pk: Maybe<RaceVenue>;
  /** delete data from the table: "race_year" */
  delete_race_year: Maybe<RaceYearMutationResponse>;
  /** delete single row from the table: "race_year" */
  delete_race_year_by_pk: Maybe<RaceYear>;
  /** insert data into the table: "customer" */
  insert_customer: Maybe<CustomerMutationResponse>;
  /** insert a single row into the table: "customer" */
  insert_customer_one: Maybe<Customer>;
  /** insert data into the table: "order" */
  insert_order: Maybe<OrderMutationResponse>;
  /** insert a single row into the table: "order" */
  insert_order_one: Maybe<Order>;
  /** insert data into the table: "race_drivers" */
  insert_race_drivers: Maybe<RaceDriversMutationResponse>;
  /** insert a single row into the table: "race_drivers" */
  insert_race_drivers_one: Maybe<RaceDrivers>;
  /** insert data into the table: "race_results" */
  insert_race_results: Maybe<RaceResultsMutationResponse>;
  /** insert a single row into the table: "race_results" */
  insert_race_results_one: Maybe<RaceResults>;
  /** insert data into the table: "race_teams" */
  insert_race_teams: Maybe<RaceTeamsMutationResponse>;
  /** insert a single row into the table: "race_teams" */
  insert_race_teams_one: Maybe<RaceTeams>;
  /** insert data into the table: "race_venue" */
  insert_race_venue: Maybe<RaceVenueMutationResponse>;
  /** insert a single row into the table: "race_venue" */
  insert_race_venue_one: Maybe<RaceVenue>;
  /** insert data into the table: "race_year" */
  insert_race_year: Maybe<RaceYearMutationResponse>;
  /** insert a single row into the table: "race_year" */
  insert_race_year_one: Maybe<RaceYear>;
  /** update data of the table: "customer" */
  update_customer: Maybe<CustomerMutationResponse>;
  /** update single row of the table: "customer" */
  update_customer_by_pk: Maybe<Customer>;
  /** update multiples rows of table: "customer" */
  update_customer_many: Maybe<Array<Maybe<CustomerMutationResponse>>>;
  /** update data of the table: "order" */
  update_order: Maybe<OrderMutationResponse>;
  /** update single row of the table: "order" */
  update_order_by_pk: Maybe<Order>;
  /** update multiples rows of table: "order" */
  update_order_many: Maybe<Array<Maybe<OrderMutationResponse>>>;
  /** update data of the table: "race_drivers" */
  update_race_drivers: Maybe<RaceDriversMutationResponse>;
  /** update single row of the table: "race_drivers" */
  update_race_drivers_by_pk: Maybe<RaceDrivers>;
  /** update multiples rows of table: "race_drivers" */
  update_race_drivers_many: Maybe<Array<Maybe<RaceDriversMutationResponse>>>;
  /** update data of the table: "race_results" */
  update_race_results: Maybe<RaceResultsMutationResponse>;
  /** update single row of the table: "race_results" */
  update_race_results_by_pk: Maybe<RaceResults>;
  /** update multiples rows of table: "race_results" */
  update_race_results_many: Maybe<Array<Maybe<RaceResultsMutationResponse>>>;
  /** update data of the table: "race_teams" */
  update_race_teams: Maybe<RaceTeamsMutationResponse>;
  /** update single row of the table: "race_teams" */
  update_race_teams_by_pk: Maybe<RaceTeams>;
  /** update multiples rows of table: "race_teams" */
  update_race_teams_many: Maybe<Array<Maybe<RaceTeamsMutationResponse>>>;
  /** update data of the table: "race_venue" */
  update_race_venue: Maybe<RaceVenueMutationResponse>;
  /** update single row of the table: "race_venue" */
  update_race_venue_by_pk: Maybe<RaceVenue>;
  /** update multiples rows of table: "race_venue" */
  update_race_venue_many: Maybe<Array<Maybe<RaceVenueMutationResponse>>>;
  /** update data of the table: "race_year" */
  update_race_year: Maybe<RaceYearMutationResponse>;
  /** update single row of the table: "race_year" */
  update_race_year_by_pk: Maybe<RaceYear>;
  /** update multiples rows of table: "race_year" */
  update_race_year_many: Maybe<Array<Maybe<RaceYearMutationResponse>>>;
};


/** mutation root */
export type MutationRootDeleteCustomerArgs = {
  where: CustomerBoolExp;
};


/** mutation root */
export type MutationRootDeleteCustomerByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteOrderArgs = {
  where: OrderBoolExp;
};


/** mutation root */
export type MutationRootDeleteOrderByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteRaceDriversArgs = {
  where: RaceDriversBoolExp;
};


/** mutation root */
export type MutationRootDeleteRaceDriversByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteRaceResultsArgs = {
  where: RaceResultsBoolExp;
};


/** mutation root */
export type MutationRootDeleteRaceResultsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteRaceTeamsArgs = {
  where: RaceTeamsBoolExp;
};


/** mutation root */
export type MutationRootDeleteRaceTeamsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteRaceVenueArgs = {
  where: RaceVenueBoolExp;
};


/** mutation root */
export type MutationRootDeleteRaceVenueByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteRaceYearArgs = {
  where: RaceYearBoolExp;
};


/** mutation root */
export type MutationRootDeleteRaceYearByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootInsertCustomerArgs = {
  objects: Array<CustomerInsertInput>;
  on_conflict: InputMaybe<CustomerOnConflict>;
};


/** mutation root */
export type MutationRootInsertCustomerOneArgs = {
  object: CustomerInsertInput;
  on_conflict: InputMaybe<CustomerOnConflict>;
};


/** mutation root */
export type MutationRootInsertOrderArgs = {
  objects: Array<OrderInsertInput>;
  on_conflict: InputMaybe<OrderOnConflict>;
};


/** mutation root */
export type MutationRootInsertOrderOneArgs = {
  object: OrderInsertInput;
  on_conflict: InputMaybe<OrderOnConflict>;
};


/** mutation root */
export type MutationRootInsertRaceDriversArgs = {
  objects: Array<RaceDriversInsertInput>;
  on_conflict: InputMaybe<RaceDriversOnConflict>;
};


/** mutation root */
export type MutationRootInsertRaceDriversOneArgs = {
  object: RaceDriversInsertInput;
  on_conflict: InputMaybe<RaceDriversOnConflict>;
};


/** mutation root */
export type MutationRootInsertRaceResultsArgs = {
  objects: Array<RaceResultsInsertInput>;
  on_conflict: InputMaybe<RaceResultsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRaceResultsOneArgs = {
  object: RaceResultsInsertInput;
  on_conflict: InputMaybe<RaceResultsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRaceTeamsArgs = {
  objects: Array<RaceTeamsInsertInput>;
  on_conflict: InputMaybe<RaceTeamsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRaceTeamsOneArgs = {
  object: RaceTeamsInsertInput;
  on_conflict: InputMaybe<RaceTeamsOnConflict>;
};


/** mutation root */
export type MutationRootInsertRaceVenueArgs = {
  objects: Array<RaceVenueInsertInput>;
  on_conflict: InputMaybe<RaceVenueOnConflict>;
};


/** mutation root */
export type MutationRootInsertRaceVenueOneArgs = {
  object: RaceVenueInsertInput;
  on_conflict: InputMaybe<RaceVenueOnConflict>;
};


/** mutation root */
export type MutationRootInsertRaceYearArgs = {
  objects: Array<RaceYearInsertInput>;
  on_conflict: InputMaybe<RaceYearOnConflict>;
};


/** mutation root */
export type MutationRootInsertRaceYearOneArgs = {
  object: RaceYearInsertInput;
  on_conflict: InputMaybe<RaceYearOnConflict>;
};


/** mutation root */
export type MutationRootUpdateCustomerArgs = {
  _inc: InputMaybe<CustomerIncInput>;
  _set: InputMaybe<CustomerSetInput>;
  where: CustomerBoolExp;
};


/** mutation root */
export type MutationRootUpdateCustomerByPkArgs = {
  _inc: InputMaybe<CustomerIncInput>;
  _set: InputMaybe<CustomerSetInput>;
  pk_columns: CustomerPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateCustomerManyArgs = {
  updates: Array<CustomerUpdates>;
};


/** mutation root */
export type MutationRootUpdateOrderArgs = {
  _inc: InputMaybe<OrderIncInput>;
  _set: InputMaybe<OrderSetInput>;
  where: OrderBoolExp;
};


/** mutation root */
export type MutationRootUpdateOrderByPkArgs = {
  _inc: InputMaybe<OrderIncInput>;
  _set: InputMaybe<OrderSetInput>;
  pk_columns: OrderPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateOrderManyArgs = {
  updates: Array<OrderUpdates>;
};


/** mutation root */
export type MutationRootUpdateRaceDriversArgs = {
  _set: InputMaybe<RaceDriversSetInput>;
  where: RaceDriversBoolExp;
};


/** mutation root */
export type MutationRootUpdateRaceDriversByPkArgs = {
  _set: InputMaybe<RaceDriversSetInput>;
  pk_columns: RaceDriversPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRaceDriversManyArgs = {
  updates: Array<RaceDriversUpdates>;
};


/** mutation root */
export type MutationRootUpdateRaceResultsArgs = {
  _inc: InputMaybe<RaceResultsIncInput>;
  _set: InputMaybe<RaceResultsSetInput>;
  where: RaceResultsBoolExp;
};


/** mutation root */
export type MutationRootUpdateRaceResultsByPkArgs = {
  _inc: InputMaybe<RaceResultsIncInput>;
  _set: InputMaybe<RaceResultsSetInput>;
  pk_columns: RaceResultsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRaceResultsManyArgs = {
  updates: Array<RaceResultsUpdates>;
};


/** mutation root */
export type MutationRootUpdateRaceTeamsArgs = {
  _set: InputMaybe<RaceTeamsSetInput>;
  where: RaceTeamsBoolExp;
};


/** mutation root */
export type MutationRootUpdateRaceTeamsByPkArgs = {
  _set: InputMaybe<RaceTeamsSetInput>;
  pk_columns: RaceTeamsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRaceTeamsManyArgs = {
  updates: Array<RaceTeamsUpdates>;
};


/** mutation root */
export type MutationRootUpdateRaceVenueArgs = {
  _set: InputMaybe<RaceVenueSetInput>;
  where: RaceVenueBoolExp;
};


/** mutation root */
export type MutationRootUpdateRaceVenueByPkArgs = {
  _set: InputMaybe<RaceVenueSetInput>;
  pk_columns: RaceVenuePkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRaceVenueManyArgs = {
  updates: Array<RaceVenueUpdates>;
};


/** mutation root */
export type MutationRootUpdateRaceYearArgs = {
  _inc: InputMaybe<RaceYearIncInput>;
  _set: InputMaybe<RaceYearSetInput>;
  where: RaceYearBoolExp;
};


/** mutation root */
export type MutationRootUpdateRaceYearByPkArgs = {
  _inc: InputMaybe<RaceYearIncInput>;
  _set: InputMaybe<RaceYearSetInput>;
  pk_columns: RaceYearPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateRaceYearManyArgs = {
  updates: Array<RaceYearUpdates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "order" */
export type Order = {
  __typename?: 'order';
  /** An object relationship */
  customer: Maybe<Customer>;
  customer_id: Maybe<Scalars['Int']>;
  discount_price: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  order_date: Maybe<Scalars['String']>;
  product: Maybe<Scalars['String']>;
  purchase_price: Maybe<Scalars['String']>;
  transaction_id: Maybe<Scalars['String']>;
};

/** aggregated selection of "order" */
export type OrderAggregate = {
  __typename?: 'order_aggregate';
  aggregate: Maybe<OrderAggregateFields>;
  nodes: Array<Order>;
};

export type OrderAggregateBoolExp = {
  count?: InputMaybe<OrderAggregateBoolExpCount>;
};

export type OrderAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<OrderSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OrderBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "order" */
export type OrderAggregateFields = {
  __typename?: 'order_aggregate_fields';
  avg: Maybe<OrderAvgFields>;
  count: Scalars['Int'];
  max: Maybe<OrderMaxFields>;
  min: Maybe<OrderMinFields>;
  stddev: Maybe<OrderStddevFields>;
  stddev_pop: Maybe<OrderStddevPopFields>;
  stddev_samp: Maybe<OrderStddevSampFields>;
  sum: Maybe<OrderSumFields>;
  var_pop: Maybe<OrderVarPopFields>;
  var_samp: Maybe<OrderVarSampFields>;
  variance: Maybe<OrderVarianceFields>;
};


/** aggregate fields of "order" */
export type OrderAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<OrderSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order" */
export type OrderAggregateOrderBy = {
  avg?: InputMaybe<OrderAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<OrderMaxOrderBy>;
  min?: InputMaybe<OrderMinOrderBy>;
  stddev?: InputMaybe<OrderStddevOrderBy>;
  stddev_pop?: InputMaybe<OrderStddevPopOrderBy>;
  stddev_samp?: InputMaybe<OrderStddevSampOrderBy>;
  sum?: InputMaybe<OrderSumOrderBy>;
  var_pop?: InputMaybe<OrderVarPopOrderBy>;
  var_samp?: InputMaybe<OrderVarSampOrderBy>;
  variance?: InputMaybe<OrderVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "order" */
export type OrderArrRelInsertInput = {
  data: Array<OrderInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<OrderOnConflict>;
};

/** aggregate avg on columns */
export type OrderAvgFields = {
  __typename?: 'order_avg_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order" */
export type OrderAvgOrderBy = {
  customer_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type OrderBoolExp = {
  _and?: InputMaybe<Array<OrderBoolExp>>;
  _not?: InputMaybe<OrderBoolExp>;
  _or?: InputMaybe<Array<OrderBoolExp>>;
  customer?: InputMaybe<CustomerBoolExp>;
  customer_id?: InputMaybe<IntComparisonExp>;
  discount_price?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  order_date?: InputMaybe<StringComparisonExp>;
  product?: InputMaybe<StringComparisonExp>;
  purchase_price?: InputMaybe<StringComparisonExp>;
  transaction_id?: InputMaybe<StringComparisonExp>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** unique or primary key constraints on table "order" */
export enum OrderConstraint {
  /** unique or primary key constraint on columns "id" */
  OrderPkey = 'order_pkey'
}

/** input type for incrementing numeric columns in table "order" */
export type OrderIncInput = {
  customer_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order" */
export type OrderInsertInput = {
  customer?: InputMaybe<CustomerObjRelInsertInput>;
  customer_id?: InputMaybe<Scalars['Int']>;
  discount_price?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  order_date?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Scalars['String']>;
  purchase_price?: InputMaybe<Scalars['String']>;
  transaction_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type OrderMaxFields = {
  __typename?: 'order_max_fields';
  customer_id: Maybe<Scalars['Int']>;
  discount_price: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  order_date: Maybe<Scalars['String']>;
  product: Maybe<Scalars['String']>;
  purchase_price: Maybe<Scalars['String']>;
  transaction_id: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "order" */
export type OrderMaxOrderBy = {
  customer_id?: InputMaybe<OrderBy>;
  discount_price?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order_date?: InputMaybe<OrderBy>;
  product?: InputMaybe<OrderBy>;
  purchase_price?: InputMaybe<OrderBy>;
  transaction_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type OrderMinFields = {
  __typename?: 'order_min_fields';
  customer_id: Maybe<Scalars['Int']>;
  discount_price: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  order_date: Maybe<Scalars['String']>;
  product: Maybe<Scalars['String']>;
  purchase_price: Maybe<Scalars['String']>;
  transaction_id: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "order" */
export type OrderMinOrderBy = {
  customer_id?: InputMaybe<OrderBy>;
  discount_price?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order_date?: InputMaybe<OrderBy>;
  product?: InputMaybe<OrderBy>;
  purchase_price?: InputMaybe<OrderBy>;
  transaction_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "order" */
export type OrderMutationResponse = {
  __typename?: 'order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order>;
};

/** on_conflict condition type for table "order" */
export type OrderOnConflict = {
  constraint: OrderConstraint;
  update_columns?: Array<OrderUpdateColumn>;
  where?: InputMaybe<OrderBoolExp>;
};

/** Ordering options when selecting data from "order". */
export type OrderOrderBy = {
  customer?: InputMaybe<CustomerOrderBy>;
  customer_id?: InputMaybe<OrderBy>;
  discount_price?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order_date?: InputMaybe<OrderBy>;
  product?: InputMaybe<OrderBy>;
  purchase_price?: InputMaybe<OrderBy>;
  transaction_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: order */
export type OrderPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "order" */
export enum OrderSelectColumn {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DiscountPrice = 'discount_price',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  Product = 'product',
  /** column name */
  PurchasePrice = 'purchase_price',
  /** column name */
  TransactionId = 'transaction_id'
}

/** input type for updating data in table "order" */
export type OrderSetInput = {
  customer_id?: InputMaybe<Scalars['Int']>;
  discount_price?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  order_date?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Scalars['String']>;
  purchase_price?: InputMaybe<Scalars['String']>;
  transaction_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type OrderStddevFields = {
  __typename?: 'order_stddev_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order" */
export type OrderStddevOrderBy = {
  customer_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type OrderStddevPopFields = {
  __typename?: 'order_stddev_pop_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order" */
export type OrderStddevPopOrderBy = {
  customer_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type OrderStddevSampFields = {
  __typename?: 'order_stddev_samp_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order" */
export type OrderStddevSampOrderBy = {
  customer_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "order" */
export type OrderStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: OrderStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type OrderStreamCursorValueInput = {
  customer_id?: InputMaybe<Scalars['Int']>;
  discount_price?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  order_date?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Scalars['String']>;
  purchase_price?: InputMaybe<Scalars['String']>;
  transaction_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type OrderSumFields = {
  __typename?: 'order_sum_fields';
  customer_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order" */
export type OrderSumOrderBy = {
  customer_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** update columns of table "order" */
export enum OrderUpdateColumn {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DiscountPrice = 'discount_price',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDate = 'order_date',
  /** column name */
  Product = 'product',
  /** column name */
  PurchasePrice = 'purchase_price',
  /** column name */
  TransactionId = 'transaction_id'
}

export type OrderUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<OrderIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OrderSetInput>;
  /** filter the rows which have to be updated */
  where: OrderBoolExp;
};

/** aggregate var_pop on columns */
export type OrderVarPopFields = {
  __typename?: 'order_var_pop_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order" */
export type OrderVarPopOrderBy = {
  customer_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type OrderVarSampFields = {
  __typename?: 'order_var_samp_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order" */
export type OrderVarSampOrderBy = {
  customer_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type OrderVarianceFields = {
  __typename?: 'order_variance_fields';
  customer_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order" */
export type OrderVarianceOrderBy = {
  customer_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: CustomerAggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk: Maybe<Customer>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: OrderAggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk: Maybe<Order>;
  /** fetch data from the table: "race_drivers" */
  race_drivers: Array<RaceDrivers>;
  /** fetch aggregated fields from the table: "race_drivers" */
  race_drivers_aggregate: RaceDriversAggregate;
  /** fetch data from the table: "race_drivers" using primary key columns */
  race_drivers_by_pk: Maybe<RaceDrivers>;
  /** fetch data from the table: "race_results" */
  race_results: Array<RaceResults>;
  /** fetch aggregated fields from the table: "race_results" */
  race_results_aggregate: RaceResultsAggregate;
  /** fetch data from the table: "race_results" using primary key columns */
  race_results_by_pk: Maybe<RaceResults>;
  /** fetch data from the table: "race_teams" */
  race_teams: Array<RaceTeams>;
  /** fetch aggregated fields from the table: "race_teams" */
  race_teams_aggregate: RaceTeamsAggregate;
  /** fetch data from the table: "race_teams" using primary key columns */
  race_teams_by_pk: Maybe<RaceTeams>;
  /** fetch data from the table: "race_venue" */
  race_venue: Array<RaceVenue>;
  /** fetch aggregated fields from the table: "race_venue" */
  race_venue_aggregate: RaceVenueAggregate;
  /** fetch data from the table: "race_venue" using primary key columns */
  race_venue_by_pk: Maybe<RaceVenue>;
  /** fetch data from the table: "race_year" */
  race_year: Array<RaceYear>;
  /** fetch aggregated fields from the table: "race_year" */
  race_year_aggregate: RaceYearAggregate;
  /** fetch data from the table: "race_year" using primary key columns */
  race_year_by_pk: Maybe<RaceYear>;
};


export type QueryRootCustomerArgs = {
  distinct_on: InputMaybe<Array<CustomerSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<CustomerOrderBy>>;
  where: InputMaybe<CustomerBoolExp>;
};


export type QueryRootCustomerAggregateArgs = {
  distinct_on: InputMaybe<Array<CustomerSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<CustomerOrderBy>>;
  where: InputMaybe<CustomerBoolExp>;
};


export type QueryRootCustomerByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootOrderArgs = {
  distinct_on: InputMaybe<Array<OrderSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<OrderOrderBy>>;
  where: InputMaybe<OrderBoolExp>;
};


export type QueryRootOrderAggregateArgs = {
  distinct_on: InputMaybe<Array<OrderSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<OrderOrderBy>>;
  where: InputMaybe<OrderBoolExp>;
};


export type QueryRootOrderByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootRaceDriversArgs = {
  distinct_on: InputMaybe<Array<RaceDriversSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceDriversOrderBy>>;
  where: InputMaybe<RaceDriversBoolExp>;
};


export type QueryRootRaceDriversAggregateArgs = {
  distinct_on: InputMaybe<Array<RaceDriversSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceDriversOrderBy>>;
  where: InputMaybe<RaceDriversBoolExp>;
};


export type QueryRootRaceDriversByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootRaceResultsArgs = {
  distinct_on: InputMaybe<Array<RaceResultsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceResultsOrderBy>>;
  where: InputMaybe<RaceResultsBoolExp>;
};


export type QueryRootRaceResultsAggregateArgs = {
  distinct_on: InputMaybe<Array<RaceResultsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceResultsOrderBy>>;
  where: InputMaybe<RaceResultsBoolExp>;
};


export type QueryRootRaceResultsByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootRaceTeamsArgs = {
  distinct_on: InputMaybe<Array<RaceTeamsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceTeamsOrderBy>>;
  where: InputMaybe<RaceTeamsBoolExp>;
};


export type QueryRootRaceTeamsAggregateArgs = {
  distinct_on: InputMaybe<Array<RaceTeamsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceTeamsOrderBy>>;
  where: InputMaybe<RaceTeamsBoolExp>;
};


export type QueryRootRaceTeamsByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootRaceVenueArgs = {
  distinct_on: InputMaybe<Array<RaceVenueSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceVenueOrderBy>>;
  where: InputMaybe<RaceVenueBoolExp>;
};


export type QueryRootRaceVenueAggregateArgs = {
  distinct_on: InputMaybe<Array<RaceVenueSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceVenueOrderBy>>;
  where: InputMaybe<RaceVenueBoolExp>;
};


export type QueryRootRaceVenueByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootRaceYearArgs = {
  distinct_on: InputMaybe<Array<RaceYearSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceYearOrderBy>>;
  where: InputMaybe<RaceYearBoolExp>;
};


export type QueryRootRaceYearAggregateArgs = {
  distinct_on: InputMaybe<Array<RaceYearSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceYearOrderBy>>;
  where: InputMaybe<RaceYearBoolExp>;
};


export type QueryRootRaceYearByPkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "race_drivers" */
export type RaceDrivers = {
  __typename?: 'race_drivers';
  driver: Scalars['String'];
  id: Scalars['uuid'];
};

/** aggregated selection of "race_drivers" */
export type RaceDriversAggregate = {
  __typename?: 'race_drivers_aggregate';
  aggregate: Maybe<RaceDriversAggregateFields>;
  nodes: Array<RaceDrivers>;
};

/** aggregate fields of "race_drivers" */
export type RaceDriversAggregateFields = {
  __typename?: 'race_drivers_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<RaceDriversMaxFields>;
  min: Maybe<RaceDriversMinFields>;
};


/** aggregate fields of "race_drivers" */
export type RaceDriversAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<RaceDriversSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "race_drivers". All fields are combined with a logical 'AND'. */
export type RaceDriversBoolExp = {
  _and?: InputMaybe<Array<RaceDriversBoolExp>>;
  _not?: InputMaybe<RaceDriversBoolExp>;
  _or?: InputMaybe<Array<RaceDriversBoolExp>>;
  driver?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "race_drivers" */
export enum RaceDriversConstraint {
  /** unique or primary key constraint on columns "id" */
  RaceDriversPkey = 'race_drivers_pkey'
}

/** input type for inserting data into table "race_drivers" */
export type RaceDriversInsertInput = {
  driver?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type RaceDriversMaxFields = {
  __typename?: 'race_drivers_max_fields';
  driver: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type RaceDriversMinFields = {
  __typename?: 'race_drivers_min_fields';
  driver: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "race_drivers" */
export type RaceDriversMutationResponse = {
  __typename?: 'race_drivers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RaceDrivers>;
};

/** on_conflict condition type for table "race_drivers" */
export type RaceDriversOnConflict = {
  constraint: RaceDriversConstraint;
  update_columns?: Array<RaceDriversUpdateColumn>;
  where?: InputMaybe<RaceDriversBoolExp>;
};

/** Ordering options when selecting data from "race_drivers". */
export type RaceDriversOrderBy = {
  driver?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: race_drivers */
export type RaceDriversPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "race_drivers" */
export enum RaceDriversSelectColumn {
  /** column name */
  Driver = 'driver',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "race_drivers" */
export type RaceDriversSetInput = {
  driver?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "race_drivers" */
export type RaceDriversStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: RaceDriversStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RaceDriversStreamCursorValueInput = {
  driver?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "race_drivers" */
export enum RaceDriversUpdateColumn {
  /** column name */
  Driver = 'driver',
  /** column name */
  Id = 'id'
}

export type RaceDriversUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RaceDriversSetInput>;
  /** filter the rows which have to be updated */
  where: RaceDriversBoolExp;
};

/** columns and relationships of "race_results" */
export type RaceResults = {
  __typename?: 'race_results';
  car: Scalars['String'];
  date: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  laps: Scalars['numeric'];
  time: Maybe<Scalars['String']>;
  venue: Scalars['String'];
  winner: Maybe<Scalars['String']>;
  year: Scalars['numeric'];
};

/** aggregated selection of "race_results" */
export type RaceResultsAggregate = {
  __typename?: 'race_results_aggregate';
  aggregate: Maybe<RaceResultsAggregateFields>;
  nodes: Array<RaceResults>;
};

export type RaceResultsAggregateBoolExp = {
  count?: InputMaybe<RaceResultsAggregateBoolExpCount>;
};

export type RaceResultsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RaceResultsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<RaceResultsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "race_results" */
export type RaceResultsAggregateFields = {
  __typename?: 'race_results_aggregate_fields';
  avg: Maybe<RaceResultsAvgFields>;
  count: Scalars['Int'];
  max: Maybe<RaceResultsMaxFields>;
  min: Maybe<RaceResultsMinFields>;
  stddev: Maybe<RaceResultsStddevFields>;
  stddev_pop: Maybe<RaceResultsStddevPopFields>;
  stddev_samp: Maybe<RaceResultsStddevSampFields>;
  sum: Maybe<RaceResultsSumFields>;
  var_pop: Maybe<RaceResultsVarPopFields>;
  var_samp: Maybe<RaceResultsVarSampFields>;
  variance: Maybe<RaceResultsVarianceFields>;
};


/** aggregate fields of "race_results" */
export type RaceResultsAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<RaceResultsSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "race_results" */
export type RaceResultsAggregateOrderBy = {
  avg?: InputMaybe<RaceResultsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<RaceResultsMaxOrderBy>;
  min?: InputMaybe<RaceResultsMinOrderBy>;
  stddev?: InputMaybe<RaceResultsStddevOrderBy>;
  stddev_pop?: InputMaybe<RaceResultsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<RaceResultsStddevSampOrderBy>;
  sum?: InputMaybe<RaceResultsSumOrderBy>;
  var_pop?: InputMaybe<RaceResultsVarPopOrderBy>;
  var_samp?: InputMaybe<RaceResultsVarSampOrderBy>;
  variance?: InputMaybe<RaceResultsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "race_results" */
export type RaceResultsArrRelInsertInput = {
  data: Array<RaceResultsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<RaceResultsOnConflict>;
};

/** aggregate avg on columns */
export type RaceResultsAvgFields = {
  __typename?: 'race_results_avg_fields';
  laps: Maybe<Scalars['Float']>;
  year: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "race_results" */
export type RaceResultsAvgOrderBy = {
  laps?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "race_results". All fields are combined with a logical 'AND'. */
export type RaceResultsBoolExp = {
  _and?: InputMaybe<Array<RaceResultsBoolExp>>;
  _not?: InputMaybe<RaceResultsBoolExp>;
  _or?: InputMaybe<Array<RaceResultsBoolExp>>;
  car?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  laps?: InputMaybe<NumericComparisonExp>;
  time?: InputMaybe<StringComparisonExp>;
  venue?: InputMaybe<StringComparisonExp>;
  winner?: InputMaybe<StringComparisonExp>;
  year?: InputMaybe<NumericComparisonExp>;
};

/** unique or primary key constraints on table "race_results" */
export enum RaceResultsConstraint {
  /** unique or primary key constraint on columns "id" */
  RaceResultsPkey = 'race_results_pkey'
}

/** input type for incrementing numeric columns in table "race_results" */
export type RaceResultsIncInput = {
  laps?: InputMaybe<Scalars['numeric']>;
  year?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "race_results" */
export type RaceResultsInsertInput = {
  car?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  laps?: InputMaybe<Scalars['numeric']>;
  time?: InputMaybe<Scalars['String']>;
  venue?: InputMaybe<Scalars['String']>;
  winner?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type RaceResultsMaxFields = {
  __typename?: 'race_results_max_fields';
  car: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  laps: Maybe<Scalars['numeric']>;
  time: Maybe<Scalars['String']>;
  venue: Maybe<Scalars['String']>;
  winner: Maybe<Scalars['String']>;
  year: Maybe<Scalars['numeric']>;
};

/** order by max() on columns of table "race_results" */
export type RaceResultsMaxOrderBy = {
  car?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  laps?: InputMaybe<OrderBy>;
  time?: InputMaybe<OrderBy>;
  venue?: InputMaybe<OrderBy>;
  winner?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type RaceResultsMinFields = {
  __typename?: 'race_results_min_fields';
  car: Maybe<Scalars['String']>;
  date: Maybe<Scalars['String']>;
  id: Maybe<Scalars['uuid']>;
  laps: Maybe<Scalars['numeric']>;
  time: Maybe<Scalars['String']>;
  venue: Maybe<Scalars['String']>;
  winner: Maybe<Scalars['String']>;
  year: Maybe<Scalars['numeric']>;
};

/** order by min() on columns of table "race_results" */
export type RaceResultsMinOrderBy = {
  car?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  laps?: InputMaybe<OrderBy>;
  time?: InputMaybe<OrderBy>;
  venue?: InputMaybe<OrderBy>;
  winner?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "race_results" */
export type RaceResultsMutationResponse = {
  __typename?: 'race_results_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RaceResults>;
};

/** on_conflict condition type for table "race_results" */
export type RaceResultsOnConflict = {
  constraint: RaceResultsConstraint;
  update_columns?: Array<RaceResultsUpdateColumn>;
  where?: InputMaybe<RaceResultsBoolExp>;
};

/** Ordering options when selecting data from "race_results". */
export type RaceResultsOrderBy = {
  car?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  laps?: InputMaybe<OrderBy>;
  time?: InputMaybe<OrderBy>;
  venue?: InputMaybe<OrderBy>;
  winner?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: race_results */
export type RaceResultsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "race_results" */
export enum RaceResultsSelectColumn {
  /** column name */
  Car = 'car',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Laps = 'laps',
  /** column name */
  Time = 'time',
  /** column name */
  Venue = 'venue',
  /** column name */
  Winner = 'winner',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "race_results" */
export type RaceResultsSetInput = {
  car?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  laps?: InputMaybe<Scalars['numeric']>;
  time?: InputMaybe<Scalars['String']>;
  venue?: InputMaybe<Scalars['String']>;
  winner?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type RaceResultsStddevFields = {
  __typename?: 'race_results_stddev_fields';
  laps: Maybe<Scalars['Float']>;
  year: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "race_results" */
export type RaceResultsStddevOrderBy = {
  laps?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type RaceResultsStddevPopFields = {
  __typename?: 'race_results_stddev_pop_fields';
  laps: Maybe<Scalars['Float']>;
  year: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "race_results" */
export type RaceResultsStddevPopOrderBy = {
  laps?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type RaceResultsStddevSampFields = {
  __typename?: 'race_results_stddev_samp_fields';
  laps: Maybe<Scalars['Float']>;
  year: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "race_results" */
export type RaceResultsStddevSampOrderBy = {
  laps?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "race_results" */
export type RaceResultsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: RaceResultsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RaceResultsStreamCursorValueInput = {
  car?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  laps?: InputMaybe<Scalars['numeric']>;
  time?: InputMaybe<Scalars['String']>;
  venue?: InputMaybe<Scalars['String']>;
  winner?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type RaceResultsSumFields = {
  __typename?: 'race_results_sum_fields';
  laps: Maybe<Scalars['numeric']>;
  year: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "race_results" */
export type RaceResultsSumOrderBy = {
  laps?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** update columns of table "race_results" */
export enum RaceResultsUpdateColumn {
  /** column name */
  Car = 'car',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Laps = 'laps',
  /** column name */
  Time = 'time',
  /** column name */
  Venue = 'venue',
  /** column name */
  Winner = 'winner',
  /** column name */
  Year = 'year'
}

export type RaceResultsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<RaceResultsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RaceResultsSetInput>;
  /** filter the rows which have to be updated */
  where: RaceResultsBoolExp;
};

/** aggregate var_pop on columns */
export type RaceResultsVarPopFields = {
  __typename?: 'race_results_var_pop_fields';
  laps: Maybe<Scalars['Float']>;
  year: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "race_results" */
export type RaceResultsVarPopOrderBy = {
  laps?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type RaceResultsVarSampFields = {
  __typename?: 'race_results_var_samp_fields';
  laps: Maybe<Scalars['Float']>;
  year: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "race_results" */
export type RaceResultsVarSampOrderBy = {
  laps?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type RaceResultsVarianceFields = {
  __typename?: 'race_results_variance_fields';
  laps: Maybe<Scalars['Float']>;
  year: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "race_results" */
export type RaceResultsVarianceOrderBy = {
  laps?: InputMaybe<OrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** columns and relationships of "race_teams" */
export type RaceTeams = {
  __typename?: 'race_teams';
  id: Scalars['uuid'];
  team: Scalars['String'];
};

/** aggregated selection of "race_teams" */
export type RaceTeamsAggregate = {
  __typename?: 'race_teams_aggregate';
  aggregate: Maybe<RaceTeamsAggregateFields>;
  nodes: Array<RaceTeams>;
};

/** aggregate fields of "race_teams" */
export type RaceTeamsAggregateFields = {
  __typename?: 'race_teams_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<RaceTeamsMaxFields>;
  min: Maybe<RaceTeamsMinFields>;
};


/** aggregate fields of "race_teams" */
export type RaceTeamsAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<RaceTeamsSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "race_teams". All fields are combined with a logical 'AND'. */
export type RaceTeamsBoolExp = {
  _and?: InputMaybe<Array<RaceTeamsBoolExp>>;
  _not?: InputMaybe<RaceTeamsBoolExp>;
  _or?: InputMaybe<Array<RaceTeamsBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  team?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "race_teams" */
export enum RaceTeamsConstraint {
  /** unique or primary key constraint on columns "id" */
  RaceTeamsPkey = 'race_teams_pkey'
}

/** input type for inserting data into table "race_teams" */
export type RaceTeamsInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  team?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type RaceTeamsMaxFields = {
  __typename?: 'race_teams_max_fields';
  id: Maybe<Scalars['uuid']>;
  team: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type RaceTeamsMinFields = {
  __typename?: 'race_teams_min_fields';
  id: Maybe<Scalars['uuid']>;
  team: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "race_teams" */
export type RaceTeamsMutationResponse = {
  __typename?: 'race_teams_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RaceTeams>;
};

/** on_conflict condition type for table "race_teams" */
export type RaceTeamsOnConflict = {
  constraint: RaceTeamsConstraint;
  update_columns?: Array<RaceTeamsUpdateColumn>;
  where?: InputMaybe<RaceTeamsBoolExp>;
};

/** Ordering options when selecting data from "race_teams". */
export type RaceTeamsOrderBy = {
  id?: InputMaybe<OrderBy>;
  team?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: race_teams */
export type RaceTeamsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "race_teams" */
export enum RaceTeamsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Team = 'team'
}

/** input type for updating data in table "race_teams" */
export type RaceTeamsSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  team?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "race_teams" */
export type RaceTeamsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: RaceTeamsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RaceTeamsStreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  team?: InputMaybe<Scalars['String']>;
};

/** update columns of table "race_teams" */
export enum RaceTeamsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Team = 'team'
}

export type RaceTeamsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RaceTeamsSetInput>;
  /** filter the rows which have to be updated */
  where: RaceTeamsBoolExp;
};

/** columns and relationships of "race_venue" */
export type RaceVenue = {
  __typename?: 'race_venue';
  id: Scalars['uuid'];
  venue: Scalars['String'];
};

/** aggregated selection of "race_venue" */
export type RaceVenueAggregate = {
  __typename?: 'race_venue_aggregate';
  aggregate: Maybe<RaceVenueAggregateFields>;
  nodes: Array<RaceVenue>;
};

/** aggregate fields of "race_venue" */
export type RaceVenueAggregateFields = {
  __typename?: 'race_venue_aggregate_fields';
  count: Scalars['Int'];
  max: Maybe<RaceVenueMaxFields>;
  min: Maybe<RaceVenueMinFields>;
};


/** aggregate fields of "race_venue" */
export type RaceVenueAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<RaceVenueSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "race_venue". All fields are combined with a logical 'AND'. */
export type RaceVenueBoolExp = {
  _and?: InputMaybe<Array<RaceVenueBoolExp>>;
  _not?: InputMaybe<RaceVenueBoolExp>;
  _or?: InputMaybe<Array<RaceVenueBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  venue?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "race_venue" */
export enum RaceVenueConstraint {
  /** unique or primary key constraint on columns "id" */
  RaceVenuePkey = 'race_venue_pkey'
}

/** input type for inserting data into table "race_venue" */
export type RaceVenueInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  venue?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type RaceVenueMaxFields = {
  __typename?: 'race_venue_max_fields';
  id: Maybe<Scalars['uuid']>;
  venue: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type RaceVenueMinFields = {
  __typename?: 'race_venue_min_fields';
  id: Maybe<Scalars['uuid']>;
  venue: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "race_venue" */
export type RaceVenueMutationResponse = {
  __typename?: 'race_venue_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RaceVenue>;
};

/** on_conflict condition type for table "race_venue" */
export type RaceVenueOnConflict = {
  constraint: RaceVenueConstraint;
  update_columns?: Array<RaceVenueUpdateColumn>;
  where?: InputMaybe<RaceVenueBoolExp>;
};

/** Ordering options when selecting data from "race_venue". */
export type RaceVenueOrderBy = {
  id?: InputMaybe<OrderBy>;
  venue?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: race_venue */
export type RaceVenuePkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "race_venue" */
export enum RaceVenueSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Venue = 'venue'
}

/** input type for updating data in table "race_venue" */
export type RaceVenueSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  venue?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "race_venue" */
export type RaceVenueStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: RaceVenueStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RaceVenueStreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  venue?: InputMaybe<Scalars['String']>;
};

/** update columns of table "race_venue" */
export enum RaceVenueUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Venue = 'venue'
}

export type RaceVenueUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RaceVenueSetInput>;
  /** filter the rows which have to be updated */
  where: RaceVenueBoolExp;
};

/** columns and relationships of "race_year" */
export type RaceYear = {
  __typename?: 'race_year';
  id: Scalars['uuid'];
  /** An array relationship */
  results: Array<RaceResults>;
  /** An aggregate relationship */
  results_aggregate: RaceResultsAggregate;
  year: Scalars['numeric'];
};


/** columns and relationships of "race_year" */
export type RaceYearResultsArgs = {
  distinct_on: InputMaybe<Array<RaceResultsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceResultsOrderBy>>;
  where: InputMaybe<RaceResultsBoolExp>;
};


/** columns and relationships of "race_year" */
export type RaceYearResultsAggregateArgs = {
  distinct_on: InputMaybe<Array<RaceResultsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceResultsOrderBy>>;
  where: InputMaybe<RaceResultsBoolExp>;
};

/** aggregated selection of "race_year" */
export type RaceYearAggregate = {
  __typename?: 'race_year_aggregate';
  aggregate: Maybe<RaceYearAggregateFields>;
  nodes: Array<RaceYear>;
};

/** aggregate fields of "race_year" */
export type RaceYearAggregateFields = {
  __typename?: 'race_year_aggregate_fields';
  avg: Maybe<RaceYearAvgFields>;
  count: Scalars['Int'];
  max: Maybe<RaceYearMaxFields>;
  min: Maybe<RaceYearMinFields>;
  stddev: Maybe<RaceYearStddevFields>;
  stddev_pop: Maybe<RaceYearStddevPopFields>;
  stddev_samp: Maybe<RaceYearStddevSampFields>;
  sum: Maybe<RaceYearSumFields>;
  var_pop: Maybe<RaceYearVarPopFields>;
  var_samp: Maybe<RaceYearVarSampFields>;
  variance: Maybe<RaceYearVarianceFields>;
};


/** aggregate fields of "race_year" */
export type RaceYearAggregateFieldsCountArgs = {
  columns: InputMaybe<Array<RaceYearSelectColumn>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type RaceYearAvgFields = {
  __typename?: 'race_year_avg_fields';
  year: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "race_year". All fields are combined with a logical 'AND'. */
export type RaceYearBoolExp = {
  _and?: InputMaybe<Array<RaceYearBoolExp>>;
  _not?: InputMaybe<RaceYearBoolExp>;
  _or?: InputMaybe<Array<RaceYearBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  results?: InputMaybe<RaceResultsBoolExp>;
  results_aggregate?: InputMaybe<RaceResultsAggregateBoolExp>;
  year?: InputMaybe<NumericComparisonExp>;
};

/** unique or primary key constraints on table "race_year" */
export enum RaceYearConstraint {
  /** unique or primary key constraint on columns "id" */
  RaceYearPkey = 'race_year_pkey'
}

/** input type for incrementing numeric columns in table "race_year" */
export type RaceYearIncInput = {
  year?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "race_year" */
export type RaceYearInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  results?: InputMaybe<RaceResultsArrRelInsertInput>;
  year?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type RaceYearMaxFields = {
  __typename?: 'race_year_max_fields';
  id: Maybe<Scalars['uuid']>;
  year: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type RaceYearMinFields = {
  __typename?: 'race_year_min_fields';
  id: Maybe<Scalars['uuid']>;
  year: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "race_year" */
export type RaceYearMutationResponse = {
  __typename?: 'race_year_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<RaceYear>;
};

/** on_conflict condition type for table "race_year" */
export type RaceYearOnConflict = {
  constraint: RaceYearConstraint;
  update_columns?: Array<RaceYearUpdateColumn>;
  where?: InputMaybe<RaceYearBoolExp>;
};

/** Ordering options when selecting data from "race_year". */
export type RaceYearOrderBy = {
  id?: InputMaybe<OrderBy>;
  results_aggregate?: InputMaybe<RaceResultsAggregateOrderBy>;
  year?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: race_year */
export type RaceYearPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "race_year" */
export enum RaceYearSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "race_year" */
export type RaceYearSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  year?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type RaceYearStddevFields = {
  __typename?: 'race_year_stddev_fields';
  year: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type RaceYearStddevPopFields = {
  __typename?: 'race_year_stddev_pop_fields';
  year: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type RaceYearStddevSampFields = {
  __typename?: 'race_year_stddev_samp_fields';
  year: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "race_year" */
export type RaceYearStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: RaceYearStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RaceYearStreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']>;
  year?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type RaceYearSumFields = {
  __typename?: 'race_year_sum_fields';
  year: Maybe<Scalars['numeric']>;
};

/** update columns of table "race_year" */
export enum RaceYearUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Year = 'year'
}

export type RaceYearUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<RaceYearIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RaceYearSetInput>;
  /** filter the rows which have to be updated */
  where: RaceYearBoolExp;
};

/** aggregate var_pop on columns */
export type RaceYearVarPopFields = {
  __typename?: 'race_year_var_pop_fields';
  year: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type RaceYearVarSampFields = {
  __typename?: 'race_year_var_samp_fields';
  year: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type RaceYearVarianceFields = {
  __typename?: 'race_year_variance_fields';
  year: Maybe<Scalars['Float']>;
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customer" */
  customer: Array<Customer>;
  /** fetch aggregated fields from the table: "customer" */
  customer_aggregate: CustomerAggregate;
  /** fetch data from the table: "customer" using primary key columns */
  customer_by_pk: Maybe<Customer>;
  /** fetch data from the table in a streaming manner: "customer" */
  customer_stream: Array<Customer>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: OrderAggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk: Maybe<Order>;
  /** fetch data from the table in a streaming manner: "order" */
  order_stream: Array<Order>;
  /** fetch data from the table: "race_drivers" */
  race_drivers: Array<RaceDrivers>;
  /** fetch aggregated fields from the table: "race_drivers" */
  race_drivers_aggregate: RaceDriversAggregate;
  /** fetch data from the table: "race_drivers" using primary key columns */
  race_drivers_by_pk: Maybe<RaceDrivers>;
  /** fetch data from the table in a streaming manner: "race_drivers" */
  race_drivers_stream: Array<RaceDrivers>;
  /** fetch data from the table: "race_results" */
  race_results: Array<RaceResults>;
  /** fetch aggregated fields from the table: "race_results" */
  race_results_aggregate: RaceResultsAggregate;
  /** fetch data from the table: "race_results" using primary key columns */
  race_results_by_pk: Maybe<RaceResults>;
  /** fetch data from the table in a streaming manner: "race_results" */
  race_results_stream: Array<RaceResults>;
  /** fetch data from the table: "race_teams" */
  race_teams: Array<RaceTeams>;
  /** fetch aggregated fields from the table: "race_teams" */
  race_teams_aggregate: RaceTeamsAggregate;
  /** fetch data from the table: "race_teams" using primary key columns */
  race_teams_by_pk: Maybe<RaceTeams>;
  /** fetch data from the table in a streaming manner: "race_teams" */
  race_teams_stream: Array<RaceTeams>;
  /** fetch data from the table: "race_venue" */
  race_venue: Array<RaceVenue>;
  /** fetch aggregated fields from the table: "race_venue" */
  race_venue_aggregate: RaceVenueAggregate;
  /** fetch data from the table: "race_venue" using primary key columns */
  race_venue_by_pk: Maybe<RaceVenue>;
  /** fetch data from the table in a streaming manner: "race_venue" */
  race_venue_stream: Array<RaceVenue>;
  /** fetch data from the table: "race_year" */
  race_year: Array<RaceYear>;
  /** fetch aggregated fields from the table: "race_year" */
  race_year_aggregate: RaceYearAggregate;
  /** fetch data from the table: "race_year" using primary key columns */
  race_year_by_pk: Maybe<RaceYear>;
  /** fetch data from the table in a streaming manner: "race_year" */
  race_year_stream: Array<RaceYear>;
};


export type SubscriptionRootCustomerArgs = {
  distinct_on: InputMaybe<Array<CustomerSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<CustomerOrderBy>>;
  where: InputMaybe<CustomerBoolExp>;
};


export type SubscriptionRootCustomerAggregateArgs = {
  distinct_on: InputMaybe<Array<CustomerSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<CustomerOrderBy>>;
  where: InputMaybe<CustomerBoolExp>;
};


export type SubscriptionRootCustomerByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootCustomerStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<CustomerStreamCursorInput>>;
  where: InputMaybe<CustomerBoolExp>;
};


export type SubscriptionRootOrderArgs = {
  distinct_on: InputMaybe<Array<OrderSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<OrderOrderBy>>;
  where: InputMaybe<OrderBoolExp>;
};


export type SubscriptionRootOrderAggregateArgs = {
  distinct_on: InputMaybe<Array<OrderSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<OrderOrderBy>>;
  where: InputMaybe<OrderBoolExp>;
};


export type SubscriptionRootOrderByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootOrderStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<OrderStreamCursorInput>>;
  where: InputMaybe<OrderBoolExp>;
};


export type SubscriptionRootRaceDriversArgs = {
  distinct_on: InputMaybe<Array<RaceDriversSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceDriversOrderBy>>;
  where: InputMaybe<RaceDriversBoolExp>;
};


export type SubscriptionRootRaceDriversAggregateArgs = {
  distinct_on: InputMaybe<Array<RaceDriversSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceDriversOrderBy>>;
  where: InputMaybe<RaceDriversBoolExp>;
};


export type SubscriptionRootRaceDriversByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootRaceDriversStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<RaceDriversStreamCursorInput>>;
  where: InputMaybe<RaceDriversBoolExp>;
};


export type SubscriptionRootRaceResultsArgs = {
  distinct_on: InputMaybe<Array<RaceResultsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceResultsOrderBy>>;
  where: InputMaybe<RaceResultsBoolExp>;
};


export type SubscriptionRootRaceResultsAggregateArgs = {
  distinct_on: InputMaybe<Array<RaceResultsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceResultsOrderBy>>;
  where: InputMaybe<RaceResultsBoolExp>;
};


export type SubscriptionRootRaceResultsByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootRaceResultsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<RaceResultsStreamCursorInput>>;
  where: InputMaybe<RaceResultsBoolExp>;
};


export type SubscriptionRootRaceTeamsArgs = {
  distinct_on: InputMaybe<Array<RaceTeamsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceTeamsOrderBy>>;
  where: InputMaybe<RaceTeamsBoolExp>;
};


export type SubscriptionRootRaceTeamsAggregateArgs = {
  distinct_on: InputMaybe<Array<RaceTeamsSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceTeamsOrderBy>>;
  where: InputMaybe<RaceTeamsBoolExp>;
};


export type SubscriptionRootRaceTeamsByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootRaceTeamsStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<RaceTeamsStreamCursorInput>>;
  where: InputMaybe<RaceTeamsBoolExp>;
};


export type SubscriptionRootRaceVenueArgs = {
  distinct_on: InputMaybe<Array<RaceVenueSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceVenueOrderBy>>;
  where: InputMaybe<RaceVenueBoolExp>;
};


export type SubscriptionRootRaceVenueAggregateArgs = {
  distinct_on: InputMaybe<Array<RaceVenueSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceVenueOrderBy>>;
  where: InputMaybe<RaceVenueBoolExp>;
};


export type SubscriptionRootRaceVenueByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootRaceVenueStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<RaceVenueStreamCursorInput>>;
  where: InputMaybe<RaceVenueBoolExp>;
};


export type SubscriptionRootRaceYearArgs = {
  distinct_on: InputMaybe<Array<RaceYearSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceYearOrderBy>>;
  where: InputMaybe<RaceYearBoolExp>;
};


export type SubscriptionRootRaceYearAggregateArgs = {
  distinct_on: InputMaybe<Array<RaceYearSelectColumn>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<RaceYearOrderBy>>;
  where: InputMaybe<RaceYearBoolExp>;
};


export type SubscriptionRootRaceYearByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootRaceYearStreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<RaceYearStreamCursorInput>>;
  where: InputMaybe<RaceYearBoolExp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};
