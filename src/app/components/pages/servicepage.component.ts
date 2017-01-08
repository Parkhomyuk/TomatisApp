import { Component } from '@angular/core';


//noinspection TypeScriptValidateTypes
let SERVICEPAGE: ServicePage[] = [
  { "id": 11,
    pictures:"img/serv/service12.jpg",
    "title":"Подготовка к школе",
    "paraqraph": "Быть подготовленным к школе сегодня это не умение читать, писать и считать, а умение всему этому научиться." +
    " 'Программа  подготовка к школе ' позволяет подготовить к школе так, чтобы требования школы не привели к нарушению здоровья " +
    "ребёнка. Она предназначена для организаций занятий с детьми, в программе обучения и развития выделены 5 взаимосвязанных разделов, " +
    "отражающих основные линии развития ребёнка:",
    paragraph2:[
      {list:'"Познаем других людей и себя"'},
      {list:'"Познаем мир"'},
      {list:'"Учимся родному языку"'},
      {list:'"Познаем других людей и себя (сочетание традиционной и оригинальной логопедической методики)"'},
      {list:'"Учимся рисовать"'},
    ]
  },
  { "id": 12,
    pictures:"img/serv/service11.jpg",
    "title":"Логопедия",
    "paraqraph": "Наш специалист в области  логопедии и дефектологии диагностирует вашего ребенка, есть ли у него речевые нарушения," +
    " популярно объяснит основные принципы и методы логопедической помощи, сделает содержание понятным для родителей, не имеющих педагогического образования." +
    "    Материалы, предоставленные специалистами, помогут предупредить нарушения речи у Вашего ребенка, разумеется, при желании, настойчивости и терпении." +
    "    Есть речевые нарушения, с которыми нельзя справиться самостоятельно, необходима помощь специалиста.",
    paragraph2:[
    ]

  },
  { "id": 13,
    pictures:"img/serv/service13.jpg",
    "title":"Эрготерапия",
    "paraqraph": "В эрготерапии или оккупационной терапии акцент делается на формировании навыков повседневной жизни." +
    " Поскольку многие люди с аутизмом обладают неполноценно развитыми навыками мелкой моторики, такая терапия может иметь" +
    " для них большое значение. Профессиональные оккупационные терапевты также могут иметь подготовку в области сенсорной интеграции," +
    " представляющей собой особую технологию, которая помогает аутичным  людям справиться с повышенной чувствительностью к звуку, свету или прикосновениям.",
    paragraph2:[
    ]

  },
  { "id": 14,
    pictures:"img/serv/service14.jpg",
    "title":"Сенсорная интеграция",
    "paraqraph": "Теория сенсорной интеграции, основанная на системном подходе к функционированию мозга, помогает понять связь процессов обработки сенсорной " +
    "информации с поведением и обучением ребенка, увидеть, что школьная неуспеваемость, поведенческие трудности и многое другое – в большинстве случаев не" +
    " результат плохого воспитания или лени ребенка, a реальные проблемы, требующие пристального внимания и планомерных занятий. Мы составляем программу," +
    " даем инструменты, отслеживаем результаты и корректируем программы обучения.  ",
    paragraph2:[
    ]

  },
  { "id": 15,
    pictures:"img/serv/service15.jpg",
    "title":"Прикладной анализ поведения (ABA)",
    "paraqraph": "Applied behavior analysis, ABA, или “Модификация поведения”. Основывается на идее, что любое поведение влечет за собой некоторые последствия, и если ребенку " +
    "последствия нравятся, он будет это поведение повторять, а если не нравятся, то не будет. При этом подходе все сложные навыки, включая речь, творческую игру, умение смотреть " +
    "в глаза, и др., разбиваются на мелкие блоки – действия (behaviors). Каждое действие разучивается с ребенком отдельно, затем действия соединяются в цепь, образуя сложное действие. " +
    "При разучивании действий ребенку дают задание, если он не может справиться один, дают подсказку, а затем вознаграждают правильные ответы и игнорируют неправильные. " +
    "    В арсенале АВА несколько сотен программ, среди них невербальная и вербальная имитация, общая и мелкая моторика, понимание языка, называние предметов, называние действий," +
    " классификация предметов   Конечная цель АВА – дать ребенку средства осваивать окружающий мир самостоятельно. " +
    "  Эта методика чрезвычайно действенна. По результатам Ивара Ловааса, основателя этой методики, примерно половина детей, получавших АВА, после окончания АВА может заниматься в " +
    "обычной школе. Из общего числа детей, получавших АВА, до 90% улучшают свое состояние.",
    paragraph2:[
      {list:'Наши специалисты предоставляют  комплексную помощь: от дифференциальной диагностики проблем развития и до построения  плана коррекции.' +
      'Наши программы коррекции поведения составляются индивидуально для каждого ребенка , c любыми проблемами от гиперактивности  и непослушности – до аутизма.'},
    ]

  },


];

class ServicePage{
  id: number;
  title:string;
  pictures:string;
  paraqraph:string;
  paragraph2:Paragraph2;
}
class ServicePage2{
  id: number;
  title:string;
  pictures:string;
  paraqraph:string;
  paragraph2:Paragraph2;
}
class Paragraph2{
  list: string;
}

@Component({
  selector: 'servicepage',
  templateUrl: './servicepage.component.html',

})
export class ServicepageComponent {
    id:number;
    pages=SERVICEPAGE;


}
