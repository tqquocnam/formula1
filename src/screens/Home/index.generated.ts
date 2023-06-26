/* eslint-disable */
import * as Types from '../../sdk/gql/types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetRaceYearQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetRaceYearQuery = (
  { race_year: Array<(
    { year: number }
    & { __typename?: 'race_year' }
  )> }
  & { __typename?: 'query_root' }
);

export type GetRaceResultsQueryVariables = Types.Exact<{
  where: Types.RaceResultsBoolExp;
  limit: Types.InputMaybe<Types.Scalars['Int']>;
  offset: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetRaceResultsQuery = (
  { race_results: Array<(
    { car: string, date: string | null, time: string | null, venue: string, winner: string | null, year: number, laps: number }
    & { __typename?: 'race_results' }
  )>, race_results_aggregate: (
    { aggregate: (
      { count: number }
      & { __typename?: 'race_results_aggregate_fields' }
    ) | null }
    & { __typename?: 'race_results_aggregate' }
  ) }
  & { __typename?: 'query_root' }
);


export const GetRaceYearDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRaceYear"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"race_year"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}}]}}]}}]} as unknown as DocumentNode<GetRaceYearQuery, GetRaceYearQueryVariables>;
export const GetRaceResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRaceResults"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"race_results_bool_exp"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"race_results"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"car"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"venue"}},{"kind":"Field","name":{"kind":"Name","value":"winner"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"laps"}}]}},{"kind":"Field","name":{"kind":"Name","value":"race_results_aggregate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<GetRaceResultsQuery, GetRaceResultsQueryVariables>;