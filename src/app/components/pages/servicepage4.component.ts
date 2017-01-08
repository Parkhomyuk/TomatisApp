import { Component } from '@angular/core';


//noinspection TypeScriptValidateTypes
let SERVICEPAGE4: ServicePage4[] = [
  { "id": 41,
    pictures:"img/serv/service41.jpg",
    "title":"Остеопатия",
    "paraqraph":"Остеопатия – это уникальные мягкие и щадящие методики лечения, в которых главным" +
    " инструментом являются чуткие руки специалиста. Благодаря своей мягкости остеопатия используется " +
    "для лечения детей с самых первых дней жизни, во время беременности, а также выраженном болевом синдроме, " +
    "что радикально и отличает ее методики от остальных.",

  },
  { "id": 42,
    pictures:"img/serv/service42.jpg",
    "title":"Гомеопатия",
    "paraqraph": "Гомеопатия – это лечение подобного подобным. Вот, пожалуй, и все ассоциации, возникающие со словом “ГОМЕОПАТИЯ” у простого человека, не знакомого с этим направлением медицины." +
    "Многие считают гомеопатию одним из народных методов лечения, а гомеопатов – кем-то вроде алхимиков, которые лечат травами и внушениями, хотя гомеопатия существует уже более 200 лет." +
    " У нас работает гомеопат – ПРОФЕССИОНАЛЬНЫЙ ВРАЧ и здесь, уже, как и в традиционной медицине, важно найти СВОЕГО врача-профессионала, которому Вы будете доверять.",


  },
  { "id": 43,
    pictures:"img/serv/service43.jpg",
    "title":"Озонотерапия",
    "paraqraph":'Кислородное голодание (гипоксия) может вызвать необратимые изменения в состоянии дыхательной, сердечнососудистой, нервной и других систем организма. Обогащение тканей дополнительным ' +
    'кислородом (оксигенотерапия) способствует нормализации функционирования иммунной системы, клеточного метаболизма, снижению усталости и т. д.' +
    ' Согласно исследованиям, проведенным в 1960-х годах, ткани желудка усваивают кислород более эффективно, поэтому энтеральная кислородная терапия, основанная на применении насыщенных ' +
    'этим газом напитков, как элемент комплекса профилактики и лечения различных острых и хронических заболеваний может оказать положительное влияние на организм.'

  },
  { "id": 44,
    pictures:"img/serv/service44.jpg",
    "title":"Метод Фельденкрайза",
    "paraqraph": "Это «умный» подход к человеческому движению, цель которого — общее улучшение функционирования человека и развитие его способностей. " +
    "    Применяемые в методе упражнения («уроки») содержат комбинации движений, созданные для улучшения понимания того, как мы действуем и используем свое тело. ",

  },

];

class ServicePage4{
  id: number;
  title:string;
  pictures:string;
  paragraph:string;
  }

@Component({
  selector: 'servicepage4',
  templateUrl: './servicepage4.component.html',

})
export class Servicepage4Component {
    id:number;
    pages=SERVICEPAGE4;

}