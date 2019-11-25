<template lang="pug">
  div(v-if="isFetching || isPuting")
    b-spinner
  b-form(v-else @submit="submitAsync")
    b-alert(v-if="isFetchingFailure") Error occured when fetching class.
    b-alert(v-if="isPutingFailure") Error occured when editing class.

    b-form-group#class-name-group(label="Class Name" label-for="class-name-input")
      b-form-input#class-name-input(v-model="form.name" required placeholder="Enter Class Name")
    b-form-group#class-price-group(label="Class Price" label-for="class-price-input")
      b-form-input#class-price-input.text-right(v-model="form.price" type="number" min="0" required placeholder="Enter Class Price")

    b-button.mr-2(type="submit" variant="primary") Submit
    b-button.mr-2(type="reset" variant="secondary") Reset
    b-button(type="button" variant="light" @click="goBack") Back
</template>
<script>
import { mapActions, mapState } from "vuex";
import { fetchSingleAsync } from "../../api/class";

export default {
  data() {
    return {
      form: null,
      isFetching: false,
      isFetchingFailure: false
    };
  },
  computed: {
    ...mapState({
      isPuting: state => state.class.isPuting,
      isPutingFailure: state => state.class.isPutingFailure
    })
  },
  methods: {
    ...mapActions({
      putAsync: "class/putAsync"
    }),
    async submitAsync(e) {
      e.handled = true;
      await this.putAsync(this.form);
      this.goBack();
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  async created() {
    const id = this.$route.params.id;

    this.$set(this.$data, "isFetching", true);
    this.$set(this.$data, "isFetchingFailure", false);

    const theClass = await fetchSingleAsync(id).catch(() => {
      this.$set(this.$data, "isFetching", false);
      this.$set(this.$data, "isFetchingFailure", true);
    });

    this.$set(this.$data, "form", theClass);
    this.$set(this.$data, "isFetching", false);
  }
};
</script>