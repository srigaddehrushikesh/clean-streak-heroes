
import React from 'react';
import { MapPin, Clock, Award, Users, Target, Flame } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const LocationChallenges = () => {
  const featuredChallenges = [
    {
      id: 1,
      title: "Weekend Warrior",
      description: "Clean up any location during the weekend",
      location: "Anywhere",
      timeLeft: "2 days left",
      points: 200,
      bonusPoints: 50,
      participants: 156,
      progress: 75,
      difficulty: "Easy",
      isActive: true
    },
    {
      id: 2,
      title: "Beach Cleanup Drive",
      description: "Help clean our beautiful coastlines",
      location: "Santa Monica Beach, CA",
      timeLeft: "5 days left",
      points: 300,
      bonusPoints: 100,
      participants: 89,
      progress: 45,
      difficulty: "Medium",
      isActive: true
    },
    {
      id: 3,
      title: "Urban Park Revival",
      description: "Restore beauty to city parks",
      location: "Central Park, NYC",
      timeLeft: "1 week left",
      points: 250,
      bonusPoints: 75,
      participants: 234,
      progress: 60,
      difficulty: "Easy",
      isActive: true
    }
  ];

  const hotspots = [
    {
      id: 1,
      name: "Times Square",
      location: "New York, NY",
      urgency: "High",
      lastCleaned: "3 days ago",
      needsAttention: true,
      points: 180
    },
    {
      id: 2,
      name: "Venice Beach Boardwalk",
      location: "Los Angeles, CA",
      urgency: "Medium",
      lastCleaned: "1 day ago",
      needsAttention: false,
      points: 150
    },
    {
      id: 3,
      name: "Golden Gate Park",
      location: "San Francisco, CA",
      urgency: "Low",
      lastCleaned: "5 hours ago",
      needsAttention: false,
      points: 120
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'bg-green-100 text-green-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'hard':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency.toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Location Challenges</h2>
        <p className="text-gray-600">Take on special challenges and earn bonus points!</p>
      </div>

      {/* Featured Challenges */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
          <Target className="w-5 h-5 text-purple-600" />
          <span>Featured Challenges</span>
        </h3>
        
        {featuredChallenges.map((challenge) => (
          <Card key={challenge.id} className="bg-white/70 backdrop-blur-sm border-purple-200">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-lg">{challenge.title}</CardTitle>
                  <p className="text-gray-600">{challenge.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{challenge.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{challenge.timeLeft}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{challenge.participants} joined</span>
                    </div>
                  </div>
                </div>
                <Badge className={getDifficultyColor(challenge.difficulty)}>
                  {challenge.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 font-semibold">{challenge.points} points</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="text-orange-500 font-semibold">+{challenge.bonusPoints} bonus</span>
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                  Accept Challenge
                </Button>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Challenge Progress</span>
                  <span className="text-gray-600">{challenge.progress}% complete</span>
                </div>
                <Progress value={challenge.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cleanup Hotspots */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-red-600" />
          <span>Cleanup Hotspots</span>
        </h3>
        <p className="text-gray-600 text-sm">Areas that need immediate attention from our cleanup heroes</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotspots.map((hotspot) => (
            <Card key={hotspot.id} className={`border-2 ${getUrgencyColor(hotspot.urgency)}`}>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">{hotspot.name}</h4>
                      <p className="text-sm text-gray-600">{hotspot.location}</p>
                    </div>
                    {hotspot.needsAttention && (
                      <Badge variant="destructive" className="text-xs">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Last cleaned:</span>
                      <span className="font-medium">{hotspot.lastCleaned}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Points available:</span>
                      <div className="flex items-center space-x-1">
                        <Award className="w-3 h-3 text-green-600" />
                        <span className="text-green-600 font-semibold">{hotspot.points}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full hover:bg-green-50 hover:border-green-300"
                  >
                    Clean This Spot
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <Card className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0">
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold">47</p>
              <p className="text-white/80 text-sm">Active Challenges</p>
            </div>
            <div>
              <p className="text-2xl font-bold">1,234</p>
              <p className="text-white/80 text-sm">Heroes Participating</p>
            </div>
            <div>
              <p className="text-2xl font-bold">89</p>
              <p className="text-white/80 text-sm">Hotspots Cleaned</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationChallenges;
