document.querySelector('.Sliders').addEventListener('change', e => {
    let val = parseFloat(e.target.value);
    let id = e.target.id;
    runModel(view => {
      //先傳到lapp delegate的view的參數
      //綁定參數
      if (id === 'ParamAngleX') view.angleX = val;
      if (id === 'ParamAngleY') view.angleY = val;
      if (id === 'ParamAngleZ') view.angleZ = val;
      if (id === 'ParamEyeLOpen') view.eyeLOpen = val;
      if (id === 'ParamEyeLSmile') view.eyeLSmile = val;
      if (id === 'ParamEyeROpen') view.eyeROpen = val;
      if (id === 'ParamEyeRSmile') view.eyeRSmile = val;
      if (id === 'ParamEyeBallX') view.eyeBallX = val;
      if (id === 'ParamEyeBallY') view.eyeBallY = val;
      view.eyeBallForm = 0;
      if (id === 'ParamBrowLY') view.browLY = val;
      if (id === 'ParamBrowRY') view.browRY = val;
      if (id === 'ParamBrowLX') view.browLX = val;
      if (id === 'ParamBrowRX') view.browRX = val;
      if (id === 'ParamBrowLAngle') view.browLAngle = val;
      if (id === 'ParamBrowRAngle') view.browRAngle = val;
      if (id === 'ParamBrowLForm') view.browLForm = val;
      if (id === 'ParamBrowRForm') view.browRForm = val;
      //mouth form
      if (id === 'ParamMouthForm') view.mouthForm = val;
      //mouth openY
      if (id === 'ParamMouthOpenY') view.mouthOpenY = val;
      if (id === 'ParamCheek') view.cheek = val;
      if (id === 'ParamBodyAngleX') view.bodyAngleX = val;
      if (id === 'ParamBodyAngleY') view.bodyAngleY = val;
      if (id === 'ParamBodyAngleZ') view.bodyAngleZ = val;
      if (id === 'ParamBreath') view.breath = val;
      view.armLA = 0;
      view.armRA = 0;
      view.armLB = 0;
      view.armRB = 0;
      view.handL = 0;
      view.handR = 0;
      if (id === 'ParamHairFront') view.hairFront = val;
      view.hairSide = 0;
      if (id === 'ParamHairBack') view.hairBack = val;
      view.hairFluffy = 0;
      view.shoulderY = 0;
      view.bustX = 0;
      view.bustY = 0;
      view.baseX = 0;
      view.baseY = 0;
    });
  });
var std_param = ['ParamAngleX', 'ParamAngleY', 'ParamAngleZ', 'ParamEyeLOpen',
  'ParamEyeLSmile', 'ParamEyeROpen', 'ParamEyeRSmile', 'ParamEyeBallX', 'ParamEyeBallY',
  'ParamEyeBallForm', 'ParamBrowLY', 'ParamBrowRY', 'ParamBrowLX', 'ParamBrowRX',
  'ParamBrowLAngle', 'ParamBrowRAngle',
  'ParamBrowLForm', 'ParamBrowRForm', 'ParamMouthForm', 'ParamMouthOpenY', 'ParamCheek',
  'ParamBodyAngleX', 'ParamBodyAngleY', 'ParamBodyAngleZ', 'ParamBreath', 'ParamArmLA',
  'ParamArmRA', 'ParamArmLB', 'ParamArmRB', 'ParamHandL', 'ParamHandR',
  'ParamHairFront', 'ParamHairSide', 'ParamHairBack', 'ParamHairFluffy', 'ParamShoulderY',
  'ParamBustX', 'ParamBustY', 'ParamBaseX', 'ParamBaseY'];
var all_param = []
function importFile() {
    var importedFile = document.getElementById('import-file').files[0];

    var reader = new FileReader();
    reader.onload = function() {
      var fileContent = JSON.parse(reader.result);

      console.log(fileContent.Parameters[0]['Id'])
      for (i = 0; i < 42; i++) {
        if(std_param.includes(fileContent.Parameters[i]['Id']))
        {
          document.querySelector('#stdSelect').options.add(new Option(fileContent.Parameters[i]['Id'],i));
          all_param.push(fileContent.Parameters[i]['Id']);
        }
        else 
        {
          document.querySelector('#speSelect').options.add(new Option(fileContent.Parameters[i]['Id'],i));
          all_param.push(fileContent.Parameters[i]['Id']);
        }
      }
    };
    reader.readAsText(importedFile); 
}

document.querySelector('#stdSelect').addEventListener('change', function(){
  let name = document.querySelector('#stdSelect').value;
  document.querySelector('.StandardName').innerHTML =std_param[name];
});

document.querySelector('#speSelect').addEventListener('change', function(){
  let value = document.querySelector('#speSelect').value;
  document.querySelector('.SpecialName').innerHTML =all_param[value];
});

document.querySelector('#stdMin').addEventListener('change', (event) => {
  document.querySelector('#stdSlider').min = document.querySelector('#stdMin').value;
});

document.querySelector('#stdMax').addEventListener('change', (event) => {
  document.querySelector('#stdSlider').max = document.querySelector('#stdMax').value;
});

document.querySelector('#speMin').addEventListener('change', (event) => {
  document.querySelector('#speSlider').min = document.querySelector('#speMin').value;
});

document.querySelector('#speMax').addEventListener('change', (event) => {
  document.querySelector('#speSlider').max = document.querySelector('#speMax').value;
});


document.querySelector('#stdSlider').addEventListener('change', e => {
  let val = parseFloat(e.target.value);
  let id = document.querySelector('.StandardName').innerHTML;
  id = id.replace("Param", "");
  id = id[0].toLowerCase() + id.slice(1);
  console.log(val)
  runModel(view => {
    view[id] = val;
  });
});

document.querySelector('#speSlider').addEventListener('change', e => {
  let val = parseFloat(e.target.value);
  let id = document.querySelector('.SpecialName').innerHTML;
  id = id.replace("Param", "");
  id = id[0].toLowerCase() + id.slice(1);
  console.log(val)
  console.log(id)
  runModel(view => {
    view[id] = val;
  });
});