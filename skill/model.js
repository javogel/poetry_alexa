'use strict';
var pry = require('pryjs')
const _ = require('lodash');
// const HttpClient = require('../services/HttpClient');
const backupPoems= require('../backupPoems/bu');
const request = require('request');
const topics = ["happiness", "love", "sad"]
class Model {
  constructor(data) {
    _.assign(this, data);
  }

  get topic(){
    return this._topic
  }

  set topic(value){
    let v = value || _.sample(topics);
    this._topic = v;
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
      return poems[0] || backupPoems[Math.floor(Math.random()*backupPoems.length)];
    });
  }

  getPoem(){
    return new Promise((resolve, reject) => {
      this._topic =  this._topic ||  _.sample(topics);
      // let randomLineCount = Math.floor(Math.random()*20+3);
      let titleUrl = `http://poetrydb.org/lines/${this._topic}/title,linecount`
      console.log(titleUrl);

      // let client = new HttpClient();
      // client.get(url, (response) => {
      //   resolve(response);
      // });

      // client.get(`http://poetrydb.org/line,linecount/${this.topic}12:abs/lines`, (response) => {
      //   resolve(response);
      // });

      request(titleUrl, function (error, titleResponse, body) {

        let titles = _.filter(JSON.parse(titleResponse.body), function(poem) {
                          return poem.linecount < 25;
                      });
        let randomTitle = titles[Math.floor(Math.random()*titles.length)].title;
        if (!randomTitle){
          resolve('')
        }
        let poemUrl = `http://poetrydb.org/title/${randomTitle}/lines,author,title`

        console.log(poemUrl);
        request(poemUrl, function (error, poemResponse, body) {
          resolve(poemResponse.body)
        });
      });
    });
  }
}

module.exports = Model;
