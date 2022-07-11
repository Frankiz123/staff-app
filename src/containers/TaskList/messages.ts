export const scope = 'app.containers.tasklist';

const messages = {
  ongoing: {
    scope: `${scope}.ongoing`,
    options: {
      defaultValue: 'Ongoing',
    },
  },
  ago: {
    scope: `${scope}.ago`,
    options: {
      defaultValue: 'ago',
    },
  },
  in: {
    scope: `${scope}.in`,
    options: {
      defaultValue: 'in',
    },
  },
  taskCompleted: {
    scope: `${scope}.taskCompleted`,
    options: {
      defaultValue: 'Task completed!',
    },
  },
  swipeTo: {
    scope: `${scope}.swipeTo`,
    options: {
      defaultValue: 'Swipe to UNDO',
    },
  },
  today: {
    scope: `${scope}.today`,
    options: {
      defaultValue: 'Today',
    },
  },
  upcomingTasks: {
    scope: `${scope}.upcomingTasks`,
    options: {
      defaultValue: 'Upcoming Tasks',
    },
  },
  dueToday: {
    scope: `${scope}.dueToday`,
    options: {
      defaultValue: 'due today',
    },
  },
  overdue: {
    scope: `${scope}.overdue`,
    options: {
      defaultValue: 'overdue',
    },
  },
  viewAllTasks: {
    scope: `${scope}.viewAllTasks`,
    options: {
      defaultValue: 'View all tasks',
    },
  },
  upcomingBook: {
    scope: `${scope}.upcomingBook`,
    options: {
      defaultValue: 'Upcoming Bookings',
    },
  },
  viewAllBook: {
    scope: `${scope}.viewAllBook`,
    options: {
      defaultValue: 'View all bookings',
    },
  },
  meetingsSched: {
    scope: `${scope}.meetingsSched`,
    options: {
      defaultValue: ' meetings scheduled today',
    },
  },
  editTask: {
    scope: `${scope}.editTask`,
    options: {
      defaultValue: 'Edit',
    },
  },
};

export default messages;
