import { JSONSchemaObject } from '@json-schema-tools/meta-schema';
import { SchemaComposer } from 'graphql-compose';
export declare function getValidTypeName({ schemaComposer, isInput, subSchema, }: {
    schemaComposer: SchemaComposer;
    isInput: boolean;
    subSchema: JSONSchemaObject;
}): string;
