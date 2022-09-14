import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScannerCaptureComponent } from './scanner-capture/scanner-capture.component';
import { CameraCaptureComponent } from './camera-capture/camera-capture.component';
import { DocumentScannerComponent } from './document-scanner/document-scanner.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgxDocumentScannerModule } from 'ngx-web-document-scanner';

@NgModule({
  declarations: [
    AppComponent,
    ScannerCaptureComponent,
    CameraCaptureComponent,
    DocumentScannerComponent,
    ProductListComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDocumentScannerModule.forRoot({ 
      licenseKey: "t01529gIAAIGHmfSo/qdMWQ5slm6TDyCI+vx2zTkVYuuBJyIn1jAxUGeIsZwB7Oma+DoyPk4NTxMg7XAMQb+PjbuYU3fGposwN1JzowgMlibqXsmm4oxu4NYAO4AvcgTtli9w5/s0quCAZoAJaN34Ac5DfnqlQUgPNANMwHlIB4JOVnum8iRk7SElBJoBJqCHdGAqGIUzX1rpmp0=", 
      resourcePath: "assets/dynamic-web-twain"}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
