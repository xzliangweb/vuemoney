const MyHttp = {};
// 所有的Vue插件应该提供一个install 方法
MyHttp.install = function(Vue){
    axios.default.baseURL ="路径";
    // axios.defaults.baseURL =''
    Vue.prototype.$http = axios;
};
export default MyHttp;
