import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin, ToolbarSlot } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import Share from '../ui/Share';
import Back from '../ui/Back';

interface ToolbarSlotsExampleProps {
    fileUrl: string;
}

const ToolbarSlotsExample: React.FC<ToolbarSlotsExampleProps> = ({ fileUrl }) => {
    const [width, setWidth] = React.useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    React.useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    let supportFileShare : boolean = false;
    if (navigator.canShare && navigator.canShare({ files: [          
        new File(["Hello, world!"], "hello world.txt", {
        type: "text/plain",
      }),] })) {
        supportFileShare = true;
    }

    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;

    return (
        <div
            className="rpv-core__viewer"
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                position: 'relative',
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#eeeeee',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    padding: '4px',
                }}
            >
                <Toolbar>
                    {(props: ToolbarSlot) => {
                        const {
                            CurrentPageInput,
                            Download,
                            EnterFullScreen,
                            //GoToNextPage,
                            //GoToPreviousPage,
                            NumberOfPages,
                            Print,
                            Zoom,
                            ZoomIn,
                            ZoomOut,
                        } = props;

                        /*
                                <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                                    <GoToPreviousPage />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <GoToNextPage />
                                </div>

                        */
                        return (
                            <>
                                <div style={{ padding: '0px 2px' }}>
                                    <Back isMobile={isMobile} />
                                </div>
                                {isMobile ? "" :
                                <div style={{ padding: '0px 2px' }}>
                                    <ZoomOut />
                                </div>
                                }
                                <div style={{ padding: '0px 2px' }}>
                                    <Zoom />
                                </div>
                                {isMobile ? "" :
                                <div style={{ padding: '0px 2px' }}>
                                    <ZoomIn />
                                </div>
                                }
                                <div style={{ padding: '0px 2px', width: '2rem' }}>
                                    <CurrentPageInput />
                                </div>
                                <div style={{ padding: '0px 2px', color: "black" }}>
                                    / <NumberOfPages />
                                </div>
                                <div style={{ padding: '0px 2px', marginLeft:'auto', marginRight:'auto' }}>
                                    <Share isMobile={isMobile} supportFileShare={supportFileShare} />
                                </div>
                                {isMobile ? "" :
                                <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                                    <EnterFullScreen />
                                </div>
                                }
                                <div style={{ padding: '0px 2px' }}>
                                    <Download />
                                </div>
                                <div style={{ padding: '0px 2px' }}>
                                    <Print />
                                </div>
                            </>
                        );
                    }}
                </Toolbar>
            </div>
            <div
                style={{
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                <Viewer fileUrl={fileUrl} plugins={[toolbarPluginInstance]} />
            </div>
        </div>
    );
};

export default ToolbarSlotsExample;