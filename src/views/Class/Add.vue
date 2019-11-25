<template lang="pug">
  div(v-if="isPosting")
    b-spinner
  b-form(v-else @submit="submitAsync")
    b-alert(v-if="isPostingFailure") Error occured when adding new class.
    b-form-group#class-name-group(label="Class Name" label-for="class-name-input")
      b-form-input#class-name-input(v-model="form.name" required placeholder="Enter Class Name")
    b-form-group#class-price-group(label="Class Price" label-for="class-price-input")
      b-form-input#class-price-input.text-right(v-model="form.price" type="number" min="0" required placeholder="Enter Class Price")

    b-button.mr-2(type="submit" variant="primary") Submit
    b-button.mr-2(type="reset" variant="secondary") Reset
    b-button(type="button" variant="light" @click="goBack") Back
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        name: "",
        price: 0
      }
    };
  },
  computed: {
    ...mapState({
      isPosting: state => state.class.isPosting,
      isPostingFailure: state => state.class.isPostingFailure
    })
  },
  methods: {
    ...mapActions({
      postAsync: "class/postAsync"
    }),
    async submitAsync(e) {
      e.handled = true;
      await this.postAsync(this.form);
      this.goBack();
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>