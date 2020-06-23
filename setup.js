// Definicao da cena
var scene = new THREE.Scene();

// Camera
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 100000 );
camera.position.set(150,65,150);

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

// Iluminacao ambiente
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
// var axesHelper = new THREE.AxesHelper(4);
// scene.add(axesHelper);

// Importacao de modelos junto com mapeamento de material (de textura ou cor)
var texture;

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

// Haste do batente
var mat_sup = new THREE.MeshPhongMaterial({
  color: 0x4c4c4c,
  emissive: 0x141414,
  specular: 0x636363,
  shininess: 20
});
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('shelves-sup.obj', function(object) {
	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = mat_sup;
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

texture = new THREE.TextureLoader().load('img/brick.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 5, 3 );
var mat_wall_3 = new THREE.MeshLambertMaterial({map: texture, color: 0xFFFFFF});
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('wall1.obj', function(object) {
	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = mat_wall_3;
        }
    });
	scene.add(object);
})

texture = new THREE.TextureLoader().load('img/brick.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 5, 3 );
var mat_wall_4 = new THREE.MeshLambertMaterial({map: texture, color: 0xFFFFFF});
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('wall2.obj', function(object) {
	object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
            child.material = mat_wall_4;
        }
    });
	scene.add(object);
})

// Moldura da janela
var mat_frame = new THREE.MeshStandardMaterial({color: 0x9c9c9c,
    roughness: 0.5,
    metalness: 1,
    envMapIntensity: 3
});
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('window-frame.obj', function(object) {
  object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
			       child.material = mat_frame;
        }
	});
	scene.add(object);
})

// Vidro da janela
var mat_glass = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
	metalness: 0,
	roughness: 0.34,
	transparency: 0.9,
  opacity: 1,
	transparent: true
});
var objLoader = new THREE.OBJLoader();
objLoader.setPath('/obj/');
objLoader.load('window-glass.obj', function(object) {
  object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
			       child.material = mat_glass;
        }
	});
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

var mat_lightbase = new THREE.MeshPhysicalMaterial({color: 0xa8a8a8,
        emissive: 0x323232,
        roughness: 0.5,
        metalness: 0.8,
        reflectivity: 0.37,
        clearcoatRoughness: 0.5
});
var objLoader = new THREE.OBJLoader();
  objLoader.setPath('/obj/');
  objLoader.load('light-base.obj', function(object) {
    object.traverse(function(child) {
        if (child instanceof THREE.Mesh){
			       child.material = mat_lightbase;
        }
	});
	scene.add(object);
})

// Molde da TV
var mat_tv = new THREE.MeshPhysicalMaterial({color: 0x141414,
        emissive: 0x000000,
        roughness: 0.5,
        metalness: 0.2,
        reflectivity: 0.37,
        clearcoatRoughness: 0.5
});
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

// TV shader
var video = document.createElement('video');
video.loop = false;
video.muted = true;
video.src = 'res/samara.mp4';
texture = new THREE.VideoTexture( video );
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

// Audio
var soundVideo, soundNoise;
var listenerNoise, listenerVideo;
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
