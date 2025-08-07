import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar, Clock, Users, MapPin, ArrowLeft, Check } from "lucide-react";

export default function Reserve() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    seating: "",
    specialRequests: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    setIsSubmitted(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-sage text-white py-3 px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-lemon rounded-full flex items-center justify-center">
                <span className="text-lg">🍋</span>
              </div>
              <h1 className="text-xl font-markazi font-bold text-white">
                Little Lemon
              </h1>
            </div>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-white text-white hover:bg-white hover:text-sage text-xs px-3"
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Home</span>
              </Link>
            </Button>
          </div>
        </header>

        {/* Success Message */}
        <div className="max-w-2xl mx-auto px-4 py-8 md:py-16">
          <Card className="text-center">
            <CardContent className="p-6 md:p-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl md:text-3xl font-markazi font-bold text-sage mb-4">
                Reservation Confirmed!
              </h1>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Thank you for choosing Little Lemon. We've received your
                reservation and will send a confirmation email shortly.
              </p>
              <div className="bg-neutral-light p-4 md:p-6 rounded-lg mb-6">
                <h3 className="font-semibold text-sage mb-4">
                  Reservation Details:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="text-left">
                    <span className="text-muted-foreground">Name:</span>
                    <br />
                    <span className="font-medium">
                      {formData.firstName} {formData.lastName}
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="text-muted-foreground">Date & Time:</span>
                    <br />
                    <span className="font-medium">
                      {formData.date} at {formData.time}
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="text-muted-foreground">Party Size:</span>
                    <br />
                    <span className="font-medium">
                      {formData.guests} guests
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="text-muted-foreground">Seating:</span>
                    <br />
                    <span className="font-medium">{formData.seating}</span>
                  </div>
                </div>
              </div>
              <Button
                asChild
                className="bg-lemon text-sage-dark hover:bg-lemon-dark w-full md:w-auto"
              >
                <Link to="/">Return to Home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-sage text-white py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-lemon rounded-full flex items-center justify-center">
              <span className="text-lg">🍋</span>
            </div>
            <h1 className="text-xl font-markazi font-bold text-white">
              Little Lemon
            </h1>
          </div>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-white text-white hover:bg-white hover:text-sage text-xs px-3"
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-sage text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-markazi font-bold mb-3 md:mb-4">
            Reserve a Table
          </h1>
          <p className="text-lg md:text-xl text-lemon">
            Book your perfect dining experience at Little Lemon
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-8 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-markazi text-sage">
                    Reservation Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="firstName"
                          className="text-sage font-medium"
                        >
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="lastName"
                          className="text-sage font-medium"
                        >
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-sage font-medium"
                        >
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-sage font-medium"
                        >
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    {/* Reservation Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="date" className="text-sage font-medium">
                          Date *
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) =>
                            handleInputChange("date", e.target.value)
                          }
                          required
                          className="mt-1"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time" className="text-sage font-medium">
                          Time *
                        </Label>
                        <Select
                          value={formData.time}
                          onValueChange={(value) =>
                            handleInputChange("time", value)
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                            <SelectItem value="5:30 PM">5:30 PM</SelectItem>
                            <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                            <SelectItem value="6:30 PM">6:30 PM</SelectItem>
                            <SelectItem value="7:00 PM">7:00 PM</SelectItem>
                            <SelectItem value="7:30 PM">7:30 PM</SelectItem>
                            <SelectItem value="8:00 PM">8:00 PM</SelectItem>
                            <SelectItem value="8:30 PM">8:30 PM</SelectItem>
                            <SelectItem value="9:00 PM">9:00 PM</SelectItem>
                            <SelectItem value="9:30 PM">9:30 PM</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="sm:col-span-2 lg:col-span-1">
                        <Label
                          htmlFor="guests"
                          className="text-sage font-medium"
                        >
                          Number of Guests *
                        </Label>
                        <Select
                          value={formData.guests}
                          onValueChange={(value) =>
                            handleInputChange("guests", value)
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Guest</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                            <SelectItem value="3">3 Guests</SelectItem>
                            <SelectItem value="4">4 Guests</SelectItem>
                            <SelectItem value="5">5 Guests</SelectItem>
                            <SelectItem value="6">6 Guests</SelectItem>
                            <SelectItem value="7">7 Guests</SelectItem>
                            <SelectItem value="8">8 Guests</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Occasion */}
                    <div>
                      <Label className="text-sage font-medium">
                        Occasion (Optional)
                      </Label>
                      <Select
                        value={formData.occasion}
                        onValueChange={(value) =>
                          handleInputChange("occasion", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select occasion" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="birthday">Birthday</SelectItem>
                          <SelectItem value="anniversary">
                            Anniversary
                          </SelectItem>
                          <SelectItem value="date">Date Night</SelectItem>
                          <SelectItem value="business">
                            Business Dinner
                          </SelectItem>
                          <SelectItem value="celebration">
                            Celebration
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Seating Preference */}
                    <div>
                      <Label className="text-sage font-medium mb-3 block">
                        Seating Preference
                      </Label>
                      <RadioGroup
                        value={formData.seating}
                        onValueChange={(value) =>
                          handleInputChange("seating", value)
                        }
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="indoor" id="indoor" />
                          <Label htmlFor="indoor">Indoor</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="outdoor" id="outdoor" />
                          <Label htmlFor="outdoor">Outdoor Patio</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="bar" id="bar" />
                          <Label htmlFor="bar">Bar Seating</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="no-preference"
                            id="no-preference"
                          />
                          <Label htmlFor="no-preference">No Preference</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <Label
                        htmlFor="specialRequests"
                        className="text-sage font-medium"
                      >
                        Special Requests
                      </Label>
                      <Textarea
                        id="specialRequests"
                        value={formData.specialRequests}
                        onChange={(e) =>
                          handleInputChange("specialRequests", e.target.value)
                        }
                        placeholder="Any dietary restrictions, allergies, or special accommodations..."
                        className="mt-1"
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-lemon text-sage-dark hover:bg-lemon-dark touch-manipulation"
                    >
                      Confirm Reservation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 order-first lg:order-last">
              {/* Restaurant Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-markazi text-sage">
                    Restaurant Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        123 Mediterranean Ave
                        <br />
                        Chicago, IL 60601
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Mon-Thu: 5:00 PM - 10:00 PM
                        <br />
                        Fri-Sat: 5:00 PM - 11:00 PM
                        <br />
                        Sun: 5:00 PM - 9:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Contact</p>
                      <p className="text-sm text-muted-foreground">
                        (312) 555-0123
                        <br />
                        info@littlelemon.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Policies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-markazi text-sage">
                    Reservation Policies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Reservations are held for 15 minutes</li>
                    <li>• Parties of 6+ require confirmation call</li>
                    <li>• 24-hour cancellation notice required</li>
                    <li>
                      • Special dietary needs accommodated with advance notice
                    </li>
                    <li>• Outdoor seating subject to weather conditions</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Featured Image */}
              <div className="rounded-lg overflow-hidden hidden lg:block">
                <img
                  src="https://cdn.builder.io/api/v1/assets/2b766c315be042e5a66ccefe507cd013/96de1a8e84d5b60e17f4e8a752e3825e17a622bf-a741ff?format=webp&width=800"
                  alt="Little Lemon restaurant interior"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
