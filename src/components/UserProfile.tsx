
import React from 'react';
import { Award, Calendar, MapPin, Target, Trophy, Flame, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserProfileProps {
  userPoints: number;
  streakDays: number;
}

const UserProfile = ({ userPoints, streakDays }: UserProfileProps) => {
  const achievements = [
    { name: "First Cleanup", description: "Complete your first cleanup", earned: true, icon: "🌟" },
    { name: "Week Warrior", description: "7-day cleanup streak", earned: true, icon: "🔥" },
    { name: "Community Hero", description: "50 cleanups completed", earned: false, icon: "🦸" },
    { name: "Dustbin Guardian", description: "Install 3 dustbins", earned: false, icon: "🗑️" },
    { name: "Nature Protector", description: "Clean 10 natural areas", earned: true, icon: "🌲" },
    { name: "Beach Cleaner", description: "Clean 5 beach locations", earned: false, icon: "🏖️" }
  ];

  const stats = [
    { label: "Total Cleanups", value: "23", icon: Trophy },
    { label: "Areas Cleaned", value: "18", icon: MapPin },
    { label: "Dustbins Installed", value: "2", icon: Target },
    { label: "Days Active", value: "45", icon: Calendar }
  ];

  const nextLevel = 1500;
  const progress = (userPoints / nextLevel) * 100;

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20 border-4 border-white/20">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-white/20 text-white text-lg">JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-white/80">Cleanup Hero since March 2024</p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold">{userPoints.toLocaleString()} points</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Flame className="w-4 h-4" />
                  <span className="font-semibold">{streakDays} day streak</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Level Progress */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-white/80">Level 3 Cleanup Hero</span>
              <span className="text-white/80">{userPoints}/{nextLevel} points</span>
            </div>
            <Progress value={progress} className="h-2 bg-white/20" />
            <p className="text-white/60 text-sm">{nextLevel - userPoints} points to Level 4</p>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-white/70 backdrop-blur-sm border-green-100">
            <CardContent className="p-4 text-center">
              <stat.icon className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievements */}
      <Card className="bg-white/70 backdrop-blur-sm border-green-100">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div 
                key={achievement.name}
                className={`p-4 rounded-lg border-2 transition-all ${
                  achievement.earned 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{achievement.name}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  {achievement.earned && (
                    <Badge className="bg-green-100 text-green-700">Earned</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card className="bg-white/70 backdrop-blur-sm border-green-100">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "Completed cleanup at Central Park", points: 150, time: "2 hours ago" },
              { action: "Installed dustbin at Beach Boulevard", points: 300, time: "1 day ago" },
              { action: "Completed Nature Guardian challenge", points: 200, time: "2 days ago" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <div className="flex items-center space-x-1 text-green-600">
                  <Award className="w-4 h-4" />
                  <span className="font-semibold">+{activity.points}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
