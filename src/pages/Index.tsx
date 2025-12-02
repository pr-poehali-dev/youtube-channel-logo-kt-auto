import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import AnimatedLogo from '@/components/AnimatedLogo';

const Index = () => {
  const [selectedBg, setSelectedBg] = useState<'white' | 'black' | 'red'>('white');
  const [selectedBanner, setSelectedBanner] = useState<1 | 2 | 3>(1);

  const logoUrl = 'https://cdn.poehali.dev/projects/85206502-de53-4320-8c76-2f45b374ac33/files/4b823b5d-a184-4a4a-96fc-fca5a31524c2.jpg';
  const bannerUrl = 'https://cdn.poehali.dev/projects/85206502-de53-4320-8c76-2f45b374ac33/files/07058ba2-43c0-46c2-a3ba-b8ac51fb627d.jpg';
  const bannerUrl2 = 'https://cdn.poehali.dev/projects/85206502-de53-4320-8c76-2f45b374ac33/files/ee1af8f9-2516-4aa5-a581-0281ec5b8c74.jpg';
  const bannerUrl3 = 'https://cdn.poehali.dev/projects/85206502-de53-4320-8c76-2f45b374ac33/files/cfb767a1-77bb-4acc-a7ee-e690f3ca022d.jpg';

  const currentBanner = selectedBanner === 1 ? bannerUrl : selectedBanner === 2 ? bannerUrl2 : bannerUrl3;

  const backgrounds = {
    white: 'bg-white',
    black: 'bg-black',
    red: 'bg-red-600',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
            K&T Auto Blog
          </h1>
          <p className="text-xl text-gray-600">Брендинг для YouTube канала</p>
        </header>

        <div className="max-w-6xl mx-auto space-y-8">
          <Card className="p-8 bg-black shadow-xl overflow-hidden">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
                <Icon name="Sparkles" size={28} className="text-red-600" />
                Анимированное интро для видео
              </h2>
              <p className="text-gray-300 mb-4">
                Динамичная анимация логотипа с эффектами скорости и свечения. Идеально для начала ваших видео!
              </p>
            </div>

            <div className="bg-black rounded-lg overflow-hidden shadow-2xl min-h-[500px] relative">
              <AnimatedLogo logoUrl={logoUrl} />
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Icon name="Clock" size={18} className="text-red-600" />
                <span>Длительность: ~3 секунды</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Icon name="Zap" size={18} className="text-red-600" />
                <span>Эффекты: скорость + свечение</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Icon name="Video" size={18} className="text-red-600" />
                <span>Формат: HTML5 анимация</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-900 rounded-lg">
              <p className="text-sm text-gray-300 mb-2">
                <strong className="text-white">Как использовать:</strong> Запишите экран браузера с помощью OBS Studio или подобных программ во время воспроизведения анимации.
              </p>
            </div>
          </Card>
          <Card className="p-8 bg-white shadow-xl overflow-hidden">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="MonitorPlay" size={28} className="text-red-600" />
                Шапка YouTube канала
              </h2>
              <p className="text-gray-600 mb-4">
                Широкоформатный баннер 2560×1440px для оформления канала. Выберите вариант:
              </p>
              <div className="flex gap-3 mb-4 flex-wrap">
                <Button
                  variant={selectedBanner === 1 ? 'default' : 'outline'}
                  onClick={() => setSelectedBanner(1)}
                  className="hover-scale"
                >
                  Спортивный
                </Button>
                <Button
                  variant={selectedBanner === 2 ? 'default' : 'outline'}
                  onClick={() => setSelectedBanner(2)}
                  className="hover-scale"
                >
                  Динамичный
                </Button>
                <Button
                  variant={selectedBanner === 3 ? 'default' : 'outline'}
                  onClick={() => setSelectedBanner(3)}
                  className="hover-scale"
                >
                  Техно
                </Button>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={currentBanner} 
                alt="K&T Auto Blog YouTube Banner" 
                className="w-full h-auto transition-opacity duration-300"
              />
            </div>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Icon name="Monitor" size={18} className="text-red-600" />
                <span>Десктоп: 2560×1440</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Icon name="Tv" size={18} className="text-red-600" />
                <span>ТВ: безопасная зона</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Icon name="Smartphone" size={18} className="text-red-600" />
                <span>Мобильные: адаптивно</span>
              </div>
            </div>

            <div className="mt-6">
              <a 
                href={currentBanner} 
                download={`KT-Auto-Blog-YouTube-Banner-V${selectedBanner}.jpg`}
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  className="hover-scale font-bold w-full md:w-auto"
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать вариант {selectedBanner}
                </Button>
              </a>
            </div>
          </Card>
          <Card className="p-8 bg-white shadow-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Palette" size={28} className="text-red-600" />
                Предварительный просмотр
              </h2>
              <div className="flex gap-3 mb-6">
                <Button
                  variant={selectedBg === 'white' ? 'default' : 'outline'}
                  onClick={() => setSelectedBg('white')}
                  className="hover-scale"
                >
                  Белый фон
                </Button>
                <Button
                  variant={selectedBg === 'black' ? 'default' : 'outline'}
                  onClick={() => setSelectedBg('black')}
                  className="hover-scale"
                >
                  Черный фон
                </Button>
                <Button
                  variant={selectedBg === 'red' ? 'default' : 'outline'}
                  onClick={() => setSelectedBg('red')}
                  className="hover-scale"
                >
                  Красный фон
                </Button>
              </div>
            </div>

            <div className={`${backgrounds[selectedBg]} rounded-lg p-12 flex items-center justify-center transition-all duration-300 min-h-[400px]`}>
              <img 
                src={logoUrl} 
                alt="K&T Auto Blog Logo" 
                className="max-w-md w-full h-auto rounded-lg shadow-2xl animate-scale-in"
              />
            </div>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white shadow-lg hover-scale">
              <div className="flex items-start gap-3 mb-4">
                <Icon name="Zap" size={24} className="text-red-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Динамика</h3>
                  <p className="text-gray-600">
                    Логотип передает энергию и скорость через наклонные линии и агрессивный стиль
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg hover-scale">
              <div className="flex items-start gap-3 mb-4">
                <Icon name="Target" size={24} className="text-red-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Узнаваемость</h3>
                  <p className="text-gray-600">
                    Яркая красно-черная палитра и четкие инициалы K&T делают логотип запоминающимся
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg hover-scale">
              <div className="flex items-start gap-3 mb-4">
                <Icon name="Car" size={24} className="text-red-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Автотематика</h3>
                  <p className="text-gray-600">
                    Элементы автомобильного дизайна органично интегрированы в композицию
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white shadow-lg hover-scale">
              <div className="flex items-start gap-3 mb-4">
                <Icon name="Award" size={24} className="text-red-600 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Профессионализм</h3>
                  <p className="text-gray-600">
                    Современный спортивный стиль подчеркивает экспертность канала
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-red-600 to-red-700 text-white shadow-xl">
            <div className="text-center">
              <Icon name="PackageCheck" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Полный брендинг готов</h3>
              <p className="text-lg mb-6">
                Логотип и шапка для YouTube в едином стиле. Скачайте оба файла и загрузите на канал!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={logoUrl} 
                  download="KT-Auto-Blog-Logo.jpg"
                  className="inline-block"
                >
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="hover-scale font-bold w-full"
                  >
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать логотип
                  </Button>
                </a>
                <a 
                  href={bannerUrl} 
                  download="KT-Auto-Blog-YouTube-Banner.jpg"
                  className="inline-block"
                >
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="hover-scale font-bold w-full"
                  >
                    <Icon name="Download" size={20} className="mr-2" />
                    Скачать баннер
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>

        <footer className="text-center mt-16 text-gray-500">
          <p>Создано для K&T Auto Blog • 2024</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;