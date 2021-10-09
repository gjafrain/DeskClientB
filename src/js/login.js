
import Widget from './widget.js';

window.onload = () => {


  const site = window.location.host.replace(/[^A-z]+/ig,'');
  const customerNum = 10000+Math.round(Math.random()*100000);
  const user = {
    appId: "74563782-DCA0-4652-B947-A11D5E8A1322",
    userId: site+"_customer"+customerNum,
    nickname: "Customer #"+customerNum
  };
    const options = {
    wsHost : null,
    apiHost : null,
    deskApiHost : null
    };

    new Widget(user, options);
};
