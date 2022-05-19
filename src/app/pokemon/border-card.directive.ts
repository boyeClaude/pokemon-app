import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appBorderCard]",
})
export class BorderCardDirective {
  private initialColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";
  private defaultHeight: number = 180;

  @Input() appBorderCard!: string;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.setBorder(this.appBorderCard || this.defaultColor);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    let border = `4px solid ${color} `;
    this.el.nativeElement.style.border = border;
  }
}
