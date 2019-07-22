import { normalize } from 'normalizr';

export const normalizrMiddleware = () => store => next => action => {
    if (action.payload && action.schema) {
        action = Object.assign({}, action, {
            payload: normalize(action.payload, action.schema),
        });
    }

    return next(action);
}