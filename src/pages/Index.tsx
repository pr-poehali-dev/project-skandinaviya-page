import React from "react";
import ImageGallery from "@/components/ImageGallery";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyDescription from "@/components/PropertyDescription";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const propertyData = {
    title: "ЖК Скандинавия",
    subtitle: "2-комнатная квартира",
    price: "120 000 ₽",
    pricePerMonth: "за месяц",
    location: "Московская область, Красногорск",
    area: "65 м²",
    rooms: "2 комнаты",
    floor: "15/25 этаж",
    type: "Новостройка",
    rating: 4.8,
    views: 234,
    features: [
      "Евроремонт",
      "Мебель",
      "Техника",
      "Балкон",
      "Парковка",
      "Охрана",
    ],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560449752-9c81e1dc2924?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&h=600&fit=crop",
    ],
    description: `Сдается прекрасная 2-комнатная квартира в современном жилом комплексе "Скандинавия". 
    
Квартира полностью меблирована и готова к проживанию. Современный евроремонт, качественная техника, все необходимое для комфортной жизни.

Квартира расположена на 15 этаже 25-этажного дома с прекрасным видом на город. Большие окна наполняют помещение естественным светом.

Идеально подходит для семьи или молодой пары. Развитая инфраструктура района, отличная транспортная доступность.`,
    amenities: [
      "Холодильник",
      "Стиральная машина",
      "Посудомоечная машина",
      "Кондиционер",
      "Телевизор",
      "Wi-Fi",
      "Встроенные шкафы",
      "Балкон с мебелью",
      "Подземная парковка",
      "Консьерж 24/7",
      "Детская площадка",
      "Фитнес-центр",
    ],
    location: {
      metro: "Мякинино — 10 минут на автобусе",
      transport: "Автобусы 540, 549, маршрутки. До МКАД 5 минут",
      nearby: [
        "ТЦ Крокус Сити Молл",
        "Школа №5",
        "Детский сад №12",
        "Поликлиника",
        "Спортивный комплекс",
        "Парк Городской",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Хлебные крошки */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors">
              Главная
            </span>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
            <span className="text-gray-500 hover:text-blue-600 cursor-pointer transition-colors">
              Аренда
            </span>
            <Icon name="ChevronRight" size={16} className="text-gray-400" />
            <span className="text-gray-900 font-medium">ЖК Скандинавия</span>
          </div>
        </div>
      </div>

      {/* Заголовок */}
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {propertyData.title}
            </h1>
            <p className="text-xl text-gray-600 mb-3">
              {propertyData.subtitle}
            </p>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Icon
                  name="Star"
                  size={16}
                  className="text-yellow-500 fill-current"
                />
                <span className="font-medium">{propertyData.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <Icon name="Eye" size={16} />
                <span>{propertyData.views} просмотров</span>
              </div>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-700"
              >
                Доступна сейчас
              </Badge>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Icon name="Share" size={18} />
              <span>Поделиться</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Icon name="Heart" size={18} />
              <span>В избранное</span>
            </button>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Левая колонка */}
          <div className="xl:col-span-2 space-y-8">
            <ImageGallery
              images={propertyData.images}
              title={propertyData.title}
            />

            <PropertyDescription
              description={propertyData.description}
              amenities={propertyData.amenities}
              location={propertyData.location}
            />
          </div>

          {/* Правая колонка */}
          <div className="xl:col-span-1">
            <PropertyDetails
              title={propertyData.title}
              price={propertyData.price}
              pricePerMonth={propertyData.pricePerMonth}
              location={propertyData.location}
              area={propertyData.area}
              rooms={propertyData.rooms}
              floor={propertyData.floor}
              type={propertyData.type}
              features={propertyData.features}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
