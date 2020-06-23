var noise = false;
var time = 65;
var soundVideo, soundNoise;
var listenerNoise, listenerVideo;
var texture;

// Definicao da cena
var scene = new THREE.Scene();

// Camera dev
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 100000 );
camera.position.set(200,0,200); 

var renderer = new THREE.WebGLRenderer({
canvas:document.getElementById("mycanvas"),
antialias:true,
alpha:false
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor("#b3bdc9");
document.body.appendChild( renderer.domElement );
renderer.setPixelRatio( window.devicePixelRatio );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
 controls.enableDamping = true;
 controls.dampingFactor = 0.25;
 controls.enableZoom = true;


// Iluminacao dev
var keyLight = new THREE.DirectionalLight(0x808080, 0.5);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(0x808080, 0.75);
fillLight.position.set(100, 0, 100);

var fillLight2 = new THREE.DirectionalLight(0x808080, 0.5);
fillLight2.position.set(100, 100, 100);

// var backLight = new THREE.DirectionalLight(0xffffff, 0.35);
//  backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(fillLight2);
//scene.add(backLight);


// Background
scene.background = new THREE.CubeTextureLoader()
	.setPath( 'background/' )
	.load( [
		'posx.jpg',
		'negx.jpg',
		'posy.jpg',
		'negy.jpg',
		'posz.jpg',
		'negz.jpg'
	] );

// Fim das configuracoes finais

// Visualização dos eixos
var axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

// Importando alguns modelos para visualizacao (apenas .obj)
texture = new THREE.TextureLoader().load('img/wood.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 5, 3 );
var mat_wood = new THREE.MeshLambertMaterial({map: texture, color: 0xffffff});
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('shelves.obj', function(object) {
	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = mat_wood;
        }
    });
	scene.add(object);
})

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('shelves-sup.obj', function(object) {
	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = mat_wood;
        }
    });
	scene.add(object);
})

var mat_sofa = new THREE.MeshLambertMaterial({color: 0x214365});
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('sofa-base.obj', function(object) {
	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = mat_sofa;
        }
    });
	scene.add(object);
})

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('sofa-p1.obj', function(object) {
	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = mat_sofa;
        }
    });
	scene.add(object);
})

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('sofa-p2.obj', function(object) {
	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = mat_sofa;
        }
    });
	scene.add(object);
})

texture = new THREE.TextureLoader().load('img/carpet.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 10, 10 );
var mat_fl = new THREE.MeshLambertMaterial({map: texture, color: 0xffffff});
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('floor.obj', function(object) {
	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = mat_fl;
        }
    });
	scene.add(object);
})


var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('ceiling.obj', function(object) {
	scene.add(object);
})

texture = new THREE.TextureLoader().load('img/brick.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 5, 3 );
var mat_wall_1 = new THREE.MeshLambertMaterial({map: texture, color: 0xFFFFFF});
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('back-wall.obj', function(object) {
	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = mat_wall_1;
        }
    });
	scene.add(object);
})

texture = new THREE.TextureLoader().load('img/brick2.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 4, 6 );
var mat_wall_2 = new THREE.MeshLambertMaterial({map: texture, color: 0xFFFFFF});
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('window-wall.obj', function(object) {
	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = mat_wall_2;
        }
    });
	scene.add(object);
})

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('window-frame.obj', function(object) {
	scene.add(object);
})


var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('table-feet.obj', function(object) {
	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = mat_wood;
        }
    });
	scene.add(object);
})

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('table-p2.obj', function(object) {
	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = mat_wood;
        }
    });
	scene.add(object);
})


var mat_light = new THREE.MeshLambertMaterial({color: 0xFFFFCC});
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('light-bulb.obj', function(object) {

	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
			child.material = mat_light;
        }
	});
	
	scene.add(object);
})

var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('light-base.obj', function(object) {

	scene.add(object);
})

var mat_tv = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('TV-frame.obj', function(object) {

	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
			child.material = mat_tv;
        }
	});
	scene.add(object);
})

var light2 = new THREE.PointLight(0xffffff, 0.75, 80);
light2.position.set(-100, 50, -10);
scene.add(light2);

pointlight = new THREE.PointLight( 0xFFFFCC, 0.85);
pointlight.position.set( -100, 50, -70 );
scene.add( pointlight );

// Animacao TV

var video = document.createElement('video');
video.loop = true;
video.muted = true;
video.src = 'res/samara.mp4';
var texture = new THREE.VideoTexture( video );
texture.minFilter = THREE.LinearFilter;
texture.magFilter = THREE.LinearFilter;
texture.format = THREE.RGBFormat;

// PlaneGeometry reserva para TV-screen
// var geometry = new THREE.PlaneGeometry( 120, 68, 1);
// var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
// var plane = new THREE.Mesh( geometry, material );
// plane.position.set(-89,-29,-206); // ajuste aproximado
// scene.add( plane );

var geometry = new THREE.PlaneGeometry( 120, 68, 1);
var uniformsVideo = {
	u_tDiffuse: { type: "t", value: texture },
	u_amount: { type: "f", value: 40.0 },
	u_time: { type: "f", value: 1.0 },
	u_resolution: { type: "v2", value: new THREE.Vector2() },
	u_angle:    { type: "f", value: 0.05 },
	u_magnitude:    { type: "f", value: 0.01 }
};
var materialVideo = new THREE.ShaderMaterial( {
	uniforms: uniformsVideo,
	vertexShader: document.getElementById( 'vertexVideoShader' ).textContent,
	fragmentShader: document.getElementById( 'fragmentVideoShader' ).textContent,
	side: THREE.DoubleSide
} );
var meshVideo = new THREE.Mesh( geometry, materialVideo);
meshVideo.position.set(-89,-29,-206);

var uniformsNoise = {
	u_amount: { type: "f", value: 100.0 },
	u_time: { type: "f", value: 1.0 },
	u_resolution: { type: "v2", value: new THREE.Vector2() },
};
var materialNoise = new THREE.ShaderMaterial( {
	uniforms: uniformsNoise,
	vertexShader: document.getElementById( 'vertexNoiseShader' ).textContent,
	fragmentShader: document.getElementById( 'fragmentNoiseShader' ).textContent,
	side: THREE.DoubleSide
} );
var meshNoise = new THREE.Mesh( geometry, materialNoise );
meshNoise.position.set(-89,-29,-206);

uniformsVideo.u_resolution.value.x = renderer.domElement.width;
uniformsVideo.u_resolution.value.y = renderer.domElement.height;
uniformsNoise.u_resolution.value.x = renderer.domElement.width;
uniformsNoise.u_resolution.value.y = renderer.domElement.height;

function randomizeParams() {
	uniformsVideo.u_amount.value = Math.random() * 100;
	uniformsNoise.u_amount.value = 400 + Math.random()*(1000 - 400);
}


listenerNoise = new THREE.AudioListener();
listenerVideo = new THREE.AudioListener();
soundNoise = new THREE.PositionalAudio(listenerNoise);
soundVideo = new THREE.PositionalAudio(listenerVideo);
soundVideo.load('res/samara.mp4');

var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'res/tvnoise.mp4', function( buffer ) {
	soundNoise.setBuffer( buffer );
  	soundNoise.setLoop( true );
	soundNoise.setVolume( 0.1 );
	soundNoise.play();
});

scene.add( listenerNoise );
scene.add( listenerVideo );

// Funcao para animar a cena
var animate = function () {

	randomizeParams();
	if(time > 58){
		time = 0.0;

		if(noise == false){
		uniformsNoise.u_time.value = time;

		soundNoise.setVolume(0.1);
		soundVideo.setVolume(0.0);

		scene.remove(meshVideo);
		scene.add(meshNoise);

		noise = true;
		} else{
		uniformsVideo.u_time.value = time;

		soundVideo.setVolume(0.7);
		soundNoise.setVolume(0.0);
		soundVideo.play();
		video.play();

		scene.remove(meshNoise);
		scene.add(meshVideo);

		noise = false;
		}
	} else {
		time += 0.05;

		if(noise == true){
		uniformsNoise.u_time.value = time;
		} else{
		uniformsVideo.u_time.value = time;
		}
	}

	requestAnimationFrame( animate );

	// Atualizar visao
	controls.update();

	// Desenhar cena
	renderer.render(scene, camera);
};

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	uniformsVideo.u_resolution.value.x = renderer.domElement.width;
	uniformsVideo.u_resolution.value.y = renderer.domElement.height;
	uniformsNoise.u_resolution.value.x = renderer.domElement.width;
	uniformsNoise.u_resolution.value.y = renderer.domElement.height;
}
window.addEventListener('resize', onWindowResize, false);


// Invoca o loop da animação
animate();
