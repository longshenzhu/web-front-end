<template>
  <form>
      <slot></slot>
  </form>
</template>

<script>
import { error } from 'util';
//  <div>
//     <i-form :model="formValidate" :rules="ruleValidate">
//       <i-form-item label="用户名" prop="name">
//         <i-input v-model="formValidate.name"></i-input>
//       </i-form-item>
//       <i-form-item label="邮箱" prop="mail">
//         <i-input v-model="formValidate.mail"></i-input>
//       </i-form-item>
//     </i-form>
//   </div>
export default {
    name: 'iForm',
    props: {
        model: {
            type: Object
        },
        rules: {
            type: Object
        }
    },
    data() {
        return {
            //用于需要检验的form-item缓存，不指定form-item的prop（规则名）时，不需要校验，不用添加到缓存
            fields: []
        }
    },
    provide(){
        return {
            form: this
        }
    },
    created() {
        this.$on('on-form-item-add', field => {
            if(field) this.fields.push(field);
        });
        this.$on('on-form-item-remove', field => {
            if(field.prop) this.fields.splice(this.fields.indexOf(field), 1);
        })
    },
    methods:{
        validate(callback){
            return new Promise(resolve =>{
                let valid = true;
                let count = 0;
                this.fields.forEach(field =>{
                    //调用每一项的validate方法
                    field.validate('', error=>{
                        if(error){
                            valid = false;
                        }
                        if(++count === this.fields.length){
                            //完成全部验证
                            resolve(valid);
                            if(typeof callback === 'function'){
                                callback(valid);
                            }
                        }
                    })
                })
            })
            //验证表单,调用子组件来验证自己
            this.fields.forEach(field => {

            })
        },
        resetFields(){
            //重置表单：调用子组件重置
            this.fields.forEach(field => {
                field.resetField();
            });
        }
    }
}
</script>

<style>

</style>
