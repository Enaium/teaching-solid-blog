export type ReplyDto = {
    'ReplyController/DEFAULT_REPLY': {
        readonly id: string, 
        readonly userId: string, 
        readonly postId: string, 
        readonly content: string, 
        readonly user: {
            readonly id: string, 
            readonly username: string
        }
    }
}