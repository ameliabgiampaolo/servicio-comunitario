import {Injectable} from '@angular/core';

import JSON_ICONS from '../../json/icons.json';
import JSON_SUBJECT from '../../json/subject.json';


@Injectable({
  providedIn: 'root'
})

export class AppConfig {
  public icons = JSON_ICONS;
  public subjects = JSON_SUBJECT;
}


