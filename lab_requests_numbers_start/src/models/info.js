const PubSub = require('../helpers/pub_sub')
const Request = require('../helpers/request')

const Info = function(){

};

Info.prototype.bindEvents = function () {
  PubSub.subscribe('NumberFormView:submit',(event) =>{
    const selectedNumber = event.detail;
    this.getData(selectedNumber);
  });

};

Info.prototype.getData = function (number) {
  const request = new Request(`http://numbersapi.com/${number}?json`)
  request.get((data)=>{
    PubSub.publish("Info:selectedData",data);
  });
};


module.exports = Info;
