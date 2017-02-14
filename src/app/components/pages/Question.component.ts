import { Component } from '@angular/core';
import {ANSWERS} from '../content/answers_content/answers_content_rus'


@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent {
answers=ANSWERS;
  title = '';
  answ = '';

  onSelect(a) {

    for (var i = 0; i < ANSWERS.length; i++) {
      if (ANSWERS[i].id== a) {
        this.title=ANSWERS[i].title;
        this.answ = ANSWERS[i].name;
      }

    }
  }
}

