import {Injectable} from '@angular/core';
import {Headers, Http, RequestMethod, RequestOptions, RequestOptionsArgs, URLSearchParams} from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Utils} from '../util/utils';
import {SpinService} from '../spin/spin.service';


/**
 * http服务
 */
@Injectable()
export class HttpService {

  constructor(private httpClient: HttpClient,
              private http: Http,
              private spinService: SpinService) {
  }

  /**
   * 将对象转为查询参数
   * @param paramMap
   * @returns {URLSearchParams}
   */
  private static buildURLSearchParams(paramMap): URLSearchParams {
    const params = new URLSearchParams();
    if (!paramMap) {
      return params;
    }
    for (const key in paramMap) {
      if (key !== '') {
        let val = paramMap[key];
        if (val instanceof Date) {
          val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss');
        }
        params.set(key, val);
      }
    }
    return params;
  }

  private static buildListQueryParam(paramMap): string {
    let paramUrl = '?';
    for (const key in paramMap) {
      if (key !== '') {
        let val = paramMap[key];
        if (val instanceof Date) {
          val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss');
        }
        paramUrl += key + '=' + val + '&';
      }
    }
    paramUrl = paramUrl.substring(0, paramUrl.length - 1);
    return paramUrl;
  }

  public request(url: string, options: RequestOptionsArgs, success: Function, error: Function): any {
    this.spinService.spin(true);
    this.http.request(url, options).subscribe(res => {
      this.spinService.spin(false);
      success(res.ok, res.json(), res);
    }, err => {
      console.log(err);
      this.spinService.spin(false);
      // 处理请求失败
      const msg = this.requestFailed(url, options, err);
      error(err.ok, msg, err);
    });

  }

  public get(url: string, paramMap: any = null, success: Function = function (successful, data, res) {
  }, error: Function = function (successful, msg, err) {
  }): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Get,
      // 跨域访问带上cookie
      withCredentials: true,
      search: HttpService.buildURLSearchParams(paramMap)
    }), success, error);
  }


  public originalGet(url: string, paramMap: any = null): any {
    // const httpOptions = {
    //   withCredentials: true,
    //   headers: new HttpHeaders({
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json; charset=UTF-8'
    //   })
    // };
    // return this.httpClient.get(url + HttpService.buildListQueryParam(paramMap), httpOptions).map((res) => {
    //   return res;
    // });
    return this.http.get(url, {params: paramMap}).map((res) => {
      return res.json() as any;
    });
  }

  public post(url: string, body: any = null, success: Function = function (successful, data, res) {
  }, error: Function = function (successful, msg, err) {
  }): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Post,
      body: body,
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
      })
    }), success, error);
  }

  public originalPost(url: string, body: any = null): any {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'})
    };
    return this.httpClient.post(url, body, httpOptions);
  }

  public postFormData(url: string, paramMap: any = null, success: Function = function (successful, data, res) {
  }, error: Function = function (successful, msg, err) {
  }): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Post,
      search: HttpService.buildURLSearchParams(paramMap).toString(),
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      })
    }), success, error);
  }

  public put(url: string, body: any = null, success: Function = function (successful, data, res) {
  }, error: Function = function (successful, msg, err) {
  }): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Put,
      body: body
    }), success, error);
  }

  public delete(url: string, paramMap: any = null, success: Function = function (successful, data, res) {
  }, error: Function = function (successful, msg, err) {
  }): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Delete,
      search: HttpService.buildURLSearchParams(paramMap).toString()
    }), success, error);
  }

  public patch(url: string, body: any = null, success: Function = function (successful, data, res) {
  }, error: Function = function (successful, msg, err) {
  }): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Patch,
      body: body
    }), success, error);
  }

  public head(url: string, paramMap: any = null, success: Function = function (successful, data, res) {
  }, error: Function = function (successful, msg, err) {
  }): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Head,
      search: HttpService.buildURLSearchParams(paramMap).toString()
    }), success, error);
  }

  public options(url: string, paramMap: any = null, success: Function = function (successful, data, res) {
  }, error: Function = function (successful, msg, err) {
  }): any {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Options,
      search: HttpService.buildURLSearchParams(paramMap).toString()
    }), success, error);
  }

  /**
   * 处理请求失败事件
   * @param url
   * @param options
   * @param err
   */
  private requestFailed(url: string, options: RequestOptionsArgs, err) {
    let msg = '请求发生异常';
    const status = err.status;
    if (status === 0) {
      msg = '请求失败，请求响应出错';
    } else if (status === 404) {
      msg = '请求失败，未找到请求地址';
    } else if (status === 500) {
      msg = '请求失败，服务器出错，请稍后再试';
    } else {
      msg = '未知错误，请检查网络';
    }
    return msg;
  }
}
