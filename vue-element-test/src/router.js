import echarts from "./components/echarts";
import zrenderDemo from "./components/zrender_demo.vue";
import zrenderfive from "./components/zrenderfive";
import zrendertwo from "./components/zrendertwo"
const routes = [
    {path: '/one', name: 'one', component: echarts},
    {path: '/two/:id', name:'twoname', component: zrenderDemo, children: [
        // {path: 'child1', redirect: { name: 'child2name' }},
        // {path: 'child1', component: zrenderfive, alias: 'child3'},
        {path: 'child1', name:"child1name", component: zrenderfive, props: true},
        {path: 'child2', name:"child2name", component: zrendertwo}
    ]}
]

export default routes;