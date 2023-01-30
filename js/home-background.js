const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const loader = new THREE.CubeTextureLoader();
loader.setPath( 'textures/cube/pisa/' );

const textureCube = loader.load( [
	'./logo.png', './logo.png',
	'./logo.png', './logo.png',
	'./logo.png', './logo.png'
] );

const material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}
animate();