import React, {useCallback, useEffect, useState} from "react";
import { useDropzone } from "react-dropzone";

const FileDropzone = ({ fileState, setFileState}: 
    { fileState: File | null, 
      setFileState: React.Dispatch<React.SetStateAction<File | null>>,
    }
) => {

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFileState(acceptedFiles[0])
    }, []);
    const [preview, setPreview] = useState<string | null>(null);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop
    });

    useEffect(() => {
        if (!fileState) {
            setPreview(null); 
            return;
        }
        const objectUrl = URL.createObjectURL(fileState);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl)
    }, [fileState])
    return (
        <div {...getRootProps()}
        className="box-classic w-full p-20">
            <input {...getInputProps()}
            className=""/>
            { isDragActive ? 
                <p className="font-main">Drop the files here</p> :
              preview ?
                <img src={preview} alt="" /> : 
                <p>Drag n drop file here, or click to select files</p> 
            }
        </div>
    );
};

export default FileDropzone;