import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-novenyek',
  templateUrl: './novenyek.component.html',
  styleUrls: ['./novenyek.component.css']
})
export class NovenyekComponent {
  novenyek: any = []
  constructor(private base: BaseService) {
    this.base.getPlants().snapshotChanges().pipe(
      map(
        (changes: any) => changes.map(
          (c: any) => ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(
      adatok => this.novenyek = adatok
    )
  }
}
