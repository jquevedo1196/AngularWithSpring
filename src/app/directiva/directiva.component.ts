import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {
  listaCurso: string[] = ['TypeScrip', 'JavaScript', 'Java SE', 'C#', 'Angular'];
  habilitar = true;
  constructor() { }
  setHabilitar(): void {
    this.habilitar = this.habilitar == true ? false : true;
  }
}
