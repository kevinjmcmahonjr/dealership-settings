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
    var vinDecodeURL = vinDecodeBaseURL + vinNumber +vinDecodeResponseFormat + vinDecodeCallback;
    function addScriptVinCall(vinDecodeURL) {
        var script = document.createElement('script');
        script.type= "text/javascript";
        script.src = vinDecodeURL;
        document.getElementsByTagName('head')[0].appendChild(script);
    }
    addScriptVinCall();
}

function runVinDecoder(){
    var vinDecodeButton = document.getElementById('vin-decode-button');
    var vinInputField = document.getElementById('vin-input-field');
    var vinNumber = vinInputField.value;
    vinDecodeButton().addEventListener('click', function(){
        if (vinNumber.length == 17){
            vinDecodeMakeRequest(vinNumber);
        }
        else{
            alert('Check the length of the VIN, must be 17 characters long.');
        }
    });
}

function processVinDecodeResponse(obj){
    console.log(obj);
}

document.addEventListener('DOMContentLoaded', () => {
    setAllInputCleaves();
    runVinDecoder();
});
