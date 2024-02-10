import { CharacterMap, Worker } from '@react-pdf-viewer/core';

import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

const characterMap: CharacterMap = {
    isCompressed: true,
    // The url has to end with "/"
    url: 'https://unpkg.com/pdfjs-dist@2.6.347/cmaps/',
};

export const Pdf: React.FC = () => {
    const pdf = "/pdf.pdf"
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer 
        fileUrl={pdf}
        characterMap={characterMap}
        />
        </Worker>
    );
};