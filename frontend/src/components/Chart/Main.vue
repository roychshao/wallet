<template>
  <div style="position: relative; max-height: 400px; max-width: 400px;" class="mx-auto">
    <canvas :id="chartId"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  props: {
    config: Object,
    chartId: String
  },
  data() {
    return {
      mychart: null
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.mychart = new Chart(
        document.getElementById(this.chartId),
        this.config
      )
    }
  },
  watch: {
    'config.data'() {
      this.mychart.destroy();
      this.init();
    }
  }
}
</script>