const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );
// x and y speed;
let xSpeed = 0.03;
let ySpeed = 0.03;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(800, 800);
document.body.appendChild( renderer.domElement );

///Insert Code here
const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 'red'} );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );
camera.position.z = 5;

///Insert Code here

var ballbounceCount = 0;

function animate() {
	requestAnimationFrame( animate );
    
    cube.position.x += xSpeed;
    cube.position.y += ySpeed;
  
    if(cube.position.x >  5)
    {
        xSpeed = -0.03;
        changeColor();
        ballbounceCount += 1;
        cube.scale.x -= 0.10;
        cube.scale.y -= 0.10;
    }
    if(cube.position.x < -5)
    {
       xSpeed = 0.03;
       changeColor();
       ballbounceCount += 1;
       cube.scale.x -= 0.10;
       cube.scale.y -= 0.10;
    }
  
    if(cube.position.y > 5)
    {
        ySpeed = -0.03;
        changeColor();
        ballbounceCount += 1;
        cube.scale.x -= 0.10;
        cube.scale.y -= 0.10;
    }if(cube.position.y < -4){
        ySpeed = 0.03;
        changeColor();
        ballbounceCount += 1;
        cube.scale.x -= 0.10;
        cube.scale.y -= 0.10;
    }
    

  
console.log(ballbounceCount);
  if(ballbounceCount == minMax()){
    cube.scale.set(0);
  }
    renderer.render( scene, camera );
}

animate();


function changeColor(){
    //random change color function
    cube.material.color.setRGB(Math.random(255),Math.random(255),Math.random(255));
}

function minMax(min,max){
    //get random number from either 5 to 8
    min = Math.ceil(5);
    max = Math.floor(8);
    return Math.floor(Math.random() * (max - min) + min);   
}
