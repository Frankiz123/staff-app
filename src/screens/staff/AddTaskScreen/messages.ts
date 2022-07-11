/*
 * addTask Screen messages
 */

export const scope = 'app.screen.addTask';

const messages = {
  dueDate: {
    scope: `${scope}.dueDate`,
    options: {
      defaultValue: 'Due Date',
    },
  },
  reminder: {
    scope: `${scope}.reminder`,
    options: {
      defaultValue: 'Reminder',
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
  assignLabels: {
    scope: `${scope}.assignLabels`,
    options: {
      defaultValue: 'Assign Labels',
    },
  },
  labels: {
    scope: `${scope}.labels`,
    options: {
      defaultValue: 'Labels',
    },
  },
  setStage: {
    scope: `${scope}.setStage`,
    options: {
      defaultValue: 'Set Stage',
    },
  },
  stages: {
    scope: `${scope}.stages`,
    options: {
      defaultValue: 'Stages',
    },
  },
  taskTitle: {
    scope: `${scope}.taskTitle`,
    options: {
      defaultValue: 'Title',
    },
  },
  taskDetails: {
    scope: `${scope}.taskDetails`,
    options: {
      defaultValue: 'Details',
    },
  },
  cancel: {
    scope: `${scope}.cancel`,
    options: {
      defaultValue: 'Cancel',
    },
  },
  save: {
    scope: `${scope}.save`,
    options: {
      defaultValue: 'Save',
    },
  },
  addTaskSuccess: {
    scope: `${scope}.addTaskSuccess`,
    options: {
      defaultValue: 'Task successfully added!',
    },
  },
  plzAddTitle: {
    scope: `${scope}.plzAddTitle`,
    options: {
      defaultValue: 'Please add a title',
    },
  },
  plzAddStaff: {
    scope: `${scope}.plzAddStaff`,
    options: {
      defaultValue: 'Please select staff',
    },
  },
  plzAddClient: {
    scope: `${scope}.plzAddClient`,
    options: {
      defaultValue: 'Please select a client',
    },
  },
};

export default messages;
