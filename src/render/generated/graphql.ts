import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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
  Upload: any;
};

export type Catalogue = {
  __typename?: 'Catalogue';
  createdAt: Scalars['Date'];
  estado: Estados;
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type CataloguePaginatedResponse = {
  __typename?: 'CataloguePaginatedResponse';
  data: Array<Catalogue>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalItems: Scalars['Int'];
};

export type CatalogueResponse = {
  __typename?: 'CatalogueResponse';
  data?: Maybe<Catalogue>;
  errors?: Maybe<Array<FieldError>>;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['Date'];
  estado: Estados;
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type CategoryPaginatedResponse = {
  __typename?: 'CategoryPaginatedResponse';
  data: Array<Category>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalItems: Scalars['Int'];
};

export type CategoryResponse = {
  __typename?: 'CategoryResponse';
  data?: Maybe<Category>;
  errors?: Maybe<Array<FieldError>>;
};

export type ChangePasswordResponse = {
  __typename?: 'ChangePasswordResponse';
  data?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<FieldError>>;
};

export type Client = {
  __typename?: 'Client';
  address: Scalars['String'];
  avatarAwsId?: Maybe<Scalars['String']>;
  brandingManagerId?: Maybe<Scalars['Int']>;
  businessName: Scalars['String'];
  catalogue?: Maybe<Catalogue>;
  contact?: Maybe<Scalars['String']>;
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['Int'];
  periodEnd: Scalars['Date'];
  periodStart: Scalars['Date'];
  phone?: Maybe<Scalars['String']>;
  ruc: Scalars['String'];
  status: Estados;
  tradename: Scalars['String'];
  updatedAt: Scalars['Date'];
  website?: Maybe<Scalars['String']>;
};

export type ClientPaginatedResponse = {
  __typename?: 'ClientPaginatedResponse';
  data: Array<Client>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalItems: Scalars['Int'];
};

export type ClientResponse = {
  __typename?: 'ClientResponse';
  data?: Maybe<Client>;
  errors?: Maybe<Array<FieldError>>;
};

export type ContentListOrder = {
  __typename?: 'ContentListOrder';
  artist: Scalars['String'];
  awsId: Scalars['String'];
  duration: Scalars['Float'];
  extension: Scalars['String'];
  genre?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  rating?: Maybe<SongRating>;
  timeEnd: Scalars['String'];
  timeStart: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type ContentListOrderStore = {
  __typename?: 'ContentListOrderStore';
  artist: Scalars['String'];
  awsId: Scalars['String'];
  duration: Scalars['Float'];
  extension: Scalars['String'];
  genre?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  rating?: Maybe<SongRating>;
  timeEnd: Scalars['String'];
  timeStart: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type CreateCatalogueInput = {
  estado: Estados;
  title: Scalars['String'];
};

export type CreateCategoryInput = {
  estado: Estados;
  title: Scalars['String'];
};

export type CreateClientInput = {
  address: Scalars['String'];
  avatarFile?: InputMaybe<Scalars['Upload']>;
  brandingManagerId?: InputMaybe<Scalars['Int']>;
  businessName: Scalars['String'];
  catalogueId?: InputMaybe<Scalars['Int']>;
  contact?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  periodEnd: Scalars['Date'];
  periodStart: Scalars['Date'];
  phone?: InputMaybe<Scalars['String']>;
  ruc: Scalars['String'];
  status: Estados;
  tradename: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type CreatePlaylistInput = {
  days: Array<Scalars['Int']>;
  listContent: Array<PlaylistContentListInput>;
  spotWithBroadcast: Array<SpotWithBroadcastInput>;
  spotWithInterval: Array<SpotWithIntervalInput>;
  storeIds: Array<Scalars['Int']>;
  timeEnd: Scalars['String'];
  timeStart: Scalars['String'];
  title: Scalars['String'];
};

export type CreateStoreInput = {
  address: Scalars['String'];
  clientId: Scalars['Int'];
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

/** Tipos de Documento */
export enum DocumentTypeUser {
  Ci = 'CI',
  Dni = 'DNI',
  Passport = 'PASSPORT',
  Ruc = 'RUC'
}

/** Estados */
export enum Estados {
  Activo = 'ACTIVO',
  Inactivo = 'INACTIVO'
}

/** Los estados de las canciones */
export enum EstadosCanciones {
  Activo = 'ACTIVO',
  Eliminado = 'ELIMINADO',
  Inactivo = 'INACTIVO'
}

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type GeneratePlaylistInput = {
  songsList: Array<Scalars['Int']>;
  spotWithBroadcast?: InputMaybe<Array<SpotWithBroadcastInput>>;
  spotWithInterval?: InputMaybe<Array<SpotWithIntervalInput>>;
  timeEnd: Scalars['String'];
  timeStart: Scalars['String'];
};

export type GeneratePlaylistResponse = {
  __typename?: 'GeneratePlaylistResponse';
  data?: Maybe<Array<ContentListOrder>>;
  errors?: Maybe<Array<FieldError>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginStoreInput = {
  password: Scalars['String'];
  username: Scalars['String'];
  uuid: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: ChangePasswordResponse;
  createCatalogue: CatalogueResponse;
  createCategory: CategoryResponse;
  createClient: ClientResponse;
  createPlaylist: PlaylistCreateResponse;
  createStore: StoreResponseCreate;
  createUser: UserResponse;
  deleteCatalogue?: Maybe<Scalars['Boolean']>;
  deleteCategory: Scalars['Boolean'];
  deleteClient: Scalars['Boolean'];
  deletePlaylist: Scalars['Boolean'];
  deleteSong: Scalars['Boolean'];
  deleteSpot: Scalars['Boolean'];
  deleteStore?: Maybe<Scalars['Boolean']>;
  deleteUser: Scalars['Boolean'];
  generatePlaylist?: Maybe<GeneratePlaylistResponse>;
  login: UserResponse;
  loginStore: StoreResponseCreate;
  logoutStore: Scalars['Boolean'];
  rateSong: Scalars['Boolean'];
  refreshToken: UserResponse;
  refreshTokenStore: StoreResponseCreate;
  resetPassword: Scalars['Boolean'];
  restoreSessionStore: Scalars['Boolean'];
  updateCatalogue: CatalogueResponse;
  updateCategory: CategoryResponse;
  updateClient: ClientResponse;
  updateClientStatus?: Maybe<Scalars['Boolean']>;
  updateContentPlaylist?: Maybe<Array<PlaylistContentListResponse>>;
  updateEstadoCatalogue: Scalars['Boolean'];
  updateEstadoCategory: Scalars['Boolean'];
  updateEstadoUser?: Maybe<Scalars['Boolean']>;
  updatePlaylist: PlaylistUpdateResponse;
  updateSong: SongUpdateResponse;
  updateSpot: SpotUpdateResponse;
  updateSpotStatus: Scalars['Boolean'];
  updateStatusSong: Scalars['Boolean'];
  updateStore: StoreResponseUpdate;
  updateStoreStatus?: Maybe<Scalars['Boolean']>;
  updateUser: UserResponse;
  uploadSongs: SongCreateResponse;
  uploadSpots: SpotCreateResponse;
};


export type MutationChangePasswordArgs = {
  NEW_PASSWORD: Scalars['String'];
  OLD_PASSWORD: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationCreateCatalogueArgs = {
  input: CreateCatalogueInput;
};


export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput;
};


export type MutationCreateClientArgs = {
  input: CreateClientInput;
};


export type MutationCreatePlaylistArgs = {
  input: CreatePlaylistInput;
};


export type MutationCreateStoreArgs = {
  input: CreateStoreInput;
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationDeleteCatalogueArgs = {
  catalogueId: Scalars['Float'];
};


export type MutationDeleteCategoryArgs = {
  categoryId: Scalars['Float'];
};


export type MutationDeleteClientArgs = {
  clientId: Scalars['Float'];
};


export type MutationDeletePlaylistArgs = {
  playlistId: Scalars['Int'];
};


export type MutationDeleteSongArgs = {
  songId: Scalars['Int'];
};


export type MutationDeleteSpotArgs = {
  spotId: Scalars['Int'];
};


export type MutationDeleteStoreArgs = {
  storeId: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  userId: Scalars['Float'];
};


export type MutationGeneratePlaylistArgs = {
  input: GeneratePlaylistInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationLoginStoreArgs = {
  input: LoginStoreInput;
};


export type MutationRateSongArgs = {
  rate: Scalars['Float'];
  songId: Scalars['Int'];
};


export type MutationRefreshTokenStoreArgs = {
  uuid: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRestoreSessionStoreArgs = {
  storeId: Scalars['Int'];
};


export type MutationUpdateCatalogueArgs = {
  input: UpdateCatalogueInput;
};


export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput;
};


export type MutationUpdateClientArgs = {
  input: UpdateClientInput;
};


export type MutationUpdateClientStatusArgs = {
  clientId: Scalars['Int'];
  status: Estados;
};


export type MutationUpdateContentPlaylistArgs = {
  playlist: Array<PlaylistContentListInput>;
  playlistId: Scalars['Int'];
};


export type MutationUpdateEstadoCatalogueArgs = {
  catalogueId: Scalars['Int'];
  estado: Estados;
};


export type MutationUpdateEstadoCategoryArgs = {
  categoryId: Scalars['Int'];
  estado: Estados;
};


export type MutationUpdateEstadoUserArgs = {
  estado: Estados;
  userId: Scalars['Int'];
};


export type MutationUpdatePlaylistArgs = {
  input: UpdatePlaylistInput;
};


export type MutationUpdateSongArgs = {
  input: UpdateSongInput;
};


export type MutationUpdateSpotArgs = {
  input: UpdateSpotInput;
};


export type MutationUpdateSpotStatusArgs = {
  spotId: Scalars['Int'];
  status: EstadosCanciones;
};


export type MutationUpdateStatusSongArgs = {
  songId: Scalars['Int'];
  status: EstadosCanciones;
};


export type MutationUpdateStoreArgs = {
  input: UpdateStoreInput;
};


export type MutationUpdateStoreStatusArgs = {
  status: Estados;
  storeId: Scalars['Int'];
};


export type MutationUpdateUserArgs = {
  input: UserUpdateInput;
};


export type MutationUploadSongsArgs = {
  input: Array<UploadSongInput>;
};


export type MutationUploadSpotsArgs = {
  input: Array<UploadSpotInput>;
};

export type Playlist = {
  __typename?: 'Playlist';
  createdAt: Scalars['Date'];
  date: Scalars['Date'];
  id: Scalars['Int'];
  listContent: Array<PlaylistContentListResponse>;
  spotWithBroadcast?: Maybe<Array<SpotWithBroadcastResponse>>;
  spotWithInterval?: Maybe<Array<SpotWithIntervalResponse>>;
  timeEnd: Scalars['String'];
  timeStart: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type PlaylistContentListInput = {
  id: Scalars['Int'];
  type: Scalars['String'];
};

export type PlaylistContentListResponse = {
  __typename?: 'PlaylistContentListResponse';
  id: Scalars['Int'];
  type: Scalars['String'];
};

export type PlaylistCreateResponse = {
  __typename?: 'PlaylistCreateResponse';
  data?: Maybe<Array<Playlist>>;
  errors?: Maybe<Array<FieldError>>;
};

export type PlaylistData = {
  __typename?: 'PlaylistData';
  createdAt: Scalars['Date'];
  date: Scalars['Date'];
  id: Scalars['Int'];
  listContent: Array<ContentListOrderStore>;
  spotWithBroadcast?: Maybe<Array<SpotContentListResponse>>;
  timeEnd: Scalars['String'];
  timeStart: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type PlaylistDataStoreResponse = {
  __typename?: 'PlaylistDataStoreResponse';
  createdAt: Scalars['Date'];
  date: Scalars['Date'];
  id: Scalars['Int'];
  listContent: Array<ContentListOrder>;
  spotWithBroadcast?: Maybe<Array<SpotContentListResponse>>;
  spotWithInterval?: Maybe<Array<SpotContentListResponse>>;
  timeEnd: Scalars['String'];
  timeStart: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type PlaylistForCopy = {
  __typename?: 'PlaylistForCopy';
  createdAt: Scalars['Date'];
  date: Scalars['String'];
  id: Scalars['Int'];
  songList: Array<Song>;
  spotWithBroadcast: Array<SpotWithBroadcastResponse>;
  spotWithInterval: Array<SpotWithIntervalResponse>;
  spotsList: Array<SpotContentListResponse>;
  storeId: Scalars['Int'];
  timeEnd: Scalars['String'];
  timeStart: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type PlaylistResponse = {
  __typename?: 'PlaylistResponse';
  data?: Maybe<PlaylistDataStoreResponse>;
  errors?: Maybe<Array<FieldError>>;
};

export type PlaylistUpdateResponse = {
  __typename?: 'PlaylistUpdateResponse';
  data?: Maybe<Playlist>;
  errors?: Maybe<Array<FieldError>>;
};

export type PlaylistUser = {
  __typename?: 'PlaylistUser';
  address: Scalars['String'];
  client: Client;
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  name: Scalars['String'];
  playlist?: Maybe<Array<PlaylistData>>;
  status: Estados;
  updatedAt: Scalars['Date'];
};

export type Query = {
  __typename?: 'Query';
  getAllCatalogues: CataloguePaginatedResponse;
  getAllCategories: CategoryPaginatedResponse;
  getAllClients: ClientPaginatedResponse;
  getAllPlaylistByStoreId: PlaylistCreateResponse;
  getAllSongs: SongPaginatedResponse;
  getAllSpots: SpotPaginatedResponse;
  getAllStores: StorePaginatedResponse;
  getAllUsers: UserPaginatedResponse;
  getCatalogueById?: Maybe<Catalogue>;
  getCategoryById?: Maybe<Category>;
  getClientById?: Maybe<Client>;
  getPlaylistById?: Maybe<PlaylistResponse>;
  getPlaylistDesktopByStore?: Maybe<PlaylistUser>;
  getPlaylistForCopyById?: Maybe<PlaylistForCopy>;
  getSongById?: Maybe<Song>;
  getSpotById?: Maybe<Spot>;
  getStoreById?: Maybe<StoreClientUserResponse>;
  getUserById?: Maybe<User>;
  validSong?: Maybe<Array<ValidSongData>>;
  validatePlaylist?: Maybe<ValidatePlaylistResponse>;
};


export type QueryGetAllCataloguesArgs = {
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  withPagination?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetAllCategoriesArgs = {
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  withPagination?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetAllClientsArgs = {
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  withPagination?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetAllPlaylistByStoreIdArgs = {
  storeId: Scalars['Int'];
};


export type QueryGetAllSongsArgs = {
  catalogueId?: InputMaybe<Scalars['Int']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  query?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllSpotsArgs = {
  clientId?: InputMaybe<Scalars['Int']>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  query?: InputMaybe<Scalars['String']>;
  validDates?: InputMaybe<Scalars['Boolean']>;
  withPagination?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetAllStoresArgs = {
  clientId?: InputMaybe<Scalars['Int']>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  query?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  withPagination?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetAllUsersArgs = {
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  rol?: InputMaybe<UserRoles>;
  withPagination?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetCatalogueByIdArgs = {
  catalogueId: Scalars['Int'];
};


export type QueryGetCategoryByIdArgs = {
  categoryId: Scalars['Float'];
};


export type QueryGetClientByIdArgs = {
  clientId: Scalars['Float'];
};


export type QueryGetPlaylistByIdArgs = {
  playlistId: Scalars['Int'];
};


export type QueryGetPlaylistForCopyByIdArgs = {
  playlistId: Scalars['Int'];
};


export type QueryGetSongByIdArgs = {
  songId: Scalars['Int'];
};


export type QueryGetSpotByIdArgs = {
  spotId: Scalars['Int'];
};


export type QueryGetStoreByIdArgs = {
  storeId: Scalars['Int'];
};


export type QueryGetUserByIdArgs = {
  userId: Scalars['Float'];
};


export type QueryValidSongArgs = {
  input: Array<ValidSong>;
};


export type QueryValidatePlaylistArgs = {
  days: Array<Scalars['Int']>;
  storeIds: Array<Scalars['Int']>;
};

export type Song = {
  __typename?: 'Song';
  album?: Maybe<Scalars['String']>;
  artist?: Maybe<Scalars['String']>;
  awsId: Scalars['String'];
  bpm?: Maybe<Scalars['Int']>;
  catalogue?: Maybe<Catalogue>;
  category?: Maybe<Category>;
  createdAt: Scalars['Date'];
  duration: Scalars['Float'];
  estado: EstadosCanciones;
  extension: Scalars['String'];
  filename: Scalars['String'];
  genre?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  quality?: Maybe<Scalars['Int']>;
  rating?: Maybe<SongRating>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  year?: Maybe<Scalars['Int']>;
};

export type SongCreateResponse = {
  __typename?: 'SongCreateResponse';
  data?: Maybe<Array<Song>>;
  errors?: Maybe<Array<FieldError>>;
};

export type SongPaginatedResponse = {
  __typename?: 'SongPaginatedResponse';
  data: Array<Song>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalItems: Scalars['Int'];
};

export type SongRating = {
  __typename?: 'SongRating';
  id: Scalars['Int'];
  rate: Scalars['Float'];
  type: TypeVoter;
};

export type SongUpdateResponse = {
  __typename?: 'SongUpdateResponse';
  data?: Maybe<Song>;
  errors?: Maybe<Array<FieldError>>;
};

export type Spot = {
  __typename?: 'Spot';
  awsId: Scalars['String'];
  client?: Maybe<Client>;
  createdAt: Scalars['Date'];
  duration: Scalars['Float'];
  extension: Scalars['String'];
  id: Scalars['Int'];
  periodEnd?: Maybe<Scalars['Date']>;
  periodStart?: Maybe<Scalars['Date']>;
  status: EstadosCanciones;
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type SpotContentListResponse = {
  __typename?: 'SpotContentListResponse';
  artist: Scalars['String'];
  awsId: Scalars['String'];
  broadcastTime?: Maybe<Scalars['String']>;
  duration: Scalars['Float'];
  extension: Scalars['String'];
  genre?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  interval?: Maybe<Scalars['Int']>;
  rating?: Maybe<SongRating>;
  startPosition?: Maybe<Scalars['Int']>;
  timeEnd: Scalars['String'];
  timeStart: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type SpotCreateResponse = {
  __typename?: 'SpotCreateResponse';
  data?: Maybe<Array<Spot>>;
  errors?: Maybe<Array<FieldError>>;
};

export type SpotPaginatedResponse = {
  __typename?: 'SpotPaginatedResponse';
  data: Array<Spot>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalItems: Scalars['Int'];
};

export type SpotUpdateResponse = {
  __typename?: 'SpotUpdateResponse';
  data?: Maybe<Spot>;
  errors?: Maybe<Array<FieldError>>;
};

export type SpotWithBroadcastInput = {
  broadcastTime: Scalars['String'];
  id: Scalars['Int'];
};

export type SpotWithBroadcastResponse = {
  __typename?: 'SpotWithBroadcastResponse';
  broadcastTime: Scalars['String'];
  id: Scalars['Int'];
};

export type SpotWithIntervalInput = {
  id: Scalars['Int'];
  interval: Scalars['Int'];
  startPosition: Scalars['Int'];
};

export type SpotWithIntervalResponse = {
  __typename?: 'SpotWithIntervalResponse';
  id: Scalars['Int'];
  interval: Scalars['Int'];
  startPosition: Scalars['Int'];
};

export type Store = {
  __typename?: 'Store';
  address: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  machineUUID?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  rol: StoreRoles;
  sessionStatus: Estados;
  status: Estados;
  token?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  username: Scalars['String'];
};

export type StoreClientUserResponse = {
  __typename?: 'StoreClientUserResponse';
  address: Scalars['String'];
  client: Client;
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  name: Scalars['String'];
  status: Estados;
  updatedAt: Scalars['Date'];
  username: Scalars['String'];
};

export type StorePaginatedResponse = {
  __typename?: 'StorePaginatedResponse';
  data: Array<StoreClientUserResponse>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalItems: Scalars['Int'];
};

export type StoreResponseCreate = {
  __typename?: 'StoreResponseCreate';
  data?: Maybe<Store>;
  errors?: Maybe<Array<FieldError>>;
};

export type StoreResponseUpdate = {
  __typename?: 'StoreResponseUpdate';
  data?: Maybe<StoreClientUserResponse>;
  errors?: Maybe<Array<FieldError>>;
};

/** Los roles de las tiendas */
export enum StoreRoles {
  Store = 'STORE'
}

/** Los estados de las canciones */
export enum TypeVoter {
  External = 'EXTERNAL',
  Internal = 'INTERNAL'
}

export type UpdateCatalogueInput = {
  catalogueId: Scalars['Int'];
  estado: Estados;
  title: Scalars['String'];
};

export type UpdateCategoryInput = {
  categoryId: Scalars['Int'];
  estado: Estados;
  title: Scalars['String'];
};

export type UpdateClientInput = {
  address: Scalars['String'];
  avatarFile?: InputMaybe<Scalars['Upload']>;
  brandingManagerId?: InputMaybe<Scalars['Int']>;
  businessName: Scalars['String'];
  catalogueId?: InputMaybe<Scalars['Int']>;
  contact?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  periodEnd: Scalars['Date'];
  periodStart: Scalars['Date'];
  phone?: InputMaybe<Scalars['String']>;
  ruc: Scalars['String'];
  status: Estados;
  tradename: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type UpdatePlaylistInput = {
  date: Scalars['Date'];
  id: Scalars['Int'];
  listContent?: InputMaybe<Array<PlaylistContentListInput>>;
  spotWithBroadcast?: InputMaybe<Array<SpotWithBroadcastInput>>;
  spotWithInterval?: InputMaybe<Array<SpotWithIntervalInput>>;
  storeId: Scalars['Int'];
  timeEnd: Scalars['String'];
  timeStart: Scalars['String'];
  title: Scalars['String'];
};

export type UpdateSongInput = {
  album?: InputMaybe<Scalars['String']>;
  artist: Scalars['String'];
  bpm?: InputMaybe<Scalars['Int']>;
  catalogueId?: InputMaybe<Scalars['Int']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<EstadosCanciones>;
  genre?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  quality?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type UpdateSpotInput = {
  clientId: Scalars['Int'];
  id: Scalars['Int'];
  periodEnd: Scalars['Date'];
  periodStart: Scalars['Date'];
  status: EstadosCanciones;
  title: Scalars['String'];
};

export type UpdateStoreInput = {
  address: Scalars['String'];
  clientId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  status: Estados;
  username: Scalars['String'];
};

export type UploadSongInput = {
  album?: InputMaybe<Scalars['String']>;
  artist?: InputMaybe<Scalars['String']>;
  bpm?: InputMaybe<Scalars['Int']>;
  catalogueId?: InputMaybe<Scalars['Int']>;
  categoryId?: InputMaybe<Scalars['Int']>;
  duration?: InputMaybe<Scalars['Float']>;
  estado?: InputMaybe<EstadosCanciones>;
  extension: Scalars['String'];
  file: Scalars['Upload'];
  filename: Scalars['String'];
  genre?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type UploadSpotInput = {
  clientId: Scalars['Int'];
  duration: Scalars['Float'];
  extension: Scalars['String'];
  file: Scalars['Upload'];
  periodEnd?: InputMaybe<Scalars['Date']>;
  periodStart?: InputMaybe<Scalars['Date']>;
  status: EstadosCanciones;
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['Date'];
  documentNumber: Scalars['String'];
  documentType: DocumentTypeUser;
  email: Scalars['String'];
  estado?: Maybe<Estados>;
  lastname?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  rol: UserRoles;
  token?: Maybe<Scalars['String']>;
  updatedAt: Scalars['Date'];
  userId: Scalars['Float'];
};

export type UserCreateInput = {
  documentNumber: Scalars['String'];
  documentType: DocumentTypeUser;
  email: Scalars['String'];
  estado: Estados;
  lastname: Scalars['String'];
  name: Scalars['String'];
  rol: UserRoles;
};

export type UserPaginatedResponse = {
  __typename?: 'UserPaginatedResponse';
  data: Array<User>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalItems: Scalars['Int'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  data?: Maybe<User>;
  errors?: Maybe<Array<FieldError>>;
};

/** Los roles de los usuarios */
export enum UserRoles {
  Admin = 'ADMIN',
  GerenteMarca = 'GERENTE_MARCA',
  JefeTienda = 'JEFE_TIENDA',
  Operador = 'OPERADOR'
}

export type UserUpdateInput = {
  documentNumber: Scalars['String'];
  documentType: DocumentTypeUser;
  email: Scalars['String'];
  estado: Estados;
  lastname: Scalars['String'];
  name: Scalars['String'];
  rol: UserRoles;
  userId: Scalars['Int'];
};

export type ValidSong = {
  artist: Scalars['String'];
  title: Scalars['String'];
  validationId: Scalars['String'];
};

export type ValidSongData = {
  __typename?: 'ValidSongData';
  artist: Scalars['String'];
  isUnique: Scalars['Boolean'];
  title: Scalars['String'];
  validationId: Scalars['String'];
};

export type ValidatePlaylistDetails = {
  __typename?: 'ValidatePlaylistDetails';
  date: Scalars['Date'];
  name: Scalars['String'];
};

export type ValidatePlaylistResponse = {
  __typename?: 'ValidatePlaylistResponse';
  data?: Maybe<Array<ValidatePlaylistDetails>>;
  errors?: Maybe<Array<FieldError>>;
};

export type LoginStoreMutationVariables = Exact<{
  input: LoginStoreInput;
}>;


export type LoginStoreMutation = { __typename?: 'Mutation', loginStore: { __typename?: 'StoreResponseCreate', data?: { __typename?: 'Store', id: number, name: string, address: string, status: Estados, username: string, sessionStatus: Estados, rol: StoreRoles, createdAt: any, updatedAt: any, token?: string | null, machineUUID?: string | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type RefreshTokenStoreMutationVariables = Exact<{
  uuid: Scalars['String'];
}>;


export type RefreshTokenStoreMutation = { __typename?: 'Mutation', refreshTokenStore: { __typename?: 'StoreResponseCreate', data?: { __typename?: 'Store', id: number, name: string, address: string, status: Estados, username: string, sessionStatus: Estados, rol: StoreRoles, createdAt: any, updatedAt: any, token?: string | null, machineUUID?: string | null } | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null } };

export type GetPlaylistDesktopByStoreQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlaylistDesktopByStoreQuery = { __typename?: 'Query', getPlaylistDesktopByStore?: { __typename?: 'PlaylistUser', id: number, name: string, address: string, status: Estados, createdAt: any, updatedAt: any, client: { __typename?: 'Client', id: number, tradename: string, website?: string | null, businessName: string, address: string, email: string, ruc: string, contact?: string | null, phone?: string | null, periodStart: any, periodEnd: any, status: Estados, avatarAwsId?: string | null, createdAt: any, updatedAt: any }, playlist?: Array<{ __typename?: 'PlaylistData', id: number, title: string, date: any, timeStart: string, timeEnd: string, createdAt: any, updatedAt: any, listContent: Array<{ __typename?: 'ContentListOrderStore', id: string, title: string, extension: string, artist: string, duration: number, awsId: string, timeStart: string, timeEnd: string, genre?: string | null, type: string, rating?: { __typename?: 'SongRating', id: number, rate: number, type: TypeVoter } | null }>, spotWithBroadcast?: Array<{ __typename?: 'SpotContentListResponse', id: number, extension: string, artist: string, duration: number, awsId: string, genre?: string | null, type: string, broadcastTime?: string | null, interval?: number | null, startPosition?: number | null, timeEnd: string, timeStart: string, title: string }> | null }> | null } | null };


export const LoginStoreDocument = gql`
    mutation LoginStore($input: LoginStoreInput!) {
  loginStore(input: $input) {
    data {
      id
      name
      address
      status
      username
      sessionStatus
      rol
      createdAt
      updatedAt
      token
      machineUUID
    }
    errors {
      field
      message
    }
  }
}
    `;
export const RefreshTokenStoreDocument = gql`
    mutation RefreshTokenStore($uuid: String!) {
  refreshTokenStore(uuid: $uuid) {
    data {
      id
      name
      address
      status
      username
      sessionStatus
      rol
      createdAt
      updatedAt
      token
      machineUUID
    }
    errors {
      field
      message
    }
  }
}
    `;
export const GetPlaylistDesktopByStoreDocument = gql`
    query GetPlaylistDesktopByStore {
  getPlaylistDesktopByStore {
    id
    name
    address
    status
    createdAt
    updatedAt
    client {
      id
      tradename
      website
      businessName
      address
      email
      ruc
      contact
      phone
      periodStart
      periodEnd
      status
      avatarAwsId
      createdAt
      updatedAt
    }
    playlist {
      id
      title
      date
      timeStart
      timeEnd
      createdAt
      updatedAt
      listContent {
        id
        title
        extension
        artist
        duration
        awsId
        timeStart
        timeEnd
        genre
        type
        rating {
          id
          rate
          type
        }
      }
      spotWithBroadcast {
        id
        extension
        artist
        duration
        awsId
        genre
        type
        broadcastTime
        interval
        startPosition
        timeEnd
        timeStart
        title
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    LoginStore(variables: LoginStoreMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginStoreMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginStoreMutation>(LoginStoreDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'LoginStore', 'mutation');
    },
    RefreshTokenStore(variables: RefreshTokenStoreMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RefreshTokenStoreMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RefreshTokenStoreMutation>(RefreshTokenStoreDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RefreshTokenStore', 'mutation');
    },
    GetPlaylistDesktopByStore(variables?: GetPlaylistDesktopByStoreQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPlaylistDesktopByStoreQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPlaylistDesktopByStoreQuery>(GetPlaylistDesktopByStoreDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetPlaylistDesktopByStore', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;