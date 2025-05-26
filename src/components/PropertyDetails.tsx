import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

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
    <div className="sticky top-8 space-y-6">
      {/* Основная карточка с ценой */}
      <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-blue-50/30">
        <CardHeader className="pb-4">
          <div className="space-y-3">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-blue-600">{price}</span>
              {pricePerMonth && (
                <span className="text-lg text-gray-500">{pricePerMonth}</span>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Icon name="MapPin" size={18} className="text-blue-500" />
              <span className="text-lg">{location}</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Характеристики */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <Icon
                name="Home"
                size={20}
                className="text-blue-500 mx-auto mb-1"
              />
              <div className="text-sm text-gray-500">Площадь</div>
              <div className="font-semibold text-gray-900">{area}</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <Icon
                name="Bed"
                size={20}
                className="text-blue-500 mx-auto mb-1"
              />
              <div className="text-sm text-gray-500">Комнаты</div>
              <div className="font-semibold text-gray-900">{rooms}</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <Icon
                name="Building"
                size={20}
                className="text-blue-500 mx-auto mb-1"
              />
              <div className="text-sm text-gray-500">Этаж</div>
              <div className="font-semibold text-gray-900">{floor}</div>
            </div>
            <div className="bg-white/60 rounded-lg p-3 text-center">
              <Icon
                name="Tag"
                size={20}
                className="text-blue-500 mx-auto mb-1"
              />
              <div className="text-sm text-gray-500">Тип</div>
              <div className="font-semibold text-gray-900">{type}</div>
            </div>
          </div>

          {/* Особенности */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Icon name="Star" size={18} className="text-blue-500" />
              Особенности
            </h3>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="space-y-3">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="hover:bg-green-50 hover:border-green-300"
              >
                <Icon name="MessageCircle" size={16} className="mr-1" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                className="hover:bg-red-50 hover:border-red-300"
              >
                <Icon name="Heart" size={16} className="mr-1" />В избранное
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Карточка агента */}
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Icon name="User" size={24} className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Анна Петрова</h4>
              <p className="text-sm text-gray-500">Агент по недвижимости</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
            <Icon
              name="Star"
              size={16}
              className="text-yellow-500 fill-current"
            />
            <span>4.9 • 127 отзывов</span>
          </div>
          <Button variant="outline" className="w-full">
            <Icon name="MessageSquare" size={16} className="mr-2" />
            Написать агенту
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyDetails;
