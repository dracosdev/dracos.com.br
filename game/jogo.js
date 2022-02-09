// Monta e define os sprites
const sprites = new Image();
const bgs = new Image();
const floors = new Image();
const birds = new Image();
const medals = new Image();

sprites.src = './sprites.png';
bgs.src = './sprites/bg/bgs.png';
floors.src = './sprites/floor/floors.png';
birds.src = './sprites/assets/birds.png';
medals.src = './sprites/assets/medals.png';

// Monta o canvas e seta como 2d
const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');


// [Plano de Fundo]
const planoDeFundo = {
  spriteX: 0,
  spriteY: 0,
  largura: 275,
  altura: 199,
  x: 0,
  y: canvas.height - 199,
  desenha() {
    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0,0, canvas.width, canvas.height)

    contexto.drawImage(
      bgs,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );

    contexto.drawImage(
      bgs,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );
  },
};


// [Chao]
const chao = {
  spriteX: 0,
  spriteY: 0,
  largura: 223,
  altura: 111,
  x: 0,
  y: canvas.height - 111,
  desenha() {
    contexto.drawImage(
      floors,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      chao.x, chao.y,
      chao.largura, chao.altura,
    );

    contexto.drawImage(
      floors,
      chao.spriteX, chao.spriteY,
      chao.largura, chao.altura,
      (chao.x + chao.largura), chao.y,
      chao.largura, chao.altura,
    );
  },
};

// [Pássaro]
const flappyBird = {
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 23,
  x: 10,
  y: 50,
  gravidade: 0.25,
  velocidade: 0,
  atualiza(){
    flappyBird.velocidade=flappyBird.velocidade+flappyBird.gravidade;  
    flappyBird.y=flappyBird.y+flappyBird.velocidade;
  },
  desenha() {
    contexto.drawImage(
      birds,
      flappyBird.spriteX, flappyBird.spriteY,
      flappyBird.largura, flappyBird.altura,
      flappyBird.x, flappyBird.y,
      flappyBird.largura, flappyBird.altura,
    );
  }
}

//mensagem de login -> Get Ready
const mensagemGetReady={
  sX: 134,
  sY: 0,
  w: 174,
  h: 152,
  x: (canvas.width/2)-174/2,
  y: 50,
  desenha(){
    contexto.drawImage(
      sprites,
      mensagemGetReady.sX, mensagemGetReady.sY,
      mensagemGetReady.w, mensagemGetReady.h,
      mensagemGetReady.x, mensagemGetReady.y,
      mensagemGetReady.w, mensagemGetReady.h
    );
  }
}

let telaAtiva={};
function mudaParaTela(novaTela){
  telaAtiva=novaTela;
}

const Telas={
  INICIO:{
    desenha(){
      planoDeFundo.desenha();
      chao.desenha();
      flappyBird.desenha();
      mensagemGetReady.desenha();
    },

    click(){
      mudaParaTela(Telas.JOGO);
    },
    atualiza(){

    }
  }
};

Telas.JOGO={
  desenha(){
    planoDeFundo.desenha();
    chao.desenha();
    flappyBird.desenha();
  },
  atualiza(){
    flappyBird.atualiza();
  }
};

function loop() {
  telaAtiva.desenha();
  telaAtiva.atualiza();

  requestAnimationFrame(loop);
}


window.addEventListener('click', function(){
  if(telaAtiva.click){
    telaAtiva.click();
  }
})
mudaParaTela(Telas.INICIO);
loop();