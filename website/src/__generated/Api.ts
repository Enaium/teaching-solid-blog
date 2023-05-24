import type { Executor } from './';

import { CategoryController, PostController, ReplyController, SessionController, UserController } from './services';

export class Api {
    
    readonly categoryController: CategoryController;
    
    readonly postController: PostController;
    
    readonly replyController: ReplyController;
    
    readonly sessionController: SessionController;
    
    readonly userController: UserController;
    
    constructor(executor: Executor) {
        this.categoryController = new CategoryController(executor);
        this.postController = new PostController(executor);
        this.replyController = new ReplyController(executor);
        this.sessionController = new SessionController(executor);
        this.userController = new UserController(executor);
    }
}