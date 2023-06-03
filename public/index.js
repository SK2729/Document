import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { updateSampleSection } from './sample-base';
import { FileManagerComponent, Inject, NavigationPane, DetailsView, Toolbar, ContextMenu } from '@syncfusion/ej2-react-filemanager';
/**
 * File Manager sample with SQL service
 */
function SqlServer() {
    React.useEffect(() => {
        updateSampleSection();
    }, []);
    let hostUrl = "https://ng2jq.syncfusion.com/ej2-sql-service/";
    return (<div>
            <div className="control-section">
                <FileManagerComponent id="filemanager" ajaxSettings={{
            url: hostUrl + 'api/FileManager/Fileoperations',
            getImageUrl: hostUrl + 'api/FileManager/GetImage',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download'
        }} toolbarSettings={{ items: ['NewFolder', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'Selection', 'View', 'Details'] }} contextMenuSettings={{
            layout: ['SortBy', 'View', 'Refresh', '|', 'Paste', '|', 'NewFolder', '|', 'Details', '|', 'SelectAll']
        }}>
                <Inject services={[NavigationPane, DetailsView, Toolbar, ContextMenu]}/>
                </FileManagerComponent>
            </div>
        </div>);
}
export default SqlServer;

const root = createRoot(document.getElementById('sample'));
root.render(<SqlServer />);