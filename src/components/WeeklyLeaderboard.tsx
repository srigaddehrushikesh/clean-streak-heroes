
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
    <Card className="bg-white/70 backdrop-blur-sm border-green-100">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span>Weekly Leaderboard</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {leaderboardData.map((user) => (
            <div 
              key={user.rank}
              className={`flex items-center space-x-4 p-3 rounded-lg ${
                user.isCurrentUser ? 'bg-green-50 border-2 border-green-200' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center w-8 h-8">
                {getRankIcon(user.rank)}
              </div>
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="bg-green-200 text-green-700 text-sm">
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
