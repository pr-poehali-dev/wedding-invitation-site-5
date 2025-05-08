
import { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, Phone, Mail, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF4F5] to-[#F6F6F7]">
      {/* Фиксированная навигация */}
      <nav 
        className={`fixed w-full z-30 transition-all duration-300 ${
          scrollPosition > 100 
            ? 'bg-white/80 shadow-md backdrop-blur-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto flex justify-center">
          <ul className="flex space-x-8 text-sm font-medium">
            <li><a href="#hero" className="hover:text-purple-500 transition-colors">Главная</a></li>
            <li><a href="#details" className="hover:text-purple-500 transition-colors">Детали</a></li>
            <li><a href="#dress" className="hover:text-purple-500 transition-colors">Дресс-код</a></li>
            <li><a href="#info" className="hover:text-purple-500 transition-colors">Информация</a></li>
            <li><a href="#map" className="hover:text-purple-500 transition-colors">Карта</a></li>
            <li><a href="#contacts" className="hover:text-purple-500 transition-colors">Контакты</a></li>
          </ul>
        </div>
      </nav>

      {/* Секция с фото и именами */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-40 h-40 rounded-full bg-purple-300 blur-3xl top-1/4 left-1/4 animate-pulse"></div>
          <div className="absolute w-60 h-60 rounded-full bg-blue-200 blur-3xl bottom-1/4 right-1/4 animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute w-40 h-40 rounded-full bg-pink-200 blur-3xl top-1/3 right-1/3 animate-pulse" style={{animationDelay: "2s"}}></div>
        </div>
        <div className="text-center z-10 container mx-auto px-4 animate-fade-in">
          <div className="relative mb-8 h-[400px] md:h-[500px] flex items-center justify-center">
            {/* Здесь будет фотография из placeholder, которую вы замените сами */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Даниил и Мария" 
                className="object-cover h-full w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
            </div>
            <div className="absolute bottom-8 left-0 right-0 text-white text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-2 drop-shadow-md">
                Даниил & Мария
              </h1>
              <p className="font-light text-sm md:text-base text-white/90 italic">Приглашаем вас на нашу свадьбу</p>
            </div>
          </div>
          <div className="inline-block relative">
            <Separator className="my-8 w-[250px] md:w-[350px] mx-auto opacity-50" />
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-white px-3">
              <Heart className="h-6 w-6 text-purple-400" fill="#D6BCFA" />
            </div>
          </div>
          <p className="font-playfair text-lg md:text-xl italic text-gray-600 max-w-xl mx-auto">
            С большой радостью приглашаем вас разделить с нами особенный день, 
            когда мы соединим наши сердца и жизни вместе.
          </p>
        </div>
      </section>

      {/* Секция с деталями события */}
      <section id="details" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16 relative">
            Детали события
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-purple-400 mt-2"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 rounded-full bg-purple-100 p-3 w-14 h-14 mx-auto flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Дата</h3>
                <p className="text-gray-600">15 августа 2025 года</p>
                <p className="text-gray-500 text-sm mt-1">Пятница</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 rounded-full bg-purple-100 p-3 w-14 h-14 mx-auto flex items-center justify-center">
                  <Clock className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Время</h3>
                <p className="text-gray-600">Начало в 15:00</p>
                <p className="text-gray-500 text-sm mt-1">Сбор гостей с 14:30</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 rounded-full bg-purple-100 p-3 w-14 h-14 mx-auto flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Место</h3>
                <p className="text-gray-600">Банкетный зал "Элизиум"</p>
                <p className="text-gray-500 text-sm mt-1">ул. Цветочная, 8</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция с дресс-кодом */}
      <section id="dress" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16 relative">
            Дресс-код
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-purple-400 mt-2"></div>
          </h2>
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md py-8 px-6">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-[#D6BCFA] flex items-center justify-center">
                  <span className="text-white font-semibold">Лавандовый</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#D3E4FD] flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">Голубой</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#FDE1D3] flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">Персиковый</span>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#F1F0FB] flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">Светло-серый</span>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Мы будем рады, если вы поддержите цветовую гамму нашего торжества 
                и выберете наряды в пастельных тонах: лавандовый, голубой, персиковый, светло-серый.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-playfair text-lg font-semibold mb-2">Для дам</h4>
                  <p className="text-gray-600">Коктейльные или вечерние платья пастельных оттенков</p>
                </div>
                <div>
                  <h4 className="font-playfair text-lg font-semibold mb-2">Для кавалеров</h4>
                  <p className="text-gray-600">Костюмы светлых тонов, возможны аксессуары в пастельных оттенках</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция с дополнительной информацией */}
      <section id="info" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16 relative">
            Информация для гостей
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-purple-400 mt-2"></div>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4 text-center">
                  Здесь будет размещена дополнительная информация для гостей. 
                  Вы можете написать любые детали, которые считаете важными:
                </p>
                
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Информация о парковке</li>
                  <li>Особые пожелания</li>
                  <li>Программа мероприятия</li>
                  <li>Важные моменты, о которых гостям стоит знать</li>
                </ul>
                
                <p className="text-gray-600 mt-4 text-center italic">
                  Мы с нетерпением ждем встречи с вами в наш особенный день!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция с картой */}
      <section id="map" className="py-20 bg-[#F6F6F7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16 relative">
            Как добраться
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-purple-400 mt-2"></div>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                {/* Заглушка для карты - в реальном проекте здесь будет iframe с Google Maps или Yandex Maps */}
                <div className="relative h-[400px] w-full bg-gray-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2887876554097!2d37.5898224!3d55.7518529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1715181113777!5m2!1sru!2sru" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Карта места проведения"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white rounded-lg shadow-md p-4 max-w-xs">
                    <h3 className="font-playfair text-lg font-semibold mb-2">Банкетный зал "Элизиум"</h3>
                    <p className="text-gray-600 text-sm">ул. Цветочная, 8</p>
                    <p className="text-gray-500 text-xs mt-1">
                      15 минут от станции метро "Цветочная"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Секция с контактами */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-16 relative">
            Свяжитесь с нами
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-20 h-1 bg-purple-400 mt-2"></div>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/90 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 rounded-full bg-blue-100 p-3 w-14 h-14 mx-auto flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1607134577951-d9bbf8920m87?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Даниил" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">Даниил</h3>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <p className="text-gray-600">+7 (123) 456-78-90</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <p className="text-gray-600">daniel@example.com</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/90 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6 text-center">
                  <div className="mb-4 rounded-full bg-pink-100 p-3 w-14 h-14 mx-auto flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3" 
                      alt="Мария" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-2">Мария</h3>
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <p className="text-gray-600">+7 (987) 654-32-10</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <p className="text-gray-600">maria@example.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600">
                Пожалуйста, сообщите о своём присутствии до 1 августа 2025 года
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-8 bg-[#1A1F2C] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-2xl font-bold mb-4">Даниил & Мария</h2>
          <p className="text-white/80 mb-2">15.08.2025</p>
          <p className="text-white/60 text-sm">С нетерпением ждём встречи с вами!</p>
          <Heart className="h-5 w-5 mx-auto mt-4 text-purple-400" fill="#D6BCFA" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
