import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../entities';

@Component({
  selector: 'app-room-item',
  templateUrl: './room-item.component.html',
  styleUrls: ['./room-item.component.css']
})
export class RoomItemComponent {
  @Input({required:true})
  room:Room;
  @Output()
  delete = new EventEmitter<Room>();

  toggleOpen() {
    this.room.opened = !this.room.opened;
  }

  buttonClick() {
    this.delete.emit(this.room);
  }
}
