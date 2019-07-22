import { schema } from 'normalizr';

const user = new schema.Entity('currentUser', {}, {
    idAttribute: () => 'user',
});

const userSchema = {
    currentUser: user
}

export default userSchema;