import { Component, OnInit } from '@angular/core';
import { NgxDocumentScannerService } from 'ngx-web-document-scanner';

@Component({
  selector: 'app-document-scanner',
  templateUrl: './document-scanner.component.html',
  styleUrls: ['./document-scanner.component.css']
})
export class DocumentScannerComponent implements OnInit {

  constructor(private DocumentScannerService: NgxDocumentScannerService) {
  }

  ngOnInit(): void {
  }

}
