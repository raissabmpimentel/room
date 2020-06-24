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

			soundNoise.setVolume(0.15*(soundParams.mute == true ? 0 : 1)*(soundParams.volume/100));
			soundVideo.setVolume(0.0);

			scene.remove(meshVideo);
			scene.add(meshNoise);

			noise = true;
		} else{
			uniformsVideo.u_time.value = time;

			soundVideo.setVolume(1.0*(soundParams.mute == true ? 0 : 1)*(soundParams.volume/100));
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

// Invoca o loop da animação
animate();
