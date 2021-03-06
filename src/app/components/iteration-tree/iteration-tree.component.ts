import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  SimpleChange
} from '@angular/core';
import { IterationListEntryComponent } from '../iteration-list-entry/iteration-list-entry.component'
import { IterationModel } from '../../models/iteration.model';

@Component({
    selector: 'iteration-tree',
    templateUrl: './iteration-tree.component.html',
})

export class IterationTreeComponent {

  //using any as we are adding showChildren parameter
  @Input() iterationList: any[] = [];
  @Input() collection: any;
  @Input() witGroup: string = '';

  @Output() onEditIteration = new EventEmitter<IterationModel>();
  @Output() onCloseIteration = new EventEmitter<IterationModel>();
  @Output() onCreateIteration = new EventEmitter<IterationModel>();
  @Output() onSelectIteration = new EventEmitter<IterationModel>();

  editIteration(iteration) {
    this.onEditIteration.emit(iteration);
  }

  closeIteration(iteration) {
    this.onCloseIteration.emit(iteration);
  }

  createIteration(iteration) {
    this.onCreateIteration.emit(iteration);
  }

  selectIteration(iteration) {
    this.onSelectIteration.emit(iteration);
  }
}
