export interface CrudService {
    getAll: () => Promise<any>;
    get: (limit: number, offset: number) => Promise<any>;
    getById: (resourceId: number | string) => Promise<any>;
    create: (resource: any) => Promise<any>;
    updateById: (resourceId: number | string, resource: any) => Promise<any>;
    deleteById: (resourceId: number | string) => Promise<any>;
}
