
import React from 'react';
import { Award, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const RecentCleanups = () => {
  const recentActivities = [
    {
      id: 1,
      user: "Alex Johnson",
      initials: "AJ",
      action: "Cleaned Main Street sidewalk",
      points: 25,
      time: "2 minutes ago",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      user: "Sarah Chen",
      initials: "SC",
      action: "Installed dustbin at Bus Stop",
      points: 100,
      time: "15 minutes ago",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      user: "Mike Rodriguez",
      initials: "MR",
      action: "Completed Park cleanup mission",
      points: 75,
      time: "1 hour ago",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-green-100">
      <CardHeader>
        <CardTitle>Recent CleanUps</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
              <Avatar className="w-10 h-10">
                <AvatarImage src={activity.avatar} />
                <AvatarFallback className="bg-blue-200 text-blue-700">
                  {activity.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-gray-800">
                  <span className="text-blue-600">{activity.user}</span> – {activity.action}
                </p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
              <div className="flex items-center space-x-1 text-green-600">
                <Award className="w-4 h-4" />
                <span className="font-semibold">+{activity.points} pts</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentCleanups;
