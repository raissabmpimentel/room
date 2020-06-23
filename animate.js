// Declaracao de variaveis
var noise = false;
var time = 30;

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
