export interface StaffListState {
  loading: boolean;
  error: any;
  staffList: Array<any>;
  staffFilterShown: boolean;
  selectedStaffId: string;
}
