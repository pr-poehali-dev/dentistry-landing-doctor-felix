import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Smile" size={20} className="text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">Doctor Felix</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
            <a href="#doctors" className="text-gray-600 hover:text-primary transition-colors">Врачи</a>
            <a href="#prices" className="text-gray-600 hover:text-primary transition-colors">Цены</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button>Записаться</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Здоровая улыбка — <br />
            <span className="text-primary">ваше счастье</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Современная стоматология с индивидуальным подходом. 
            Безболезненное лечение и профилактика в комфортной атмосфере.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-3">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на прием
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный спектр стоматологических услуг с использованием современного оборудования
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Shield",
                title: "Профилактика",
                description: "Регулярные осмотры, профессиональная чистка, фторирование",
                price: "от 2 500 ₽"
              },
              {
                icon: "Wrench",
                title: "Лечение кариеса",
                description: "Современные пломбы, безболезненное лечение",
                price: "от 4 000 ₽"
              },
              {
                icon: "Sparkles",
                title: "Отбеливание",
                description: "Профессиональное отбеливание зубов, безопасные методы",
                price: "от 15 000 ₽"
              },
              {
                icon: "Crown",
                title: "Протезирование",
                description: "Коронки, мосты, съемные и несъемные протезы",
                price: "от 20 000 ₽"
              },
              {
                icon: "Zap",
                title: "Имплантация",
                description: "Современные импланты, малоинвазивные методы",
                price: "от 45 000 ₽"
              },
              {
                icon: "Scissors",
                title: "Хирургия",
                description: "Удаление зубов, пластика десен, костная пластика",
                price: "от 3 000 ₽"
              }
            ].map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши врачи</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Опытные специалисты с многолетней практикой и постоянным повышением квалификации
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Феликс Александров",
                specialty: "Главный врач, стоматолог-терапевт",
                experience: "15 лет опыта",
                image: "/img/6f92bb6d-b700-4df2-b561-c6a2d9153a6f.jpg",
                education: "МГМСУ им. А.И. Евдокимова"
              },
              {
                name: "Анна Петрова",
                specialty: "Стоматолог-хирург, имплантолог",
                experience: "12 лет опыта", 
                image: "/img/01166204-1472-4a0e-8acd-68fc485fca25.jpg",
                education: "СПбГМУ им. И.П. Павлова"
              },
              {
                name: "Дмитрий Соколов",
                specialty: "Ортопед, протезист",
                experience: "10 лет опыта",
                image: "/img/6f92bb6d-b700-4df2-b561-c6a2d9153a6f.jpg",
                education: "РУДН, стоматологический факультет"
              }
            ].map((doctor, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{doctor.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-2 text-primary" />
                      {doctor.experience}
                    </div>
                    <div className="flex items-center">
                      <Icon name="GraduationCap" size={16} className="mr-2 text-primary" />
                      {doctor.education}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Прозрачные цены</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Никаких скрытых платежей. Все цены указаны с учетом материалов и работы
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {[
                { service: "Консультация и осмотр", price: "Бесплатно" },
                { service: "Профессиональная гигиена", price: "2 500 ₽" },
                { service: "Лечение кариеса (1 поверхность)", price: "4 000 ₽" },
                { service: "Лечение пульпита", price: "8 000 ₽" },
                { service: "Установка коронки", price: "20 000 ₽" },
                { service: "Имплант + коронка", price: "65 000 ₽" },
                { service: "Профессиональное отбеливание", price: "15 000 ₽" },
                { service: "Удаление зуба", price: "3 000 ₽" }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-b-0">
                  <span className="text-gray-900 font-medium">{item.service}</span>
                  <span className="text-primary font-semibold">{item.price}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
              <Icon name="Info" size={20} className="text-primary mx-auto mb-2" />
              <p className="text-gray-700">
                Окончательная стоимость определяется после консультации и составления плана лечения
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты и запись</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом или оставьте заявку
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src="/img/3fa678b6-d246-4a79-acf7-a51cd2c18149.jpg" 
                  alt="Клиника Doctor Felix"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Примерная, д. 15</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Режим работы</h3>
                    <p className="text-gray-600">
                      Пн-Пт: 9:00 - 21:00<br />
                      Сб-Вс: 10:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Записаться на прием</CardTitle>
                <CardDescription>
                  Оставьте заявку и мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Услуга</label>
                  <Input placeholder="Консультация, лечение кариеса..." />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Комментарий</label>
                  <Textarea placeholder="Дополнительная информация..." rows={3} />
                </div>
                <Button className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Smile" size={20} className="text-white" />
                </div>
                <span className="text-xl font-semibold">Doctor Felix</span>
              </div>
              <p className="text-gray-400">
                Современная стоматологическая клиника с индивидуальным подходом к каждому пациенту.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Профилактика и гигиена</li>
                <li>Лечение кариеса</li>
                <li>Протезирование</li>
                <li>Имплантация</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>г. Москва, ул. Примерная, д. 15</p>
                <p>+7 (495) 123-45-67</p>
                <p>info@doctorfelix.ru</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Doctor Felix. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}