import { Component, OnInit } from '@angular/core';
import { NgxDocumentScannerService } from 'ngx-web-document-scanner';

@Component({
  selector: 'app-scanner-capture',
  templateUrl: './scanner-capture.component.html',
  styleUrls: ['./scanner-capture.component.css']
})
export class ScannerCaptureComponent implements OnInit {
  constructor(private DocumentScannerService: NgxDocumentScannerService) {
  }

  ngOnInit(): void {
  }
}
