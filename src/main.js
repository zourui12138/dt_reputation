// 作者：小丶张学友
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// 引入element-ui
import '../theme/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI);

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

// moment
import moment from 'moment'
Vue.filter('dateFormat', (value, formatString) => {
    formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
    // value可以是普通日期 20170723
    return moment(value).format(formatString);
    // 这是时间戳转时间
    //return moment.unix(value).format(formatString);
});

// 滚动插件指令之每次加载都回到页面顶部
Vue.directive('scroll', {
    // 当组件完成一次更新时调用 还有其它的钩子函数 自行选择合适的
    componentUpdated:  (el) => {el.scrollTop = 0;}
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
