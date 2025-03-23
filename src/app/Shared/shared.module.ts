import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoadingSpinnerComponent } from "./loading-spinner.component";


@NgModule({
        imports: [CommonModule],
        declarations: [LoadingSpinnerComponent],
        exports: [LoadingSpinnerComponent, CommonModule],
        // when other modules import the shared module, the LoadingSpinnerComponent & CommonModule will be available
        providers: []
})
export class SharedModule {};