<template>
    <div id="main" style="width:100%;height:100vh;"></div>
</template>

<script>
import { init, Stats } from "zrender";
export default {
    name: "zrenderfour",
    data() {
        return {
            zr: null
        };
    },
    mounted() {
        this.zr = init(document.getElementById("main"));

        let w = this.zr.getWidth();
        let h = this.zr.getHeight();

        let stats = new Stats();
        documnet.getElementById("main").appendChild(stats.dom);
    }
}
</script>