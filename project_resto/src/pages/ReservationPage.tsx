import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';

const ReservationPage: React.FC = () => {
  const { t } = useLanguage();
  const { isAuthenticated } = useAuth();
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string>('19:00');
  const [guests, setGuests] = useState<number>(2);
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [availableTimes] = useState<string[]>([
    '17:00', '17:30', '18:00', '18:30', '19:00', 
    '19:30', '20:00', '20:30', '21:00', '21:30'
  ]);

  useEffect(() => {
    document.title = 'Gourmet Haven - ' + t('reservation.title');
  }, [t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation submission
    alert(t('reservation.success'));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('reservation.title')}</h1>
          <p className="text-gray-600 mb-8">{t('reservation.loginPrompt')}</p>
          <Link
            to="/login"
            className="inline-block px-6 py-3 bg-burgundy text-white rounded-md hover:bg-burgundy-dark transition-colors"
          >
            {t('nav.login')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('reservation.title')}</h1>
          <p className="text-gray-600">{t('reservation.subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar size={18} className="inline-block mr-2" />
                {t('reservation.date')}
              </label>
              <DatePicker
                selected={date}
                onChange={(date: Date) => setDate(date)}
                minDate={new Date()}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent"
                dateFormat="MMMM d, yyyy"
              />
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock size={18} className="inline-block mr-2" />
                {t('reservation.time')}
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent"
              >
                {availableTimes.map((timeSlot) => (
                  <option key={timeSlot} value={timeSlot}>
                    {timeSlot}
                  </option>
                ))}
              </select>
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users size={18} className="inline-block mr-2" />
                {t('reservation.guests')}
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'person' : 'people'}
                  </option>
                ))}
              </select>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare size={18} className="inline-block mr-2" />
                {t('reservation.specialRequests')}
              </label>
              <textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder={t('reservation.specialRequestsPlaceholder')}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-burgundy focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-burgundy text-white rounded-md py-3 px-4 hover:bg-burgundy-dark transition-colors"
            >
              {t('reservation.submitButton')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationPage;