export interface Product {
  id: string;
  name: string;
  description: string;
}

export const products = [
  {
    id: 'scanner-capture',
    name: 'Scanner Capture',
    description: 'Capture documents from scanner',
  },
  {
    id: 'camera-capture',
    name: 'Camera Capture',
    description: 'Capture documents from camera stream',
  },
  {
    id: 'document-scanner',
    name: 'Document Scanner',
    description: 'Scan documents from camera stream and do edge detection, perspective correction and image enhancement',
  },
];

