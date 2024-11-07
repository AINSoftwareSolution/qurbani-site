import React from 'react';
import Image from 'next/image';
import { QRImage } from '../utilis/Images';

const DonatePage = () => {
    return (
        <div className="bg-green-900 min-h-screen flex items-center justify-center">
            <div className="text-center flex flex-col items-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Thank You for Your Donation!
                </h1>
                <div className="mb-4 ">
                    <Image 
                        src={QRImage} 
                        className="w-50 h-auto" 
                        alt="qrcode" 
                    />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Scan the QR Code to Complete Your Donation
                </h2>
            </div>
        </div>
    );
};

export default DonatePage;
