import { Component } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs/Observable';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  text: string;
  rate: number;
  locale: string;
  result: Observable<any>;

  constructor(private tts: TextToSpeech, private http: HttpClient) {
    this.text = 'Initial text';
    this.rate = 5;
    this.locale = 'en-US';
  }

  playText() {
    if (!this.validText(this.text)) {
      return
    }

    let url = 'http://numbersapi.com/' + this.text;
    this.result = this.http.get(url);
    this.result
    .subscribe(data => {
      console.log('my data: ', data);
    }, error => {
      console.log(error['error']['text']);
      this.tts.speak({
        text: error['error']['text'],
        rate: this.rate / 4,
        locale: this.locale
      })
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
    });
  }

  validText(text) {
    if (text.length === 0) {
      return false;
    } else {
      let input = Number(text)
      return Number.isInteger(input)
    }
  }
}
