import {
  REQUEST,
} from './actionTypes';
import schemas from './schemas';

export const appRequest = () => ({
  type: REQUEST,
  schema: schemas,
});
