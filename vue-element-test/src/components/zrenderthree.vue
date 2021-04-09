<template>
    <div id="main" style="width:100%;height:100vh;background: #333"></div>
</template>

<script>
import { init, Text, Rect } from "zrender";
export default {
    name: "zrenderthree",
    data() {
        return {
            zr: null
        };
    },
    mounted() {
        this.zr = init(document.getElementById("main"));
        let w = this.zr.getWidth();
        let h = this.zr.getHeight();
        
        let t1 = new Text({
            style: {
                text: 'zrender',
                textAlign: 'center',
                fill: "#f0f",
                textVerticalAlign: 'middle',
                fontSize: 200,
                fontFamily: "Lato",
                fontWeight: "bolder",
                // blend: "screen"
            },
            position: [w / 3 + 5, h / 2]
        });
        this.zr.add(t1);
        let t2 = new Text({
            style: {
                text: 'zrender',
                textAlign: 'center',
                textVerticalAlign: 'middle',
                fontSize: 200,
                fontFamily: "Lato",
                fontWeight: "bolder",
                fill: "#fff",
                // blend: "screen"
            },
            position: [w / 3, h / 2]
        })
        this.zr.add(t2);

        let lines = [];
        for (let i = 0; i < 16; ++i) {
            let line = new Rect({
                shape: {
                    x: w * (Math.random() - 0.3),
                    y: h * Math.random(),
                    width: w * (Math.random() + 0.3),
                    height: Math.random() * 8
                },
                style: {
                    fill: ["#ff0", '#f0f', "#0ff", "#00f"][Math.floor(Math.random() * 4)],
                    blend: 'lighten',
                    opacity: 0
                }
            })
            this.zr.add(line);
            lines.push(line);
        }

        setInterval(function() {
            if(Math.random() > 0.2) {
                t2.attr('position', [w / 3 + Math.random() * 50, h / 2]);

                for(let i = 0; i < lines.length; ++i) {
                    lines[i].attr('shape', {
                        x: w * Math.random(),
                        y: h * Math.random(),
                        width: w * Math.random(),
                        height: Math.random() * 8
                    });
                    lines[i].attr('style', {
                        opacity: 1
                    })
                }

                setTimeout(function() {
                    t2.attr('position', [w / 3, h / 2]);

                    for (let i = 0; i < lines.length; ++i) {
                        lines[i].attr('style', {
                            opacity: 0
                        })
                    }
                })
            }
        }, 500)
    }
}
</script>