import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PropertyDescriptionProps {
  description: string;
  amenities: string[];
  location: {
    metro?: string;
    transport?: string;
    nearby?: string[];
  };
}

const PropertyDescription: React.FC<PropertyDescriptionProps> = ({
  description,
  amenities,
  location,
}) => {
  return (
    <div className="space-y-6">
      {/* Описание */}
      <Card>
        <CardHeader>
          <CardTitle>Описание</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {description}
          </p>
        </CardContent>
      </Card>

      {/* Удобства */}
      <Card>
        <CardHeader>
          <CardTitle>Удобства</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Расположение */}
      <Card>
        <CardHeader>
          <CardTitle>Расположение</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {location.metro && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🚇 Метро</h4>
              <p className="text-gray-700">{location.metro}</p>
            </div>
          )}

          {location.transport && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">🚌 Транспорт</h4>
              <p className="text-gray-700">{location.transport}</p>
            </div>
          )}

          {location.nearby && location.nearby.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">📍 Рядом</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {location.nearby.map((place, index) => (
                  <div key={index} className="text-gray-700">
                    {place}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyDescription;
