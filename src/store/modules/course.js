import { fetchAsync } from "../../api/course";

const state = {
  items: [],
  pageIndex: 1,
  pageSize: 10,
  totalPages: 0,
  isFetching: false,
  isFetchingFailure: false
};

const getters = {};

const actions = {
  async loadAsync({ commit, state }, rest) {
    let { pageIndex = 1, pageSize = 0 } = rest || {};

    if (!pageSize || pageSize < 0) {
      pageSize = state.pageSize;
    } else if (pageSize != state.pageSize) {
      commit("setPageSize", pageSize);
      pageSize = state.pageSize;
    }

    if (!pageIndex || pageIndex < 1) {
      pageIndex = state.pageIndex;
    } else if (pageIndex != state.pageIndex) {
      commit("setPageIndex", pageIndex);
      pageIndex = state.pageIndex;
    }

    commit("setFetching");
    const result = await fetchAsync(pageIndex, pageSize).catch(() =>
      commit("unsetFetching", true)
    );
    commit("unsetFetching");
    commit("setItems", result);
  }
};

const mutations = {
  setItems(state, { items, totalPages }) {
    state.items = items;
    state.totalPages = totalPages;
  },
  setPageIndex(state, pageIndex) {
    state.pageIndex = pageIndex;
  },
  setPageSize(state, pageSize) {
    state.pageSize = pageSize;
  },
  setFetching(state) {
    state.isFetching = true;
    state.isFetchingFailure = false;
  },
  unsetFetching(state, failed) {
    state.isFetching = false;
    state.isFetchingFailure = failed;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
