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
      this.ruleset[0] = c1.isChecked;
      this.ruleset[1] = c2.isChecked;
      this.ruleset[2] = c3.isChecked;
      this.ruleset[3] = c4.isChecked;
      this.ruleset[4] = c5.isChecked;
      this.ruleset[5] = c6.isChecked;
      this.ruleset[6] = c7.isChecked;
      this.ruleset[7] = c8.isChecked;
    }
  }
  
  var elementary;
  var y;
  function setup() {
    createCanvas(800, 800);
    parent("1DCAview");
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
    for (let i = 0; i < elementary.states.length; i++){
      if (i==width/elementary.size/2){
        elementary.states[i] = true;
      }
      else{
        elementary.states[i] = false;
      }
    }
    loop()

  }

  function randRun(){
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

  function stop(){
    noLoop()
  }

  function step(){
    if (y*elementary.size>=height){
      for (let i = 0; i < elementary.states.length; i++){
        if (i==width/elementary.size/2){
          elementary.states[i] = true;
        }
        else{
          elementary.states[i] = false;
        }
      }
    }
    redraw()
  }