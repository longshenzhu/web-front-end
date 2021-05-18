<template>
    <div class="guide">
        <div class="banner">
            <div class="tip">
                <span>教师主屏</span>
            </div>
            <div class="tips">
                <div class="tip1">智慧课堂系统</div>
                <div class="tip2">服务教学模式创新，将技术与教学深度融合</div>
                <ul class="list">
                    <li class="item">
                        <svg class="svg-icon" aria-hidden="true">
                            <image href="../assets/teacher-icon.png" alt="老师信息" />
                        </svg>
                        <div class="tipx">
                            <span class="title">上课教师</span>
                            <span class="content">等待中...</span>
                        </div>
                    </li>
                    <li class="item">
                        <svg class="svg-icon" aria-hidden="true">
                            <image href="../assets/students-icon.png" alt="学生信息" />
                            <!-- <use xlink:href="#icon-user" /> -->
                        </svg>
                        <div class="tipx">
                            <span class="title">连接学生</span>
                            <span class="content">等待中...</span>
                        </div>
                    </li>
                </ul>
                <button class="btn-start">开始上课</button>
            </div>
        </div>
        <div class="main">
            <ul>
                <li>
                    <div class="title">APP扫码加入</div>
                    <div class="qrcode-container">
                        <svg aria-hidden="true" width="384" height="384" >
                            <image href="../assets/qrcode.png" alt="课程二维码" />
                        </svg>
                    </div>
                    <div class="zoom-in">
                        <svg aria-hidden="true" width="40" height="40" >
                            <image href="../assets/zoom-in.png" alt="放大" />
                        </svg>
                    </div>
                    <!-- <image src="../assets/qrcode.png" alt="课程二维码" /> -->
                </li>
                <li>
                    <span>验证码加入</span>
                    <div class="validate_code">111154</div>
                </li>
                <li class="tipx">
                    <span class="title">教室：192.168.3.20</span>
                    <div class="title">网络地址：192.168.3.20</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .guide {
        display: flex;
        height: 100%;
    }
    .banner {
        background-image: url(../assets/banner.png);
        background-color: #1a1e20;
        flex: 60 1 0;
        position: relative;
    }
    
    .tips {
        margin-top: 120px;
    }
    .tip {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(../assets/tips.png);
        background-repeat: no-repeat;
        text-align: left;
    }
    .tip span {
        margin: 20px 0 0 20px;
        display: inline-block;
        width: 80px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        background-color: #1b2833;
        color: white;
        font-size: 1.5em;
        font-family: "微软雅黑";
        border-radius: 5px;
    }
    .list {
        margin-top: 250px;
        list-style: none;
        display: flex;
        justify-content: center;
        // width: 500px;
    }
    .item {
        display: flex;
        align-items: center;
    }
    .list .tipx {
        margin: -30px 10px 0px -10px;
        display: inline-block;
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    .tipx .title {
        height: 14px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        line-height: 25px;
        color: #FFFFFF;
        opacity: 0.5;
    }
    .tipx .content {
        height: 20px;
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 40px;
        color: #FFFFFF;
        opacity: 1;
    }
    
    .tip1 {
        font-family: "微软雅黑";
        font-size: 50px;
        font-weight: 500;
        text-align: center;
        letter-spacing: 0.1em;
        color: transparent;
        -webkit-background-clip: text;
        background-image: linear-gradient(132deg, #1890ff 0%, #13c1c3 100%);
    }
    .tip2 {
        font-size: 15px;
        letter-spacing: 0.05em;
        color:whitesmoke;

    }

    .btn-start {
        margin-top: 30px;
        width: 270px;
        height: 40px;
        background: #1890FF;
        opacity: 1;
        border-radius: 5px;
        
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 40px;
        color: #FFFFFF;
        opacity: 1;
    }
    .main {
        background-image: url(../assets/main.png);
        flex: 40 1 0;
        display: flex;
        justify-content: center;
        box-sizing: content-box;
    }
    .main ul {
        // width:400px;
        list-style: none;
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    .main li {
        text-align: left;
        margin-bottom: 20px;
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        line-height: 37px;
        color: #FFFFFF;
        opacity: 1;
    }

    .validate_code {
        width: 270px;
        background-color: black;
        border-radius: 5px;
        text-align: center;
    }
    .zoom-in {
        float: right;
        height: 35px;
        width: 40px;
        margin-top: -10px;
    }
    .svg-icon {
        line-height: 1;
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        font-size: 60px;
    }
</style>