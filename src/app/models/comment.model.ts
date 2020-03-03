import {User} from './user.model';
import {Post} from './post.model';

export interface Comment {
    timestamp: Date
    description: string,
    user: User,
    pics: ArrayBuffer[]|string[],
    post:Post,
}
