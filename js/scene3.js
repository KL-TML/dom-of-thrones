function scene3() {

  // Setup Stage
  stage = document.querySelector('#stage')
  trees = document.querySelector('#trees')
  treesImgSrc = trees.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', treesImgSrc)



  // Setup Cast

  // Character 1 Danerys
  danerysContainer = document.createElement('div');
  stage.append(danerysContainer);
  danerysContainer.style.position = 'absolute';
  danerysContainer.style.width = '10%';
  danerysContainer.style.height = '37%';
  danerysContainer.style.top = '55%';
  danerysContainer.style.left = '25%';
  danerys = document.querySelector('#danerys');
  danerysContainer.append(danerys);
  blueDress = document.querySelector('#blue-dress');
  danerysContainer.append(blueDress);
  danerys.style.width = '75%';
  danerys.style.position = 'absolute';
  danerys.style.top = 0;
  danerys.style.left = '20%';
  blueDress.style.position = 'absolute';
  blueDress.style.bottom = 0;


  // Character 2 Drogo

drogoContainer = document.createElement('div')
stage.append(drogoContainer);
drogoContainer.style.position = 'absolute';
drogoContainer.style.width = '10%';
drogoContainer.style.height ='37%';
drogoContainer.style.top = '50%';
drogoContainer.style.left = '70%';
drogo = document.querySelector('#drogo')
drogoContainer.append(drogo)
bulkyMan = document.querySelector('#bulky-man')
drogoContainer.append(bulkyMan)
drogo.style.width = '70%';
drogo.style.position = 'absolute'
drogo.style.top = 0
drogo.style.left = '20%'
bulkyMan.style.position = 'absolute'
bulkyMan.style.bottom = 0


  // Setup Props

  // Prop 1 egg
egg = document.querySelector('#egg')
egg.style.position = 'absolute'
egg.style.height = '20%'
egg.style.top = '70%'
egg.style.left = '28%'
stage.append(egg)

  // Prop 2

  // Action!

  // Stage direction 1
  frame(function() {
    egg.style.top = '70%'
    egg.style.left = '28%'


  })

  frame(function() {
    egg.style.top = '65%'
    egg.style.left = '35%'
    egg.style.transform = 'rotateZ(40deg)'

  })

  frame(function() {
    egg.style.top = '62%'
    egg.style.left = '45%'
    egg.style.transform = 'rotateZ(40deg)'

  })

  frame(function() {
    egg.style.top = '61%'
    egg.style.left = '50%'
    egg.style.transform = 'rotateZ(30deg)'

  })

  frame(function(){
    egg.style.top = '70%'
    egg.style.left ='60%'
    egg.style.transform = 'rotateZ(20deg)'
  })

  // Stage direction 2

  frame(function() {
    egg.style.top = '70%'
    egg.style.left ='75%'
    egg.style.transform = 'rotateZ(30deg)'

  })

  frame(function() {
    egg.style.top = '70%'
    egg.style.left ='70%'
  })

  frame(function() {
    egg.style.top = '65%'
    egg.style.left ='65%'
    egg.style.transform = 'rotateZ(20deg)'

  })

  frame(function() {
    egg.style.top = '65%'
    egg.style.left = '55%'
    egg.style.transform = 'rotateZ(20deg)'

  })

  frame(function() {
    egg.style.top = '64%'
    egg.style.left ='50%'
  })

  frame(function() {
    egg.style.top = '64%'
    egg.style.left ='47%'
    egg.style.transform = 'rotateZ(20deg)'

  })

  frame(function() {
    egg.style.top = '65%'
    egg.style.left ='35%'
    egg.style.transform = 'rotateZ(20deg)'

  })

  frame(function() {
    egg.style.top = '65%'
    egg.style.left ='28%'
    egg.style.transform = 'rotateZ(20deg)'

  })

}
