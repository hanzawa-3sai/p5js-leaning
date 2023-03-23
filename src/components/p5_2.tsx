import dynamic from "next/dynamic";
import p5Types from "p5";

const Sketch = dynamic(import('react-p5'), {
    loading: () => null,
    ssr: false
})

export const p5_2 = () => {
    // 画像などのロードを行う
    const preload = (p5: p5Types) => {
    };

    // 初期処理
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(720, 720);
        p5.noFill();
        p5.background(255);
        p5.strokeWeight(2);
        p5.stroke(0, 25);
    };

    // 1フレームごとの処理
    const draw = (p5: p5Types) => {
        if (p5.mouseIsPressed && p5.mouseButton == p5.LEFT) {
            p5.push();
            p5.translate(p5.width / 2, p5.height / 2);
        
            var circleResolution = p5.int(p5.map(p5.mouseY + 100, 0, p5.height, 2, 10));
            var radius = p5.mouseX - p5.width / 2;
            var angle = p5.TAU / circleResolution;
        
            p5.beginShape();
            for (var i = 0; i <= circleResolution; i++) {
              var x = p5.cos(angle * i) * radius;
              var y = p5.sin(angle * i) * radius;
                p5.vertex(x, y);
            }
            p5.endShape();
        
            p5.pop();
        }
    };

    // コンポーネントのレスポンシブ化
    const windowResized = (p5: p5Types) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    };

    return (
        <Sketch
            preload={preload}
            setup={setup}
            draw={draw}
            windowResized={windowResized}
        />
    );
};
