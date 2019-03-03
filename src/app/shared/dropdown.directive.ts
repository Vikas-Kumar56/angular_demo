import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class AppDropdown {

    @HostBinding('class.open') isOpen = false;
    @HostListener('click') onclick() {
        this.isOpen = !this.isOpen;
    }


}