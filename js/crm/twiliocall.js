function twilio_call(incoming_num, from_num) {

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
      }
  }
  
  
    fetchToken().then(token => {
      if (!token) {
        fancyOpen("<span>'No token received'</span>")
        console.error('No token received');
        return;
      }
  
      
      const device = new Twilio.Device(token, {
        appName: "TEST APP",
        appVersion: "0.0.1",
        closeProtection: true,
        enableImprovedSignalingErrorPrecision: true,
        logLevel: 1
        // edge: 'ashburn'
      });
  
      device.on('ready', function (device) {
        fancyOpen("<span>'Twilio.Device is ready to make calls!'</span>")
        console.log('Twilio.Device is ready to make calls!');
      });
  
      device.on('error', function (error) {
        fancyOpen(`<span>'Twilio.Device Error: ${error.message}</span>`)
        console.error('Twilio.Device Error: ' + error.message);
      });
  

          const params = {
            To: incoming_num,
            From: from_num,
            agent: "Smith"
          };
  
          console.log(`Calling ${params.To} from ${params.From}...'`);
          device.connect({params:params});
    
  
      
      device.on('disconnect', function (call) {
        fancyOpen(`<span>'Call ended'</span>`)
        console.log('Call ended');
      });
    });
};