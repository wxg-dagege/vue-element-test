<template>
    <div>
        <div id="main" style="width:100vw;height:100vh"></div>
        <router-view></router-view>
    </div>
</template>
<script>
import { init } from "zrender";
import line from "./zrender_demo";
export default {
    name: "demo",
    data() {
        return {
            zr: null
        }
    },
   watch: {
       $route(to, form) {
           console.log(to);
           console.log(form);
       }
    },
    mounted() {
        console.log(this.$route.params.id);
        this.zr = init(document.getElementById("main"));
        this.zr.add(line);
    }
}
</script>