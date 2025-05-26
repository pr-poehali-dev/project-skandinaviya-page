import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PropertyDetailsProps {
  title: string;
  price: string;
  pricePerMonth?: string;
  location: string;
  area: string;
  rooms: string;
  floor: string;
  type: string;
  features: string[];
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  title,
  price,
  pricePerMonth,
  location,
  area,
  rooms,
  floor,
  type,
  features,
}) => {
  return (
    <Card className="sticky top-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900">
          {title}
        </CardTitle>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-blue-600">{price}</div>
          {pricePerMonth && (
            <div className="text-lg text-gray-600">{pricePerMonth}</div>
          )}
          <div className="text-gray-600 text-lg">📍 {location}</div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Основные характеристики */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Площадь</div>
            <div className="font-semibold">{area}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Комнаты</div>
            <div className="font-semibold">{rooms}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Этаж</div>
            <div className="font-semibold">{floor}</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-500">Тип</div>
            <div className="font-semibold">{type}</div>
          </div>
        </div>

        {/* Особенности */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Особенности</h3>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Действия */}
        <div className="space-y-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            📞 Позвонить
          </Button>
          <Button variant="outline" className="w-full">
            💬 Написать в WhatsApp
          </Button>
          <Button variant="outline" className="w-full">
            ❤️ Добавить в избранное
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyDetails;
