import type { Executor } from '../';
import type { UserInput } from '../model/static';

export class UserController {
    
    constructor(private executor: Executor) {}
    
    async register(options: UserControllerOptions['register']): Promise<void> {
        let _uri = '/users/';
        return (await this.executor({uri: _uri, method: 'PUT', body: options.body})) as void
    }
}

export type UserControllerOptions = {
    'register': {readonly body: UserInput}
}