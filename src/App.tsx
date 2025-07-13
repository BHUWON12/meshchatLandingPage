import React, { useState } from 'react';
import { 
  Download, 
  Wifi, 
  WifiOff, 
  Shield, 
  Smartphone, 
  Users, 
  Mountain, 
  Truck, 
  Home,
  RefreshCw,
  Bluetooth,
  Database,
  Zap,
  Navigation,
  Clock,
  Radio,
  Rocket,
  Feather,
  Signal,
  Settings,
  X,
  CheckCircle
} from 'lucide-react';

function App() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmDownload = () => {
    try {
      setIsDownloading(true);
      setShowConfirmation(false);
      setDownloadError(false);
      
      // Direct download URL from Google Drive
      const downloadUrl = "https://drive.usercontent.google.com/download?id=1OzLVzx35dFZ3b59c89-yoF-pvHytSWZ7&export=download&authuser=0";
      
      // Create a temporary link element for direct download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'MeshChat.apk';
      link.style.display = 'none';
      
      // Add to DOM, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Reset downloading state
      setTimeout(() => {
        setIsDownloading(false);
      }, 2000);
      
    } catch (error) {
      console.error('Download error:', error);
      setIsDownloading(false);
      setDownloadError(true);
    }
  };

  const handleCancelDownload = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="bg-white text-gray-800 leading-relaxed font-sans">
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Confirm Download</h3>
              <button
                onClick={handleCancelDownload}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to download MeshChat? This will start the download immediately.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleCancelDownload}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDownload}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Download Error Notification */}
      {downloadError && (
        <div className="fixed top-4 right-4 bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg z-50 max-w-sm">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <X className="w-5 h-5 text-red-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-red-800">Download Issue</h3>
              <p className="text-sm text-red-700 mt-1">
                The file might be private. Please make sure the Google Drive file is set to "Anyone with the link can view".
              </p>
              <button
                onClick={() => setDownloadError(false)}
                className="text-red-600 hover:text-red-800 text-sm font-medium mt-2"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header Section */}
      <header className="bg-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl font-bold">MC</span>
            </div>
          </div>
          
          {/* Title and Subtitle */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">MeshChat</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Communicate anywhere, anytime — even without the internet.
          </p>
          
          {/* Download Button */}
          <button 
            onClick={handleDownloadClick}
            disabled={isDownloading}
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
          >
            {isDownloading ? (
              <>
                <RefreshCw className="w-6 h-6 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
            <Download className="w-6 h-6" />
            Download Now
              </>
            )}
          </button>
        </div>
      </header>

      {/* The Problem Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Problem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                <WifiOff className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inconsistent Communication</h3>
              <p className="text-gray-600">Remote areas suffer from unreliable or no internet connectivity, making communication challenging.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg mb-4">
                <Zap className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Emergency Breakdowns</h3>
              <p className="text-gray-600">Offline contact is vital during emergencies but current solutions don't support it.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <RefreshCw className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">No Hybrid Solution</h3>
              <p className="text-gray-600">No app seamlessly supports both online and offline messaging modes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Who It's For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Mountain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Rural Residents</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mx-auto mb-4">
                <Truck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold">Emergency Responders</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Mountain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Adventure Travelers</h3>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                <Home className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold">Rural Communities</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Solution</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg flex-shrink-0">
                <RefreshCw className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Hybrid Chat</h3>
                <p className="text-gray-600">Automatically switches between online and offline modes seamlessly.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg flex-shrink-0">
                <RefreshCw className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Auto-Sync Messages</h3>
                <p className="text-gray-600">All offline messages sync automatically when internet connection returns.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg flex-shrink-0">
                <Bluetooth className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Multiple Protocols</h3>
                <p className="text-gray-600">Uses Bluetooth and Wi-Fi Direct for reliable offline communication.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-lg flex-shrink-0">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Secure & Fast</h3>
                <p className="text-gray-600">AES-128 encrypted, lightweight, and optimized for speed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-xl border border-green-200">
              <div className="flex items-center mb-6">
                <Wifi className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-700">Online Mode</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Smartphone className="w-4 h-4 mr-2 text-green-600" />
                  React Native (Frontend)
                </li>
                <li className="flex items-center">
                  <Database className="w-4 h-4 mr-2 text-green-600" />
                  Node.js + Express (Backend)
                </li>
                <li className="flex items-center">
                  <Database className="w-4 h-4 mr-2 text-green-600" />
                  MongoDB (Database)
                </li>
                <li className="flex items-center">
                  <Shield className="w-4 h-4 mr-2 text-green-600" />
                  AES-128 Encryption
                </li>
                <li className="flex items-center">
                  <Zap className="w-4 h-4 mr-2 text-green-600" />
                  Socket.io for real-time
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
              <div className="flex items-center mb-6">
                <WifiOff className="w-8 h-8 text-gray-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-700">Offline Mode</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <Database className="w-4 h-4 mr-2 text-gray-600" />
                  SQLite for local storage
                </li>
                <li className="flex items-center">
                  <Bluetooth className="w-4 h-4 mr-2 text-gray-600" />
                  Bluetooth + Wi-Fi Direct
                </li>
                <li className="flex items-center">
                  <Navigation className="w-4 h-4 mr-2 text-gray-600" />
                  SQLAlchemy routing cache
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gray-600" />
                  TTL-based loop protection
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Unique Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Makes It Unique</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <Navigation className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Intelligent Routing</h3>
              <p className="text-gray-600 text-sm">ID-based routing system for efficient message delivery.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Loop Protection</h3>
              <p className="text-gray-600 text-sm">TTL prevents message looping and network congestion.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Encrypted Offline</h3>
              <p className="text-gray-600 text-sm">Full encryption even in offline mesh networks.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4">
                <Radio className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">LORA Ready</h3>
              <p className="text-gray-600 text-sm">LORA mesh integration coming soon for extended range.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Impact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Real-World Impact</h2>
          <div className="bg-green-50 p-8 rounded-xl border-l-4 border-green-600">
            <div className="space-y-4 text-lg text-gray-700">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p><strong>Ensures communication in disaster zones</strong> when traditional networks fail</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p><strong>Bridges internet gaps in rural areas</strong> with reliable mesh networking</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p><strong>Enables casual offline chats</strong> without any network dependency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                <Rocket className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Stable Real-time Backend</h3>
                <p className="text-gray-600">Built with Socket.io for reliable real-time communication.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg flex-shrink-0">
                <Feather className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Lightweight & Mobile-First</h3>
                <p className="text-gray-600">Optimized for mobile devices with minimal resource usage.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg flex-shrink-0">
                <Signal className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fully Offline-Capable</h3>
                <p className="text-gray-600">Complete functionality without any internet connection.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-lg flex-shrink-0">
                <Settings className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Modular Architecture</h3>
                <p className="text-gray-600">Built for future upgrades and feature expansions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">
            Thank you for exploring MeshChat! Built with ❤️ by the MeshChat team.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;