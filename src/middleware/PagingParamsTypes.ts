namespace PagingParams {
  export interface iPagingParamsFromClient {
    toTurnPage: boolean,
    total_rows?: number
    offset?: number
  }

  export interface iServerPagingParams {
    limit: number
    total_rows: number
    offset: number
  }

  export interface iPagingParamsToClient extends iServerPagingParams {
     canFetchMoreData: boolean
  }

  export interface iDbQueryResultParamsForPaging {
    total_rows: number
    rows: number
    offset: number
  }
}
