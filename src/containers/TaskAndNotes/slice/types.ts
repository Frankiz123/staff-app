export interface TaskAndNotesListState {
  loading: { tasks: boolean; labels: boolean; categories: boolean };
  error: { tasks: any; labels: any; categories: any };
  refreshing: boolean;
  taskList: any;
  labels: any;
  categories: any;
  focusedTasksTab: {
    name: string;
    filters: {
      status: string;
      due_to?: string;
      due_from?: string;
      is_deleted?: number;
    };
  };
  searchText: string;
  offset: number;
}
