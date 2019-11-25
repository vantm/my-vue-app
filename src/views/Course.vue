<template lang="pug">
  mixin pagination
    .row
        .col-6
          b-form-select(
            v-model="pageSize"
            :options="pageSizeList"
            @change="pageSizeChangedAsync"
          )
        .col-6
          .overflow-auto(v-if="totalPages > 0")
            b-pagination-nav(
              :link-gen="linkGen" 
              :number-of-pages="totalPages"
              :value="pageIndex"
              use-router pills)
  div
    b-breadcrumb(:items="breadcrumbs")
    +pagination
    b-table(
      striped hover
      :busy="isFetching"
      :items="items"
      :fields="fields")
      template(v-slot:cell(id)="data")
        code {{ data.value }}
      template(v-slot:table-busy)
        .text-center.text-info.my-2
          b-spinner.align-middle
          | &nbsp;
          strong Loading . . .
    +pagination
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      pageSizeList: [
        { value: 5, text: "5" },
        { value: 10, text: "10" },
        { value: 20, text: "20" },
        { value: 50, text: "50" },
        { value: 100, text: "100" }
      ],
      fields: [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" }
      ],
      breadcrumbs: [
        { text: "Home", to: { name: "home" } },
        { text: "Course", to: { name: "course" } }
      ]
    };
  },
  computed: {
    ...mapState({
      items: ({ course: { items } }) => items,
      totalPages: ({ course: { totalPages } }) => totalPages,
      pageIndex: ({ course: { pageIndex } }) => pageIndex,
      pageSize: ({ course: { pageSize } }) => pageSize,
      isFetching: ({ course: { isFetching } }) => isFetching
    })
  },
  methods: {
    ...mapActions({
      loadAsync: "course/loadAsync"
    }),
    linkGen(pageNum) {
      return { name: "course", query: { page: pageNum } };
    },
    async fetchDataAsync() {
      const pageIndex = this.$route.query.page;
      await this.loadAsync({ pageIndex });
    },
    async pageSizeChangedAsync(pageSize) {
      await this.loadAsync({ pageIndex: 1, pageSize });
    }
  },
  async created() {
    await this.fetchDataAsync();
  },
  watch: {
    $route: "fetchDataAsync"
  }
};
</script>
