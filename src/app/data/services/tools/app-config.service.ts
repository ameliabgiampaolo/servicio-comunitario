import {Injectable} from '@angular/core';

import JSON_ICONS from '../../json/icons.json';


@Injectable({
  providedIn: 'root'
})

export class AppConfig {
  public icons = JSON_ICONS;
}


