const lineBG = new p5((sketch) => {
    let cols;
    let colors = [];
    let noiseInc = 0.0;
    let main;
    sketch.setup = () => {
        main = sketch.select("main");
        let c = sketch.createCanvas(sketch.windowWidth, 350);
        c.parent("bgContainer");
        c.position(0, 0, "absolute");
        cols = sketch.width / 5;
        for (let i = 0; i < cols; i++) {
            colors[i] = sketch.color(sketch.random(64), sketch.random(128), sketch.random(128, 255));
        }
    }

    sketch.draw = () => {
        box = sketch.select("#bgContainer");
        box.size(sketch.width, sketch.height);
        noiseInc += 0.0005;
        sketch.background(0);
        for (let i = 0; i < cols; i++) {
            sketch.strokeWeight(3);
            sketch.stroke(colors[i]);
            sketch.line(i * 5, 0, i * 5, sketch.noise(i * 0.05, noiseInc) * 300)
        }
        sketch.fill(0);
        sketch.stroke(0, 128, 255);
        sketch.strokeWeight(5);
        sketch.textAlign(sketch.CENTER, sketch.CENTER);
        sketch.textSize(50);
        sketch.text("Isaiah Desrosiers", sketch.width / 2, 300);
    }

    sketch.windowResized = () => {
        sketch.resizeCanvas(sketch.windowWidth, 350);
        box = sketch.select("#bgContainer");
        box.size(sketch.width, sketch.height);
        cols = sketch.width / 5;
        for (let i = 0; i < cols; i++) {
            if (colors[i] == undefined) {
                colors[i] = sketch.color(sketch.random(64), sketch.random(128), sketch.random(128, 255));
            }
        }
    }
})

const mobile = new p5((sketch) => {
    let tabs;
    let translation = 0;
    let trans = 0;
    let startClick;
    let change = 0;
    let animateToDefined = false;
    let c;
    let main;
    let box;
    sketch.setup = () => {
        main = sketch.select("main");
        box = sketch.select("#tabSelector");
        c = sketch.createCanvas(main.width, 200);
        c.parent("#tabSelector");
        c.position(0, 0, "relative");
        tabs = sketch.selectAll(".tabCont");
    }
    sketch.draw = () => {
        if (animateToDefined && !sketch.mouseIsPressed){
            if (trans > sketch.width * sketch.round(trans/sketch.width)+5){
                trans -= 5;
            }
            else if (trans < sketch.width * sketch.round(trans/sketch.width)-5){
                trans += 5;
            }
            else{
                trans = sketch.width * sketch.round(trans/sketch.width);
            }
        }
        sketch.background(0);
        sketch.translate(-trans, 0);
        box = sketch.select("#tabSelector");
        box.size(sketch.width, sketch.height);
        for (let i = 0; i < tabs.length; i++) {
            let interval = sketch.map(i, 0, tabs.length, 1, 0);
            let boxFill = sketch.lerpColor(sketch.color(0), sketch.color(0, 128, 255), interval);
            let textFill = sketch.lerpColor(sketch.color(0), sketch.color(255), 1 - interval);
            sketch.fill(boxFill);
            sketch.rect(i * sketch.width, 0, sketch.width, sketch.height);
            sketch.fill(255);
            sketch.textAlign(sketch.CENTER, sketch.CENTER);
        }
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].hide();
        }
        tabs[Math.round(trans / sketch.width)].position(0,sketch.height/2,"relative");
        tabs[Math.round(trans / sketch.width)].show();
    }
    sketch.windowResized = () => {
        sketch.resizeCanvas(main.width, 200);
        box = sketch.select("#tabSelector");
        box.size(sketch.width, sketch.height);
    }

    sketch.mousePressed = () => {
        startClick = sketch.mouseX;
    }

    sketch.mouseDragged = () => {
        translation = trans;
        change = sketch.pmouseX - sketch.mouseX;
        sketch.print(change);
        translation += change;
        trans = sketch.constrain(translation,0,sketch.width*(tabs.length-1));
        if (c.mouseOver){
            return false;
        }
        animateToDefined = false;
    }

    sketch.mouseReleased = () =>{
        animateToDefined = true;
    }
})