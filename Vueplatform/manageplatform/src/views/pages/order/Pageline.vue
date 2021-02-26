<template>
  <div style="width: auto">
    <el-row style="margin: 15px">
      <el-col :span="24">
        <el-card class="m-box-card" shadow="hover">
          <ve-line :data="chartData" :settings="chartSettings"></ve-line>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="margin: 15px">
      <el-col :span="24">
        <el-card class="m-box-card" shadow="hover">
          <ve-histogram :data="chartData2" :settings="chartSettings2"></ve-histogram>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<!--suppress NonAsciiCharacters -->
<script>
import VeLine from 'v-charts/lib/line.common'
import VeHistogram from 'v-charts/lib/histogram.common'
import VeGauge from 'v-charts/lib/gauge.common'
import VeScatter from 'v-charts/lib/scatter.common'

export default {
  name: 'PageCharts',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VeLine,
    // eslint-disable-next-line vue/no-unused-components
    VeHistogram,
    // eslint-disable-next-line vue/no-unused-components
    VeGauge,
    // eslint-disable-next-line vue/no-unused-components
    VeScatter
  },
  data () {
    return {
      activeName: 'first',
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 }
        ]
      },
      chartSettings: {
        axisSite: { right: ['下单率'] },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['数值', '比率']
      },
      chartData2: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { 日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: '1/4', 访问用户: 2300, 下单用户: 1423, 下单率: 0.49 },
          { 日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.86 }
        ]
      },
      chartSettings2: {
        axisSite: { right: ['下单率'] },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['数值', '比率']
      }
    }
  }
}
</script>

<style scoped>
</style>
