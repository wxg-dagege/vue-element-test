<template>
    <div id="main" style="width:100%;height:100vh;"></div>
</template>

<script>
import { init, Rect, Group, Circle } from "zrender";
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

        let isMouseDown = false;

        this.zr.on("mousedown", function() {
            isMouseDown = true;
        });
        this.zr.on("mouseup", function() {
            isMouseDown = false;
        })

        let elementStyle = {
            stroke: '#ccc',
            fill: 'white'
        };

        let group = new Group();
        for (let i = 0; i < 10; ++i) {
            let r = 50 * Math.random() + 20;
            let circle = new Circle({
                shape: {
                    cx: 0,
                    cy: 0,
                    r: r
                },
                position: [
                    (w * 0.6 - r * 2) * Math.random() + r + w * 0.2,
                    (h * 0.6 - r * 2) * Math.random() + r + h * 0.2
                ],
                style: elementStyle,
                draggable: true
            })
            .on("mousemove", function () {
                if (isMouseDown) {
                    var rect = group.getBoundingRect(); //得到元素的包围盒
                    boundingRect.setShape({
                        x: rect.x,
                        y: rect.y,
                        width: rect.width,
                        height: rect.height
                    })
                }
            });
            group.add(circle);
        }
        this.zr.add(group);

        let rect = group.getBoundingRect();
        let boundingRect = new Rect({
            shape: {
                x: rect.x,
                y: rect.y,
                width: rect.width,
                height: rect.height
            },
            style: {
                fill: 'none',
                stroke: 'red'
            }
        });
        this.zr.add(boundingRect);
    }
}
</script>