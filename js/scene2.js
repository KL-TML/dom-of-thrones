function scene2() {
  console.log('Executing scene 2!')
    // Setup Stage
  stage = document.querySelector('#stage')
  castle = document.querySelector('#castle')
  stageImg = stage.querySelector('#stage-img')
  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)

    // Setup Cast

    // Character 1
    //Ned
    // <div style="position: absolute; width: 10%; height: 37%; top: 55%; left: 25%; border: none; background: none;"><img id="ned" title="#ned" src="img/cast/ned.jpg" style="border: none; width: 70%; position: absolute; top: 0px;"><img id="leather-armour" title="#leather-armour" src="img/wardrobe/leather-armour.jpg" style="border: none; position: absolute; bottom: 0px;"></div>
    // <img id="ned" title="#ned" src="img/cast/ned.jpg" style="border: none; width: 70%; position: absolute; top: 0px;">
    // <img id="leather-armour" title="#leather-armour" src="img/wardrobe/leather-armour.jpg" style="border: none; position: absolute; bottom: 0px;">

    // nedContainer = document.createElement('div')
    // stage.append(nedContainer)
    // nedContainer.style.position = 'absolute'
    // nedContainer.style.width = '10%'
    // nedContainer.style.height = '20%'
    // nedContainer.style.top = '50%'
    // nedContainer.style.left = '50%'
    // nedContainer.style.border = '2px solid red'
    // nedContainer.style.background = 'yellow'

    nedContainer = document.createElement('div');
    stage.append(nedContainer);
    nedContainer.style.position = 'absolute';
    nedContainer.style.width = '10%';
    nedContainer.style.height ='37%';
    nedContainer.style.top = '55%';
    nedContainer.style.left = '25%';
    ned = document.querySelector('#ned');
    nedContainer.append(ned);
    leather = document.querySelector('#leather-armour');
    nedContainer.append(leather);
    ned.style.width = '70%';
    ned.style.position = 'absolute';
    ned.style.top = 0;
    leather.style.position = 'absolute';
    leather.style.bottom = 0;


    // Character 2
  //Joffrey

  joffContainer = document.createElement('div')
  stage.append(joffContainer)
  joffContainer.style.width = '8%'
  joffContainer.style.position = 'absolute'
  joffContainer.style.height = '31%'
  joffContainer.style.top = '55%'
  joffContainer.style.left = '55%'
  joff = document.querySelector('#joffrey')
  joffContainer.append(joff)
  joff.style.width = '75%'
  joff.style.position = 'absolute'
  joff.style.left = '33%'
  kingWardrobe = document.querySelector('#king')
  joffContainer.append(kingWardrobe)
  kingWardrobe.style.position = 'absolute'
  kingWardrobe.style.bottom = 0


    // Setup Props

    // Prop 1
    //sword
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left = '31%'
  sword.style.height = '5%'
  sword.style.transform = 'rotateY(150deg)'

  // Prop 2

  // Action!

  // Stage direction 1

  // Existing Start Frame
  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })

  frame(function() {
    sword.style.top = '74%'
    sword.style.left = '36%'
  })

  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })

  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '47%'
  })

  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
  })

  frame(function() {
    joffrey.style.top = 0
    joffrey.style.left = '33%'
  })

  frame(function() {
    joffrey.style.top = '17%'
    joffrey.style.left = '90%'
  })

  frame(function() {
    joffrey.style.top = '35%'
    joffrey.style.left = '160%'
  })

  frame(function() {
    joffrey.style.top = '55%'
    joffrey.style.left = '230%'
  })

  frame(function() {
    joffrey.style.top = '75%'
    joffrey.style.left = '300%'
  })

  frame(function() {
  joffrey.style.top = 0
  joffrey.style.left = '33%'
  joff.style.transform = 'rotateZ(220deg)'
})

frame(function() {
  joffrey.style.top = '17%'
  joffrey.style.left = '90%'
  joff.style.transform = 'rotateZ(140deg)'
})

frame(function() {
  joffrey.style.top = '35%'
  joffrey.style.left = '160%'
  joff.style.transform = 'rotateZ(260deg)'
})

frame(function() {
  joffrey.style.top = '55%'
  joffrey.style.left = '230%'
  joff.style.transform = 'rotateZ(180deg)'
})

frame(function() {
  joffrey.style.top = '75%'
  joffrey.style.left = '300%'
  joff.style.transform = 'rotateZ(100deg)'
})

}
