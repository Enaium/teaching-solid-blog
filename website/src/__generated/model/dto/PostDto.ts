export type PostDto = {
    'PostController/DEFAULT_POST': {
        readonly id: string, 
        readonly userId: string, 
        readonly categoryId: string, 
        readonly title: string, 
        readonly category: {
            readonly id: string, 
            readonly name: string
        }
    }, 
    'PostController/FULL_POST': {
        readonly id: string, 
        readonly userId: string, 
        readonly categoryId: string, 
        readonly title: string, 
        readonly content: string, 
        readonly category: {
            readonly id: string, 
            readonly name: string
        }
    }
}