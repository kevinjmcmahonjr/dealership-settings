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
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    //addScriptVinCall();
}

function runVinDecoder(){
    var vinInputField = document.getElementById('vin-input-field');
    var vinNumber = vinInputField.value;
    console.log("before condition "); // + "VIN: " vinNumber + "length: " + vinNumber.length);
    
    if (vinNumber.length == 17){
        console.log('true ' + 'VIN: ' vinNumber + 'length: ' + vinNumber.length);
        vinDecodeMakeRequest(vinNumber);
    }
    else{
        console.log('false ' + 'VIN: ' vinNumber + 'length: ' + vinNumber.length);
        alert('Check the length of the VIN, must be 17 characters long.');
    }
}

function vinDecodeButtonClick(){
    var vinDecodeButton = document.getElementById('vin-decode-button');
    vinDecodeButton.addEventListener('click', runVinDecoder);
}

function processVinDecodeResponse(obj){
    console.log(obj);
}

document.addEventListener('DOMContentLoaded', () => {
    setAllInputCleaves();
    vinDecodeButtonClick();
});
