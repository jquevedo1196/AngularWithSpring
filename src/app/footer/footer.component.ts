import {Component} from '@angular/core';

@Component({
  templateUrl: './footer.component.html',
  selector: 'app-footer',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public autor: any = {nombre:'Jesús', apellido:'Quevedo'};
}
