let angle = 0;
let w = 40
let ma
let maxD
var sil
function setup(){
  createCanvas(600,600,WEBGL);
   ma = atan(1/sqrt(2));
   maxD = dist(0,0,-300,300)
  sil = createSlider(0,1200,200);
}
function draw(){
  background(100)
  ortho(-600,600,-400,400,0,1000);
//lights();
  //rotateY(-60);
  rotateX(53);
  
    //rotateZ(-1200)
    console.log(sil.value());
  rotateY(ma)
  for(let z = 1;z < height; z+= w){
    for(let x = 1;x < width;x+= w){
      push()
      let d = dist(x,z,width/2,height/2);
      let offset = map(d,100,maxD,-PI,PI);
      let a = angle + offset;
      let h = map(sin(a),-1,1,100,300);
     translate(x - width/2,0,z - height/2);
     //fill(59)
     normalMaterial();
    box(w -1,h,w-2,);
    pop();
    }
    angle -= 0.005
  }
}