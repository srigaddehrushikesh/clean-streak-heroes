
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  CleanUp Champion
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-semibold">{userPoints.toLocaleString()} pts</span>
              </div>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-green-200 text-green-700">SJ</AvatarFallback>
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
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-green-100 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentScreen(item.id)}
                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                  currentScreen === item.id
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-500 hover:text-green-600'
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
