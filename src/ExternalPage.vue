<template>
    <div>
        <h3>External Page(using lodash)</h3>
        <h2>Array:- {{arr}}</h2>
    </div>
</template>
<script>
import { fill } from 'lodash'

export default {
  data() {
    return ({
      arr: []
    })
  },
  mounted() {
    this.arr = fill([1, 2, 3], 'a');
  }
}
</script>