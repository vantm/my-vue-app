import { fetchAsync, postAsync, putAsync, deleteAsync } from "../../api/class";

const state = {
  items: [],
  pageIndex: 1,
  pageSize: 10,
  totalPages: 0,
  isFetching: false,
  isFetchingFailure: false,
  isPosting: false,
  isPostingFailure: false,
  isPuting: false,
  isPutingFailure: false,
  isDeleting: false,
  isDeletingFailure: false
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
  },
  async postAsync({ commit }, { name, price }) {
    commit("setPosting");

    await postAsync({ name, price }).catch(() => commit("unsetPosting", true));

    commit("unsetPosting");
  },
  async putAsync({ commit }, { id, name, price }) {
    commit("setPuting");

    await putAsync({ id, name, price }).catch(() =>
      commit("unsetPuting", true)
    );

    commit("unsetPuting");
  },
  async deleteAsync({ commit }, id) {
    commit("setDeleting");

    await deleteAsync(id).catch(() => commit("unsetDeleting", true));

    commit("unsetDeleting");
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
  },
  setPosting(state) {
    state.isPosting = true;
    state.isPostingFailure = false;
  },
  unsetPosting(state, failed) {
    state.isPosting = false;
    state.isPostingFailure = failed;
  },
  setPuting(state) {
    state.isPuting = true;
    state.isPutingFailure = false;
  },
  unsetPuting(state, failed) {
    state.isPuting = false;
    state.isPutingFailure = failed;
  },
  setDeleting(state) {
    state.isDeleting = true;
    state.isDeletingFailure = false;
  },
  unsetDeleting(state, failed) {
    state.isDeleting = false;
    state.isDeletingFailure = failed;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
