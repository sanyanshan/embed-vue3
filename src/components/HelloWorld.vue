<script setup>
import {ref} from 'vue'
import {ElMessageBox} from 'element-plus'
// 按需引入样式
import 'element-plus/theme-chalk/el-message-box.css'

defineProps({
  msg: String,
})

const dialogVisible = ref(false)

const handleClose = (done) => {
  ElMessageBox.confirm('确定关闭吗？')
      .then(() => {
        done()
      })
      .catch(() => {

      })
}

const count = ref(0)
</script>

<template>
  <el-card style="max-width: 480px">
    <template #header>
      <span>这是一个组件</span>
    </template>
    <h3>外部传参：{{ msg }}</h3>
    <div class="card">
      <el-button type="primary" @click="count++">计数 {{ count }}</el-button>
      <el-button type="success" @click="dialogVisible=true">打开弹窗</el-button>
    </div>
  </el-card>

  <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="500"
      :before-close="handleClose"
  >
    <span>这是一个弹窗</span>
    <template #footer>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
    </template>
  </el-dialog>
</template>

<style scoped>
h3{
  color: #c800ff;
}

</style>
