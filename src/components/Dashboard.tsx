
import React from 'react';
import { Camera, MapPin, Upload, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RecentCleanups from '@/components/RecentCleanups';
import WeeklyLeaderboard from '@/components/WeeklyLeaderboard';

interface DashboardProps {
  userPoints: number;
  onPointsEarned: (points: number) => void;
}

const Dashboard = ({ userPoints, onPointsEarned }: DashboardProps) => {
  return (
    <div className="space-y-6">
      {/* Main Section */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Make a Difference Today!</h2>
        <p className="text-gray-600 text-lg">Clean up your neighborhood and earn rewards</p>
        
        <Button 
          size="lg"
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Camera className="w-6 h-6 mr-2" />
          📸 Start CleanUp
        </Button>
      </div>

      {/* Quick Actions Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Quick Actions</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-white/70 backdrop-blur-sm border-green-100 hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Upload className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">📤 Upload CleanUp</h4>
                  <p className="text-gray-600 text-sm">Share your cleanup photo</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-green-100 hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">📍 Find Missions</h4>
                  <p className="text-gray-600 text-sm">Discover nearby spots</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Weekly Leaderboard */}
      <WeeklyLeaderboard currentUserPoints={userPoints} />

      {/* Recent CleanUps */}
      <RecentCleanups />
    </div>
  );
};

export default Dashboard;
