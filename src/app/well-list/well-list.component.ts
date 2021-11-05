import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { WellComponent } from '../well/well.component';
@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.css']
})
export class WellListComponent{
  @ViewChild(WellComponent) wellss:any;
  wells:any = [
               {'name':'test','type':'esp','source':'10001'},
               {'name':'test1','type':'rlx','source':'10002'},
               {'name':'test2','type':'esp','source':'10001'},
               {'name':'test1','type':'rlx','source':'10003'}
              ];

  constructor() {}

  addData(data:any):void{
    this.wells.push(data);
  }

  passData(well:any):void{
    this.wellss.nameinput.nativeElement.value = "";
    this.wellss.typeinput.nativeElement.value = "";
    this.wellss.srcinput.nativeElement.value = well.source;
  }

}
