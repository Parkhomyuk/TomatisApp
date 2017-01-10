import { Component } from '@angular/core';
import {SERVICEPAGE} from "../content/service_page_1"
import {ServicePage} from "../content/servicePage"
import {Paragraph2} from "../content/paragraph2"
 

@Component({
  selector: 'servicepage',
  templateUrl: './servicepage.component.html',

})
export class ServicepageComponent {
    id:number;
    pages=SERVICEPAGE;


}
