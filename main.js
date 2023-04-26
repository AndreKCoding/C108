//https://teachablemachine.withgoogle.com/models/uUsc2O8S0/model.json

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uUsc2O8S0/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result").innerHTML = 'Posso ouvir - '+ results[0].label;
    document.getElementById("confidence").innerHTML = 'Precisão - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal');

    if (results[0].label == "Latido") {
      img.src = 'Cachorrinho.jpeg';
    } else if (results[0].label == "Miado") {
      img.src = 'Gatinho.jpeg';
    } else if (results[0].label == "Mugido") {
      img.src = 'Vaca.jpeg';
    }else{
      img.src = 'Leão.png';
    }
  }
}