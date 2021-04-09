import { Polyline } from "zrender";

function lineParameter() {
    this.shape = {
        points: [],
        smooth: 0
    };
    this.style = {
        stoke: "#000"
    }
}
lineParameter.prototype.structureLine = function (x, y, w, interval, num) {
    // x y 其实点坐标 w线长多少 interval上下间隔多少 num几个轮询
    for(let i = 0; i < 2 * num; i = i + 2) {
        this.shape.points.push([x, y + i * interval]);
        this.shape.points.push([x + w, y + i * interval]);
        this.shape.points.push([x + w, y + interval * (i + 1)]);
        this.shape.points.push([x, y + interval * (i + 1)]);
    }
    return this;
}

let line = new Polyline(new lineParameter().structureLine(200,200, 1000, 200, 2));

export default line;
