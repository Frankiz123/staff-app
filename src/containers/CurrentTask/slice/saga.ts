import { AnyAction } from 'redux';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import { request } from 'utils';
import { goBack, navigate } from 'utils/rootNavigation';
import { getBookingAction } from 'containers/BookingDetails/slice/actions';
import { initialState } from './reducer';
import { showAlertAction } from 'providers/AlertsProvider/actions';
import { translate } from 'i18n';
import { selectBooking } from 'containers/BookingDetails/slice/selectors';
import { SCREENS } from 'navigators/constants';
import { CREATE_TASK, WebService } from './constants';
import { selectCurrentTask } from './selectors';
import { ICurrentTask } from './types';
import moment from 'moment';
import {
  selectTaskCategories,
  selectTaskLabels,
} from 'containers/TaskAndNotes/slice/selectors';
import { selectUser } from 'containers/AuthHelper/slice/selectors';
import { createTASKErrorAction, createTASKSuccessAction } from './actions';
import messages from 'screens/staff/AddTaskScreen/messages';

export function* createTask({ payload }: AnyAction) {
  const task: ICurrentTask = yield select(selectCurrentTask);
  const labels: Array<any> = yield select(selectTaskLabels);
  const stages: Array<any> = yield select(selectTaskCategories);
  const selectedStages = stages.filter((item) => item.selected);
  const user: { id: string } = yield select(selectUser);
  try {
    const { data: response } = yield call(async () => {
      return await request.runAction(WebService.ADD_TASK, {
        title:
          task.taskType == 'Task'
            ? task.title
            : `${task.taskType}%${task.title}`,
        notes: task.details,
        client_id: task.client?.id,
        staff_id: task.staff?.id,
        due_date: task.dueDate
          ? moment(task.dueDate).format('YYYY-MM-DD')
          : moment().format('YYYY-MM-DD'),
        due_time: task.dueDate
          ? moment(task.dueDate).format('HH:mm')
          : moment().format('HH:mm'),
        labels: labels
          .filter((item: any) => item.selected)
          .map((item: any) => item.id)
          .join(','),
        added_by: user.id,
        email_reminder_enabled: task.reminderDate ? 1 : 0,
        email_reminder_date: task.reminderDate
          ? moment(task.reminderDate).format('YYYY-MM-DD HH:mm:ss')
          : '',
        sms_reminder_enabled: task.reminderDate ? 1 : 0,
        sms_reminder_date: task.reminderDate
          ? moment(task.reminderDate).format('YYYY-MM-DD HH:mm:ss')
          : '',
        category_id: selectedStages.length > 0 ? selectedStages[0].id : '',
      });
    });
    if (['success', 'ok', 'OK'].includes(response.type)) {
      yield put(createTASKSuccessAction());
      yield put(
        showAlertAction({
          title: translate(
            messages.addTaskSuccess.scope,
            messages.addTaskSuccess.options,
          ),
          duration: 3000,
          gravity: 'top',
          type: 'success',
        }),
      );
      navigate(SCREENS.TASKS as never);
    } else {
      yield put(createTASKErrorAction(response.message));
      yield put(
        showAlertAction({
          title: response.message,
          duration: 3000,
          gravity: 'top',
          type: 'error',
        }),
      );
    }
  } catch (error) {
    yield put(createTASKErrorAction(error));
  }
}
// Individual exports for testing
export default function* currentTaskSaga() {
  yield takeLatest(CREATE_TASK, createTask);
}
