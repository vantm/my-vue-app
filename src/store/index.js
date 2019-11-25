import Vue from "vue";
import Vuex from "vuex";
import course from "./modules/course";
import student from "./modules/student";
import theClass from "./modules/class";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    course,
    student,
    class: theClass
  }
});
