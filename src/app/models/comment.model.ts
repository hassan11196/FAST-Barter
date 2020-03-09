import {User} from './user.model';
import {Post} from './post.model';

export interface Comment {
    timestamp: Date
    description: string,
    comments_user: User,
    pics: ArrayBuffer[]|string[],
    
}
