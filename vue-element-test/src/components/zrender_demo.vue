<template>
    <div id="main" style="width:100vw;height:100vh"></div>
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
    mounted() {
        console.log(line);
        this.zr = init(document.getElementById("main"));
        this.zr.add(line);
    }
}
</script>