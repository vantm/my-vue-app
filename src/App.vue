<template lang="pug">
  div
    header.mb-2
      b-navbar(toggleable="lg" type="dark" variant="success")
        b-navbar-brand(to="/") My Vue App
        b-navbar-toggle(target="nav-collapse")
        b-collapse#nav-collapse(is-nav)
          b-navbar-nav
            b-nav-item(to="/class") Class
            b-nav-item(to="/student") Student
            b-nav-item(to="/course") Course
            b-nav-item(to="/about") About
    main
      .container
        router-view
</template>
