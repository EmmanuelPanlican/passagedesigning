<template >
  <section class="list-content">
    <vessel-detail style=""/>
    <div>
      <vue-good-table v-on:click="expandPopUp()" :columns="columns" :rows="rows" />
    </div>
  </section>
</template>

<script >
import vesselDetail from "../cards/VesselDetails.vue"

  export default  {
    name: 'list-content',
    components: {
      vesselDetail
    },
    props: [],
    mounted() {

    },
    data() {
      return {
      columns: [
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        { id:1, name:"John", age: 20, createdAt: '',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ]
      }
    },
    methods: {
      expandPopUp: function() {

      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.list-content {
}
</style>
