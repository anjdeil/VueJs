<template lang="html">
  <div id="projects">
    <div class="columns">
      <div class="column is-half">
        <project-list />
        <add-project />
      </div>
      <div class="column is-one-quarter">
        <project-status />
      </div>
    </div>
  </div>
</template>

<script>
import projectList from '../components/projectList'
import addProject from '../components/addProject'

export default {
  name: 'projects',
  components: {
    projectList,
    addProject
  },
  mounted: function () {
    this.$store.dispatch('LOAD_PROJECT_LIST')
  }
}
</script>

<style lang="css">
</style>