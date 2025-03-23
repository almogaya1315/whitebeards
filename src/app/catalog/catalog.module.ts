import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CatalogComponent } from "./catalog.component";
import { CatalogRepositoryService } from "./catalog-repository.service";
import { SharedModule } from "../Shared/shared.module";
import { FilterClassesService } from "./filter-classes.service";
import { EnrollComponent } from './enroll.component';

@NgModule({
        imports: [SharedModule, RouterModule],
        declarations: [CatalogComponent, EnrollComponent],
        exports: [],
        providers: [CatalogRepositoryService, FilterClassesService]
})
export class CatalogModule {};