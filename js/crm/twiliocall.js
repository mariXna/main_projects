 var device;

function device_call(form){

  var calling_to = form.calling_to.value;
  var calling_from = form.calling_from.value;

  const token_link = '/twillio/token';
  async function fetchToken() {
    try {
        const response = await fetch(token_link);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const token = await response.text();
        return token;
    } catch (error) {
        console.error('Error fetching token:', error);
        fetchToken();
    }
}



  fetchToken().then(token => {
    if (!token) {
      fancyOpen("<span>'No token received'</span>")

      return;
    }

    device = new Twilio.Device(token, {
      appName: "TEST APP",
      appVersion: "0.0.1",
      closeProtection: true,
      enableImprovedSignalingErrorPrecision: true,
      logLevel: 1
      // edge: 'ashburn'
    });

    device.on('ready', function (device) {
      fancyOpen("<span>'Twilio.Device is ready to make calls!'</span>")
    });

    device.on('error', function (error) {
      fancyOpen(`<span>'Twilio.Device Error: ${error.message}</span>`)
    });

    const params = {
      To: calling_to,
      From: calling_from,
      agent: "Smith"
    };

    device.connect({params:params});
});

return false;
} 

function hang_up_call(device){
  device.on('disconnect', function (call) {
    fancyOpen(`<span>'Call ended'</span>`)
  });
}
function twilio_call(incoming_num, from_num) {

  html_form = `<form name="call_form" action="" method="GET"><label for="calling_to">Calling:</label>
      <label for="calling_to">${incoming_num}</label><br>
      <label for="calling_from">from:</label>
      <input type="text" id="calling_from" name="calling_from" value=${from_num}><br><br>
      <button type="button" onclick="device_call(${incoming_num}, this.form)">Call</button></form>`;

  fancyOpen(html_form);
  
    
};