import { Component } from '@angular/core';


//noinspection TypeScriptValidateTypes
let SERVICEPAGE3: ServicePage3[] = [
  { "id": 31,
    pictures:"img/serv/service31.jpg",
    "title":"Подготовка к родам",

    paragraph2:[
      {list:'"Воздействует на регуляцию стресса и способствует костной проводимости звука."'},
      {list:'"Позволяет достигнуть будущей маме состояния покоя и релаксации."'},
      {list:'"Влияет положительно на эмоциональное и психическое развитие еще не родившего малыша."'},
      {list:'"Помогает избежать в будущем послеродовой депрессии."'},

    ]


  },
  { "id": 32,
    pictures:"img/serv/service32.jpg",
    "title":"Улучшение голоса и музыкальности",

    paragraph2:[
      {list:'"Улучшает восприятие и анализ звукового восприятия."'},
      {list:'"Улучшает звуковое воспроизведение."'},
      {list:'"Помогает в развитиитворческих способностей,коммуникабельности, артистизма"'},

    ]

  },
  { "id": 33,
    pictures:"img/serv/service33.jpg",
    "title":"Интеграция в иностранные языки",
    paragraph2:[
      {list:'"Дает возможность усвоить ритмы и звуки"'},
      {list:'"Позволяет уху эффективно приспособиться, открывая возможность анализировать и воспроизводить иностранную речь."'},
      {list:'"«Настраивает» мозг на звуковой(частоты и ритм) ряд конкретного языка, позволяя на подсознательном уровне легче и быстрее усвоить конкретный язык."'},

    ]


  },
  { "id": 34,
    pictures:"img/serv/service34.jpg",
    "title":"Эмоциональные расстройства, Хроническая и профессиональная усталость",

    paragraph2:[
      {list:'"Стимулирует мозг, тем самым тренируя его противостоять стрессовым состояниям,"'},
      {list:'"Позволяет воздействовать на мозг расслабляюще, если, человек уже попал в стрессовую ситуацию."'},
      {list:'"Помогает снять стресс и усталость, переключиться с неприятных мыслей, сгладить переживания;"'},
      {list:'"Стимулирует  мозг сенсорными сигналами и  может, как возбуждать, так и успокаивать(в зависимости от выбора программы)."'},

    ]

  },
  { "id": 35,
    pictures:"img/serv/service35.jpg",
    "title":"Помощь в восстановлении после инсульта",

    paragraph2:[
      {list:'"Помогает в восстановлениидвигательной активности, и контроля мышечного тонуса, речи и коммуникации, способности к познанию."'},
      {list:'"В активной фазе пациенту предлагаются действия, которые тренируют мимические мышцы и мышцы рта, это рифмовка и пение, а также распевчатое произнесение слов."'},
      {list:'"Оказывает влияние на улучшение качества жизни у пациентов, улучшение экспрессии чувств, мотивированности, мышления и реактивности пациентов."'},
      {list:'"Оказывает влияние на те отделы головного мозга, которые определяют социальные взаимодействия и эмоции человека."'},
      {list:'"Уменьшает проявлений депрессии, снижает тревоги и беспокойства, помогает создать у человека позитивное восприятие."'},

    ]
  },
  { "id": 36,
    pictures:"img/serv/service36.jpg",
    "title":"ПОЖИЛЫМ ЛЮДЯМ для поддержания энергетического баланса организма и замедления деменции.",

    paragraph2:[
      {list:'"Улучшает память."'},
      {list:'"Влияет на температуру тела."'},
      {list:'"Регулирует выработку гормонов, снижая стресс."'},
      {list:'"Стимулирует выработку эндорфина."'},
      {list:'"Повышает настроение и работоспособность."'},
      {list:'"Активизирует иммунные процессы."'},
      {list:'"Оказывает влияние на те отделы головного мозга, которые определяют социальные взаимодействия и эмоции человека."'},
      {list:'"Уменьшает проявлений депрессии, снижает тревоги и беспокойства, помогает создать у человека позитивное восприятие."'},

    ]
  },

];

class ServicePage3{
  id: number;
  title:string;
  pictures:string;

  paragraph2:Paragraph2[];
}
class Paragraph2{
  list: string;
}

@Component({
  selector: 'servicepage3',
  templateUrl: './servicepage3.component.html',

})
export class Servicepage3Component {
    id:number;
    pages=SERVICEPAGE3;

}
