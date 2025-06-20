
import React, { useState } from 'react';
import { Camera, MapPin, Award, Users, Upload, Target, Gift, User, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Dashboard from '@/components/Dashboard';
import MissionsScreen from '@/components/MissionsScreen';
import RewardsScreen from '@/components/RewardsScreen';
import ProfileScreen from '@/components/ProfileScreen';
import HelpScreen from '@/components/HelpScreen';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [userPoints, setUserPoints] = useState(1250);
  const [streakDays, setStreakDays] = useState(7);

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Users },
    { id: 'missions', label: 'Missions', icon: Target },
    { id: 'rewards', label: 'Rewards', icon: Gift },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'help', label: 'Help', icon: HelpCircle }
  ];

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <Dashboard userPoints={userPoints} onPointsEarned={(points) => setUserPoints(prev => prev + points)} />;
      case 'missions':
        return <MissionsScreen />;
      case 'rewards':
        return <RewardsScreen userPoints={userPoints} onPointsSpent={(points) => setUserPoints(prev => prev - points)} />;
      case 'profile':
        return <ProfileScreen userPoints={userPoints} streakDays={streakDays} />;
      case 'help':
        return <HelpScreen />;
      default:
        return <Dashboard userPoints={userPoints} onPointsEarned={(points) => setUserPoints(prev => prev + points)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 via-blue-50 to-green-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600/90 via-blue-600/90 to-green-600/90 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent drop-shadow-sm">
                  CleanUp Champion
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-full shadow-lg">
                <Award className="w-4 h-4 text-white" />
                <span className="text-white font-semibold">{userPoints.toLocaleString()} pts</span>
              </div>
              <Avatar 
                className="w-8 h-8 cursor-pointer ring-2 ring-white/50 hover:ring-4 hover:ring-pink-300 transition-all duration-300 shadow-lg"
                onClick={() => setCurrentScreen('profile')}
              >
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-to-br from-pink-400 to-purple-500 text-white font-bold">SJ</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-24">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-600/95 via-purple-600/95 to-pink-600/95 backdrop-blur-md border-t border-white/20 z-50 shadow-xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentScreen(item.id)}
                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-all duration-300 ${
                  currentScreen === item.id
                    ? 'text-white bg-white/20 scale-110 shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-105'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;
