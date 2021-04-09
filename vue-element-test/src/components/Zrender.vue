<template>
    <div id="main" style="width:100%;height:400px"></div>
</template>

<script>
import { init, Circle } from "zrender";
export default {
    name: "Zrender",
    data() {
        return {
            zr: null
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            this.zr = init(document.getElementById('main'));
            let w = this.zr.getWidth();
            let h = this.zr.getHeight();
            var r = 30;
            let circle = new Circle({
                shape: {
                    cx: r,
                    cy: h/2,
                    r: r
                },
                style: {
                    fill: 'transparent',
                    stroke: '#FF6EBE'
                },
                silent: true
            });
            circle.animate('shape', true)
                .when(5000, {
                    cx: w - r
                })
                .when(10000, {
                    cx: r
                })
                .start();
            this.zr.add(circle);
        }
    }
}
</script>