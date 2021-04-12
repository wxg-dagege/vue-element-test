<template>
    <div id="main" style="width:100%;height:100vh;background:black"></div>
</template>

<script>
import { Circle, init } from "zrender";
import Stats from "stats.js";
export default {
    name: "zrenderfive",
    data() {
        return {
            zr: null
        };
    },
    mounted() {
        this.zr = init(document.getElementById("main"));

        let w = this.zr.getWidth();
        let h = this.zr.getHeight();
        let that = this;
        let stats = new Stats();
        document.getElementById("main").appendChild(stats.dom);
        stats.dom.style.position = 'absolute';
        stats.dom.style.left = "10px";
        stats.dom.style.top = "10px";

        this.zr.animation.on('frame', function () {
            stats.begin();
            stats.end();
        })

        let spray = function(x, y) {
            let cnt = 200;
            let centerToerance = 0;
            let radius = 10;
            let particles  = [];
            let duration = 3000;
            let color = Math.random() * 260;
            let maxVx = 1000 + Math.random() * 1500;
            var maxVy = 1000 + Math.random() * 1500;
    
            for(let i = 0; i < cnt; ++i) {
                    let x0 = x + centerToerance * (Math.random() - 1);
                    let y0 = y + centerToerance * (Math.random() - 1);
                    let opacity = Math.random() * 0.5 + 0.5;
                    let particle = new Circle({
                        shape: {
                            cx: 0,
                            cy: 0,
                            r: radius * (0.5 + 0.5 * Math.random())
                        },
                        style: {
                            fill: 'hsl(' + Math.floor(color + Math.random() * 100) + ', 80%, ' + Math.floor(Math.random() * 40 + 40) + '%)',
                            opacity: opacity
                        },
                        position: [x0, y0]
                    });
                    this.zr.add(particle);
                    particles.push(particle);

                    particle._t = 0;
                    particle._opacity = opacity;

                    let animator = particle.animate('');
                    let vx = (Math.random() - 0.5) * maxVx;
                    let vy = (Math.random() - 1.2) * maxVy;
                    let ay = 8000;
                    let t0 = 0;

                    animator.when( duration, {
                        _t: 1
                    })
                    .during(function(p, _t){
                        let dt = _t - t0;
                        let x1 = p.position[0] + vx * dt;
                        let y1 = p.position[1] + vy * dt;

                        p.position = [x1, y1];
                        p.setStyle({
                            opacity: p._opacity * (1-_t)
                        });
                        vy = vy + ay * dt;
                        t0 = _t;
                    })
                    .done(function() {
                        that.zr.remove(particle);
                    })
                    .start();
            }
        }
        spray.call(this, w/2, h/2);

        setInterval(() => {
            spray.call(this, w * Math.random(), h*Math.random())
        }, 1000)
    }
}
</script>