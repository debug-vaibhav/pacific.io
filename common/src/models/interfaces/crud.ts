export interface CrudService {
    get: (limit: number | undefined, offset: number | undefined) => Promise<any>;
    getById: (resourceId: number | string) => Promise<any>;
    create: (resource: any) => Promise<any>;
    updateById: (resourceId: number | string, resource: any) => Promise<any>;
    deleteById: (resourceId: number | string) => Promise<any>;
}
