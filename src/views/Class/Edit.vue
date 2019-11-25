<template lang="pug">
div(v-if="isFetching")
  b-spinner
div(v-else)
  code {{form}}
</template>
<script>
import { mapActions } from "vuex";
import { fetchSingleAsync } from "../../api/class";

export default {
  data() {
    return {
      form: null,
      isFetching: false,
      isFetchingFailure: false
    };
  },
  async created() {
    const id = this.$router.params.id;

    this.$set("isFetching", true);
    this.$set("isFetchingFailure", false);

    const theClass = await fetchSingleAsync(id).catch(() => {
      this.$set("isFetching", false);
      this.$set("isFetchingFailure", true);
    });

    this.$set(form, theClass);
    this.$set("isFetching", false);
  }
};
</script>