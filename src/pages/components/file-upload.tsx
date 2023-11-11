import { useState } from "react";
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { PlayIcon, TrashIcon } from '@heroicons/react/24/solid';
import Image  from 'next/image';

export default function FileUpload({ fileData }) {
    const [selectedImage, setSelectedImage] = useState();

    const imageChange = (e:any) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    const removeSelectedImage = () => {
        setSelectedImage();
        fileData(false);
    };

    const sendFileData = () => {
        fileData(true);
    }

    return (
        <>
            <div className="flex justify-center flex-col items-center p-3 rounded-md bg-slate-900 min-h-full">
                {!selectedImage && (
                    <>
                        <div className="w-px-50 h-px-50 mb-3">
                            <CloudArrowUpIcon className="h-10 w-10 text-blue-500 animate-bounce"/>
                        </div>
                        <label htmlFor="retina-image" className="cursor-pointer text-sm bg-blue-500 ps-4 pt-2 pe-4 pb-2 rounded-md">
                            Browse Image
                            <input className="hidden" type="file" id="retina-image" accept=".jpeg" onChange={imageChange}/>
                        </label>
                    </>
                )}

                {selectedImage && (
                    <>
                        <h1 className='text-1xl font-semibold text-center mb-3'>Image Preview</h1>
                        <Image
                            src={URL.createObjectURL(selectedImage)}
                            alt="Retina Image"
                            className="mb-3"
                            width={224}
                            height={224}
                            id="predict-image"
                        />
                    </>
                )}

                {selectedImage && (
                    <div className="flex justify-center">
                        <button onClick={sendFileData} className="text-sm bg-blue-500 ps-4 pt-2 pe-4 pb-2 rounded-l-md w-32">
                            Predict <PlayIcon className="h-4 w-4 inline-block"/>
                        </button>
                        <button onClick={removeSelectedImage} className="text-sm bg-rose-500 ps-4 pt-2 pe-4 pb-2 rounded-r-md w-32">
                            Remove <TrashIcon className="h-4 w-4 inline-block"/>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}