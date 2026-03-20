import React, { useState } from 'react';

const App = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const fileSelectedHandler = event => {
        setSelectedFile(event.target.files[0]);
    };

    const fileUploadHandler = () => {
        // Handle file upload
    };

    return (
        <div>
            <h1>Upload Your Image</h1>
            <input type="file" onChange={fileSelectedHandler} />
            <button onClick={fileUploadHandler}>Upload</button>
            {selectedFile && <p>Selected file: {selectedFile.name}</p>}
        </div>
    );
};

export default App;