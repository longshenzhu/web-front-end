<template>
  <div class="pic-page">
    <img
      id="ocrImgSign"
      :src="url"
      class="pic-view"
      crossorigin="Anonymous"
      v-finger:long-tap="showSelectDialog"
    />
  </div>
</template>

<script>
import { isArrayFn } from "@common/script/utils/common";
import { throttle, getFullUrl, getRefreshPageData } from "@/utils/common";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "picPage",
  props: {
    coursewareId: {
      type: String,
      require: true
    }
  },
  data() {
    return {
      url: "",
      currentCourseware: {},
    };
  },
  mounted() {
    this.init(this.coursewareId);
  },
  async beforeRouteUpdate(to, from, next) {
    console.log(`组件内容变化时,coursewareId:${this.coursewareId},from:${from.params.coursewareId},to:${to.params.coursewareId}, this.currencourseware.id:${this.currentCourseware.id}`)
    await this.saveMarkWhenLeave(this.currentCourseware);
    await this.init(to.params.coursewareId);
    next();
  },
  
  watch:{
    coursewareId(newVal, oldVal){
      console.log(`路由变化触发监听:${this.coursewareId}`);
    },
    'currentCourseware.id': {
    　handler(newName, oldName) {
      //console.log("课件发生了变化：",this.currentCourseware);
        this.saveTask();
      },
    　immediate: false
    },
  },
  computed: {
    ...mapState({
      currentCourse: (state) => state.hblMain.currentCourse,
    }),
    ...mapGetters(["getCurrentDevice", "getCourseware", "getTaskList"]),
  },
  methods: {
    ...mapMutations(["set_courseware", "set_index_mark_data", "add_task"]),
    async init(coursewareId){
      let courseware = this.$route.params?.currentCourseware || this.getCourseware(coursewareId) || await this.getRemoteCourseware(coursewareId);
      if(!courseware){
        console.error("逻辑错误,课件未获取");
        return;
      }
      let index = 0;
      this.currentCourseware = courseware;
      let files = this.currentCourseware?.files;
      this.url = files?.length > 0? getFullUrl(files[index].url) : "";
      this.set_courseware(courseware);
      this.updateMark(coursewareId, index);
    },
    async updateMark(coursewareId, index) {
      let clearParams = {
        sortIndex: index,
        type: "action",
        itemVal: "clear",
      };
      zonekey.log.info(
        `>>>之前清除原有标注:${JSON.stringify(clearParams)}`
      );
      this.$eventBus.$emit(this.$event.clearMark, clearParams);
      console.log(`获取新的标注：${coursewareId}`);
      let res = await this.$http.unifyGetIndexBag({
        Category: "Courseware",
        OwnerId: coursewareId,
        UniqueId: this.getCurrentDevice.uniqueId,
        Index: index,
      });
      let isBags = res && res.bags && res.bags.args;
      if (!isBags) {
        return;
      }
      let draw = res.bags.args;
      if (isArrayFn(draw) && draw.length > 0) {
        this.set_index_mark_data(draw);
      }
    },
    async getRemoteCourseware(coursewareId){
      let res = this.$http.getCourseware({Id: coursewareId});
      return res;
    },
    //保存标注
    async saveMarkWhenLeave(courseware) {
      let index = 0;
      let markData = this.$parent.getMarkData();
      let params = {
        Category: "Courseware",
        OwnerId: courseware.id,
        UniqueId: this.getCurrentDevice.uniqueId,
        Index: index,
        Bags: {
          args: markData,
        }
      };
      let res = await this.$http.unifyUpdateIndexBag(params);
      if(!res.success){
        this.$message({
          message: `保存标注-索引${courseware.id}失败`,
          type: "error",
          center: true,
        });
        return;
      }
      this.$eventBus.$emit("resetWbCng");
    },
    //保存任务
    async saveTask() {
      console.log("watch中的值:", this.currentCourseware)
      let task = {
        Id: this.currentCourseware.id,
        TaskType: "Pic",
        StateType: "freeze",
        Desc: this.currentCourseware.coursewareTitle,
        Bags: {
          courseId: this.currentCourse.id,
          deviceId: this.getCurrentDevice.uniqueId,       //设备id
          coursewareId: this.currentCourseware.id,
          index: 0,
          thumbnail: this.currentCourseware.thumbnail,
          // currentCourseware: this.currentCourseware,
        },
      };
      let _saveRes=await this.$http.saveTaskState(task);
      if(_saveRes.success && _saveRes.data){
        this.add_task(_saveRes.data);
        console.log("taskList:", this.getTaskList);
      }
    },
    showSelectDialog(e) {
      let x = e.clientX ? e.clientX : e.touches[0].clientX;
      let y = e.clientY ? e.clientY : e.touches[0].clientY;
      let startPoint = {
        x: x,
        y: y,
      };
      this.$eventBus.$emit("showSelectDialog", {
        startPoint: startPoint,
      });
    },
  },
  async beforeRouteLeave(to, from, next) {
    await this.saveMarkWhenLeave(this.currentCourseware);
    next();
  },
};
</script>

<style lang="scss">
.pic-view {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
