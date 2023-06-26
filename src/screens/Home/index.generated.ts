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

export type GetRaceResultsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetRaceResultsQuery = (
  { race_results: Array<(
    { car: string, date: string | null, time: string | null, venue: string, winner: string | null, year: number, laps: number }
    & { __typename?: 'race_results' }
  )> }
  & { __typename?: 'query_root' }
);


export const GetRaceYearDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRaceYear"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"race_year"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"year"}}]}}]}}]} as unknown as DocumentNode<GetRaceYearQuery, GetRaceYearQueryVariables>;
export const GetRaceResultsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRaceResults"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"race_results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"car"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"venue"}},{"kind":"Field","name":{"kind":"Name","value":"winner"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"laps"}}]}}]}}]} as unknown as DocumentNode<GetRaceResultsQuery, GetRaceResultsQueryVariables>;