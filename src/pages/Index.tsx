
import React, { useState } from 'react';
import { Camera, MapPin, Award, Users, Trash2, Plus, Heart, MessageCircle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PhotoUpload from '@/components/PhotoUpload';
import CleanupFeed from '@/components/CleanupFeed';
import UserProfile from '@/components/UserProfile';
import Leaderboard from '@/components/Leaderboard';
import LocationChallenges from '@/components/LocationChallenges';

const Index = () => {
  const [currentTab, setCurrentTab] = useState('feed');
  const [userPoints, setUserPoints] = useState(1250);
  const [streakDays, setStreakDays] = useState(7);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  CleanUp Hero
                </h1>
                <p className="text-sm text-gray-600">Making the world cleaner, one spot at a time</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-orange-100 px-3 py-1.5 rounded-full">
                <span className="text-orange-600 font-semibold">🔥 {streakDays}</span>
                <span className="text-orange-600 text-sm">day streak</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1.5 rounded-full">
                <Award className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-semibold">{userPoints.toLocaleString()}</span>
              </div>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-green-200 text-green-700">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-6 bg-white/70 backdrop-blur-sm">
            <TabsTrigger value="feed" className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Feed</span>
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center space-x-1">
              <Camera className="w-4 h-4" />
              <span className="hidden sm:inline">Upload</span>
            </TabsTrigger>
            <TabsTrigger value="challenges" className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Challenges</span>
            </TabsTrigger>
            <TabsTrigger value="leaderboard" className="flex items-center space-x-1">
              <Award className="w-4 h-4" />
              <span className="hidden sm:inline">Rankings</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Profile</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            <CleanupFeed />
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <PhotoUpload onPointsEarned={(points) => setUserPoints(prev => prev + points)} />
          </TabsContent>

          <TabsContent value="challenges" className="space-y-6">
            <LocationChallenges />
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Leaderboard currentUserPoints={userPoints} />
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <UserProfile userPoints={userPoints} streakDays={streakDays} />
          </TabsContent>
        </Tabs>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          onClick={() => setCurrentTab('upload')}
          size="lg"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

export default Index;
