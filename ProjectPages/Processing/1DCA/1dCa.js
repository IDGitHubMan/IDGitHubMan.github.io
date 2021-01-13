class OneDCellMachine{
    constructor(){
      this.size = 1;
      this.screenWidth = width;
      this.ruleset = [false,true,false,true,true,false,true,false]
      this.states = new Array(int(width/this.size))
      this.statesBuffer = new Array(this.states.length)
      for (let i = 0; i < this.states.length; i++){
        if (i==width/this.size/2){
          this.states[i] = true;
        }
        else{
          this.states[i] = false;
        }
      }
    }
    update(y){
      for (let i = 0; i <this.states.length; i++){
        try{
          if (this.states[i]){
            if (this.states[i-1]){
              if (this.states[i+1]){
                this.statesBuffer[i] = this.ruleset[0]
              }
              else{
                this.statesBuffer[i] = this.ruleset[1]
              }
            }
            else{
              if (this.states[i+1]){
                this.statesBuffer[i] = this.ruleset[4]
              }
              else{
                this.statesBuffer[i] = this.ruleset[5]
              }
            }
          }
          else{
            if (this.states[i-1]){
              if (this.states[i+1]){
                this.statesBuffer[i] = this.ruleset[2]
              }
              else{
                this.statesBuffer[i] = this.ruleset[3]
              }
            }
            else{
              if (this.states[i+1]){
                this.statesBuffer[i] = this.ruleset[6]
              }
              else{
                this.statesBuffer[i] = this.ruleset[7]
              }
            }
          }
        }
        catch (ArrayIndexOutofBound){
          if (i==0){
            if (this.states[i]){
              if (this.states[this.states.length-1]){
                if (this.states[i+1]){
                  this.statesBuffer[i] = this.ruleset[0]
                }
                else{
                  this.statesBuffer[i] = this.ruleset[1]
                }
              }
              else{
                if (this.states[i+1]){
                  this.statesBuffer[i] = this.ruleset[4]
                }
                else{
                  this.statesBuffer[i] = this.ruleset[5]
                }
              }
            }
            else{
              if (this.states[this.states.length-1]){
                if (this.states[i+1]){
                  this.statesBuffer[i] = this.ruleset[2]
                }
                else{
                  this.statesBuffer[i] = this.ruleset[3]
                }
              }
              else{
                if (this.states[i+1]){
                  this.statesBuffer[i] = this.ruleset[6]
                }
                else{
                  this.statesBuffer[i] = this.ruleset[7]
                }
              }
            }
          }
          else{
            if (this.states[i]){
              if (this.states[i-1]){
                if (this.states[0]){
                  this.statesBuffer[i] = this.ruleset[0]
                }
                else{
                  this.statesBuffer[i] = this.ruleset[1]
                }
              }
              else{
                if (this.states[0]){
                  this.statesBuffer[i] = this.ruleset[4]
                }
                else{
                  this.statesBuffer[i] = this.ruleset[5]
                }
              }
            }
            else{
              if (this.states[i-1]){
                if (this.states[0]){
                  this.statesBuffer[i] = this.ruleset[2]
                }
                else{
                  this.statesBuffer[i] = this.ruleset[3]
                }
              }
              else{
                if (this.states[0]){
                  this.statesBuffer[i] = this.ruleset[6]
                }
                else{
                  this.statesBuffer[i] = this.ruleset[7]
                }
              }
            }
          }
        }
      }
      for (let i = 0; i < this.states.length; i++){
        noStroke();
        this.states[i] = this.statesBuffer[i];
        if (this.states[i]){
          fill(255)
        }
        else{
          fill(0)
        }
        rect(i*this.size,y*this.size,this.size,this.size)
      }
    }
    reset(c1,c2,c3,c4,c5,c6,c7,c8){
      this.ruleset[0] = c1.checked;
      this.ruleset[1] = c2.checked;
      this.ruleset[2] = c3.checked;
      this.ruleset[3] = c4.checked;
      this.ruleset[4] = c5.checked;
      this.ruleset[5] = c6.checked;
      this.ruleset[6] = c7.checked;
      this.ruleset[7] = c8.checked;
    }
}
  
var elementary;
var y;
var lastRuleSimp = true;

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("sketchView")
  elementary = new OneDCellMachine();
  y = 0;

}

function draw() {

  elementary.update(y);
  y++
  if (y*elementary.size>=height){
    y = 0;
    noLoop()
  }
}

function simpRun(){
  if (!lastRuleSimp){
    y = 0;
    var c1 = document.querySelector("#c111");
    var c2 = document.querySelector("#c110");
    var c3 = document.querySelector("#c101");
    var c4 = document.querySelector("#c100");
    var c5 = document.querySelector("#c011");
    var c6 = document.querySelector("#c010");
    var c7 = document.querySelector("#c001");
    var c8 = document.querySelector("#c000");
    elementary.reset(c1,c2,c3,c4,c5,c6,c7,c8)
    for (let i = 0; i < elementary.states.length; i++){
      if (i==width/elementary.size/2){
        elementary.states[i] = true;
      }
      else{
        elementary.states[i] = false;
      }
    }
  }
  loop()
  lastRuleSimp = true;
}

function randRun(){
  if (lastRuleSimp){
    y = 0;
    var c1 = document.querySelector("#c111");
    var c2 = document.querySelector("#c110");
    var c3 = document.querySelector("#c101");
    var c4 = document.querySelector("#c100");
    var c5 = document.querySelector("#c011");
    var c6 = document.querySelector("#c010");
    var c7 = document.querySelector("#c001");
    var c8 = document.querySelector("#c000");
    elementary.reset(c1,c2,c3,c4,c5,c6,c7,c8)
    for (let i = 0; i < elementary.states.length; i++){
      if (i==width/elementary.size/2){
        elementary.states[i] = true;
      }
      else{
        elementary.states[i] = false;
      }
    }
    for (let i = 0; i < elementary.states.length; i++){
      let bool = int(random(2)*2-1)
      if (bool==1){
        elementary.states[i] = true;
      }
      else{
        elementary.states[i] = false;
      }
    }
  }
  loop()
  lastRuleSimp = false;
}

function iterate(){
  if (y*elementary.size>=height){
    elementary.reset(c1,c2,c3,c4,c5,c6,c7,c8)
    for (let i = 0; i < elementary.states.length; i++){
      if (i==width/elementary.size/2){
        elementary.states[i] = true;
      }
      else{
        elementary.states[i] = false;
      }
    }
    y = 0;
  }
  redraw()
}

function stop(){
  noLoop()
}

