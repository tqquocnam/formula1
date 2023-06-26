const dotenv = require("dotenv");

dotenv.config();
const { AVOCADO_ENDPOINT, AVOCADO_SECRET } = process.env;

module.exports = {
  schema: [
    {
      [AVOCADO_ENDPOINT]: {
        headers: { "x-hasura-admin-secret": AVOCADO_SECRET },
      },
    },
  ],
  documents: ["src/**/!(*.generated).{tsx,ts,graphql,gql}", "!src/sdk/**/*"],

  extensions: {
    languageService: {
      cacheSchemaFileForLookup: true,
    },
    codegen: {
      overwrite: true,
      generates: {
        "src/sdk/gql/types.ts": {
          config: {
            skipTypename: false,
            withHooks: true,
            withHOC: false,
            withComponent: false,
            mergeFragmentTypes: true,
            contextType: "AvocadoContext",
            avoidOptionals: {
              object: true,
              field: true,
              inputValue: false,
            },
            inputMaybeValue: "T | null | undefined",
            scalars: {
              uuid: "string",
              Date: "string",
              jsonb: "Record<string, any>",
              timestamptz: "string",
              timestamp: "string",
              numeric: "number",
              bpchar: "string",
            },
            namingConvention: {
              typeNames: "change-case#pascalCase",
            },
            dedupeFragments: true,
          },
          plugins: ["typescript"],
        },
        "src/": {
          preset: "near-operation-file",
          presetConfig: {
            extension: ".generated.ts",
            baseTypesPath: "sdk/gql/types.ts",
          },
          plugins: [
            "typescript-operations",
            "typed-document-node",
            {
              add: {
                content: "/* eslint-disable */",
              },
            },
          ],
          config: {
            skipTypename: false,
            withHooks: true,
            withHOC: false,
            withComponent: false,
            mergeFragmentTypes: true,
            contextType: "AvocadoContext",
            avoidOptionals: {
              object: true,
              field: true,
              inputValue: false,
            },
            inputMaybeValue: "T | null | undefined",
            scalars: {
              uuid: "string",
              Date: "string",
              jsonb: "Record<string, any>",
              timestamptz: "string",
              timestamp: "string",
              numeric: "number",
              bpchar: "string",
            },
            namingConvention: {
              typeNames: "change-case#pascalCase",
            },
            dedupeFragments: true,
            withHooks: false,
          },
        },
      },
    },
  },
};
