
import React from 'react';
import { HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HelpScreen = () => {
  const faqItems = [
    {
      question: "How do I earn points?",
      answer: "You can earn points by completing cleanup missions, uploading cleanup photos, and installing dustbins in designated areas."
    },
    {
      question: "How do I redeem rewards?",
      answer: "Go to the Rewards screen and browse available rewards. You can redeem any reward if you have enough points."
    },
    {
      question: "What happens to my streak?",
      answer: "Your streak continues as long as you complete at least one cleanup activity per day. Missing a day will reset your streak."
    },
    {
      question: "How are missions assigned?",
      answer: "Missions are based on your location, community needs, and your activity level. High priority missions offer bonus points."
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Help & Support</h2>
        <p className="text-gray-600">Get help with CleanUp Champion</p>
      </div>

      {/* Contact Options */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-white/70 backdrop-blur-sm border-green-100">
          <CardContent className="p-4 text-center">
            <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800">Live Chat</h4>
            <p className="text-sm text-gray-600 mb-3">Chat with our support team</p>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Start Chat</Button>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-green-100">
          <CardContent className="p-4 text-center">
            <Mail className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800">Email Support</h4>
            <p className="text-sm text-gray-600 mb-3">Send us an email</p>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">Send Email</Button>
          </CardContent>
        </Card>

        <Card className="bg-white/70 backdrop-blur-sm border-green-100">
          <CardContent className="p-4 text-center">
            <Phone className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-800">Phone Support</h4>
            <p className="text-sm text-gray-600 mb-3">Call us directly</p>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Call Now</Button>
          </CardContent>
        </Card>
      </div>

      {/* FAQ Section */}
      <Card className="bg-white/70 backdrop-blur-sm border-green-100">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">{item.question}</h4>
                <p className="text-gray-600 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* App Info */}
      <Card className="bg-white/70 backdrop-blur-sm border-green-100">
        <CardHeader>
          <CardTitle>App Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Version:</strong> 2.1.0</p>
            <p><strong>Last Updated:</strong> December 2024</p>
            <p><strong>Developer:</strong> CleanUp Champion Team</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HelpScreen;
