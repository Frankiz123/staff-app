export const scope = 'app.containers.tasksAndNotes';

const messages = {
  tasksSucc: {
    scope: `${scope}.tasksSucc`,
    options: {
      defaultValue: 'Task successfully added!',
    },
  },
  addTask: {
    scope: `${scope}.addTask`,
    options: {
      defaultValue: 'Add task',
    },
  },
  newTask: {
    scope: `${scope}.newTask`,
    options: {
      defaultValue: 'New Task',
    },
  },
  none: {
    scope: `${scope}.none`,
    options: {
      defaultValue: 'None',
    },
  },
  title: {
    scope: `${scope}.title`,
    options: {
      defaultValue: 'Title',
    },
  },
  notes: {
    scope: `${scope}.notes`,
    options: {
      defaultValue: 'Notes',
    },
  },
  associateWith: {
    scope: `${scope}.associateWith`,
    options: {
      defaultValue: 'Associate with',
    },
  },
  assignTo: {
    scope: `${scope}.assignTo`,
    options: {
      defaultValue: 'Assign to',
    },
  },
  dueDate: {
    scope: `${scope}.dueDate`,
    options: {
      defaultValue: 'Due date',
    },
  },
  labels: {
    scope: `${scope}.labels`,
    options: {
      defaultValue: 'Labels',
    },
  },
  stages: {
    scope: `${scope}.stages`,
    options: {
      defaultValue: 'Stage',
    },
  },
  save: {
    scope: `${scope}.save`,
    options: {
      defaultValue: 'Save',
    },
  },
  cancel: {
    scope: `${scope}.cancel`,
    options: {
      defaultValue: 'Cancel',
    },
  },
  filters: {
    scope: `${scope}.filters`,
    options: {
      defaultValue: 'Filters',
    },
  },
  categories: {
    scope: `${scope}.categories`,
    options: {
      defaultValue: 'Stages',
    },
  },
  lowCaseLabels: {
    scope: `${scope}.lowCaseLabels`,
    options: {
      defaultValue: 'labels',
    },
  },
  lowCaseCats: {
    scope: `${scope}.lowCaseCats`,
    options: {
      defaultValue: 'stages',
    },
  },
  apply: {
    scope: `${scope}.apply`,
    options: {
      defaultValue: 'Apply',
    },
  },
  clearFilter: {
    scope: `${scope}.clearFilter`,
    options: {
      defaultValue: 'Clear filters',
    },
  },
  open: {
    scope: `${scope}.open`,
    options: {
      defaultValue: 'Open',
    },
  },
  dueToday: {
    scope: `${scope}.dueToday`,
    options: {
      defaultValue: 'Due today',
    },
  },
  dueThisWeek: {
    scope: `${scope}.dueThisWeek`,
    options: {
      defaultValue: 'Due this week',
    },
  },
  overdue: {
    scope: `${scope}.overdue`,
    options: {
      defaultValue: 'Overdue',
    },
  },
  completed: {
    scope: `${scope}.completed`,
    options: {
      defaultValue: 'Completed',
    },
  },
  deleted: {
    scope: `${scope}.deleted`,
    options: {
      defaultValue: 'Deleted',
    },
  },
  tasks: {
    scope: `${scope}.tasks`,
    options: {
      defaultValue: 'Tasks',
    },
  },
  taskCompleted: {
    scope: `${scope}.taskCompleted`,
    options: {
      defaultValue: 'Task completed!',
    },
  },
  taskReversed: {
    scope: `${scope}.taskReversed`,
    options: {
      defaultValue: 'Task marked incomplete!',
    },
  },
  swipeTo: {
    scope: `${scope}.swipeTo`,
    options: {
      defaultValue: 'Swipe to UNDO',
    },
  },
  ok: {
    scope: `${scope}.ok`,
    options: {
      defaultValue: 'OK',
    },
  },
  noTasks: {
    scope: `${scope}.noTasks`,
    options: {
      defaultValue: 'No Tasks',
    },
  },
  youHaveNo: {
    scope: `${scope}.youHaveNo`,
    options: {
      defaultValue: 'You have no tasks in',
    },
  },
  edit: {
    scope: `${scope}.edit`,
    options: {
      defaultValue: 'Edit',
    },
  },
  tasksDel: {
    scope: `${scope}.tasksDel`,
    options: {
      defaultValue: 'Task deleted successfully',
    },
  },
  couldntDel: {
    scope: `${scope}.couldntDel`,
    options: {
      defaultValue: "Couldn't delete task!",
    },
  },
  taskSuccEdit: {
    scope: `${scope}.taskSuccEdit`,
    options: {
      defaultValue: 'Task successfully edited!',
    },
  },
  edTask: {
    scope: `${scope}.edTask`,
    options: {
      defaultValue: 'Edit task',
    },
  },
  delete: {
    scope: `${scope}.delete`,
    options: {
      defaultValue: 'Delete',
    },
  },
  submit: {
    scope: `${scope}.submit`,
    options: {
      defaultValue: 'Save',
    },
  },
  areYouSure: {
    scope: `${scope}.areYouSure`,
    options: {
      defaultValue: 'Are you sure you want to delete the task?',
    },
  },
  searchBy: {
    scope: `${scope}.searchBy`,
    options: {
      defaultValue: 'Search by phone, email, name',
    },
  },
  invalidOffset: {
    scope: `${scope}.invalidOffset`,
    options: {
      defaultValue: 'Invalid offset!',
    },
  },
  selectADate: {
    scope: `${scope}.selectADate`,
    options: {
      defaultValue: 'Select a date',
    },
  },
  today: {
    scope: `${scope}.today`,
    options: {
      defaultValue: 'Today',
    },
  },
  tomorrow: {
    scope: `${scope}.tomorrow`,
    options: {
      defaultValue: 'Tomorrow',
    },
  },
  days: {
    scope: `${scope}.days`,
    options: {
      defaultValue: 'days',
    },
  },
  week: {
    scope: `${scope}.week`,
    options: {
      defaultValue: 'week',
    },
  },
  weeks: {
    scope: `${scope}.weeks`,
    options: {
      defaultValue: 'weeks',
    },
  },
  month: {
    scope: `${scope}.month`,
    options: {
      defaultValue: 'month',
    },
  },

  months: {
    scope: `${scope}.months`,
    options: {
      defaultValue: 'months',
    },
  },
  custom: {
    scope: `${scope}.custom`,
    options: {
      defaultValue: 'Custom',
    },
  },
  dueTime: {
    scope: `${scope}.dueTime`,
    options: {
      defaultValue: 'Due time',
    },
  },
  emailReminder: {
    scope: `${scope}.emailReminder`,
    options: {
      defaultValue: 'Email Reminder',
    },
  },
  smsReminder: {
    scope: `${scope}.smsReminder`,
    options: {
      defaultValue: 'SMS Reminder',
    },
  },
  atTask: {
    scope: `${scope}.atTask`,
    options: {
      defaultValue: 'At task due time',
    },
  },
  thirtyMin: {
    scope: `${scope}.thirtyMin`,
    options: {
      defaultValue: '30 minutes before',
    },
  },
  oneHour: {
    scope: `${scope}.oneHour`,
    options: {
      defaultValue: '1 hour before',
    },
  },
  oneDay: {
    scope: `${scope}.oneDay`,
    options: {
      defaultValue: '1 day before',
    },
  },
  oneWeek: {
    scope: `${scope}.oneWeek`,
    options: {
      defaultValue: '1 week before',
    },
  },
  reminder: {
    scope: `${scope}.reminder`,
    options: {
      defaultValue: 'Reminder',
    },
  },

  addCallLog: {
    scope: `${scope}.addCallLog`,
    options: {
      defaultValue: 'Add Call Log',
    },
  },
  addEmailLog: {
    scope: `${scope}.addEmailLog`,
    options: {
      defaultValue: 'Add Email Log',
    },
  },
  addMeetingLog: {
    scope: `${scope}.addMeetingLog`,
    options: {
      defaultValue: 'Add Meeting Log',
    },
  },
};

export default messages;
