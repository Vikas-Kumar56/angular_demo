import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class Header {

    @Output() selectedItem = new EventEmitter<string>();
    onSelect(selectedValue: string) {
        this.selectedItem.emit(selectedValue);
    }
}