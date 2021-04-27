<template>
    <div class="guide">
        <div class="banner">
            <div>
                <span>智慧课堂系统</span>
                <span>服务教学模式创新，将技术与教学深度融合</span>
            </div>
            <ul>
                <li>
                    <svg class="svg-icon"></svg>
                    <div>
                        <span>上课教师</span>
                        <span>等待中...</span>
                    </div>
                </li>
                <li>
                    <svg class="svg-icon"></svg>
                    <div>
                        <span>连接学生</span>
                        <span>等待中...</span>
                    </div>
                </li>
            </ul>
            <button>开始上课</button>
        </div>
        <div class="main">
            <ul>
                <li>
                    <span>APP扫码加入</span>
                    <img />
                </li>
                <li>
                    <span>验证码加入</span>
                    <span>111154</span>
                </li>
                <li>
                    <span>教室：192.168.3.20</span>
                    <span>网络地址：192.168.3.20</span>
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
        background-color: #fff;
    }
    .banner {
        flex: 60 1 0;
    }
    .main {
        flex: 40 1 0;
    }
</style>