
import React, { useState } from 'react';
import { Award, Gift, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface RewardsScreenProps {
  userPoints: number;
  onPointsSpent: (points: number) => void;
}

const RewardsScreen = ({ userPoints, onPointsSpent }: RewardsScreenProps) => {
  const [activeTab, setActiveTab] = useState('all');

  const pointsData = {
    balance: userPoints,
    weeklyGrowth: 120,
    rank: "Champion",
    totalEarned: 5230,
    redeemed: 2780,
    streak: 7
  };

  const rewards = [
    {
      id: 1,
      title: "$50 Amazon Gift Card",
      points: 2000,
      category: "gift-cards",
      featured: true,
      available: true
    },
    {
      id: 2,
      title: "Feature Spotlight",
      points: 1500,
      category: "featured",
      featured: true,
      available: true
    },
    {
      id: 3,
      title: "$10 Starbucks Card",
      points: 500,
      category: "gift-cards",
      featured: false,
      available: true
    },
    {
      id: 4,
      title: "CleanUp Champion T-Shirt",
      points: 800,
      category: "merchandise",
      featured: false,
      available: false
    },
    {
      id: 5,
      title: "Gaming Headset",
      points: 3500,
      category: "merchandise",
      featured: false,
      available: false
    },
    {
      id: 6,
      title: "Eco-Friendly Water Bottle",
      points: 1200,
      category: "merchandise",
      featured: false,
      available: true
    }
  ];

  const getFilteredRewards = () => {
    switch (activeTab) {
      case 'gift-cards':
        return rewards.filter(r => r.category === 'gift-cards');
      case 'merchandise':
        return rewards.filter(r => r.category === 'merchandise');
      default:
        return rewards;
    }
  };

  const handleRedeem = (points: number) => {
    if (userPoints >= points) {
      onPointsSpent(points);
      // Here you would typically show a success toast
    }
  };

  return (
    <div className="space-y-6">
      {/* Points Summary */}
      <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold">{pointsData.balance.toLocaleString()}</p>
              <p className="text-white/80 text-sm">Balance</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">+{pointsData.weeklyGrowth}</p>
              <p className="text-white/80 text-sm">This Week</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">{pointsData.rank}</p>
              <p className="text-white/80 text-sm">Rank</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-white/20">
            <div className="text-center">
              <p className="text-lg font-semibold">{pointsData.totalEarned.toLocaleString()}</p>
              <p className="text-white/70 text-xs">Total Earned</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">{pointsData.redeemed.toLocaleString()}</p>
              <p className="text-white/70 text-xs">Redeemed</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">{pointsData.streak} days</p>
              <p className="text-white/70 text-xs">Streak</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rewards Categories */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white/70 backdrop-blur-sm">
          <TabsTrigger value="all">All Rewards</TabsTrigger>
          <TabsTrigger value="gift-cards">Gift Cards</TabsTrigger>
          <TabsTrigger value="merchandise">Merchandise</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {/* Featured Rewards */}
          {activeTab === 'all' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Featured Rewards</span>
              </h3>
              
              {rewards.filter(r => r.featured).map((reward) => (
                <Card key={reward.id} className="bg-white/70 backdrop-blur-sm border-yellow-200 border-2">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800">{reward.title}</h4>
                        <div className="flex items-center space-x-1 mt-1">
                          <Award className="w-4 h-4 text-green-600" />
                          <span className="text-green-600 font-medium">{reward.points.toLocaleString()} pts</span>
                        </div>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
                        disabled={userPoints < reward.points}
                        onClick={() => handleRedeem(reward.points)}
                      >
                        Redeem
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* All Rewards List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {activeTab === 'all' ? 'All Rewards' : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1).replace('-', ' ')}`}
            </h3>
            
            {getFilteredRewards().map((reward) => (
              <Card key={reward.id} className="bg-white/70 backdrop-blur-sm border-green-100">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-800">{reward.title}</h4>
                      <div className="flex items-center space-x-1 mt-1">
                        <Award className="w-4 h-4 text-green-600" />
                        <span className="text-green-600 font-medium">{reward.points.toLocaleString()} pts</span>
                      </div>
                    </div>
                    <Button 
                      variant={reward.available ? "default" : "outline"}
                      disabled={!reward.available || userPoints < reward.points}
                      onClick={() => reward.available && handleRedeem(reward.points)}
                      className={reward.available ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700" : ""}
                    >
                      {reward.available ? "Redeem" : "Out of Stock"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RewardsScreen;
