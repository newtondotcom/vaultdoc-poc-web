import { FileContextMenu, FileNavbar, FileToolbar, FullFileBrowser, FileList,ChonkyIconName, FileData,defineFileAction } from '@aperturerobotics/chonky'
import { ChonkyIconFA } from '@aperturerobotics/chonky-icon-fontawesome'

export function FileExplorer() {
    const myFile: FileData = {
        id: 'zxc',
        name: 'My File.pdf',
        icon: ChonkyIconName.pdf, // <----
    };
    const myAction = defineFileAction({
        id: 'my_action',
        button: {
            name: 'Run My Action',
            toolbar: true,
            icon: ChonkyIconName.flash, // <----
        },
    });
    const files = [
        { id: 'lht', name: 'Projects', isDir: true },
        {
            id: 'mcd',
            name: 'chonky-sphere-v2.png',
            thumbnailUrl: 'https://chonky.io/chonky-sphere-v2.png',
        },
    ];
    const folderChain = [{ id: 'xcv', name: 'Demo', isDir: true, openable : true },{ id: 'lht', name: 'Projects', isDir: true }];
    return (
        <div className='h-full w-full'>
            <FullFileBrowser 
                files={files}
                folderChain={folderChain} 
                darkMode={true}
                iconComponent={ChonkyIconFA}
                disableDragAndDrop={false}
            >
                <FileNavbar />
                <FileToolbar />
                <FileList />
                <FileContextMenu />
            </FullFileBrowser>
        </div>
    );
}
