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
  }
  
  var elementary;
  var y;
  function setup() {
    createCanvas(windowWidth,windowHeight);
    createCheckbox('111',false)
    createCheckbox('110',true)
    createCheckbox('101',false)
    elementary = new OneDCellMachine();
    y = 0;
  }
  
  function draw() {
    elementary.update(y);
    y++
    if (y*elementary.size>height){
      y = 0;
      noLoop()
    }
  }