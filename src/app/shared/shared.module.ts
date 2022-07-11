import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [ChildComponent],
  imports: [CommonModule],
  exports: [ChildComponent],
})
export class SharedModule {}
