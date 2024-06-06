function calculateBmi(){
    var age = parseInt(document.getElementById('txtYear').value);
    var heightCms = parseInt(document.getElementById('txtHeight').value);
    var weightKgs = parseFloat(document.getElementById('txtWeight').value);

    var heightMs = heightCms / 100;
    var heightMsSq = Math.pow(heightMs, 2);

    var bmi = weightKgs / heightMsSq;

    var weightStatus;
    if(bmi >= 30){
        weightStatus = "Obese I";
    }
    else if(bmi >= 25 && bmi <= 29.9){
        weightStatus = "Overweight";
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        weightStatus = "Healthy Weight";
    }
    else{
        weightStatus = "Under Weight";
    }

    document.getElementById('bmi').innerHTML = `<h3> BMI = <b> ${bmi.toFixed(1)} </b> kg/m<sup>2</sup>, Your Weight Status is: <b>${weightStatus}</b></h3>`;
}