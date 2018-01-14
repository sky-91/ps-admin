/**
 * 分页操作类型
 */
export class PaginationType {
  public static PAGE_INIT = 'pageInit';
  public static NEXT_PAGE = 'nextPage';
  public static LAST_PAGE = 'lastPage';
  public static PREVIOUS_PAGE = 'previousPage';
  public static FIRST_PAGE = 'firstPage';
  public static PAGE_SIZE_CHANGE = 'pageSizeChange';

}

/**
 * 分页配置
 */
export class PaginationOptions {
  total?: any;
  pageList?: Array<number>;
  pageSize?: any;
  pageTotal?: any;
  pageNumber?: number;

}

/**
 * http分页method类型
 */
export class HttpPaginationMethod {
  public static POST = 'post';
  public static GET = 'get';
}
