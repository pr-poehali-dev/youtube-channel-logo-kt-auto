import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedBg, setSelectedBg] = useState<'white' | 'black' | 'red'>('white');

  const logoUrl = 'https://cdn.poehali.dev/projects/85206502-de53-4320-8c76-2f45b374ac33/files/4b823b5d-a184-4a4a-96fc-fca5a31524c2.jpg';

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
          <p className="text-xl text-gray-600">Логотип YouTube канала</p>
        </header>

        <div className="max-w-5xl mx-auto space-y-8">
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
              <Icon name="Download" size={48} className="mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Готово к использованию</h3>
              <p className="text-lg mb-6">
                Логотип создан в квадратном формате, идеально подходит для YouTube, социальных сетей и мерча
              </p>
              <a 
                href={logoUrl} 
                download="KT-Auto-Blog-Logo.jpg"
                className="inline-block"
              >
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="hover-scale font-bold"
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать логотип
                </Button>
              </a>
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
