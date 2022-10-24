import gql from 'graphql-tag';
import getPhotos from './query.getPhotos.gql';

export const getPhotosQuery = gql`${getPhotos}`;


export type DocumentNode = typeof getPhotosQuery





