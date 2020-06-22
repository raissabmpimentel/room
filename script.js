// Definicao da cena
var scene = new THREE.Scene();

// Camera dev
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 200;

var renderer = new THREE.WebGLRenderer({
canvas:document.getElementById("mycanvas"),
antialias:true
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor("#b3bdc9");
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;


// Iluminacao dev
var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var fillLight2 = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight2.position.set(100, 100, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(fillLight2);
scene.add(backLight);

// Configuracoes finais
// Definicao da camera

// Posicionar camera

// Configuracao do renderizador

// Iluminacao

// Fim das configuracoes finais

// Visualização dos eixos
var axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);



// Importando alguns modelos para visualizacao (apenas .obj)
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('shelves.obj', function(object) {
	scene.add(object);
})

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('shelves-sup.obj', function(object) {
	scene.add(object);
})

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('sofa-base.obj', function(object) {
	scene.add(object);
})

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('sofa-p1.obj', function(object) {
	scene.add(object);
})

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('sofa-p2.obj', function(object) {
	scene.add(object);
})

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('floor.obj', function(object) {
	scene.add(object);
})

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('ceiling.obj', function(object) {
	scene.add(object);
})

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('back-wall.obj', function(object) {
	scene.add(object);
})


// Funcao para animar a cena
var animate = function () {
	requestAnimationFrame( animate );

	// Atualizar visao
	controls.update();

	// Desenhar cena
	renderer.render(scene, camera);
};

// Invoca o loop da animação
animate();
