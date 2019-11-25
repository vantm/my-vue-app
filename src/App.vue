<template lang="pug">
  div
    header.mb-2
      b-navbar(toggleable="lg" type="dark" variant="success")
        b-navbar-brand(:to="{name: 'home'}") My Vue App
        b-navbar-toggle(target="nav-collapse")
        b-collapse#nav-collapse(is-nav)
          b-navbar-nav
            b-nav-item(:to="{name: 'class'}") Class
            b-nav-item(:to="{name: 'student'}") Student
            b-nav-item(:to="{name: 'course'}") Course
            b-nav-item(:to="{name: 'about'}") About
    main
      .container
        router-view
</template>
