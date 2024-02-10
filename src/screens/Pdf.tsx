import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import ToolbarSlotsExample from '../utils/GenPdf';


export const Pdf: React.FC = () => {
    const pdf = "/pdf.pdf"
    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            < ToolbarSlotsExample fileUrl={pdf} />
        </Worker>
    );
};