import type { Executor } from '../';
import type { PostDto } from '../model/dto';
import type { Page, PostInput } from '../model/static';

export class PostController {
    
    constructor(private executor: Executor) {}
    
    async createPost(options: PostControllerOptions['createPost']): Promise<void> {
        let _uri = '/posts/';
        return (await this.executor({uri: _uri, method: 'PUT', body: options.body})) as void
    }
    
    async findPost(options: PostControllerOptions['findPost']): Promise<
        PostDto['PostController/FULL_POST']
    > {
        let _uri = '/posts/';
        _uri += encodeURIComponent(options.id);
        return (await this.executor({uri: _uri, method: 'GET'})) as PostDto['PostController/FULL_POST']
    }
    
    async findPosts(options: PostControllerOptions['findPosts']): Promise<
        Page<PostDto['PostController/DEFAULT_POST']>
    > {
        let _uri = '/posts/';
        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';
        let _value: any = undefined;
        _value = options.page;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'page='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.size;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'size='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        return (await this.executor({uri: _uri, method: 'GET'})) as Page<PostDto['PostController/DEFAULT_POST']>
    }
    
    async findPostsByCategory(options: PostControllerOptions['findPostsByCategory']): Promise<
        Page<PostDto['PostController/DEFAULT_POST']>
    > {
        let _uri = '/categories/';
        _uri += encodeURIComponent(options.categoryId);
        _uri += '/posts/';
        let _separator = _uri.indexOf('?') === -1 ? '?' : '&';
        let _value: any = undefined;
        _value = options.page;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'page='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        _value = options.size;
        if (_value !== undefined && _value !== null) {
            _uri += _separator
            _uri += 'size='
            _uri += encodeURIComponent(_value);
            _separator = '&';
        }
        return (await this.executor({uri: _uri, method: 'GET'})) as Page<PostDto['PostController/DEFAULT_POST']>
    }
}

export type PostControllerOptions = {
    'createPost': {readonly body: PostInput},
    'findPost': {readonly id: string},
    'findPosts': {readonly page?: number, readonly size?: number},
    'findPostsByCategory': {
        readonly categoryId: string, 
        readonly page?: number, 
        readonly size?: number
    }
}