<template >
  <section class="list-content">
    <div>
      <vue-good-table :columns="columns" :rows="rows" />
    </div>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'list-content',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.list-content {
}
</style>
