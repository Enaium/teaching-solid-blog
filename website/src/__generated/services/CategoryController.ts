import type { Executor } from '../';
import type { CategoryDto } from '../model/dto';

export class CategoryController {
    
    constructor(private executor: Executor) {}
    
    async findCategories(): Promise<
        ReadonlyArray<CategoryDto['DEFAULT']>
    > {
        let _uri = '/categories/';
        return (await this.executor({uri: _uri, method: 'GET'})) as ReadonlyArray<CategoryDto['DEFAULT']>
    }
}

export type CategoryControllerOptions = {
    'findCategories': {}
}