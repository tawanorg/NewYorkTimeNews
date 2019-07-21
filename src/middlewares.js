import { normalize } from 'normalizr';
import isEmpty from 'lodash/isEmpty';

export const normalizrMiddleware = () => store => next => action => {
    const normalizeSchema = action.schema;
    if (!isEmpty(action.payload) && normalizeSchema) {
        action = Object.assign({}, action, {
            payload: normalize(action.payload, normalizeSchema),
        });
    }

    return next(action);
}