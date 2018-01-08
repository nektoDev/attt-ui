import {Directive, ElementRef, Input, OnInit, Renderer} from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutoFocusDirective implements OnInit {

  private _autofocus;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    if (this._autofocus || typeof this._autofocus === 'undefined') {
      this.el.nativeElement.focus();
    }
  }

  @Input()
  set autofocus(condition: boolean) {
    this._autofocus = condition !== false;
  }
}
