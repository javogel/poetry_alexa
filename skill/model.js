'use strict';

const _ = require('lodash');
const HttpClient = require('../services/HttpClient');
const topics = ["love", "happiness", "sad"]
class Model {
  constructor(data) {
    _.assign(this, data);
  }

  get topic(){
    return this._topic;
  }

  set topic(value){
    let v = value || _.sample(topics)
    console.log(v)
    this._topic = v
  }

  static fromEvent(alexaEvent) {
    return new this(alexaEvent.session.attributes.modelData);
  }

  serialize() {
    return this;
  }

  createPoem() {
    return this.getPoem().then((response) => {
      let poems = JSON.parse(response);
      return poems[Math.floor(Math.random()*poems.length)];
    });
  }

  getPoem(){
    return new Promise((resolve, reject) => {
      let client = new HttpClient();

      // client.get(`http://poetrydb.org/line,linecount/${this.topic}12:abs/lines`, (response) => {
      //   resolve(response);
      // });
      this._topic =  this._topic || 'love'
      let url = `http://poetrydb.org/lines/${this._topic}/lines,author,title`
      console.log(url)
      client.get(url, (response) => {
        resolve(response);
      });
    });
  }
}

module.exports = Model;
