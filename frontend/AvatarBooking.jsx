import React, { useState, useEffect, useRef } from 'react';
import './AvatarBooking.css';

const AvatarBooking = () => {
  const [currentStep, setCurrentStep] = useState('welcome');
  const [language, setLanguage] = useState('en');
  const [avatarVideo, setAvatarVideo] = useState('');
  const [message, setMessage] = useState('');
  const [uid, setUid] = useState('');
  const [bookingData, setBookingData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const videoRef = useRef(null);
  const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:8000';

  useEffect(() => {
    // Generate UID and start flow
    const newUid = generateUID();
    setUid(newUid);
    startAvatarFlow(newUid);
  }, []);

  const generateUID = () => {
    return 'uid_' + Math.random().toString(36).substr(2, 9);
  };

  const startAvatarFlow = async (uid) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: 'book flight with avatar',
          uid: uid,
          language: language
        })
      });
      
      const data = await response.json();
      if (data.type === 'avatar_flow') {
        setCurrentStep(data.step);
        setAvatarVideo(data.avatar_video);
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error starting avatar flow:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const processStep = async (step, userInput) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_BASE}/avatar-step`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          uid: uid,
          step: step,
          user_input: userInput,
          language: language
        })
      });
      
      const data = await response.json();
      setCurrentStep(data.step);
      setAvatarVideo(data.avatar_video);
      setMessage(data.message);
      
      // Update booking data
      setBookingData(prev => ({ ...prev, [step]: userInput }));
    } catch (error) {
      console.error('Error processing step:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    startAvatarFlow(uid);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 'welcome':
        return (
          <div className="step-content">
            <h2>Welcome to Avatar-Guided Booking</h2>
            <div className="language-selector">
              <button onClick={() => handleLanguageChange('en')} 
                      className={language === 'en' ? 'active' : ''}>
                English
              </button>
              <button onClick={() => handleLanguageChange('hi')} 
                      className={language === 'hi' ? 'active' : ''}>
                हिंदी
              </button>
              <button onClick={() => handleLanguageChange('ta')} 
                      className={language === 'ta' ? 'active' : ''}>
                தமிழ்
              </button>
            </div>
            <button onClick={() => processStep('origin_selection', {})} 
                    className="next-btn">
              Start Booking
            </button>
          </div>
        );
        
      case 'origin_selection':
        return (
          <OriginSelection 
            onNext={(data) => processStep('destination_selection', data)}
            language={language}
          />
        );
        
      case 'destination_selection':
        return (
          <DestinationSelection 
            onNext={(data) => processStep('date_selection', data)}
            language={language}
          />
        );
        
      case 'date_selection':
        return (
          <DateSelection 
            onNext={(data) => processStep('passenger_selection', data)}
            language={language}
          />
        );
        
      case 'passenger_selection':
        return (
          <PassengerSelection 
            onNext={(data) => processStep('flight_search', data)}
            language={language}
          />
        );
        
      default:
        return <div>Step not implemented: {currentStep}</div>;
    }
  };

  return (
    <div className="avatar-booking">
      <div className="avatar-section">
        {avatarVideo && (
          <video 
            ref={videoRef}
            src={avatarVideo}
            autoPlay
            controls
            className="avatar-video"
          />
        )}
        <div className="avatar-message">
          {message}
        </div>
      </div>
      
      <div className="booking-section">
        {isLoading ? (
          <div className="loading">Processing...</div>
        ) : (
          renderStepContent()
        )}
      </div>
      
      <div className="navigation">
        <button onClick={() => window.history.back()} className="back-btn">
          Back
        </button>
        <button onClick={() => videoRef.current?.play()} className="replay-btn">
          Replay Video
        </button>
      </div>
    </div>
  );
};

// Step Components
const OriginSelection = ({ onNext, language }) => {
  const [city, setCity] = useState('');
  
  return (
    <div className="step-form">
      <h3>Select Departure City</h3>
      <input 
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter departure city"
      />
      <button onClick={() => onNext({ origin: city })} disabled={!city}>
        Next
      </button>
    </div>
  );
};

const DestinationSelection = ({ onNext, language }) => {
  const [city, setCity] = useState('');
  
  return (
    <div className="step-form">
      <h3>Select Destination City</h3>
      <input 
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter destination city"
      />
      <button onClick={() => onNext({ destination: city })} disabled={!city}>
        Next
      </button>
    </div>
  );
};

const DateSelection = ({ onNext, language }) => {
  const [date, setDate] = useState('');
  
  return (
    <div className="step-form">
      <h3>Select Travel Date</h3>
      <input 
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={new Date().toISOString().split('T')[0]}
      />
      <button onClick={() => onNext({ date: date })} disabled={!date}>
        Next
      </button>
    </div>
  );
};

const PassengerSelection = ({ onNext, language }) => {
  const [passengers, setPassengers] = useState({ adults: 1, children: 0, infants: 0 });
  
  return (
    <div className="step-form">
      <h3>Select Passengers</h3>
      <div className="passenger-counters">
        <div>
          <label>Adults:</label>
          <input 
            type="number"
            min="1"
            max="9"
            value={passengers.adults}
            onChange={(e) => setPassengers({...passengers, adults: parseInt(e.target.value)})}
          />
        </div>
        <div>
          <label>Children:</label>
          <input 
            type="number"
            min="0"
            max="4"
            value={passengers.children}
            onChange={(e) => setPassengers({...passengers, children: parseInt(e.target.value)})}
          />
        </div>
        <div>
          <label>Infants:</label>
          <input 
            type="number"
            min="0"
            max="4"
            value={passengers.infants}
            onChange={(e) => setPassengers({...passengers, infants: parseInt(e.target.value)})}
          />
        </div>
      </div>
      <button onClick={() => onNext({ passengers: passengers })}>
        Search Flights
      </button>
    </div>
  );
};

export default AvatarBooking;