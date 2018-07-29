<template>
    <div id="home">
        <el-row :gutter="20">
            <el-col :span="12">
                <div class="platformEvents list_box">
                    <header><img src="../../../assets/img/platform/platformEvents.png" alt=""><strong>平台事件</strong></header>
                    <section>
                        <el-table
                            row-class-name="card"
                            :data="platformEvents"
                            :show-header="false"
                            style="width: 100%">
                            <el-table-column width="100px">
                                <template slot-scope="scope">
                                    <el-button type="danger" size="mini">增值</el-button>
                                </template>
                            </el-table-column>
                            <el-table-column width="80px">
                                <template slot-scope="scope">
                                    <img src="../../../assets/img/platform/flower.png" alt="">
                                </template>
                            </el-table-column>
                            <el-table-column prop="name" label="name" width="120px"></el-table-column>
                            <el-table-column prop="date" label="date" width="120px"></el-table-column>
                            <el-table-column prop="round" label="round"></el-table-column>
                            <el-table-column prop="institution" label="institution"></el-table-column>
                        </el-table>
                    </section>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="platformEvents list_box">
                    <header><img src="../../../assets/img/platform/platformChange.png" alt=""><strong>平台动态</strong></header>
                    <section>
                        <h1><button type="button">企业企元、增元变化情况</button></h1>
                        <el-table
                            row-class-name="card"
                            header-cell-class-name="tableTitle"
                            :data="platformChange"
                            style="width: 100%">
                            <el-table-column prop="company" label="企业名称"></el-table-column>
                            <el-table-column prop="project" label="项目名称"></el-table-column>
                            <el-table-column prop="companyMoney" label="企元变化" width="120px"></el-table-column>
                            <el-table-column prop="addMoney" label="增元变化" width="120px"></el-table-column>
                            <el-table-column prop="date" label="更新时间" width="120px"></el-table-column>
                        </el-table>
                    </section>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="companyChange list_box">
                    <header><img src="../../../assets/img/platform/companyChange.png" alt=""><strong>企业动态</strong></header>
                    <section>
                        <el-table
                            row-class-name="card"
                            header-cell-class-name="tableTitle"
                            :data="companyChange"
                            style="width: 100%">
                            <el-table-column prop="company" label="企业名称"></el-table-column>
                            <el-table-column prop="project" label="项目名称"></el-table-column>
                            <el-table-column prop="valuation" label="估值" width="120px"></el-table-column>
                            <el-table-column label="估值变化曲线">
                                <template slot-scope="scope">
                                    <img src="../../../assets/img/platform/line.png" alt="">
                                </template>
                            </el-table-column>
                            <el-table-column prop="reputation" label="信誉值" width="120px"></el-table-column>
                            <el-table-column label="信誉变化曲线">
                                <template slot-scope="scope">
                                    <img src="../../../assets/img/platform/line.png" alt="">
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" label="更新时间" width="120px"></el-table-column>
                        </el-table>
                    </section>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return{
                platformEvents: [
                    {
                        name: '蓝蚂蚁科技',
                        date: '2013-07-09',
                        round: '天使轮获得200万融资',
                        institution: 'xxx机构认证'
                    },
                    {
                        name: '蓝蚂蚁科技',
                        date: '2013-07-09',
                        round: '天使轮获得200万融资',
                        institution: 'xxx机构认证'
                    },
                    {
                        name: '蓝蚂蚁科技',
                        date: '2013-07-09',
                        round: '天使轮获得200万融资',
                        institution: 'xxx机构认证'
                    },
                    {
                        name: '蓝蚂蚁科技',
                        date: '2013-07-09',
                        round: '天使轮获得200万融资',
                        institution: 'xxx机构认证'
                    },
                    {
                        name: '蓝蚂蚁科技',
                        date: '2013-07-09',
                        round: '天使轮获得200万融资',
                        institution: 'xxx机构认证'
                    },
                    {
                        name: '蓝蚂蚁科技',
                        date: '2013-07-09',
                        round: '天使轮获得200万融资',
                        institution: 'xxx机构认证'
                    }
                ],
                platformChange: [
                    {
                        company: '迅鳐成都科技有限公司',
                        project: '迅鳐成都科技有限公司区块链项目',
                        companyMoney: '60W+20W',
                        addMoney: '60W+20W',
                        date: '2018-07-01'
                    },
                    {
                        company: '迅鳐成都科技有限公司',
                        project: '迅鳐成都科技有限公司区块链项目',
                        companyMoney: '60W+20W',
                        addMoney: '60W+20W',
                        date: '2018-07-01'
                    },
                    {
                        company: '迅鳐成都科技有限公司',
                        project: '迅鳐成都科技有限公司区块链项目',
                        companyMoney: '60W+20W',
                        addMoney: '60W+20W',
                        date: '2018-07-01'
                    },
                    {
                        company: '迅鳐成都科技有限公司',
                        project: '迅鳐成都科技有限公司区块链项目',
                        companyMoney: '60W+20W',
                        addMoney: '60W+20W',
                        date: '2018-07-01'
                    },
                    {
                        company: '迅鳐成都科技有限公司',
                        project: '迅鳐成都科技有限公司区块链项目',
                        companyMoney: '60W+20W',
                        addMoney: '60W+20W',
                        date: '2018-07-01'
                    },
                    {
                        company: '迅鳐成都科技有限公司',
                        project: '迅鳐成都科技有限公司区块链项目',
                        companyMoney: '60W+20W',
                        addMoney: '60W+20W',
                        date: '2018-07-01'
                    },
                    {
                        company: '迅鳐成都科技有限公司',
                        project: '迅鳐成都科技有限公司区块链项目',
                        companyMoney: '60W+20W',
                        addMoney: '60W+20W',
                        date: '2018-07-01'
                    }
                ],
                companyChange: [
                    {
                        company: '迅鳐成都科技有限公司',
                        project: '迅鳐成都科技有限公司区块链项目',
                        valuation: '3000W企元',
                        reputation: '300W增元',
                        date: '2018-07-03'
                    },
                    {
                        company: '迅鳐成都科技有限公司',
                        project: '迅鳐成都科技有限公司区块链项目',
                        valuation: '3000W企元',
                        reputation: '300W增元',
                        date: '2018-07-03'
                    },
                    {
                        company: '迅鳐成都科技有限公司',
                        project: '迅鳐成都科技有限公司区块链项目',
                        valuation: '3000W企元',
                        reputation: '300W增元',
                        date: '2018-07-03'
                    },
                    {
                        company: '迅鳐成都科技有限公司',
                        project: '迅鳐成都科技有限公司区块链项目',
                        valuation: '3000W企元',
                        reputation: '300W增元',
                        date: '2018-07-03'
                    },
                    {
                        company: '迅鳐成都科技有限公司',
                        project: '迅鳐成都科技有限公司区块链项目',
                        valuation: '3000W企元',
                        reputation: '300W增元',
                        date: '2018-07-03'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    #home{
        .list_box{
            header{
                height: 24px;
                line-height: 24px;
                margin-bottom: 20px;
                img{
                    width: 24px;
                    height: 24px;
                    margin-right: 20px;
                }
                strong{
                    font-size: 18px;
                }
            }
            section{
                padding: 10px 20px;
                border: 1px solid #c5976c;
                border-radius: 6px;
                h1{
                    button{
                        color: white;
                        font-size: 16px;
                        background-color: #d3af84;
                        height: 38px;
                        width: 220px;
                        border-radius: 18px;
                    }
                }
            }
            &.platformEvents{
                section{
                    img{
                        width: 45px;
                        height: 45px;
                    }
                }
            }
            &.companyChange{
                header{
                    margin-top: 20px;
                }
            }
        }
    }
</style>

<style lang="scss">
    #home{
        .tableTitle{
            background-color: #fafafa;
        }
        .el-table{
            background-color: transparent;
            .el-table__body{
                border-spacing: 0 10px;
            }
            th.is-leaf, td{
                border-bottom: none;
            }
            th.is-leaf{
                padding-bottom: 2px;
            }
            td{
                &:first-child{
                    border-top-left-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                &:last-child{
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
            }
            &::before{
                height: 0;
            }
        }
    }
</style>
