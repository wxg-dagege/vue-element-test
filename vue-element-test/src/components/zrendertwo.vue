<template>
    <div id="main" style="width:100%;height: 400px"></div>
</template>
<script>
import { init, Circle, Heart } from 'zrender';
export default {
    name: "zrender-two",
    data() {
        return {
            zr: null
        }
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            this.zr = init(document.getElementById("main"));
            let w = this.zr.getWidth();
            let h = this.zr.getHeight();
            let circle = new Circle({
                shape: {
                    cx: w / 2,
                    cy: h / 2,
                    r: 50
                },
                style: {
                    fill: '#FF6EBE'
                },
                draggable: true
            });

            let heart = new Heart({
                shape: {
                    cx: w / 2 + 20,
                    cy: h / 2 - 40,
                    width: 60,
                    height: 80
                },
                draggable: true
            });
            circle.setClipPath(heart);
            this.zr.add(circle);

            let borderA = new Circle({
                shape: {
                    cx: w / 2,
                    cy: h / 2,
                    r: 50
                },
                style: {
                    fill: 'transparent',
                    stroke: '#5ACFFF'
                },
                draggable: true
            })
            this.zr.add(borderA);

            let borderB = new Heart({
                shape: {
                    cx: w / 2 + 20,
                    cy: h / 2 - 40,
                    width: 60,
                    height: 80
                },
                style: {
                    fill: 'transparent',
                    stroke: '#5ACFFF'
                },
                draggable: true
            });
            this.zr.add(borderB);
        }
    }
}
</script>