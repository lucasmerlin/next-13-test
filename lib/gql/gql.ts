/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query GalleryPosts {\n      galleryPosts(query: {limit: 30}) {\n          id\n          title\n          imageUrl\n          description\n      }\n  }\n": types.GalleryPostsDocument,
};

export function graphql(source: "\n  query GalleryPosts {\n      galleryPosts(query: {limit: 30}) {\n          id\n          title\n          imageUrl\n          description\n      }\n  }\n"): (typeof documents)["\n  query GalleryPosts {\n      galleryPosts(query: {limit: 30}) {\n          id\n          title\n          imageUrl\n          description\n      }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;