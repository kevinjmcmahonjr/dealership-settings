function setAllInputCleaves(){
    var cleaveVinInputField  = new Cleave('#vin-input-field', {
        blocks: [17],
        uppercase: true
    });
}

function runVinDecoder(){
    var vinDecodeButton = document.getElementById('vin-decode-button');
    var vinInputField = document.getElementById('vin-input-field');
    var vinNumber = vinInputField.value;
    vinDecodeButton().addEventListener('click', function(){
        if (vinNumber.length == 17){
            vinDecode(vinNumber);
        }
        else{
            alert('Check the length of the VIN, must be 17 characters long.');
        }
    });
}

function processVinDecodeResponse();

document.addEventListener('DOMContentLoaded', () => {
    vinDecodeCall(vinNumber){
        //var xhttp = new XMLHttpRequest();
        var vinDecodeBaseURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/';
        var vinDecodeResponseFormat = '?format=json';
        var vinDecodeCallback = '&jsoncallback=processVinDecodeResponse';
        var vinDecodeURL = vinDecodeBaseURL + vinNumber +vinDecodeResponseFormat + vinDecodeCallback;
        function addScriptVinCall(vinDecodeURL) {
            var script = document.createElement('script');
            script.type="text/javascript";
            script.src = url;
            document.getElementsByTagName('head')[0].appendChild(script);
        }
        addScriptVinCall();
    }
    
    var vinDecodeButton = document.getElementById('vin-decode-button');
    var vinInputField = document.getElementById('vin-input-field');
    var vinNumber = vinInputField.value;
    vinDecodeButton().addEventListener('click', vinDecode(vinNumber));
    
    setAllInputCleaves();
    runVinDecoder();
});
