<template>
    <div>
        <h3>Dashboard(using moment-timezone)</h3>
        <h2>New York Time:- {{nyTime}}</h2>
    </div>
</template>
<script>
import moment from "moment-timezone";

export default {
  data() {
    return ({
      nyTime: null
    })
  },
  mounted() {
    this.nyTime = moment.tz(moment.now(), "America/New_York");
  }
}
</script>