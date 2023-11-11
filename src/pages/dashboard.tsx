import { useSession } from 'next-auth/react';

import { Inter } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';
import Welcome from './dashboard/welcome';
import FileUpload from './components/file-upload';
import Instruction from './dashboard/instruction';
import Predict from './dashboard/predict';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Dashboard() {
    const { data } = useSession();
    const [ startPrediction, setStartPrediction ] = useState(null);

    const getTrigger = (triggerValue) => {
        setStartPrediction(triggerValue);
    }
    
    return (
        <main
            className={`min-h-screen justify-center ${inter.className}`}
        >
            <div className="flex flex-col items-center">
                <div className="container ps-4 pr-4">
                    <Header data={data}/>
                    
                    <Welcome data={data}/>

                    <div className="grid grid-cols-6 gap-3">
                        <div className="col-span-6 md:col-span-2 p-3 text-gray-400">
                            <Instruction/>
                        </div>
                        <div className="col-span-6 md:col-span-4 p-3">
                            <div className="grid grid-cols-6 gap-2 min-h-full">
                                <div className="col-span-6 lg:col-span-3">
                                    <FileUpload fileData={getTrigger}/>
                                </div>
                                <div className="col-span-6 lg:col-span-3 rounded-md bg-slate-900 flex justify-center item-center flex-col">
                                    {startPrediction && (
                                        <Predict startPrediction={startPrediction}/>
                                    )}
                                    
                                    {!startPrediction && (
                                        <span className="text-center text-gray-600 text-sm">
                                            Please select a fundus retina image...
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer/>
                </div>
            </div>
        </main>
    );
}

