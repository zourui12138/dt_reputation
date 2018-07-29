<template>
    <div id="companyEvents" class="clear">
        <VuePerfectScrollbar v-scroll class="companySearch card fl">
            <div class="search_box clear">
                <el-autocomplete
                    class="fl"
                    v-model="search"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入企业名称"
                    :trigger-on-focus="false"
                    @select="handleSelect">
                </el-autocomplete>
                <el-button class="fr" type="primary" icon="el-icon-search">搜索</el-button>
            </div>
            <ul class="clear card" v-for="i in companyList">
                <li class="fl"><img src="../../../assets/img/platform/flower.png" alt=""></li>
                <li class="fl"><strong>{{i.name}}</strong></li>
                <li class="fr"><strong>{{i.date}}</strong></li>
            </ul>
        </VuePerfectScrollbar>
        <VuePerfectScrollbar v-scroll class="companyEvents card fr">
            <ul>
                <li>
                    <i class="el-icon-circle-check-outline"></i>
                    <h1>2015-01-06</h1>
                    <h2></h2>
                    <div class="card">
                        <header class="clear">
                            <img class="fl" src="../../../assets/img/platform/rect.png" alt="">
                            <span class="fl">2018-03-03 23:59:59</span>
                            <strong class="fr">名称：20180303CBBBB</strong>
                        </header>
                        <section class="clear">
                            <p class="fl">事件描述：事件描述内容事件描述内容事件描述内容事件描述内事件描述内容事件描述内容事件描述内容容事件描述内容事件描述内容事件描述内容事件描述内</p>
                            <ol class="fr">
                                <li>所在区块信息</li>
                                <li>区块高度：<span>3456</span></li>
                                <li>创建时间：<span>2018-03-03 21:33</span></li>
                                <li>哈希值：<span>a6s5s586wf2s5e56a5656daf5656321245451562</span></li>
                            </ol>
                        </section>
                        <footer class="clear">
                            <i class="el-icon-document fl"></i>
                            <a class="fl" href="#">xxx文件.pdf</a>
                            <a class="fl" href="#">xxx文件.pdf</a>
                        </footer>
                    </div>
                </li>
                <li>
                    <i class="el-icon-circle-check-outline"></i>
                    <h1>2015-01-06</h1>
                    <h2></h2>
                    <div class="card">
                        <header class="clear">
                            <img class="fl" src="../../../assets/img/platform/rect.png" alt="">
                            <span class="fl">2018-03-03 23:59:59</span>
                            <strong class="fr">名称：20180303CBBBB</strong>
                        </header>
                        <section class="clear">
                            <p class="fl">事件描述：事件描述内容事件描述内容事件描述内容事件描述内事件描述内容事件描述内容事件描述内容容事件描述内容事件描述内容事件描述内容事件描述内</p>
                            <ol class="fr">
                                <li>所在区块信息</li>
                                <li>区块高度：<span>3456</span></li>
                                <li>创建时间：<span>2018-03-03 21:33</span></li>
                                <li>哈希值：<span>a6s5s586wf2s5e56a5656daf5656321245451562</span></li>
                            </ol>
                        </section>
                        <footer class="clear">
                            <i class="el-icon-document fl"></i>
                            <a class="fl" href="#">xxx文件.pdf</a>
                            <a class="fl" href="#">xxx文件.pdf</a>
                        </footer>
                    </div>
                </li>
                <li>
                    <i class="el-icon-circle-check-outline"></i>
                    <h1>2015-01-06</h1>
                    <h2></h2>
                    <div class="card">
                        <header class="clear">
                            <img class="fl" src="../../../assets/img/platform/rect.png" alt="">
                            <span class="fl">2018-03-03 23:59:59</span>
                            <strong class="fr">名称：20180303CBBBB</strong>
                        </header>
                        <section class="clear">
                            <p class="fl">事件描述：事件描述内容事件描述内容事件描述内容事件描述内事件描述内容事件描述内容事件描述内容容事件描述内容事件描述内容事件描述内容事件描述内</p>
                            <ol class="fr">
                                <li>所在区块信息</li>
                                <li>区块高度：<span>3456</span></li>
                                <li>创建时间：<span>2018-03-03 21:33</span></li>
                                <li>哈希值：<span>a6s5s586wf2s5e56a5656daf5656321245451562</span></li>
                            </ol>
                        </section>
                        <footer class="clear">
                            <i class="el-icon-document fl"></i>
                            <a class="fl" href="#">xxx文件.pdf</a>
                            <a class="fl" href="#">xxx文件.pdf</a>
                        </footer>
                    </div>
                </li>
                <li>
                    <i class="el-icon-circle-check-outline"></i>
                    <h1>2015-01-06</h1>
                    <h2></h2>
                    <div class="card">
                        <header class="clear">
                            <img class="fl" src="../../../assets/img/platform/rect.png" alt="">
                            <span class="fl">2018-03-03 23:59:59</span>
                            <strong class="fr">名称：20180303CBBBB</strong>
                        </header>
                        <section class="clear">
                            <p class="fl">事件描述：事件描述内容事件描述内容事件描述内容事件描述内事件描述内容事件描述内容事件描述内容容事件描述内容事件描述内容事件描述内容事件描述内</p>
                            <ol class="fr">
                                <li>所在区块信息</li>
                                <li>区块高度：<span>3456</span></li>
                                <li>创建时间：<span>2018-03-03 21:33</span></li>
                                <li>哈希值：<span>a6s5s586wf2s5e56a5656daf5656321245451562</span></li>
                            </ol>
                        </section>
                        <footer class="clear">
                            <i class="el-icon-document fl"></i>
                            <a class="fl" href="#">xxx文件.pdf</a>
                            <a class="fl" href="#">xxx文件.pdf</a>
                        </footer>
                    </div>
                </li>
            </ul>
        </VuePerfectScrollbar>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "CompanyEvents",
        components: {VuePerfectScrollbar},
        data() {
            return{
                search: '',
                companyList: [
                    {
                        name: '迅鳐成都科技有限公司',
                        date: '2017-07-01'
                    },
                    {
                        name: '迅鳐成都科技有限公司',
                        date: '2017-07-01'
                    },
                    {
                        name: '迅鳐成都科技有限公司',
                        date: '2017-07-01'
                    },
                    {
                        name: '迅鳐成都科技有限公司',
                        date: '2017-07-01'
                    }
                ]
            }
        },
        methods: {
            querySearch(queryString, cb) {
                let restaurants = this.restaurants;
                let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                    { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                    { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                    { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                    { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                    { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                    { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                    { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                    { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                    { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                    { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                    { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                    { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                    { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                    { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                    { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                    { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                    { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                    { "value": "钱记", "address": "上海市长宁区天山西路" },
                    { "value": "壹杯加", "address": "上海市长宁区通协路" },
                    { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                    { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                    { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                    { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                    { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                    { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                    { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                    { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                    { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                    { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                    { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                    { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                    { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                    { "value": "浏阳蒸菜", "address": "天山西路430号" },
                    { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                    { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                    { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                    { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                    { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                    { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                    { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                    { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                    { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
                ];
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>

<style lang="scss" scoped>
    #companyEvents{
        height: 100%;
        .companySearch{
            padding: 20px;
            width: calc(100% - 1400px);
            height: calc(100% - 40px);
            .search_box{
                margin-bottom: 20px;
                .el-autocomplete{
                    width: 380px;
                }
            }
            ul{
                padding: 10px;
                cursor: pointer;
                margin: 10px 0;
                li{
                    height: 40px;
                    line-height: 40px;
                    img{
                        width: 40px;
                        height: 40px;
                        margin-right: 20px;
                    }
                }
            }
        }
        .companyEvents{
            width: 1300px;
            height: calc(100% - 80px);
            padding: 40px 20px;
            ul{
                >li{
                    width: 72px;
                    height: 240px;
                    margin: auto;
                    position: relative;
                    i{
                        font-size: 72px;
                        color: #409eff;
                    }
                    h1{
                        position: absolute;
                        top: 0;
                        width: 100px;
                        height: 72px;
                        line-height: 72px;
                        font-size: 18px;
                    }
                    h2{
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 66px;
                        margin: auto;
                        width: 4px;
                        height: 210px;
                        background-color: #409eff;
                    }
                    div{
                        position: absolute;
                        top: 0;
                        width: 460px;
                        height: 240px;
                        border: 1px solid #e4e4e4;
                        header{
                            height: 48px;
                            line-height: 48px;
                            background-color: #f4f2f2;
                            padding: 0 10px;
                            border-bottom: 1px solid #e4e4e4;
                            img{
                                margin-top: 14px;
                                margin-right: 10px;
                            }
                            span{
                                color: #409eff;
                            }
                        }
                        section{
                            padding: 10px;
                            height: 130px;
                            overflow: hidden;
                            line-height: 26px;
                            p{
                                width: 200px;
                            }
                            ol{
                                width: 200px;
                                word-break:break-all;
                            }
                        }
                        footer{
                            height: 40px;
                            line-height: 40px;
                            padding: 0 10px;
                            i{
                                font-size: 30px;
                                margin-top: 5px;
                            }
                            a{
                                margin-left: 20px;
                            }
                        }
                    }
                    &:last-child{
                        h2{
                            height: 170px;
                        }
                    }
                    &:not(:first-child){
                        margin-top: 30px;
                    }
                    &:nth-child(odd){
                        h1{
                            left: 100px;
                        }
                        div{
                            right: 100px;
                        }
                    }
                    &:nth-child(even){
                        h1{
                            right: 100px;
                        }
                        div{
                            left: 100px;
                        }
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
    #companyEvents{
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
