import React from "react";
import ImageGallery from "@/components/ImageGallery";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyDescription from "@/components/PropertyDescription";

const Index = () => {
  // Данные объекта недвижимости
  const propertyData = {
    title: "ЖК Скандинавия, 2-комнатная квартира",
    price: "120 000 ₽",
    pricePerMonth: "за месяц",
    location: "Московская область, Красногорск",
    area: "65 м²",
    rooms: "2 комнаты",
    floor: "15/25 этаж",
    type: "Новостройка",
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
    <div className="min-h-screen bg-gray-50">
      {/* Навигация */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Главная</span>
            <span>→</span>
            <span>Аренда</span>
            <span>→</span>
            <span className="text-gray-900">ЖК Скандинавия</span>
          </div>
        </div>
      </div>

      {/* Основной контент */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Левая колонка - галерея и описание */}
          <div className="lg:col-span-2 space-y-6">
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

          {/* Правая колонка - детали и контакты */}
          <div className="lg:col-span-1">
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
