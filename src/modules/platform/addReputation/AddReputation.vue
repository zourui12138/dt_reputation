<template>
    <div id="addReputation">
        <header class="header card clear">
            <el-select
                class="fl"
                @change="toggleCurrentProject"
                v-model="currentProject"
                filterable
                placeholder="请选择项目">
                <el-option
                    v-for="item in projects"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                </el-option>
            </el-select>
            <span class="fl">评估时间：</span>
            <el-date-picker
                class="fl"
                v-model="currentYear"
                type="year"
                placeholder="选择评估时间">
            </el-date-picker>
            <h1 class="fr">项目信誉值：<span>{{currentAddAssets}}</span>增元</h1>
            <el-popover
                class="fr"
                placement="bottom"
                width="300"
                trigger="hover">
                <ul>
                    <li>评估的增元数=当前企业数X <span>100%</span></li>
                    <li>评估的增元数=当前企业数X <span>100%</span></li>
                    <li>评估的增元数=当前企业数X <span>100%</span></li>
                    <li>评估的增元数=当前企业数X <span>100%</span></li>
                    <li>评估的增元数=当前企业数X <span>100%</span></li>
                    <li>评估的增元数=当前企业数X <span>100%</span></li>
                </ul>
                <h2 slot="reference">项目信誉等级：<img src="" alt=""></h2>
            </el-popover>
        </header>
        <section class="section card">
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="list card">
                        <h1><button type="button">财报提交及时率</button></h1>
                        <ul>
                            <li v-for="i in reports" class="clear">
                                <img @click="addReputation(i)" v-show="i.status === '0'" class="fl" src="../../../assets/img/platform/pause.png" alt="">
                                <img v-show="i.status === '1'" class="fl" src="../../../assets/img/platform/success.png" alt="">
                                <div class="fl card">
                                    <strong class="fl">{{i.fileName}}</strong>
                                    <span class="fr">{{i.time | dateFormat}}</span>
                                    <h3 v-show="i.isAnimate">智能合约执行中</h3>
                                </div>
                                <h2 class="fr card">信誉：<strong v-show="i.status === '0'">?</strong><span v-show="i.status === '1'">{{'+ '+i.reputation+'分'}}</span></h2>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="list card">
                        <h1><button type="button">对赌合约触发</button></h1>
                        <ul>
                            <li v-for="i in contract" class="clear">
                                <img @click="addReputation(i)" v-show="i.status === '0'" class="fl" src="../../../assets/img/platform/pause.png" alt="">
                                <img v-show="i.status === '1'" class="fl" src="../../../assets/img/platform/success.png" alt="">
                                <div class="fl card">
                                    <strong class="fl">{{i.fileName}}</strong>
                                    <span class="fr">{{i.time | dateFormat}}</span>
                                    <h3 v-show="i.isAnimate">智能合约执行中</h3>
                                </div>
                                <h2 class="fr card">信誉：<strong v-show="i.status === '0'">?</strong><span v-show="i.status === '1'">{{'+ '+i.reputation+'分'}}</span></h2>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="list card">
                        <h1><button type="button">财报提交及时率</button></h1>
                        <el-carousel height="282px" :autoplay="false">
                            <el-carousel-item v-for="i in disclosure" :key="i.id">
                                <div class="disclosure_box">
                                    <header class="clear">
                                        <img @click="addReputation(i)" v-show="i.status === '0'" class="fl" src="../../../assets/img/platform/pause.png" alt="">
                                        <img v-show="i.status === '1'" class="fl" src="../../../assets/img/platform/success.png" alt="">
                                        <div class="fl card">
                                            <strong class="fl">{{i.fileName}}</strong>
                                            <span class="fr">{{i.time | dateFormat}}</span>
                                            <h3 v-show="i.isAnimate">智能合约执行中</h3>
                                        </div>
                                        <h2 class="fr card">信誉：<strong v-show="i.status === '0'">?</strong><span v-show="i.status === '1'">{{'+ '+i.reputation+'分'}}</span></h2>
                                    </header>
                                    <section class="card">{{i.fileDesc}}</section>
                                </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-col>
                <el-col :span="12"><div class="chart card" ref="chartCount"></div></el-col>
                <el-col :span="12"><div class="chart card" ref="chartLevel"></div></el-col>
                <el-col :span="24">
                    <div class="steps card">
                        <h1><button type="button">项目链上生命周期</button></h1>
                        <section>
                            <ul class="clear">
                                <li class="fl">项目启动阶段</li>
                                <li class="fl">项目研发阶段</li>
                                <li class="fl">市场推广阶段</li>
                                <li class="fl">资本退出</li>
                            </ul>
                            <el-steps :active="7" align-center>
                                <el-step title="项目启动会" description="2017.12.09">
                                    <img slot="icon" src="../../../assets/img/platform/cycle1.png" alt="">
                                </el-step>
                                <el-step title="产品研发" description="2018.01.09">
                                    <img slot="icon" src="../../../assets/img/platform/cycle2.png" alt="">
                                </el-step>
                                <el-step title="产品发布" description="2018.02.09">
                                    <img slot="icon" src="../../../assets/img/platform/cycle3.png" alt="">
                                </el-step>
                                <el-step title="营销推广" description="2018.03.09">
                                    <img slot="icon" src="../../../assets/img/platform/cycle4.png" alt="">
                                </el-step>
                                <el-step title="IPO" description="2018.04.09">
                                    <img slot="icon" src="../../../assets/img/platform/cycle5.png" alt="">
                                </el-step>
                                <el-step title="股份回购" description="2018.05.09">
                                    <img slot="icon" src="../../../assets/img/platform/cycle6.png" alt="">
                                </el-step>
                            </el-steps>
                        </section>
                    </div>
                </el-col>
            </el-row>
        </section>
    </div>
</template>

<script>
    import {
        api_getProjects,
        api_getProjectsReports,
        api_getProjectsContract,
        api_getProjectsDisclosure,
        api_addReputation
    } from '../../../api/getData'

    export default {
        name: "AddReputation",
        data() {
            return{
                currentProject: null,
                currentAddAssets: null,
                projects: [],
                currentYear: '2018',
                reports: [],
                contract: [],
                disclosure: []
            }
        },
        methods: {
            chartFun(dom,title) {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(dom);
                // 图表配置项
                let option = {
                    title: {
                        text: title,
                        textStyle: {
                            color: '#333',
                            fontSize: 16
                        },
                        top: 10,
                        left: 10
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['股权转让总量', '基金转让总量'],
                        right: 10,
                        top: 10
                    },
                    grid: {
                        left: 10,
                        right: 20,
                        bottom: 10,
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: ['07.15','07.16','07.17','07.18','07.19','07.20','07.21']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '股权转让总量',
                            type: 'line',
                            areaStyle: {
                                normal: {
                                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {offset: 0, color: 'rgba(67, 103, 246, 0.3)'},
                                        {offset: 1, color: 'rgba(67, 103, 246, 0)'}
                                    ]),
                                }
                            },
                            itemStyle: {
                                borderWidth: 4,
                                symbolSize: 4,
                                normal: {
                                    color: '#4367f6',
                                    borderColor: '#4367f6',
                                    borderWidth: 4
                                }
                            },
                            data: [3, 6, 3, 7, 5, 6.5, 4.5],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'}
                                ]
                            }
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            // 获取所有项目列表
            async getProjects() {
                let data = await api_getProjects();
                this.projects = data.data.data;
                // 获取项目ID
                if(this.$route.query.productId){
                    this.currentProject = parseInt(this.$route.query.productId);
                }else{
                    this.currentProject = data.data.data[0].id;
                }
                this.projects.forEach((value) => {
                    this.currentProject === value.id && (this.currentAddAssets = value.addAssets);
                });
                this.getProjectsReports();
                this.getProjectsContract();
                this.getProjectsDisclosure();
            },
            // 获取项目财报列表
            async getProjectsReports() {
                let data = await api_getProjectsReports(this.currentProject);
                this.reports = [];
                data.data.data.forEach((value,index) => {
                    if(index < 5){
                        value.isAnimate = false;
                        this.reports.push(value);
                    }
                });
            },
            // 获取对赌合约列表
            async getProjectsContract() {
                let data = await api_getProjectsContract(this.currentProject);
                this.contract = [];
                data.data.data.forEach((value,index) => {
                    if(index < 5){
                        value.isAnimate = false;
                        this.contract.push(value);
                    }
                });
            },
            // 获取违法信息披露
            async getProjectsDisclosure() {
                let data = await api_getProjectsDisclosure(this.currentProject);
                this.disclosure = [];
                data.data.data.forEach((value) => {
                    value.isAnimate = false;
                    this.disclosure.push(value);
                });
            },
            // 项目增信增誉
            async addReputation(item) {
                item.isAnimate = true;
                let timer = setTimeout(() => {
                    item.isAnimate = false;
                    item.status = '1';
                    this.currentAddAssets -= item.reputation;
                    this.projects.forEach((data) => {
                        data.id === this.currentProject && (data.addAssets = this.currentAddAssets);
                    });
                    clearTimeout(timer);
                },5000);
                await api_addReputation(this.currentProject,item.id,item.reputation);
            },
            // 切换当前项目
            toggleCurrentProject(value) {
                this.currentProject = value;
                this.projects.forEach((item) => {
                    item.id === value && (this.currentAddAssets = item.addAssets);
                });
                this.getProjectsReports();
                this.getProjectsContract();
                this.getProjectsDisclosure();
            }
        },
        mounted() {
            this.chartFun(this.$refs.chartCount,'信誉值');
            this.chartFun(this.$refs.chartLevel,'增誉等级');
            this.getProjects();
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes moveRight {
        to {
            width: 100%;
        }
    }
    #addReputation{
        .header{
            height: 40px;
            line-height: 40px;
            padding: 20px;
            margin-bottom: 20px;
            .el-select{
                width: 400px;
                margin-right: 50px;
            }
            .el-date-editor.el-input{
                width: 150px;
            }
            h1{
                margin-left: 100px;
                height: 40px;
                span{
                    color: #ff6475;
                    font-size: 24px;
                }
            }
        }
        .section{
            padding: 20px;
            .list{
                padding: 20px;
                h1{
                    button{
                        padding: 0 20px;
                        height: 36px;
                        line-height: 36px;
                        border-radius: 4px;
                        text-align: center;
                        font-size: 16px;
                        color: #fff;
                        background: linear-gradient(to right, #0bcefe, #475dff);
                        margin-bottom: 16px;
                    }
                }
                ul{
                    height: 282px;
                    li{
                        &:not(:first-child){
                            margin-top: 8px;
                        }
                        height: 50px;
                        line-height: 50px;
                        img{
                            width: 36px;
                            height: 36px;
                            margin-top: 7px;
                            margin-right: 10px;
                            cursor: pointer;
                        }
                        div{
                            width: 370px;
                            padding: 0 10px;
                            position: relative;
                            h3{
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 0;
                                height: 50px;
                                line-height: 50px;
                                background: linear-gradient(to right, #0bcefe, #475dff);
                                overflow: hidden;
                                text-indent: 2em;
                                color: #fff;
                                animation-name: moveRight;
                                animation-duration: 5s;
                                animation-timing-function: linear;
                            }
                        }
                        h2{
                            width: 90px;
                            padding: 0 10px;
                            span{
                                color: #ff6475;
                            }
                        }
                    }
                }
            }
            .disclosure_box{
                padding: 10px;
                height: calc(100% - 20px);
                header{
                    height: 50px;
                    line-height: 50px;
                    img{
                        width: 36px;
                        height: 36px;
                        margin-top: 7px;
                        margin-right: 10px;
                        cursor: pointer;
                    }
                    div{
                        width: 350px;
                        padding: 0 10px;
                        position: relative;
                        h3{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 0;
                            height: 50px;
                            line-height: 50px;
                            background: linear-gradient(to right, #0bcefe, #475dff);
                            overflow: hidden;
                            text-indent: 2em;
                            color: #fff;
                            animation-name: moveRight;
                            animation-duration: 5s;
                            animation-timing-function: linear;
                        }
                    }
                    h2{
                        width: 90px;
                        padding: 0 10px;
                        span{
                            color: #ff6475;
                        }
                    }
                }
                section{
                    line-height: 30px;
                    margin-top: 10px;
                    padding: 10px;
                    height: calc(100% - 80px);
                }
            }
            .chart{
                height: 250px;
                margin-top: 20px;
            }
            .steps{
                margin-top: 20px;
                padding: 20px;
                h1{
                    button{
                        padding: 0 20px;
                        height: 36px;
                        line-height: 36px;
                        border-radius: 4px;
                        text-align: center;
                        font-size: 16px;
                        color: #fff;
                        background: linear-gradient(to right, #0bcefe, #475dff);
                        margin-bottom: 8px;
                    }
                }
                section{
                    padding: 60px 1px 4px;
                    position: relative;
                    ul {
                        position: absolute;
                        top: 0;
                        left: 0;
                        li {
                            height: 135px;
                            line-height: 40px;
                            color: #409EFF;
                            text-align: center;
                            font-size: 14px;
                            &:nth-child(1) {
                                width: 300px;
                                background-color: #e1f8fe;
                            }
                            &:nth-child(2) {
                                width: 600px;
                                background-color: #c2f2fe;
                            }
                            &:nth-child(3) {
                                width: 600px;
                                background-color: #95e9fe;
                            }
                            &:nth-child(4) {
                                width: 300px;
                                background-color: #6ae0fe;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
    #addReputation{
        .el-step__title.is-finish {
            font-size: 12px;
            line-height: 20px;
        }
    }
</style>
