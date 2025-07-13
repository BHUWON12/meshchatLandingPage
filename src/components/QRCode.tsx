import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QRCodeProps {
  url: string;
  size?: number;
  className?: string;
}

const QRCodeComponent: React.FC<QRCodeProps> = ({ url, size = 128, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const generateQRCode = async () => {
      if (canvasRef.current) {
        try {
          await QRCode.toCanvas(canvasRef.current, url, {
            width: size,
            margin: 2,
            color: {
              dark: '#1C8A4C', // MeshChat green
              light: '#FFFFFF'
            }
          });
        } catch (error) {
          console.error('Error generating QR code:', error);
        }
      }
    };

    generateQRCode();
  }, [url, size]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <canvas
        ref={canvasRef}
        className="border-2 border-gray-200 rounded-lg shadow-sm"
        style={{ width: size, height: size }}
      />
      <p className="text-sm text-gray-500 mt-2 text-center">
        Scan to download MeshChat
      </p>
    </div>
  );
};

export default QRCodeComponent; 