export declare const resolvePath: (path: string, root: any) => any;
export declare function getAbsolutePath(path: string, cwd: string): string;
export declare function getCwd(path: string): string;
export declare function dereferenceObject<T extends object, TRoot = T>(obj: T, { cwd, externalFileCache, refMap, root, fetchFn: fetch, importFn, logger, resolvedObjects, headers, }?: {
    cwd?: string;
    externalFileCache?: Map<string, any>;
    refMap?: Map<string, any>;
    root?: TRoot;
    fetchFn?: WindowOrWorkerGlobalScope['fetch'];
    importFn?: (m: string) => any;
    logger?: any;
    resolvedObjects?: WeakSet<any>;
    headers?: Record<string, string>;
}): Promise<T>;
