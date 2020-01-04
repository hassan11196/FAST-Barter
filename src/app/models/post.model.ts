
import {User} from './user.model';

export interface Post {
    timestamp: Date,
    title: string,
    description: string,
    user: User

}
