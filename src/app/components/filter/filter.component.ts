import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FilterBy } from '../../models/task.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{
  @Input() filters: string[] = [];
  @Output() filterChange = new EventEmitter<string>();

  filterForm = this.fb.group({
    filterItem: ['']
  });

  constructor(
    private fb: FormBuilder,
  ) {}
  
  ngOnInit(): void {
    this.filterForm.get('filterItem')?.setValue(this.filters[0]);
  }

  onChangeFilter() {
    const filterItem = this.filterForm.get('filterItem')?.value ?? FilterBy.ALL;

    this.filterChange.emit(filterItem);
  }
}
