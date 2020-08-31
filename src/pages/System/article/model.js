import { addleData, getArticleTableData, addArticleData } from '@/services/api';
import { isRespSucc, showErrorMsg } from '@/utils/utils';

// c测试封装model对数据的获取
const initState = {
  dataSource: [],
};
export default {
  namespace: 'article',

  state: { },

  effects: {
    *create({ routeid }, { put }) {
      yield put({
        type: 'createState',
        routeid,
      });
    },
    *clear(_, { put }) {
      yield put({
        type: 'clearState',
      });
    },
    *getTableData({ routeid, payload }, { call, put }) {
      // 请求service
      const response = yield call(getArticleTableData, payload);
      if (!isRespSucc(response)) {
        showErrorMsg(response);
        return;
      }
      // const { ResponseBody: { dataSource, pagination } } = response;
      const { data: { dataSource, pagination } } = response;
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          dataSource, // 返回页面的数据
          pagination,
        },
      });
    },
    *addleData({ routeid, payload }, { call, put }) {
      const response = yield call(addArticleData, payload);
      if (!isRespSucc(response)) {
        showErrorMsg(response);
      }
      const { message, code } = response;
      yield put({
        type: 'saveState',
        routeid,
        payload: {
          message,
          code,
        },
      });
    },
  },

  reducers: {
    createState(_, { routeid }) {
      const newState = {};
      newState[routeid] =
       JSON.prase(JSON.stringify(initState));
      return newState;
    },
    saveState(state, { routeid, payload }) {
      const newState = { ...state };
      newState[routeid] =
       { ...state[routeid], ...payload };
      return newState;
    },
    clearState() {
      return {};
    },
  },
};
