
import React from 'react';
import { Crown, Trophy, Medal, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface LeaderboardProps {
  currentUserPoints: number;
}

const Leaderboard = ({ currentUserPoints }: LeaderboardProps) => {
  const weeklyLeaders = [
    { rank: 1, name: "Sarah Chen", points: 2850, avatar: "/placeholder.svg", initials: "SC", isCurrentUser: false, change: "+2" },
    { rank: 2, name: "Mike Johnson", points: 2340, avatar: "/placeholder.svg", initials: "MJ", isCurrentUser: false, change: "+1" },
    { rank: 3, name: "Emma Davis", points: 1890, avatar: "/placeholder.svg", initials: "ED", isCurrentUser: false, change: "-1" },
    { rank: 4, name: "You", points: currentUserPoints, avatar: "/placeholder.svg", initials: "JD", isCurrentUser: true, change: "+3" },
    { rank: 5, name: "Alex Kim", points: 1180, avatar: "/placeholder.svg", initials: "AK", isCurrentUser: false, change: "-2" }
  ];

  const allTimeLeaders = [
    { rank: 1, name: "Emily Rodriguez", points: 12850, avatar: "/placeholder.svg", initials: "ER", isCurrentUser: false, cleanups: 89 },
    { rank: 2, name: "David Park", points: 11340, avatar: "/placeholder.svg", initials: "DP", isCurrentUser: false, cleanups: 76 },
    { rank: 3, name: "Lisa Wang", points: 9890, avatar: "/placeholder.svg", initials: "LW", isCurrentUser: false, cleanups: 68 },
    { rank: 4, name: "Chris Brown", points: 8750, avatar: "/placeholder.svg", initials: "CB", isCurrentUser: false, cleanups: 62 },
    { rank: 5, name: "Anna Taylor", points: 7420, avatar: "/placeholder.svg", initials: "AT", isCurrentUser: false, cleanups: 54 }
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

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500 text-white";
      case 3:
        return "bg-gradient-to-r from-amber-400 to-amber-600 text-white";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Leaderboard</h2>
        <p className="text-gray-600">Compete with heroes worldwide and climb the ranks!</p>
      </div>

      <Tabs defaultValue="weekly" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-white/70 backdrop-blur-sm">
          <TabsTrigger value="weekly">This Week</TabsTrigger>
          <TabsTrigger value="alltime">All Time</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-4">
          <Card className="bg-white/70 backdrop-blur-sm border-green-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span>Weekly Rankings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklyLeaders.map((leader) => (
                  <div 
                    key={leader.rank}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      leader.isCurrentUser 
                        ? 'border-green-300 bg-green-50' 
                        : 'border-gray-200 bg-white/50'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getRankBadge(leader.rank)}`}>
                        {getRankIcon(leader.rank)}
                      </div>
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={leader.avatar} />
                        <AvatarFallback className="bg-green-200 text-green-700">
                          {leader.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{leader.name}</h4>
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-green-600" />
                          <span className="text-green-600 font-medium">{leader.points.toLocaleString()} points</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={leader.change.startsWith('+') ? 'default' : 'destructive'}
                          className={leader.change.startsWith('+') ? 'bg-green-100 text-green-700' : ''}
                        >
                          {leader.change}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alltime" className="space-y-4">
          <Card className="bg-white/70 backdrop-blur-sm border-green-100">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Crown className="w-5 h-5 text-yellow-500" />
                <span>Hall of Fame</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {allTimeLeaders.map((leader) => (
                  <div 
                    key={leader.rank}
                    className="p-4 rounded-lg border-2 border-gray-200 bg-white/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getRankBadge(leader.rank)}`}>
                        {getRankIcon(leader.rank)}
                      </div>
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={leader.avatar} />
                        <AvatarFallback className="bg-green-200 text-green-700">
                          {leader.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{leader.name}</h4>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Award className="w-4 h-4 text-green-600" />
                            <span className="text-green-600 font-medium">{leader.points.toLocaleString()} points</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Trophy className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-600 font-medium">{leader.cleanups} cleanups</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Your Rank Card */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Your Current Rank</h3>
            <div className="text-3xl font-bold mb-2">#4</div>
            <p className="text-white/80">You're in the top 15% of cleanup heroes!</p>
            <p className="text-white/60 text-sm mt-2">Keep cleaning to climb higher! 🚀</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;
