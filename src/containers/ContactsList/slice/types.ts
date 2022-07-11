export interface ClientsListState {
  loading: boolean;
  refreshing: boolean;
  error: any;
  clientsList: Array<any>;
  offset: any;
  limit: any;
  selectedClient: any;
  searchResult: Array<any>;
}
