/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  Date: any;
  DateTime: any;
  /** A scalar that can represent any JSON Object value. */
  JSONObject: any;
};

export enum App {
  Hellopaint = 'hellopaint',
  Malmal = 'malmal'
}

export enum Background {
  CheckeredPattern = 'CHECKERED_PATTERN',
  Color = 'COLOR',
  GridPattern = 'GRID_PATTERN'
}

export type Badge = {
  __typename?: 'Badge';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  key: Scalars['String'];
  title: Scalars['String'];
};

export type Board = {
  __typename?: 'Board';
  activeMembersCount: Scalars['Int'];
  backgroundType: Background;
  collaborationMode: CollaborationMode;
  color?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  galleryPosts: Array<GalleryPost>;
  id: Scalars['ID'];
  members: BoardMembershipConnection;
  membersCount: Scalars['Int'];
  membership: BoardMembership;
  mode: BoardMode;
  objectIds?: Maybe<Array<Scalars['String']>>;
  objects: Array<Object>;
  owner?: Maybe<User>;
  roles: Scalars['JSONObject'];
  rules?: Maybe<Array<Scalars['String']>>;
  tileHeight: Scalars['Int'];
  tileWidth: Scalars['Int'];
  title: Scalars['String'];
  type: BoardType;
  url: Scalars['String'];
  userMembership: BoardMembership;
};


export type BoardGalleryPostsArgs = {
  query?: InputMaybe<GalleryQuery>;
};


export type BoardMembersArgs = {
  cursor?: InputMaybe<CursorInput>;
};


export type BoardUserMembershipArgs = {
  uid: Scalars['ID'];
};

export type BoardActivity = {
  __typename?: 'BoardActivity';
  board: Board;
  boardId: Scalars['String'];
  position: Position;
  user: User;
  userId: Scalars['String'];
};

export type BoardConnection = {
  __typename?: 'BoardConnection';
  /** A list of edges. */
  edges: Array<BoardEdge>;
  /** A list of nodes. */
  nodes: Array<Board>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BoardEdge = {
  __typename?: 'BoardEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: Board;
};

export type BoardMembership = {
  __typename?: 'BoardMembership';
  board: Board;
  boardId: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  invitedBy?: Maybe<User>;
  invitedByUid?: Maybe<Scalars['ID']>;
  roles: Array<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['ID'];
};

export type BoardMembershipConnection = {
  __typename?: 'BoardMembershipConnection';
  /** A list of edges. */
  edges: Array<BoardMembershipEdge>;
  /** A list of nodes. */
  nodes: Array<BoardMembership>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BoardMembershipEdge = {
  __typename?: 'BoardMembershipEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The item at the end of the edge */
  node: BoardMembership;
};

export type BoardMembershipFilter = {
  excludeRoles?: InputMaybe<Array<Scalars['String']>>;
  includeRoles?: InputMaybe<Array<Scalars['String']>>;
};

export enum BoardMode {
  Hybrid = 'HYBRID',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export enum BoardType {
  Infinite = 'INFINITE',
  Normal = 'NORMAL',
  Whiteboard = 'WHITEBOARD'
}

export enum CollaborationMode {
  BigEvent = 'BIG_EVENT',
  Collaborative = 'COLLABORATIVE',
  Limited = 'LIMITED'
}

export type Contribution = {
  __typename?: 'Contribution';
  galleryPost: GalleryPost;
  imageUrl?: Maybe<Scalars['String']>;
  strokes?: Maybe<Scalars['Int']>;
  user: User;
};

export type CreateBoardInput = {
  backgroundType: Background;
  collaborationMode: CollaborationMode;
  color?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  inviteUserIds: Array<Scalars['ID']>;
  mode: BoardMode;
  rules?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
  type: BoardType;
  url?: InputMaybe<Scalars['String']>;
};

export type CreateCanvasInput = {
  canvasColor: Scalars['String'];
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type CursorInput = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type DeleteUserLinesResult = {
  __typename?: 'DeleteUserLinesResult';
  deletedLinesCount: Scalars['Int'];
};

export type EditBoardInput = {
  backgroundType: Background;
  collaborationMode: CollaborationMode;
  color?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  mode: BoardMode;
  rules?: InputMaybe<Array<Scalars['String']>>;
  title: Scalars['String'];
};

export type GalleryHpPositionInput = {
  height: Scalars['Float'];
  rotation: Scalars['Float'];
  width: Scalars['Float'];
  x: Scalars['Float'];
  y: Scalars['Float'];
  zoom: Scalars['Float'];
};

export type GalleryHpPosition = {
  __typename?: 'GalleryHpPosition';
  height: Scalars['Float'];
  rotation: Scalars['Float'];
  width: Scalars['Float'];
  x: Scalars['Float'];
  y: Scalars['Float'];
  zoom: Scalars['Float'];
};

export enum GalleryOrder {
  Hot = 'HOT',
  New = 'NEW',
  Random = 'RANDOM',
  Top = 'TOP'
}

export type GalleryPosition = {
  __typename?: 'GalleryPosition';
  h: Scalars['Float'];
  w: Scalars['Float'];
  x: Scalars['Float'];
  y: Scalars['Float'];
};

export type GalleryPost = {
  __typename?: 'GalleryPost';
  app: App;
  board?: Maybe<Board>;
  contributions?: Maybe<Array<Contribution>>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  downvotes: Scalars['Int'];
  drawing: Scalars['String'];
  height: Scalars['Int'];
  hotness: Scalars['Float'];
  hpPosition?: Maybe<GalleryHpPosition>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  position?: Maybe<GalleryPosition>;
  score: Scalars['Float'];
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title: Scalars['String'];
  upvotes: Scalars['Int'];
  user?: Maybe<User>;
  voteDirection: Scalars['Int'];
  width: Scalars['Int'];
};

export type GalleryPostInput = {
  app: App;
  contributors?: InputMaybe<Array<Scalars['String']>>;
  description: Scalars['String'];
  drawing: Scalars['String'];
  hpPosition?: InputMaybe<GalleryHpPositionInput>;
  socialMediaOk?: InputMaybe<Scalars['Boolean']>;
  tags: Array<Scalars['String']>;
  title: Scalars['String'];
};

export type GalleryQuery = {
  app?: InputMaybe<App>;
  byIds?: InputMaybe<Array<Scalars['ID']>>;
  contest?: InputMaybe<Scalars['String']>;
  drawing?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  minDate?: InputMaybe<Scalars['Date']>;
  offset?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<GalleryOrder>;
  search?: InputMaybe<Scalars['String']>;
  seed?: InputMaybe<Scalars['Float']>;
  socialMediaOk?: InputMaybe<Scalars['Boolean']>;
  tag?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Scalars['ID']>;
};

export type IScribbleCategory = {
  __typename?: 'IScribbleCategory';
  id: Scalars['Int'];
  name: Scalars['String'];
  posts?: Maybe<Array<Maybe<IScribbleGalleryPost>>>;
  slug: Scalars['String'];
};


export type IScribbleCategoryPostsArgs = {
  query?: InputMaybe<IScribbleGalleryQuery>;
};

export type IScribbleCollaborator = {
  __typename?: 'IScribbleCollaborator';
  strokes?: Maybe<Scalars['Int']>;
  user?: Maybe<IScribbleUser>;
  userId?: Maybe<Scalars['Int']>;
};

export type IScribbleGalleryPost = {
  __typename?: 'IScribbleGalleryPost';
  category?: Maybe<IScribbleCategory>;
  categoryId: Scalars['Int'];
  collaborators?: Maybe<Array<Maybe<IScribbleCollaborator>>>;
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  score: Scalars['Float'];
  title: Scalars['String'];
};

export type IScribbleGalleryQuery = {
  category?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

export type IScribbleUser = {
  __typename?: 'IScribbleUser';
  bio: Scalars['String'];
  createdAt: Scalars['Date'];
  posts?: Maybe<Array<Maybe<IScribbleGalleryPost>>>;
  userId: Scalars['Int'];
  userName: Scalars['String'];
};


export type IScribbleUserPostsArgs = {
  query?: InputMaybe<IScribbleGalleryQuery>;
};

export type ModLog = {
  __typename?: 'ModLog';
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  relatedBoard?: Maybe<Board>;
  relatedPost?: Maybe<GalleryPost>;
  relatedUser?: Maybe<User>;
  type: ModLogType;
  url?: Maybe<Scalars['String']>;
  user: User;
};

export type ModLogConnection = {
  __typename?: 'ModLogConnection';
  edges: Array<ModLogNode>;
  pageInfo: PageInfo;
};

export type ModLogFilter = {
  relatedUserId?: InputMaybe<Scalars['ID']>;
  text?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Array<ModLogType>>;
  userId?: InputMaybe<Scalars['ID']>;
};

export type ModLogInput = {
  description?: InputMaybe<Scalars['String']>;
  type: ModLogType;
  url?: InputMaybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type ModLogNode = {
  __typename?: 'ModLogNode';
  cursor: Scalars['ID'];
  node: ModLog;
};

export enum ModLogType {
  Ban = 'ban',
  DeleteLines = 'deleteLines',
  MalmalReport = 'malmalReport',
  Note = 'note',
  Report = 'report',
  Unban = 'unban'
}

export type Mutation = {
  __typename?: 'Mutation';
  banUser?: Maybe<User>;
  banUserFromBoard: BoardMembership;
  createBoard: Board;
  deleteGalleryPost?: Maybe<GalleryPost>;
  deleteUsersLines: DeleteUserLinesResult;
  editBoard: Board;
  gallerySubmit?: Maybe<GalleryPost>;
  galleryVote?: Maybe<GalleryPost>;
  hideContribution?: Maybe<GalleryPost>;
  inviteUsersToBoard: Array<BoardMembership>;
  joinBoard: BoardMembership;
  kickUserFromBoard: BoardMembership;
  leaveBoard: BoardMembership;
  newModLog?: Maybe<ModLog>;
  updateBoardMembership: BoardMembership;
};


export type MutationBanUserArgs = {
  reason?: InputMaybe<Scalars['String']>;
  userId: Scalars['ID'];
};


export type MutationBanUserFromBoardArgs = {
  boardId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationCreateBoardArgs = {
  canvas?: InputMaybe<CreateCanvasInput>;
  input: CreateBoardInput;
};


export type MutationDeleteGalleryPostArgs = {
  postId: Scalars['ID'];
};


export type MutationDeleteUsersLinesArgs = {
  boardId?: InputMaybe<Scalars['ID']>;
  userId: Scalars['ID'];
};


export type MutationEditBoardArgs = {
  boardId: Scalars['ID'];
  input: EditBoardInput;
};


export type MutationGallerySubmitArgs = {
  post: GalleryPostInput;
};


export type MutationGalleryVoteArgs = {
  direction: Scalars['Int'];
  postId: Scalars['ID'];
};


export type MutationHideContributionArgs = {
  postId: Scalars['ID'];
};


export type MutationInviteUsersToBoardArgs = {
  boardId: Scalars['ID'];
  userIds: Array<Scalars['ID']>;
};


export type MutationJoinBoardArgs = {
  boardId: Scalars['ID'];
};


export type MutationKickUserFromBoardArgs = {
  boardId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type MutationLeaveBoardArgs = {
  boardId: Scalars['ID'];
};


export type MutationNewModLogArgs = {
  input: ModLogInput;
};


export type MutationUpdateBoardMembershipArgs = {
  boardId: Scalars['ID'];
  input: UpdateBoardMembershipInput;
  userId: Scalars['ID'];
};

export type Object = {
  __typename?: 'Object';
  height: Scalars['Int'];
  matrix?: Maybe<Array<Scalars['Float']>>;
  type: Scalars['String'];
  width: Scalars['Int'];
};

/** Information about pagination in a connection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type PageQuery = {
  limit: Scalars['Int'];
  page: Scalars['Int'];
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  limit: Scalars['Int'];
  page: Scalars['Int'];
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type Position = {
  __typename?: 'Position';
  rotation?: Maybe<Scalars['Float']>;
  x: Scalars['Float'];
  y: Scalars['Float'];
  zoom?: Maybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  activeBoards: Array<Board>;
  activity: Array<BoardActivity>;
  board: Board;
  boardByUrl: Board;
  boards: BoardConnection;
  galleryPost?: Maybe<GalleryPost>;
  galleryPosts: Array<GalleryPost>;
  iScribbleCategories?: Maybe<Array<Maybe<IScribbleCategory>>>;
  iScribbleCategory?: Maybe<IScribbleCategory>;
  iScribbleGalleryPost?: Maybe<IScribbleGalleryPost>;
  iScribbleGalleryPosts?: Maybe<Array<Maybe<IScribbleGalleryPost>>>;
  iScribbleUser?: Maybe<IScribbleUser>;
  memberships: BoardMembershipConnection;
  modLog: ModLogConnection;
  popularBoards: Array<Board>;
  searchUsers?: Maybe<Array<Maybe<User>>>;
  user?: Maybe<User>;
};


export type QueryActivityArgs = {
  boardId?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryBoardArgs = {
  id: Scalars['ID'];
};


export type QueryBoardByUrlArgs = {
  url: Scalars['String'];
};


export type QueryBoardsArgs = {
  cursor?: InputMaybe<CursorInput>;
};


export type QueryGalleryPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGalleryPostsArgs = {
  query?: InputMaybe<GalleryQuery>;
};


export type QueryIScribbleCategoryArgs = {
  slug: Scalars['String'];
};


export type QueryIScribbleGalleryPostArgs = {
  id: Scalars['Int'];
};


export type QueryIScribbleGalleryPostsArgs = {
  query?: InputMaybe<IScribbleGalleryQuery>;
};


export type QueryIScribbleUserArgs = {
  userName: Scalars['String'];
};


export type QueryMembershipsArgs = {
  cursor?: InputMaybe<CursorInput>;
  filter: BoardMembershipFilter;
};


export type QueryModLogArgs = {
  cursor?: InputMaybe<CursorInput>;
  filter?: InputMaybe<ModLogFilter>;
};


export type QueryPopularBoardsArgs = {
  app?: InputMaybe<App>;
};


export type QuerySearchUsersArgs = {
  query?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  uid?: InputMaybe<Scalars['ID']>;
};

export enum Role {
  Admin = 'admin',
  Moderator = 'moderator',
  User = 'user'
}

export type Socials = {
  __typename?: 'Socials';
  deviantart?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  twitch?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export enum Tier {
  Malpal = 'malpal',
  Pal = 'pal',
  User = 'user'
}

export type UpdateBoardMembershipInput = {
  roles: Array<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  badges?: Maybe<Array<Maybe<Badge>>>;
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  displayName?: Maybe<Scalars['String']>;
  galleryPosts: Array<GalleryPost>;
  imageUrl?: Maybe<Scalars['String']>;
  karma: Scalars['Int'];
  modLog: ModLogConnection;
  role: Role;
  social?: Maybe<Socials>;
  tier: Tier;
  uid: Scalars['ID'];
  userName?: Maybe<Scalars['String']>;
};


export type UserGalleryPostsArgs = {
  query?: InputMaybe<GalleryQuery>;
};


export type UserModLogArgs = {
  cursor?: InputMaybe<CursorInput>;
  filter?: InputMaybe<ModLogFilter>;
};

export type GalleryPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GalleryPostsQuery = { __typename?: 'Query', galleryPosts: Array<{ __typename?: 'GalleryPost', id: string, title: string, imageUrl?: string | null, description?: string | null }> };


export const GalleryPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GalleryPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"galleryPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"30"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"imageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GalleryPostsQuery, GalleryPostsQueryVariables>;