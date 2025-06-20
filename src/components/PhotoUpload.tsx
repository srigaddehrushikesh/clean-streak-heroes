
import React, { useState } from 'react';
import { Camera, MapPin, Upload, Award, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface PhotoUploadProps {
  onPointsEarned: (points: number) => void;
}

const PhotoUpload = ({ onPointsEarned }: PhotoUploadProps) => {
  const [beforeImage, setBeforeImage] = useState<string | null>(null);
  const [afterImage, setAfterImage] = useState<string | null>(null);
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (type === 'before') {
          setBeforeImage(result);
        } else {
          setAfterImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!beforeImage || !afterImage || !location) {
      toast({
        title: "Missing Information",
        description: "Please upload both before/after photos and add a location.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      const basePoints = 100;
      const bonusPoints = Math.floor(Math.random() * 50); // Random bonus
      const totalPoints = basePoints + bonusPoints;
      
      onPointsEarned(totalPoints);
      
      toast({
        title: "🎉 Cleanup Submitted!",
        description: `You earned ${totalPoints} points! Keep up the great work!`,
      });

      // Reset form
      setBeforeImage(null);
      setAfterImage(null);
      setLocation('');
      setDescription('');
      setIsUploading(false);
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card className="bg-white/70 backdrop-blur-sm border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Camera className="w-5 h-5 text-green-600" />
            <span>Document Your Cleanup</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Before/After Photos */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Before Photo</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-green-400 transition-colors">
                  {beforeImage ? (
                    <img src={beforeImage} alt="Before cleanup" className="w-full h-48 object-cover rounded" />
                  ) : (
                    <div className="space-y-2">
                      <Camera className="w-8 h-8 text-gray-400 mx-auto" />
                      <p className="text-sm text-gray-500">Upload before photo</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'before')}
                    className="hidden"
                    id="before-upload"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => document.getElementById('before-upload')?.click()}
                  >
                    Choose Photo
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">After Photo</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-green-400 transition-colors">
                  {afterImage ? (
                    <img src={afterImage} alt="After cleanup" className="w-full h-48 object-cover rounded" />
                  ) : (
                    <div className="space-y-2">
                      <Camera className="w-8 h-8 text-gray-400 mx-auto" />
                      <p className="text-sm text-gray-500">Upload after photo</p>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, 'after')}
                    className="hidden"
                    id="after-upload"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => document.getElementById('after-upload')?.click()}
                  >
                    Choose Photo
                  </Button>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Where did you clean up?"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Description (Optional)</label>
              <Textarea
                placeholder="Tell us about your cleanup effort..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
              />
            </div>

            {/* Point Preview */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-medium">Points you'll earn:</span>
                </div>
                <div className="text-right">
                  <p className="text-green-600 font-bold text-lg">100+ points</p>
                  <p className="text-green-500 text-sm">+ bonus for impact!</p>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isUploading || !beforeImage || !afterImage || !location}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
            >
              {isUploading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Submitting Cleanup...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Upload className="w-4 h-4" />
                  <span>Submit Cleanup</span>
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoUpload;
