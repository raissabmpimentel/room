// Declaracao de variaveis
var noise = false;
var time = 30;
var soundVideo, soundNoise;
var listenerNoise, listenerVideo;
var texture;

// Definicao da cena
var scene = new THREE.Scene();

// Camera
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 100000 );
camera.position.set(200,0,200);

// Renderer
var renderer = new THREE.WebGLRenderer({
canvas:document.getElementById("mycanvas"),
antialias:true,
alpha:false
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor("#b3bdc9");
document.body.appendChild( renderer.domElement );
renderer.setPixelRatio( window.devicePixelRatio );

// Controle da camera
var controls = new THREE.OrbitControls(camera, renderer.domElement);
 controls.enableDamping = true;
 controls.dampingFactor = 0.25;
 controls.enableZoom = true;


// Iluminacao
var keyLight = new THREE.DirectionalLight(0x808080, 0.5);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(0x808080, 0.75);
fillLight.position.set(100, 0, 100);

var fillLight2 = new THREE.DirectionalLight(0x808080, 0.5);
fillLight2.position.set(100, 100, 100);

var fillLight3 = new THREE.DirectionalLight(0x808080, 1);
fillLight3.position.set(0, 0, -100);

scene.add(keyLight);
scene.add(fillLight);
scene.add(fillLight2);
scene.add(fillLight3);

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

// Visualização dos eixos (RETIRAR DEPOIS)
var axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

// Importacao de modelos junto com mapeamento de material (de textura ou cor)

// Batente da TV
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

// Sofa
var mat_sofa = new THREE.MeshLambertMaterial({color: 0x8c8c97});
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

// Chao
texture = new THREE.TextureLoader().load('img/carpet.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 5, 5 );
texture.anisotropy = 16;
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

// Teto
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('ceiling.obj', function(object) {
	scene.add(object);
})

// Paredes
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

// Mesa
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

// Lampada
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

// Molde da TV
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

// Luz para destacar a lampada
var light_aux_1 = new THREE.PointLight(0xFFFFCC, 0.75, 80);
light_aux_1.position.set(-100, 50, -10);
scene.add(light_aux_1);

var light_aux_2 = new THREE.PointLight(0xFFFFCC, 0.75, 80);
light_aux_2.position.set(-100, 50, -100);
scene.add(light_aux_2);

// Luz amarela que sai da lampada
pointlight = new THREE.PointLight( 0xFFFFCC, 0.85, 0);
pointlight.position.set( -100, 50, -80 ); // Posicao proxima da lampada
scene.add( pointlight );

// Animacao TV
var video = document.createElement('video');
video.loop = false;
video.muted = true;
video.src = 'res/samara.mp4';
var texture = new THREE.VideoTexture( video );
texture.minFilter = THREE.LinearFilter;
texture.magFilter = THREE.LinearFilter;
texture.format = THREE.RGBFormat;

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

// Controllers
var soundParams = {
	mute: false,
  volume: 50
};

gui = new dat.GUI();
var f1 = gui.addFolder('Sound');
f1.add(soundParams, 'mute').onChange(onToggleMute);
f1.add(soundParams, 'volume', 0, 100).step(1).onChange(onVolumeChange);
gui.close();

// Para ouvir o audio
listenerNoise = new THREE.AudioListener();
listenerVideo = new THREE.AudioListener();
soundNoise = new THREE.PositionalAudio(listenerNoise);
soundVideo = new THREE.PositionalAudio(listenerVideo);
soundVideo.load('res/samara.mp4');

var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'res/tvnoise.mp4', function( buffer ) {
	soundNoise.setBuffer( buffer );
  soundNoise.setLoop( true );
	soundNoise.setVolume( 0.1 *(soundParams.mute == true ? 0.0 : 1.0)*(soundParams.volume/100) );
	soundNoise.play();
});

scene.add( listenerNoise );
scene.add( listenerVideo );

function onToggleMute() {
	if(soundParams.mute == true){
    soundNoise.setVolume(0.0);
    soundVideo.setVolume(0.0);
  } else {
    if(noise == true){
      soundNoise.setVolume(0.1*(soundParams.volume/100));
    } else {
      soundVideo.setVolume(0.7*(soundParams.volume/100));
    }
  }
}

function onVolumeChange() {
	if(noise == true){
    soundNoise.setVolume(0.1*(soundParams.mute == true ? 0.0 : 1.0)*(soundParams.volume/100));
  } else {
    soundVideo.setVolume(0.7*(soundParams.mute == true ? 0.0 : 1.0)*(soundParams.volume/100));
  }
}

// Funcao para animar a cena
var animate = function () {

	randomizeParams();
	if(time > 29){
		time = 0.0;

		if(noise == false){
		uniformsNoise.u_time.value = time;

		soundNoise.setVolume(0.1*(soundParams.mute == true ? 0 : 1)*(soundParams.volume/100));
		soundVideo.setVolume(0.0);

		scene.remove(meshVideo);
		scene.add(meshNoise);

		noise = true;
		} else{
		uniformsVideo.u_time.value = time;

		soundVideo.setVolume(0.7*(soundParams.mute == true ? 0 : 1)*(soundParams.volume/100));
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

// Funcao para ajustar parametros da cena com o redimensionamento
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
