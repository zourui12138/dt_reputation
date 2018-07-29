<template>
    <div id="addValue">
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
            <h1 class="fr">当前项目价值：<span>{{currentEnterprise}}</span>企元</h1>
        </header>
        <section class="section card">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div class="list">
                        <ul class="clear card"
                            v-for="(i,index) in events"
                            @click="toggleCurrentEvent(index)"
                            :class="currentEventIndex === index ? 'current':''">
                            <li class="fl"><el-button size="mini" type="danger">融资</el-button></li>
                            <li class="fl">{{i.time | dateFormat}}</li>
                            <li class="fl"><img src="../../../assets/img/platform/flower.png" alt=""></li>
                            <li class="fl">{{i.companyName}}</li>
                            <li class="fl">{{i.fileDesc}}</li>
                            <li class="fl">
                                <span v-show="i.status === '1'"><span>信誉：</span><strong>{{'+ '+i.reputation+'分'}}</strong></span>
                                <button v-show="i.status === '0'" type="button" @click="addValue(i)">分析</button>
                            </li>
                        </ul>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="listDetail card"><img src="../../../assets/img/platform/file.png" alt=""></div>
                </el-col>
                <el-col :span="24"><div class="chart card" ref="chart"></div></el-col>
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
        api_getProjectsEvents,
        api_addValue
    } from '../../../api/getData'

    export default {
        name: "AddValue",
        data() {
            return{
                currentProject: null,
                projects: [],
                currentEnterprise: null,
                events: [],
                currentEventIndex: 0
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
                this.currentProject = data.data.data[10].id;
                this.currentEnterprise = data.data.data[10].enterprise;
                this.getProjectsEvents();
            },
            // 获取项目事件
            async getProjectsEvents() {
                let data = await api_getProjectsEvents(this.currentProject);
                this.events = [];
                this.currentEventIndex = 0;
                data.data.data.forEach((value,index) => {
                    index < 5 && this.events.push(value);
                });
            },
            // 切换当前事件
            toggleCurrentEvent(index) {
                this.currentEventIndex = index;
            },
            // 切换当前项目
            toggleCurrentProject(value) {
                this.currentProject = value;
                this.projects.forEach((item) => {
                    item.id === value && (this.currentEnterprise = item.enterprise);
                });
                this.getProjectsEvents();
            },
            // 项目增值
            async addValue(item) {
                await api_addValue(this.currentProject,item.id,item.reputation);
                item.status = '1';
                this.currentEnterprise -= item.reputation;
                this.projects.forEach((data) => {
                    data.id === this.currentProject && (data.enterprise = this.currentEnterprise);
                });
            }
        },
        mounted() {
            this.chartFun(this.$refs.chart,'信誉值');
            this.getProjects();
        }
    }
</script>

<style lang="scss" scoped>
    #addValue{
        .header{
            height: 40px;
            line-height: 40px;
            padding: 20px;
            margin-bottom: 20px;
            .el-select{
                width: 400px;
                margin-right: 50px;
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
                height: 320px;
                ul{
                    padding: 9px;
                    border: 1px solid transparent;
                    border-right: none;
                    position: relative;
                    transition: none;
                    &:not(:last-child){
                        margin-bottom: 5px;
                    }
                    &.current{
                        border-color: #c4966c;
                        width: 913px;
                        border-top-right-radius: 0;
                        border-bottom-right-radius: 0;
                        box-shadow: none;
                    }
                    li{
                        height: 40px;
                        line-height: 40px;
                        img{
                            width: 40px;
                            height: 40px;
                        }
                        span{
                            strong{
                                color: #ff6475;
                                font-weight: normal;
                            }
                        }
                        &:nth-child(1){
                            width: 100px;
                        }
                        &:nth-child(2){
                            width: 160px;
                        }
                        &:nth-child(3){
                            width: 90px;
                        }
                        &:nth-child(4){
                            width: 150px;
                        }
                        &:nth-child(5){
                            width: 300px;
                        }
                        &:nth-child(6){
                            width: 90px;
                            button{
                                width: 56px;
                                height: 28px;
                                background-color: #c4966c;
                                border-radius: 4px;
                                color: #fff;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
            .listDetail{
                padding: 20px;
                height: 278px;
                border: 1px solid #c4966c;
                img{
                    height: 278px;
                    width: 100%;
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
    #addValue{
        .el-step__title.is-finish {
            font-size: 12px;
            line-height: 20px;
        }
    }
</style>
