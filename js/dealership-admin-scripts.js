function setAllInputCleaves(){
    var cleaveVinInputField  = new Cleave('#vin-input-field', {
        blocks: [17],
        uppercase: true
    });
}

function vinDecodeMakeRequest(vinNumber){
    var vinDecodeBaseURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/';
    var vinDecodeResponseFormat = '?format=json';
    var vinDecodeCallback = '&jsoncallback=processVinDecodeResponse';
    var vinDecodeURL = vinDecodeBaseURL + vinNumber + vinDecodeResponseFormat + vinDecodeCallback;
    console.log(vinDecodeURL);
    function addScriptVinCall(vinDecodeURL) {
        var script = document.createElement('script');
        script.type= "text/javascript";
        script.src = vinDecodeURL;
        document.body.appendChild(script);
    }
    addScriptVinCall(vinDecodeURL);
}

function runVinDecoder(){
    var vinInputField = document.getElementById('vin-input-field');
    var vinNumber = vinInputField.value;
    console.log('before');
    console.log(vinNumber);
    console.log(vinNumber.length);
    
    if (vinNumber.length == 17){
        console.log('true');
        console.log(vinNumber);
        console.log(vinNumber.length);
        vinDecodeMakeRequest(vinNumber);
    }
    else{
        console.log('false');
        console.log(vinNumber);
        console.log(vinNumber.length);
        alert('Check the length of the VIN, must be 17 characters long.');
    }
}

function vinDecodeButtonClick(){
    var vinDecodeButton = document.getElementById('vin-decode-button');
    vinDecodeButton.addEventListener('click', runVinDecoder);
}

function processVinDecodeResponse(obj){
    alert('success');
    console.log(obj);
}

document.addEventListener('DOMContentLoaded', () => {
    setAllInputCleaves();
    vinDecodeButtonClick();
});
