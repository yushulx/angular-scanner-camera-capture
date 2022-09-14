import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ScannerCaptureComponent } from './scanner-capture/scanner-capture.component';
import { CameraCaptureComponent } from './camera-capture/camera-capture.component';
import { DocumentScannerComponent } from './document-scanner/document-scanner.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
      { path: 'scanner-capture', component: ScannerCaptureComponent },
      { path: 'camera-capture', component: CameraCaptureComponent },
      { path: 'document-scanner', component: DocumentScannerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
