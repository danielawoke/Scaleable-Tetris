const done = document.getElementById('sumbit');
var widthButton = document.getElementById("width");
var lenButton = document.getElementById("length");
var front= document.getElementById("title")
var width;
let length;
let firstBlock;
let linePieceActive = false;
var arrGridRepersentaion;
var button;
let score = 0;
var nnn = true;
var gameOver = false;
done.addEventListener('click', function(){
  width = parseInt(widthButton.value);
  length = parseInt(lenButton.value);
  console.log(width+" & "+length);
  if(Number.isInteger(width) && Number.isInteger(length)){
    front.remove();
    gridCompile(); 
  }else{
    alert("You need to put a whole number in");
  }

}, true);

function gridCompile(){
//the object part
{
  var grid = "<span id = 'sss'>444<style>#sss{color:white;font-size:30px; position: absolute;top:0px}</style></span><div id ='wrapper'><div id='grid'><div>";
  
  let x = 0;
  let y = 0;
  let shrinkx = width-1+1;
  let shrinky = length-1+1;

  var bottomPad = 30;
   var space = 20;
   var otherPads = 10;

   while(shrinkx>20 || shrinky>16){
      bottomPad = bottomPad/2;
      space = space/2;
      otherPads = space/2;

      shrinky = shrinky-20;
      shrinkx = shrinkx-20;

   }

 


  for(let i = 0; i<4;i++){
    
    if(width<4){
      for(let k = 0; k<4; k++){
      if(i == 0){
          grid = grid+"<div id='gridBlock"+y+"u"+x+"'><style>#gridBlock"+y+"u"+x+"{width:10px; length: 10px; position: relative;display: inline;background-color: pink;border: 1px solid grey;padding-top:"+otherPads+"px;padding-left:"+otherPads+"px;padding-right:"+bottomPad+"px;padding-bottom:"+otherPads+"px;}</style></div>";
          x=x+1;
      }else{
          grid = grid+"<div id='gridBlock"+y+"u"+x+"'><style>#gridBlock"+y+"u"+x+"{position: relative;display: inline;background-color: pink;border: 1px solid grey;padding-top:"+otherPads+"px;padding-left: "+otherPads+"px;padding-right: "+bottomPad+"px;padding-bottom: "+otherPads+"px;}</style></div>";
          x=x+1;
        }
        
      }
    }else{
    for(let k = 0; k<width; k++){
      if(i == 0){
          grid = grid+"<div id='gridBlock"+y+"u"+x+"'><style>#gridBlock"+y+"u"+x+"{position: relative;display: inline;background-color: pink;border: 1px solid grey;padding-top: "+otherPads+"px;padding-left: "+otherPads+"px;padding-right: "+bottomPad+"px;padding-bottom: "+otherPads+"px;}</style></div>";
          x=x+1;
      }else{
          grid = grid+"<div id='gridBlock"+y+"u"+x+"'><style>#gridBlock"+y+"u"+x+"{position: relative;display: inline;background-color: pink;border: 1px solid grey;padding-top: "+otherPads+"px;padding-left: "+otherPads+"px;padding-right: "+bottomPad+"px;padding-bottom: "+otherPads+"px;}</style></div>";
          x=x+1;
        }
        
      }
    }
      grid = grid+"</div><div id='spaz'><style>#spaz{margin-top:"+otherPads+"px;}</style>";
      y=y+1;
      x=0;
    }



  for(let i = 0; i<length;i++){
    for(let k = 0; k<width; k++){
            grid = grid+"<div id='gridBlock"+y+"u"+x+"'><style>#gridBlock"+y+"u"+x+"{position: relative;display: inline;background-color: black;border: 1px solid grey;padding-top: "+otherPads+"px;padding-left: "+otherPads+"px;padding-right: "+bottomPad+"px;padding-bottom: "+otherPads+"px;}</style></div>";
            x=x+1;
    }
    y=y+1;
    x=0;
    grid = grid+"</div><div id='spaz'><style>#spaz{margin-top:"+space+"px;}</style>";
  }
  grid = grid + "</div></div></div></div>";
  grid = grid +"<script src='ppp.js'></script><link rel='stylesheet' type='text/css' href='style.css'>";
  document.write(grid);}
//array
  {
    arrGridRepersentaion = new Array(length+4);
    for(let i = 0;i<length+4;i++ ){
      if(width<4 && i<4){
       arrGridRepersentaion[i] = new Array(4);
      }else{
        arrGridRepersentaion[i] = new Array(width);
      }
    }
    for(let i = 0; i<arrGridRepersentaion.length;i++){
      for(let k = 0; k<arrGridRepersentaion[i].length;k++){
        arrGridRepersentaion[i][k] = 0;
      }
    }

    for(let i = 0; i<4;i++){
      for(let k = 0; k<4;k++){
          if(i==0 || i ==3){
          arrGridRepersentaion[i][k] = 3;
        }else{
          if(k==0 || k == 3){
            arrGridRepersentaion[i][k] = 3;
          }
        }
      }
    }
  }
  createPiece();
  let z = JSON.parse(JSON.stringify(arrGridRepersentaion));
  rotate();
  updateVisualGrid();
  console.log(z);
  window.setInterval(down, 1000);
  window.addEventListener("keydown", e =>{
      if(e.key === 'q'){
        left();
      }
      if(e.key === 'e'){
        right();
      }
      if(e.key === 'w'){
        rotate();
      }
      if(e.key === 's'){
        down();
      }
  });

  
}

function createPiece(){
  if(gameOver == false){
  let x1=Math.floor(Math.random()*4);
  let y1=Math.floor(Math.random()*4);
  arrGridRepersentaion[y1][x1] = 1;

  var block2 = true;
  
  let x2;
  let y2;

  while(block2){
    let yorx=Math.floor(Math.random()*2);
    if(yorx==0){
      let LorR=Math.floor(Math.random()*2);
      if(LorR==0 && x1-1>=0 && arrGridRepersentaion[y1][x1-1]!=1){
        arrGridRepersentaion[y1][x1-1] = 1;
        x2=x1-1;
        y2=y1-1+1;
        block2=false;
      }
      if(LorR==1 && x1+1<4 && arrGridRepersentaion[y1][x1+1]!=1){
        arrGridRepersentaion[y1][x1+1] = 1;
        x2=x1+1;
        y2=y1-1+1;

        block2=false;
      }
    }
    if(yorx==1){
      let UorD=Math.floor(Math.random()*2);
      if(UorD==0 && y1-1>=0 && arrGridRepersentaion[y1-1][x1]!=1){
        arrGridRepersentaion[y1-1][x1] = 1;
        x2=x1-1+1;
        y2=y1-1;

        block2=false;
      }
      if(UorD==1 && y1+1<4 && arrGridRepersentaion[y1+1][x1]!=1){
        arrGridRepersentaion[y1+1][x1] = 1;
        x2=x1-1+1;
        y2=y1+1;
        block2=false;
      }
    }
  }


  let x3;
  let y3;
  var block3 = true;

  while(block3){
    let yorx=Math.floor(Math.random()*2);
    if(yorx==0){
      let LorR=Math.floor(Math.random()*2);
      if(LorR==0 && x2-1>=0 && arrGridRepersentaion[y2][x2-1]!=1){
        arrGridRepersentaion[y2][x2-1] = 1;
        x3=x2-1;
        y3=y2-1+1;
        block3=false;
      }
      if(LorR==1 && x2+1<4 && arrGridRepersentaion[y2][x2+1]!=1){
        arrGridRepersentaion[y2][x2+1] = 1;
        x3=x2+1;
        y3=y2-1+1;

        block3=false;
      }
    }
    if(yorx==1){
      let UorD=Math.floor(Math.random()*2);
      if(UorD==0 && y2-1>=0 && arrGridRepersentaion[y2-1][x2]!=1){
        arrGridRepersentaion[y2-1][x2] = 1;
        x3=x2-1+1;
        y3=y2-1;
        block3=false;
      }
      if(UorD==1 && y2+1<4 && arrGridRepersentaion[y2+1][x2]!=1){
        arrGridRepersentaion[y2+1][x2] = 1;
        x3=x2-1+1;
        y3=y2+1;

        block3=false;
      }
    }


  }

  var block4 = true;
  let x4;
  let y4;

  while(block4){


    let yorx=Math.floor(Math.random()*2);
      if(yorx==0){
        let LorR=Math.floor(Math.random()*2);
        if(LorR==0 && (x3-1)>=0 ){
          // alert(arrGridRepersentaion[y3][x3-1]);
          if(arrGridRepersentaion[y3][x3-1] !=1){
          arrGridRepersentaion[y3][x3-1] = 1;
          x4=x3-1;
          y4=y3-1+1;
          block4=false;
        }
      }
        if(LorR==1 && (x3+1)<4 ){
          // alert(arrGridRepersentaion[y3][x3+1]);
          if(arrGridRepersentaion[y3][x3+1] !=1){
          arrGridRepersentaion[y3][x3+1] = 1;
          x4=x3+1;
          y4=y3-1+1;
          block4=false;
        }
      }
    }
    if(yorx==1){
      let UorD=Math.floor(Math.random()*2);
      if(UorD==0 && y3-1>=0 && arrGridRepersentaion[y3-1][x3] !=1){
        arrGridRepersentaion[y3-1][x3] = 1;
        x4=x3-1+1;
        y4=y3-1;
        block4=false;
      }
      if(UorD==1 && y3+1<4 && arrGridRepersentaion[y3+1][x3]!=1){
        arrGridRepersentaion[y3+1][x3] = 1;
        x4=x3-1+1;
        y4=y3+1;
        block4=false;
      }
    }
  }

}
}

function rotate(){

  var tempArr = new Array(4);
  for(let i = 0; i<tempArr.length;i++){
    tempArr[i] = new Array(4);
  }

  //keep building 4*4s unitll you have one with 4 1s. Once you do you have the appropriate region
  let count = 0;
  //These two vars serve as your starting points
  let p = 0;
  let z = 0;
  while(count != 4){
      count = 0;
      if(z+4 > arrGridRepersentaion[0].length ){
        z=0;
        p=p+1;
      }


      for(let i = p; i<p+4;i++){
        for(let k = z; k<z+4;k++){
          if(arrGridRepersentaion[i][k] == 1){
            count = count+1;
          }
        }
      }
      if(count != 4){z = z+1;}
  }

  console.log(""+z+":"+p);

  for(let i = p; i<p+4; i++){
    for(let k = z; k<z+4; k++){
      if(arrGridRepersentaion[i][k] == 1){
        // tempArr[i-p][k-z] = arrGridRepersentaion[k][i];
        tempArr[k-z][i-p] = arrGridRepersentaion[i][k];
      }else{
        tempArr[k-z][i-p]=0;
      }
    }
  }
  

    for(let i = 0; i<=3;i++){
    for(let k = 0; k<=1; k++){
      var temp = tempArr[i][k]
      tempArr[i][k] = tempArr[i][3-k];
      tempArr[i][3-k] = temp;
    }
  }


  console.log(tempArr);


  //validating
  var valid = true;
  for(let i = p; i<p+4; i++){
    for(let k = z; k<z+4; k++){
      if(tempArr[i-p][k-z] == 1 && arrGridRepersentaion[i][k] == 2){
        valid = false;
      }
    }
  }
  if(valid){
    for(let i = p; i<p+4; i++){
      for(let k = z; k<z+4; k++){
        if(arrGridRepersentaion[i][k] == 1){
          arrGridRepersentaion[i][k] = 0;
        }
        if(tempArr[i-p][k-z] == 1){
          arrGridRepersentaion[i][k] = 1;
        }
      }
    }
  }

  updateVisualGrid();    
} 

function updateVisualGrid(){
    nnn = true;
    console.log(arrGridRepersentaion);
    for(let i = 0; i<arrGridRepersentaion.length; i++){
      for(let k = 0; k<arrGridRepersentaion[i].length; k++){
        

        if(arrGridRepersentaion[i][k] == 1){
        if(nnn){
          firstBlock=i;
          nnn = false;
        }
        let IDD =  "gridBlock"+i+"u"+k;
        let Be = document.getElementById(IDD);
        Be.style.backgroundColor  = "white";
      }


       if(arrGridRepersentaion[i][k] == 0 || arrGridRepersentaion[i][k] == 3){
        if(i<4){          
          let IDD =  "gridBlock"+i+"u"+k;
          let Be = document.getElementById(IDD);
          Be.style.backgroundColor  = "pink";
        }else{
          let IDD =  "gridBlock"+i+"u"+k;
          let Be = document.getElementById(IDD);
          Be.style.backgroundColor  = "black";
        }
      }

      if(arrGridRepersentaion[i][k] == 2){
          let IDD =  "gridBlock"+i+"u"+k;
          let Be = document.getElementById(IDD);
          Be.style.backgroundColor  = "white";
      }

      if(arrGridRepersentaion[i][k] == 666){
          let IDD =  "gridBlock"+i+"u"+k;
          let Be = document.getElementById(IDD);
          Be.style.backgroundColor  = "darkred";
      }




    }
  }




}

function down(){
  var fall = false;
  for(let i = arrGridRepersentaion.length-1; i>=0; i--){
    for(let k = 0; k<arrGridRepersentaion[i].length;k++){
      
      if (arrGridRepersentaion[i][k] == 1 && (i+1)>(arrGridRepersentaion.length-1)){
        console.log("no");
        fall = true;
      }
      else if(arrGridRepersentaion[i][k] == 1 && arrGridRepersentaion[i+1][k] == 2){
        fall = true;
      }
    }
  }

  console.log(fall);
  if(fall){
    close();
  }else{
    for(let i = arrGridRepersentaion.length-1; i>=0; i--){
     for(let k = 0; k<arrGridRepersentaion[i].length;k++){
      
        if(arrGridRepersentaion[i][k] == 1){
        console.log(""+i+":"+k);
        console.log(arrGridRepersentaion[i][k]);
        arrGridRepersentaion[i+1][k] = arrGridRepersentaion[i][k];
        arrGridRepersentaion[i][k] = 0;
       }
     }
   }
  }
  updateVisualGrid();
}

function close(){
  for(let i = arrGridRepersentaion.length-1; i>=0; i--){
     for(let k = 0; k<arrGridRepersentaion[i].length;k++){
      if(arrGridRepersentaion[i][k] == 1){
        arrGridRepersentaion[i][k] = 2;
      }
     }
   }
   scorez();
   dead();
   console.log(gameOver);
    createPiece();
}

function left(){
  var no = false;
  for(let i = 0; i<arrGridRepersentaion.length; i++){
    for(let k = 0; k<arrGridRepersentaion[i].length; k++){
      if(arrGridRepersentaion[i][k] == 1 && arrGridRepersentaion[i][k-1] == 2){
        no = true;
      }
      else if(arrGridRepersentaion[i][k] == 1 && (k-1)<0){
        no = true;
      }
    }
  }

  console.log(no)
  if(no){
    return;
  }else{
    for(let i = 0; i<arrGridRepersentaion.length; i++){
      for(let k = 0; k<arrGridRepersentaion[i].length; k++){
        if(arrGridRepersentaion[i][k] == 1){
          arrGridRepersentaion[i][k-1] = arrGridRepersentaion[i][k];
          arrGridRepersentaion[i][k] = 0;
        }
      }
    }
  }
  updateVisualGrid();
}

function right(){
  var no = false;
  for(let i = 0; i<arrGridRepersentaion.length; i++){
    for(let k = arrGridRepersentaion[i].length-1; k>=0; k--){
      if(arrGridRepersentaion[i][k] == 1 && arrGridRepersentaion[i][k+1] == 2){
        no = true;
      }
      else if(arrGridRepersentaion[i][k] == 1 && (k+1)>=arrGridRepersentaion[i].length){
        no = true;
      }
    }
  }
  console.log(no);
  if(no){
    return;
  }else{
    for(let i = 0; i<arrGridRepersentaion.length; i++){
      for(let k = arrGridRepersentaion[i].length-1; k>=0; k--){
        if(arrGridRepersentaion[i][k] == 1){
          console.log("azz");
          arrGridRepersentaion[i][k+1] = arrGridRepersentaion[i][k];
          arrGridRepersentaion[i][k] = 0;
        }
      }
    }
  }
  updateVisualGrid();
}

function scorez(){

  for(let i = 0; i<arrGridRepersentaion.length;i++){
    var row = true;
    for(let k = 0; k<arrGridRepersentaion[i].length; k++){
      if(arrGridRepersentaion[i][k] != 2){
        row = false;
      }
    }

    if(row == true){
      score = score + 10;
      for(let k = 0; k<arrGridRepersentaion[i].length; k++){
        arrGridRepersentaion[i][k] = 0;
      }

      for(let f = i; i>=0;i--){
        for(let k = 0; k<arrGridRepersentaion[i].length; k++){
          if(arrGridRepersentaion[i][k] == 2){
            arrGridRepersentaion[i+1][k] = arrGridRepersentaion[i][k];
            arrGridRepersentaion[i][k] = 0;
          }
        }
      }



    }
  }
  document.getElementById('sss').innerHTML = score;
}

function dead(){
  for(let i = 0; i<4; i++){
    for(let k = 0; k<arrGridRepersentaion[i].length; k++){
      if(arrGridRepersentaion[i][k] == 2){
            for(let q = 0; q<arrGridRepersentaion.length; q++){
              for(let w = 0; w<arrGridRepersentaion[q].length; w++){
                if(arrGridRepersentaion[q][k] == 2 || arrGridRepersentaion[q][k] == 1){
                    arrGridRepersentaion[q][k] = 666;
                }
              }
            }
            gameOver = true;
            
            document.getElementById('sss').innerHTML = "You're DEAD!:(";
            var newDiv = document.createElement("div");
            newDiv.innerHTML = "You're DEAD!:(";
            newDiv.id = 'ssss';
            var sx = document.createElement("div");
            document.body.appendChild(sx);
            document.body.appendChild(newDiv);


            document.getElementById('sss').innerHTML = score;








      }
    }
  }
  
  updateVisualGrid();
}
