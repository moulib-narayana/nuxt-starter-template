import { $Fetch, NitroFetchRequest } from "nitropack";
import { FetchError } from "ofetch";

export interface ApiResponse<T> {
   statusCode: number | null;
   error: string | null;
   data: T | null;
   headers: Headers | null;
}

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export default function (fetch: $Fetch<unknown, NitroFetchRequest>) {
   const runtimeConfig = useRuntimeConfig();

   const auth = useAuth();

   const handleError = <T>(
      error: any,
      requestPath?: string
   ): ApiResponse<T> => {
      console.log("Fetch error:");
      console.log(requestPath, error);

      let message = "An error has occurred.";
      let statusCode = null as number | null;

      if (error instanceof FetchError) {
         message = error.data?.toString() ?? message;
         statusCode = error.status ?? null;
      }

      return {
         data: null,
         error: message,
         statusCode: statusCode,
         headers: null,
      };
   };

   const execute = async <T>(
      method: HttpMethod,
      requestPath: string,
      opts?: FetchRequestOptions
   ): Promise<ApiResponse<T>> => {
      const headersObj = !auth.loggedIn
         ? opts?.headers
         : {
            ...opts?.headers,
            Authorization: (auth.strategy as any).token.get(),
         };

      try {
         const res = await fetch.raw<T>(requestPath, {
            method: method,
            baseURL: runtimeConfig.public.apiBaseUrl,
            headers: headersObj,
            body: opts?.body,
            query: opts?.query,
         });

         return {
            data: (res._data as T) ?? null,
            error: null,
            statusCode: res.status,
            headers: res.headers,
         };
      } catch (error: any) {
         return handleError<T>(error, requestPath);
      }
   };

   const get = async <T>(
      requestPath: string,
      opts?: FetchRequestOptions
   ): Promise<ApiResponse<T>> => {
      return execute("GET", requestPath, opts);
   };

   const post = async <T>(
      requestPath: string,
      opts?: FetchRequestOptions
   ): Promise<ApiResponse<T>> => {
      return execute("POST", requestPath, opts);
   };

   const put = async <T>(
      requestPath: string,
      opts?: FetchRequestOptions
   ): Promise<ApiResponse<T>> => {
      return execute("PUT", requestPath, opts);
   };

   const del = async <T>(
      requestPath: string,
      opts?: FetchRequestOptions
   ): Promise<ApiResponse<T>> => {
      return execute("DELETE", requestPath, opts);
   };

   return { get, put, post, del };
}

interface FetchRequestOptions {
   query?: Record<string, number | boolean | string>;
   headers?: Record<string, string>;
   body?: any | undefined;
}
