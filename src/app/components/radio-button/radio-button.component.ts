import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  EventEmitter,
  NO_ERRORS_SCHEMA,
  OnInit,
  Output,
  QueryList,
} from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { Label } from "@nativescript/core";

@Directive({ selector: "[radioButtonText]", standalone: true })
export class RadioButtonTextDirective {}

@Component({
  selector: "ns-radio-button",
  templateUrl: "radio-button.component.html",
  styleUrls: ["./radio-button.component.css"],
  standalone: true,
  imports: [NativeScriptCommonModule, RadioButtonTextDirective],
  schemas: [NO_ERRORS_SCHEMA],
})
export class RadioButtonComponent implements OnInit, AfterViewInit {
  checked = false;

  @ContentChildren(RadioButtonTextDirective) radioButtonText: QueryList<Label>;

  @Output() onTap = new EventEmitter<boolean>();

  ngOnInit() {}

  ngAfterViewInit(): void {}

  toggleButton() {
    this.checked = !this.checked;
    this.onTap.emit(this.checked);
  }
}
