import { Component, OnInit } from '@angular/core';
import { NgxDocumentScannerService } from 'ngx-web-document-scanner';

@Component({
  selector: 'app-camera-capture',
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.css']
})
export class CameraCaptureComponent implements OnInit {
  constructor(private DocumentScannerService: NgxDocumentScannerService) {
  }

  ngOnInit(): void {
  }
}
