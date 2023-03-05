let sound;

function preload() {
  among_mp3 = loadSound('among_sus.mp3');
  bonk_mp3 = loadSound('bonk.mp3');
  bruh_mp3 = loadSound('bruh.mp3');
  croissant_mp3 = loadSound('croissant.mp3');
  sad_mp3 = loadSound('sad_violin.mp3');
  fail_mp3 = loadSound('sponge_fail.mp3');
  wtf_mp3 = loadSound('vine_boom.mp3');
  villager_mp3 = loadSound('villager_audio.mp3');
}

function setup() {
  createCanvas(100, 100);
}

function mousePressed(soundFile) {
  if (sound) {
    sound.stop();
  }

  switch(soundFile) {
    case 'among_sus.mp3':
      sound = among_mp3;
      break;
    
    case 'bonk.mp3':
      sound = bonk_mp3;
      break;
    
    case 'bruh.mp3':
      sound = bruh_mp3;
      break;
    
    case 'croissant.mp3':
      sound = croissant_mp3;
      break;

    case 'sad_violin.mp3':
      sound = sad_mp3;
      break;
    
    case 'sponge_fail.mp3':
      sound = fail_mp3;
      break;
    
    case 'vine_boom.mp3':
      sound = wtf_mp3;
      break;

    case 'villager_audio.mp3':
      sound = villager_mp3;
      break;
  }

  sound.play();
}
