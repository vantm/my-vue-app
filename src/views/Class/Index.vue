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
    .d-flex.flex-row.flex-row-reverse
      b-button(variant="success" to="/class/add") new
    +pagination
    b-table(
      striped hover
      :busy="isApiBusy"
      :items="items"
      :fields="fields")
      template(v-slot:cell(id)="data")
        code {{ data.value }}
      template(v-slot:cell(actions)="data")
        b-button(variant="warning" :to="{name: 'edit-class', params: { id: data.item.id }}") edit
        | &nbsp;
        b-button(variant="danger" v-b-modal.modal-1 @click="askForRemove(data.item.id)") delete
      template(v-slot:table-busy)
        .text-center.text-info.my-2
          b-spinner.align-middle
          | &nbsp;
          strong Loading . . .
    +pagination
    b-modal#modal-1(title="Delete class" @ok="removeAsync")
      p.my-4 Are you sure?
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
        { key: "name", label: "Name" },
        { key: "price", label: "Price" },
        { key: "actions", label: "Actions" }
      ],
      breadcrumbs: [
        { text: "Home", to: { name: "home" } },
        { text: "Class", to: { name: "class" } }
      ],
      deleteId: 0
    };
  },
  computed: {
    ...mapState({
      items: ({ class: { items } }) => items,
      totalPages: ({ class: { totalPages } }) => totalPages,
      pageIndex: ({ class: { pageIndex } }) => pageIndex,
      pageSize: ({ class: { pageSize } }) => pageSize,
      isApiBusy: ({ class: { isFetching, isDeleting } }) =>
        isFetching || isDeleting,
      isApiFailed: ({ class: { isFetchingFailure, isDeletingFailure } }) =>
        isFetchingFailure || isDeletingFailure
    })
  },
  methods: {
    ...mapActions({
      loadAsync: "class/loadAsync",
      deleteAsync: "class/deleteAsync"
    }),
    linkGen(pageNum) {
      return {
        path: "/class",
        query: {
          page: pageNum
        }
      };
    },
    async fetchDataAsync() {
      const pageIndex = this.$route.query.page;
      await this.loadAsync({ pageIndex });
    },
    async pageSizeChangedAsync(pageSize) {
      await this.loadAsync({ pageIndex: 1, pageSize });
    },
    async removeAsync() {
      if (this.delete >= 0) {
        return;
      }

      await this.deleteAsync(this.deleteId);
      await this.fetchDataAsync();
    },
    askForRemove(id) {
      this.$set(this.$data, "deleteId", id);
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
