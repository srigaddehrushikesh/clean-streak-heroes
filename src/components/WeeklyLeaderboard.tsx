
import React from 'react';
import { Trophy, Crown, Medal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface WeeklyLeaderboardProps {
  currentUserPoints: number;
}

const WeeklyLeaderboard = ({ currentUserPoints }: WeeklyLeaderboardProps) => {
  const leaderboardData = [
    { rank: 1, name: "Mike Wilson", points: 2450, avatar: "/placeholder.svg", initials: "MW" },
    { rank: 2, name: "Emma Davis", points: 2100, avatar: "/placeholder.svg", initials: "ED" },
    { rank: 3, name: "You", points: currentUserPoints, avatar: "/placeholder.svg", initials: "SJ", isCurrentUser: true }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Trophy className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-gray-500 font-bold">#{rank}</span>;
    }
  };

  return (
    <Card className="bg-gradient-to-br from-yellow-50 to-orange-100 border-2 border-yellow-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-white" />
          <span>Weekly Leaderboard</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-3">
          {leaderboardData.map((user) => (
            <div 
              key={user.rank}
              className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 ${
                user.isCurrentUser 
                  ? 'bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-300 shadow-md' 
                  : 'bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200'
              }`}
            >
              <div className="flex items-center justify-center w-8 h-8">
                {getRankIcon(user.rank)}
              </div>
              <Avatar className="w-8 h-8 ring-2 ring-white shadow-sm">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-gradient-to-br from-indigo-400 to-purple-500 text-white text-sm font-bold">
                  {user.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{user.name}</p>
                <p className="text-sm text-green-600 font-semibold">{user.points.toLocaleString()} pts</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyLeaderboard;
