
import React from 'react';
import { Award, Edit, Share, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProfileScreenProps {
  userPoints: number;
  streakDays: number;
}

const ProfileScreen = ({ userPoints, streakDays }: ProfileScreenProps) => {
  const userData = {
    name: "Sarah Johnson",
    username: "@sarah_cleanup",
    points: userPoints,
    cleanupsCompleted: 23,
    rewardsRedeemed: 5,
    profilePic: "/placeholder.svg"
  };

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-24 h-24 border-4 border-white/20">
              <AvatarImage src={userData.profilePic} />
              <AvatarFallback className="bg-white/20 text-white text-2xl">SJ</AvatarFallback>
            </Avatar>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold">{userData.name}</h2>
              <p className="text-white/80">{userData.username}</p>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <Share className="w-4 h-4 mr-2" />
                Share Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-white/70 backdrop-blur-sm border-green-100">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-800">{userData.points.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Points</p>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-green-100">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl">🧹</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{userData.cleanupsCompleted}</p>
            <p className="text-sm text-gray-600">CleanUps Completed</p>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-green-100">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl">🎁</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{userData.rewardsRedeemed}</p>
            <p className="text-sm text-gray-600">Rewards Redeemed</p>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-green-100">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl">🔥</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{streakDays}</p>
            <p className="text-sm text-gray-600">Day Streak</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-white/70 backdrop-blur-sm border-green-100">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "Completed Park Cleanup Challenge", points: 150, time: "2 hours ago" },
              { action: "Installed dustbin at Main Street", points: 100, time: "1 day ago" },
              { action: "Beach cleanup mission completed", points: 200, time: "2 days ago" },
              { action: "Redeemed $10 Starbucks Gift Card", points: -500, time: "3 days ago" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-800">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <div className={`flex items-center space-x-1 ${activity.points > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  <Award className="w-4 h-4" />
                  <span className="font-semibold">{activity.points > 0 ? '+' : ''}{activity.points}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileScreen;
