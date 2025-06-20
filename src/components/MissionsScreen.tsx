
import React, { useState } from 'react';
import { MapPin, Clock, Users, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const MissionsScreen = () => {
  const [activeTab, setActiveTab] = useState('all');

  const statsData = {
    active: 12,
    completed: 48,
    points: 2450
  };

  const missions = [
    {
      id: 1,
      title: "Park Restoration Challenge",
      tag: "Featured",
      tagColor: "bg-yellow-100 text-yellow-700",
      points: 500,
      description: "Help restore Central Park by cleaning litter and planting flowers",
      distance: "2.5 km",
      time: null,
      participants: null,
      priority: "featured"
    },
    {
      id: 2,
      title: "Beach Cleanup Urgent",
      tag: "High Priority",
      tagColor: "bg-red-100 text-red-700",
      points: 300,
      description: "Urgent cleanup needed at the beach area",
      distance: "1.2 km",
      time: "2–3 hours",
      participants: "8/15",
      priority: "high"
    },
    {
      id: 3,
      title: "Install Dustbin",
      tag: null,
      tagColor: "",
      points: 150,
      description: "Install a new dustbin in the designated area",
      distance: "0.8 km",
      time: "30 mins",
      participants: null,
      priority: "normal"
    },
    {
      id: 4,
      title: "Community Garden",
      tag: null,
      tagColor: "",
      points: 200,
      description: "Help maintain the community garden space",
      distance: "3.1 km",
      time: null,
      participants: "12/20",
      priority: "normal"
    }
  ];

  const getFilteredMissions = () => {
    switch (activeTab) {
      case 'high-priority':
        return missions.filter(m => m.priority === 'high');
      case 'near-you':
        return missions.filter(m => parseFloat(m.distance) <= 2.0);
      default:
        return missions;
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-white/70 backdrop-blur-sm border-green-100">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-green-600">{statsData.active}</p>
            <p className="text-sm text-gray-600">Active</p>
          </CardContent>
        </Card>
        <Card className="bg-white/70 backdrop-blur-sm border-green-100">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{statsData.completed}</p>
            <p className="text-sm text-gray-600">Completed</p>
          </CardContent>
        </Card>
        <Card className="bg-white/70 backdrop-blur-sm border-green-100">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-purple-600">{statsData.points.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Points</p>
          </CardContent>
        </Card>
      </div>

      {/* Category Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white/70 backdrop-blur-sm">
          <TabsTrigger value="all">All Missions</TabsTrigger>
          <TabsTrigger value="high-priority">High Priority</TabsTrigger>
          <TabsTrigger value="near-you">Near You</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {getFilteredMissions().map((mission) => (
            <Card key={mission.id} className="bg-white/70 backdrop-blur-sm border-green-100">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-lg">{mission.title}</CardTitle>
                      {mission.tag && (
                        <Badge className={mission.tagColor}>
                          {mission.tag}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 font-semibold">+{mission.points} pts</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{mission.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{mission.distance}</span>
                  </div>
                  {mission.time && (
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{mission.time}</span>
                    </div>
                  )}
                  {mission.participants && (
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{mission.participants}</span>
                    </div>
                  )}
                </div>

                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  {mission.tag === "Featured" ? "Join Now" : "Accept Mission"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MissionsScreen;
