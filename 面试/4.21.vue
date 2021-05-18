<template>
  <div class="wraper">
      <ul>
          <li>上一页</li>
          <li class="pageItem" v-for="(pageItem,key) in items"></li>
          <li>下一页</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'page',
    props: {
        pageIndex: {
            type: Number,
            default: 0,
            require: true
        },
        pageSize: {
            type: Number,
            default: 10,
            require: true,
            validate: function(){

            }
        },
        dataList: {
            type: Array,
            require: true
        }
    },
    data() {
        return {
            index: this.pageIndex,
            
        }
    },
    computed:{
        items(){
            const pageLen = Math.floor(this.dataList.length / this.pageSize);
            let pages = [];
            for (let index = 0; index < pageLen ; index++) {
                pages.push;
                
            }
            return []
        }
    },
    methods: {
        nextPage(){

        },
        prePage(){

        },
        turnTo(index){

        }
    }
}
</script>

<style>

</style>