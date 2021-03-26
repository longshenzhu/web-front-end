<template>
  <div>
      <label v-if="lebel" :class=" {'i-form-item-label-required': isRequired }">{{label}}</label>
      <div>
          <slot></slot>
          <div v-if="validateState === 'error'" class="i-form-item-message">{{ validateMessage }}</div>
      </div>
  </div>
</template>

<script>
import Emitter from '../../../mixins/emitter.js';
export default {
    name: 'iFormItem',
    mixins: [Emitter],
    inject: ['form'],
    props:{
        //属性验证的键名
        prop: {
            type: String,
            default: ''
        },
        label: {
            type: String
        }
    },
    data() {
        return {
            isRequired: false,      //是否为必填
            validateState: '',      //校验状态
            validateMessage: ''     //校验不通过时的提示信息
        }
    },
    created(){

    },
    mounted() {
        if(this.prop){
            //通知iForm，将子组件实例加入校验列表。
            // this.$parent.fields.push(this);
            this.dispatch('iForm','on-form-item-add',this);

            //设置初始值，以便在重置时恢复默认值
            this.initialValue = this.fieldValue;
            //启动校验监听
            this.setRelues();
        }
    },
    beforeDestroy() {
        this.dispatch('iForm', 'on-form-item-remove',this);
    },
    methods: {
        validate(trigger, callback = function(){}){
            let rules = this.getFilteredRule(trigger);
            if(!rules || rules.length == 0)return true;

            this.validateState = 'validating';
            //以下为async-validator库的调用方法
            let descriptor = {};
            descriptor[this.prop] = rules;

            const validator = new AsyncValidator(descriptor);
            let model = {};

            model[this.prop] = this.fieldValue;
            validator.validate(model, { firstFields: true }, errors => {
                this.validateState = !errors? 'success' : 'error';
                this.validateMessage = errors? errors[0] : '';

                callback(this.validateMessage);
            });
        },
        setRelues() {
            //找出校验规则中是否有Required
            let rules = this.getRules();
            if(rules.length){
                rules.every(rule => {
                    this.isRequired = rule.required;
                })
            }
            this.$on('on-form-blur', this.onFieldBlur);
            this.$on('on-form-change', this.onFieldChange);
        },
        getRules() {
            let formRules = this.form.rules;
            return formRules? formRules[this.prop] : [];
        },
        getFilteredRule(trigger){
            const rules = this.getRules();
            return rules.filter(rule => !rule.trigger || rule.trigger.indexOf(trigger) !== -1);
        },
        onFieldBlur(){

        },
        onFieldChange(){

        },
        resetField (){
            this.validateState = '';
            this.validateMessage = '';

            this.form.model[this.prop] = this.initialValue;
        }
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