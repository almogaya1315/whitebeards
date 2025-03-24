import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { UserRepositoryService } from "../services/user-repository.service"
import { CatalogRepositoryService } from './catalog-repository.service';
import { IClass } from './class.model';
import { FilterClassesService } from './filter-classes.service';

@Component({
  styleUrls: ['./catalog.component.css'],
  templateUrl: './catalog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
  // Angular will only do comparisons to objects references, not to every one of the object's props
  // And instead change detection firing for every browser event, OnPush fires when input refernces change,
  // Or when an async observable fires an event, and in few other cases.
})
export class CatalogComponent implements OnInit { //OnChanges
  classes: IClass[] = [];
  visibleClasses: IClass[] = [];
  orderByField: string = '';

  constructor(public userRepo: UserRepositoryService, 
              private catalogRepo: CatalogRepositoryService, 
              private filterSvc: FilterClassesService) { }

  ngOnInit() {
    this.catalogRepo.getCatalog()
      .subscribe((classes: IClass[]) => { this.classes = classes; this.applyFilter('') });
  }

  //ngOnChanges(changes: SimpleChanges): void {}

  // enroll(classToEnroll: IClass) {
  //   classToEnroll.processing = true;
  //   this.userRepo.enroll(classToEnroll.classId)
  //     .subscribe({
  //       error: (err) => { console.error(err); classToEnroll.processing = false },
  //       complete: () => { classToEnroll.processing = false; classToEnroll.enrolled = true; },
  //     });
  // }

  // drop(classToDrop: IClass) {
  //   classToDrop.processing = true;
  //   this.userRepo.drop(classToDrop.classId)
  //     .subscribe({
  //       error: (err) => { console.error(err); classToDrop.processing = false },
  //       complete: () => { classToDrop.processing = false; classToDrop.enrolled = false; }
  //     });
  // }

  applyFilter(filter: string) {
    this.visibleClasses = this.filterSvc.filterClasses(filter, this.classes);
  }
}
