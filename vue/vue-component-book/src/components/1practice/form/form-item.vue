<template>
  <div>
      <label v-if="label" :class="{ 'i-form-item-label-required': isRequired }">{{label}}</label>
      <div>
          <slot></slot>
          <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
      </div>
  </div>
</template>

<script>
// 1. 组件职责：表单项功能，lable 自定义 、接收不同的iInput、校验和校验结果提醒
// 2. 三大要素形成接口：props、 事件 、slot
// 3. 注意：此form封装校验规则rules，统一来自于父组件form的属性，所以props中不涉及校验属性
import iInput from "../input/input"
import Emitter from "../../../mixins/emitter"
export default {
    name: 'iFormItem',
    mixins: [ Emitter ],
    inject: ['form'],   //用于获取form组件中data、computed、methods
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: {
            type: String
        }
    },
    data() {
        return {
            isRequired: false,  // 是否为必填
            validateState: '',  // 校验状态
            validateMessage: '',  // 校验不通过时的提示信息
        }
    },
    mounted() {
        this.$on("blur", value => {

        })
    },
    methods: {
        //初始化每一组表单项的校验规则
        initRule(){

        },
        //获取
        setRules(){

        },
        validate(){

        },

    },
    beforeDestroy() {
        
    },
}
</script>

<style>
    .i-form-item-label-required:before {
        content: '*';
        color: red;
    }
    .i-form-item-message {
        color: red;
    }
</style>