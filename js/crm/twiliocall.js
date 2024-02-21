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

      return false;
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

    console.log(`calling ${calling_to} from ${calling_from}`)
    device.connect({params:params});
});

return false;
} 

function hang_up_call(device){
  device.on('disconnect', function (call) {
    fancyOpen(`<span>'Call ended'</span>`)
  });
  return false;
}
