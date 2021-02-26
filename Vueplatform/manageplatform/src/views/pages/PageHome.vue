<template>
  <div class="m-home" style="height: auto">
<!--    信息栏-->
    <el-row :gutter="20" style="margin: 15px">
      <el-col :xs="24" :sm="12" :lg="6">
        <el-card class="m-box-card" shadow="hover">
          <div class="m-icon">
            <i class="el-icon-set-up" style="color: #F56C6C;"></i>
          </div>
          <div class="m-content">
            <p>待办事项</p>
            <p class="m-count">{{ info.tasks }}</p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <el-card class="m-box-card" shadow="hover">
          <div class="m-icon">
            <i class="el-icon-message" style="color: #E6A23C;"></i>
          </div>
          <div class="m-content">
            <p>系统消息</p>
            <p class="m-count">{{ info.message }}</p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <el-card class="m-box-card" shadow="hover">
          <div class="m-icon">
            <i class="el-icon-document" style="color: #67C23A;"></i>
          </div>
          <div class="m-content">
            <p>代码量</p>
            <p class="m-count">{{ info.code }}</p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <el-card class="m-box-card" shadow="hover">
          <div class="m-icon">
            <i class="el-icon-sunrise-1" style="color: #409EFF;"></i>
          </div>
          <div class="m-content">
            <p>天气</p>
            <p>{{ info.weather }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
<!--    任务栏-->
    <el-row :gutter="20" style="margin: 15px">
      <el-col :sm="24" :lg="12">
        <el-card class="m-box-card" shadow="hover" style="height: 300px;">
          <p style="text-align: center;font-size: 25px;padding: 20px;">订单情况</p>
          <el-table :data="tableData2" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="date" label="日期" width="130"></el-table-column>
            <el-table-column prop="name" label="姓名" width="80"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :sm="24" :lg="12">
        <el-card class="m-box-card" shadow="hover" style="height: 300px">
          <p style="text-align: center;font-size: 25px;padding: 20px;">任务进度</p>
          <div class="m-task-box">
            <div class="m-task-text">商品更新：</div>
            <div class="m-task-pro">
              <el-progress :text-inside="true" :stroke-width="18" :percentage="50"
              color="rgba(100, 113, 199, 0.7)"></el-progress>
            </div>
          </div>
          <div class="m-task-box">
            <div class="m-task-text">订单完成度：</div>
            <div class="m-task-pro">
              <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
            </div>
          </div>
          <div class="m-task-box">
            <div class="m-task-text">账目核对：</div>
            <div class="m-task-pro">
              <el-progress :text-inside="true" :stroke-width="18" :percentage="80"
                           color="rgba(142, 113, 199, 0.7)"></el-progress>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
<!--    数据散点图-->
    <el-row style="margin: 15px">
      <el-col :span="24">
        <el-card class="m-box-card" shadow="hover">
          <p style="text-align: center;font-size: 25px;padding: 20px;">订单概览</p>
          <ve-scatter :data="chartData2" :settings="chartSettings2"></ve-scatter>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>

<script>
// 将单个图表引入到项目中
import VeLine from 'v-charts/lib/line.common'
import VeScatter from 'v-charts/lib/scatter.common'

export default {
  name: 'PageHome',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VeLine,
    // eslint-disable-next-line vue/no-unused-components
    VeScatter
  },
  data () {
    return {
      info: {
        tasks: parseFloat(1).toLocaleString(),
        message: parseFloat(6).toLocaleString(),
        code: parseFloat(2555).toLocaleString(),
        weather: '秦皇岛，26℃，多云'
      },
      chartSettings1: {
        axisSite: { right: ['下单率'] },
        yAxisType: ['KMB', 'percent'],
        yAxisName: ['数值', '比率']
      },
      chartData2: {
        columns: ['日期', '访问用户', '下单用户', '年龄'],
        rows: {
          上海: [
            { 日期: '1/1', 访问用户: 123, 年龄: 3, 下单用户: 1244 },
            { 日期: '1/2', 访问用户: 1223, 年龄: 6, 下单用户: 2344 },
            { 日期: '1/3', 访问用户: 7123, 年龄: 9, 下单用户: 3245 },
            { 日期: '1/4', 访问用户: 4123, 年龄: 12, 下单用户: 4355 },
            { 日期: '1/5', 访问用户: 3123, 年龄: 15, 下单用户: 4564 },
            { 日期: '1/6', 访问用户: 2323, 年龄: 20, 下单用户: 6537 }
          ],
          北京: [
            { 日期: '1/1', 访问用户: 123, 年龄: 3, 下单用户: 1244 },
            { 日期: '1/2', 访问用户: 1273, 年龄: 6, 下单用户: 2344 },
            { 日期: '1/3', 访问用户: 3123, 年龄: 15, 下单用户: 4564 },
            { 日期: '1/4', 访问用户: 2123, 年龄: 9, 下单用户: 3245 },
            { 日期: '1/5', 访问用户: 4103, 年龄: 12, 下单用户: 4355 },
            { 日期: '1/6', 访问用户: 7123, 年龄: 10, 下单用户: 3567 }
          ],
          广州: [
            { 日期: '1/1', 访问用户: 123, 年龄: 3, 下单用户: 1244 },
            { 日期: '1/2', 访问用户: 1223, 年龄: 6, 下单用户: 2344 },
            { 日期: '1/3', 访问用户: 2123, 年龄: 30, 下单用户: 3245 },
            { 日期: '1/5', 访问用户: 4123, 年龄: 12, 下单用户: 4355 },
            { 日期: '1/4', 访问用户: 5123, 年龄: 18, 下单用户: 4564 },
            { 日期: '1/6', 访问用户: 3843, 年龄: 30, 下单用户: 4850 }
          ]
        }
      },
      tableData2: [{ // 订单信息
        date: '2013-07-21',
        name: 'aa',
        address: 'xxx'
      }, {
        date: '2016-07-21',
        name: 'bb',
        address: 'xxxxxx'
      }
      ]

    }
  },
  methods: {
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

<style scoped lang="scss">

</style>
