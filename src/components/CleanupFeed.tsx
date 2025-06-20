
import React from 'react';
import { Heart, MessageCircle, Share2, MapPin, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const CleanupFeed = () => {
  const cleanups = [
    {
      id: 1,
      user: { name: "Sarah Chen", avatar: "/placeholder.svg", initials: "SC" },
      location: "Central Park, NYC",
      timeAgo: "2 hours ago",
      beforeImage: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      description: "Found this spot covered in litter during my morning jog. Spent 30 minutes cleaning it up and it looks amazing now! 🌟",
      points: 150,
      likes: 23,
      comments: 8,
      isChallenge: true,
      challengeName: "Weekend Warrior"
    },
    {
      id: 2,
      user: { name: "Mike Johnson", avatar: "/placeholder.svg", initials: "MJ" },
      location: "Beach Boulevard",
      timeAgo: "5 hours ago",
      beforeImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop",
      description: "Beach cleanup session with my family. We collected 3 bags of trash and even found some recyclables!",
      points: 200,
      likes: 45,
      comments: 12,
      isChallenge: false,
      dustbinInstalled: true
    },
    {
      id: 3,
      user: { name: "Emma Davis", avatar: "/placeholder.svg", initials: "ED" },
      location: "Mountain Trail",
      timeAgo: "1 day ago",
      beforeImage: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      description: "This hiking trail needed some love. Cleared the path and picked up scattered waste. Nature looks so much better clean! 🏔️",
      points: 120,
      likes: 34,
      comments: 6,
      isChallenge: true,
      challengeName: "Nature Guardian"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Community Cleanups</h2>
        <p className="text-gray-600">See what amazing work our heroes are doing worldwide!</p>
      </div>

      {cleanups.map((cleanup) => (
        <Card key={cleanup.id} className="bg-white/70 backdrop-blur-sm border-green-100 overflow-hidden">
          <CardContent className="p-0">
            {/* Header */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={cleanup.user.avatar} />
                    <AvatarFallback className="bg-green-200 text-green-700">
                      {cleanup.user.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800">{cleanup.user.name}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span>{cleanup.location}</span>
                      <span>•</span>
                      <Clock className="w-3 h-3" />
                      <span>{cleanup.timeAgo}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {cleanup.isChallenge && (
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                      {cleanup.challengeName}
                    </Badge>
                  )}
                  {cleanup.dustbinInstalled && (
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      🗑️ Dustbin Installed
                    </Badge>
                  )}
                  <div className="flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                    <Award className="w-3 h-3 text-green-600" />
                    <span className="text-green-600 font-semibold text-sm">+{cleanup.points}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Before/After Images */}
            <div className="grid grid-cols-2">
              <div className="relative">
                <img 
                  src={cleanup.beforeImage} 
                  alt="Before cleanup" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  Before
                </div>
              </div>
              <div className="relative">
                <img 
                  src={cleanup.afterImage} 
                  alt="After cleanup" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">
                  After
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-4">
              <p className="text-gray-700">{cleanup.description}</p>
              
              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500">
                    <Heart className="w-4 h-4 mr-1" />
                    {cleanup.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-500">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {cleanup.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-500">
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CleanupFeed;
