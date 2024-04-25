function calculate () {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    let bmi = (weight / ((height/100) * (height/100)));

    document.getElementById('message').innerHTML = "Your BMI is:"
    document.getElementById('result').innerHTML = bmi.toFixed(1);

    if ( bmi < 18.5 ) {
        document.getElementById('comment').innerHTML = 'You are Under-Weight'
        } else if( bmi >= 18.5 && bmi <= 24.9 ) {
            document.getElementById('comment').innerHTML = 'You are in Healthy-Range'
        } else if ( bmi >= 25 && bmi <= 29.9) {
            document.getElementById('comment').innerHTML = 'You are Over-Weight'
        } else if (bmi >= 30){
            document.getElementById('comment').innerHTML = 'Obese'
        }

    if ( weight === '' && height === '' ) {
        document.getElementById('message').innerHTML = 'please enter valid values';
        document.getElementById('result').innerHTML = '';
    }
    }