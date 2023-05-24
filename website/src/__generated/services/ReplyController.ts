import type { Executor } from '../';
import type { ReplyDto } from '../model/dto';
import type { Page, ReplyInput } from '../model/static';

export class ReplyController {
    
    constructor(private executor: Executor) {}
    
    async createReply(options: ReplyControllerOptions['createReply']): Promise<void> {
        let _uri = '/replies/';
        return (await this.executor({uri: _uri, method: 'PUT', body: options.body})) as void
    }
    
    async findRepliesByPost(options: ReplyControllerOptions['findRepliesByPost']): Promise<
        Page<ReplyDto['ReplyController/DEFAULT_REPLY']>
    > {
        let _uri = '/posts/';
        _uri += encodeURIComponent(options.postId);
        _uri += '/replies/';
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
        return (await this.executor({uri: _uri, method: 'GET'})) as Page<ReplyDto['ReplyController/DEFAULT_REPLY']>
    }
}

export type ReplyControllerOptions = {
    'createReply': {readonly body: ReplyInput},
    'findRepliesByPost': {
        readonly postId: string, 
        readonly page?: number, 
        readonly size?: number
    }
}