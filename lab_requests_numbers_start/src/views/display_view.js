const PubSub = require('../helpers/pub_sub');

const DisplayView = function(container){
  this.container = container;
}

DisplayView.prototype.bindEvents = function () {
  PubSub.subscribe("Info:selectedData", (event)=>{
    const answer = event.detail;
    this.displayContent(answer);
  })

};

DisplayView.prototype.displayContent = function(content){
  const div = document.createElement('div');
  div.textContent = content.text;
  this.container.appendChild(div);
}

module.exports = DisplayView;
