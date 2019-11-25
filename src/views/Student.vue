<template lang="pug">
  div
    b-breadcrumb(:items="breadcrumbs")
</template>
<script>
  export default {
    data() {
      return {
        breadcrumbs: [
          { text: "Home", to: "/" },
          { text: "Student", to: "/student" }
        ]
      };
    }
  };
</script>
