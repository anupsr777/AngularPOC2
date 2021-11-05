import { Component, ElementRef, Output, ViewChild,EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.css']
})
export class WellComponent {
  @ViewChild('nameinput') nameinput : ElementRef<any> | undefined;
  @ViewChild('typeinput') typeinput : ElementRef<any> | undefined;
  @ViewChild('srcinput') srcinput : ElementRef<any> | undefined;
  @Output() emitData:any = new EventEmitter<any>();
  srckey:boolean = true;
  constructor(private fb: FormBuilder) { 
  }
  
    wellForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      sourcekey: new FormControl({value: '10001', disabled: true}),
    });
  addWell():void{
      let addWell:any={
         name:this.nameinput?.nativeElement.value,
         type:this.typeinput?.nativeElement.value,
         source:this.srcinput?.nativeElement.value
      }
      this.emitData.emit(addWell);
  }

}
