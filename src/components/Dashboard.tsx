
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
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
          Make a Difference Today!
        </h2>
        <p className="text-gray-700 text-lg font-medium">Clean up your neighborhood and earn rewards</p>
        
        <Button 
          size="lg"
          className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 hover:from-green-600 hover:via-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <Camera className="w-6 h-6 mr-2" />
          📸 Start CleanUp
        </Button>
      </div>

      {/* Quick Actions Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Quick Actions
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-100 border-2 border-blue-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer transform hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800">📤 Upload CleanUp</h4>
                  <p className="text-blue-600 text-sm">Share your cleanup photo</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-2 border-purple-200 hover:shadow-xl hover:border-purple-300 transition-all duration-300 cursor-pointer transform hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800">📍 Find Missions</h4>
                  <p className="text-purple-600 text-sm">Discover nearby spots</p>
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
