import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Sun, Moon, Palette, Home, Wrench, Award, Users, ChevronRight, ExternalLink, MessageCircle, Facebook, Instagram, Filter, Star, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    materialType: '',
    message: ''
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  const materials = [
    {
      id: 'ceramic',
      name: 'سيراميك فاخر',
      description: 'تشكيلة راقية من السيراميك الإيطالي والأسباني عالي الجودة',
      image: 'https://i.ibb.co/Pvx1ntk0/image.jpg',
      features: ['مقاوم للخدوش والبقع', 'سهل التنظيف والصيانة', 'تشكيلة ألوان وأشكال واسعة', 'مناسب للأرضيات والجدران']
    },
    {
      id: 'marble',
      name: 'رخام طبيعي',
      description: 'أجود أنواع الرخام الطبيعي من أفضل المحاجر العالمية',
      image: 'https://i.ibb.co/3Y7GPDzB/image.jpg',
      features: ['جودة طبيعية 100%', 'مقاوم للحرارة العالية', 'تشطيب فاخر ولامع', 'يزيد قيمة العقار']
    },
    {
      id: 'travertine',
      name: 'ترافرتين فاخر',
      description: 'حجر طبيعي فاخر بملمس مميز وجودة استثنائية من تركيا وإيطاليا',
      image: 'https://i.ibb.co/mr6y7L8L/image.jpg',
      features: ['ملمس طبيعي فريد', 'عازل حراري ممتاز', 'مقاوم للعوامل الجوية', 'مناسب للديكور الداخلي والخارجي']
    },
    {
      id: 'stone',
      name: 'أحجار طبيعية',
      description: 'تشكيلة متنوعة من الأحجار الطبيعية عالية الجودة والمتانة',
      image: 'https://i.ibb.co/PZBfp20t/image.jpg',
      features: ['متانة عالية تدوم لعقود', 'تصاميم وألوان طبيعية فريدة', 'صديق للبيئة', 'يتحسن مع الوقت']
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'فيلا فاخرة - الكويت',
      category: 'marble',
      image: 'https://i.ibb.co/3Y7GPDzB/image.jpg',
      description: 'تشطيب رخامي كامل لفيلا بمساحة 800 متر مربع بأجود أنواع الرخام الإيطالي'
    },
    {
      id: 2,
      title: 'مكتب إداري - الجهراء',
      category: 'ceramic',
      image: 'https://i.ibb.co/Pvx1ntk0/image.jpg',
      description: 'سيراميك فاخر لمكاتب إدارية بمساحة 1200 متر مربع مع تشطيبات عصرية'
    },
    {
      id: 3,
      title: 'قصر - العارضية',
      category: 'travertine',
      image: 'https://i.ibb.co/mr6y7L8L/image.jpg',
      description: 'تشطيب ترافرتين لقصر بتصميم كلاسيكي مع لمسات عصرية راقية'
    },
    {
      id: 4,
      title: 'مجمع تجاري - السالمية',
      category: 'stone',
      image: 'https://i.ibb.co/PZBfp20t/image.jpg',
      description: 'أحجار طبيعية للواجهات الخارجية والديكورات الداخلية'
    }
  ];

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'استشارات تصميم',
      description: 'استشارات متخصصة من فريق الخبراء لاختيار أفضل المواد المناسبة لمشروعك'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'توريد وتركيب',
      description: 'خدمات توريد شاملة مع فريق تركيب محترف وضمان على جودة العمل'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'عينات مجانية',
      description: 'احصل على عينات مجانية من جميع المواد لاختبار الجودة قبل الشراء'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'ضمان الجودة',
      description: 'ضمان شامل على جميع المواد والتركيب مع خدمة ما بعد البيع'
    }
  ];

  const whyChooseUs = [
    {
      title: 'جودة أوروبية',
      description: 'نستورد من أفضل المصانع الأوروبية المعتمدة'
    },
    {
      title: 'فريق محترف',
      description: 'فريق تركيب متخصص مع خبرة تزيد عن 15 عاماً'
    },
    {
      title: 'شحن سريع',
      description: 'شبكة توصيل محلية ودولية سريعة وآمنة'
    },
    {
      title: 'أسعار تنافسية',
      description: 'أفضل الأسعار في السوق مع جودة مضمونة'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('تم إرسال طلبكم بنجاح! سنتواصل معكم قريباً');
    setFormData({ name: '', phone: '', email: '', materialType: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-black text-white' : 'bg-white text-black'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-white/90 backdrop-blur-lg border-b border-black/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://i.ibb.co/PvhYzZL6/image.png" 
                alt="EMAR Kuwait Logo" 
                className={`h-20 w-auto transition-all duration-300 ${darkMode ? 'filter invert' : ''}`}
              />
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 rtl:space-x-reverse">
                <a href="#home" className={`px-3 py-2 text-sm font-medium transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  الرئيسية
                </a>
                <a href="#materials" className={`px-3 py-2 text-sm font-medium transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  المواد
                </a>
                <a href="#projects" className={`px-3 py-2 text-sm font-medium transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  المشاريع
                </a>
                <a href="#contact" className={`px-3 py-2 text-sm font-medium transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  تواصل معنا
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-2 rounded-lg transition-colors ${darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-t ${darkMode ? 'border-white/10 bg-black' : 'border-black/10 bg-white'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className={`block px-3 py-2 text-base font-medium transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                الرئيسية
              </a>
              <a href="#materials" className={`block px-3 py-2 text-base font-medium transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                المواد
              </a>
              <a href="#projects" className={`block px-3 py-2 text-base font-medium transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                المشاريع
              </a>
              <a href="#contact" className={`block px-3 py-2 text-base font-medium transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                تواصل معنا
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://i.ibb.co/3Y7GPDzB/image.jpg')`,
            filter: 'grayscale(100%)'
          }}
        >
          <div className={`absolute inset-0 ${darkMode ? 'bg-black/70' : 'bg-white/70'}`}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            مواد تشطيب فاخرة
            <br />
            <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>لمشاريع استثنائية</span>
          </h1>
          
          <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed`}>
            رخام — سيراميك فاخر — ترافرتين — أحجار طبيعية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              } rounded-lg shadow-lg`}
            >
              اطلب استشارة الآن
              <ArrowRight className="w-5 h-5 inline-block mr-2 rtl:mr-0 rtl:ml-2" />
            </button>
            
            <button 
              onClick={() => document.getElementById('materials')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 text-lg font-semibold border-2 transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'border-white text-white hover:bg-white hover:text-black' 
                  : 'border-black text-black hover:bg-black hover:text-white'
              } rounded-lg`}
            >
              استعرض مجموعتنا
            </button>
          </div>
          
          <div className="mt-12 flex justify-center items-center space-x-8 rtl:space-x-reverse">
            <div className="text-center">
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>500+</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>مشروع منجز</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}><span className="ltr-number">15</span></div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>سنة خبرة</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>100%</div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>رضا العملاء</div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              مجموعة المواد الفاخرة
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              نقدم أجود أنواع مواد التشطيب من أفضل المصانع العالمية لضمان الجودة والأناقة في كل مشروع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {materials.map((material) => (
              <div 
                key={material.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                  darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50 border border-gray-200'
                } shadow-lg hover:shadow-2xl`}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img 
                    src={material.image} 
                    alt={material.name}
                    className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{material.name}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                    {material.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {material.features.map((feature, index) => (
                      <li key={index} className={`flex items-center text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <CheckCircle className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`mt-6 w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      darkMode 
                        ? 'bg-white text-black hover:bg-gray-200' 
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    طلب عرض سعر
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              معرض المشاريع المنجزة
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              استعرض مجموعة من أبرز المشاريع التي أنجزناها باستخدام أجود المواد وأحدث التقنيات
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === 'all'
                  ? darkMode ? 'bg-white text-black' : 'bg-black text-white'
                  : darkMode ? 'border border-white text-white hover:bg-white hover:text-black' : 'border border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              جميع المشاريع
            </button>
            {materials.map((material) => (
              <button
                key={material.id}
                onClick={() => setActiveFilter(material.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === material.id
                    ? darkMode ? 'bg-white text-black' : 'bg-black text-white'
                    : darkMode ? 'border border-white text-white hover:bg-white hover:text-black' : 'border border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                {material.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                  darkMode ? 'bg-black border border-gray-800' : 'bg-white border border-gray-200'
                } shadow-lg hover:shadow-2xl`}
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              خدماتنا المتخصصة
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              نقدم حلولاً شاملة تغطي جميع احتياجاتك من استشارات التصميم إلى التركيب النهائي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`text-center p-8 rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                  darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50 border border-gray-200'
                } hover:shadow-2xl`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 ${
                  darkMode ? 'bg-white text-black' : 'bg-black text-white'
                }`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              لماذا تختار إعمار الكويت؟
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              نتميز بالجودة والخبرة والالتزام في تنفيذ مشاريعنا وتحقيق رضا عملائنا الكرام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-2xl transition-all duration-500 ${
                  darkMode ? 'bg-black border border-gray-800' : 'bg-white border border-gray-200'
                } hover:shadow-lg`}
              >
                <div className="mb-4">
                  <Star className={`w-12 h-12 mx-auto ${darkMode ? 'text-white' : 'text-black'}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              تواصل معنا الآن
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              احصل على استشارة مجانية وعرض سعر مخصص لمشروعك
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50 border border-gray-200'}`}>
              <h3 className="text-2xl font-bold mb-6">طلب عرض سعر</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-offset-2 ${
                      darkMode 
                        ? 'bg-black border-gray-700 text-white focus:ring-white focus:border-white' 
                        : 'bg-white border-gray-300 text-black focus:ring-black focus:border-black'
                    }`}
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    رقم الجوال *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-offset-2 ltr-number ${
                      darkMode 
                        ? 'bg-black border-gray-700 text-white focus:ring-white focus:border-white' 
                        : 'bg-white border-gray-300 text-black focus:ring-black focus:border-black'
                    }`}
                    placeholder="+965 XXXX XXXX"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-offset-2 ${
                      darkMode 
                        ? 'bg-black border-gray-700 text-white focus:ring-white focus:border-white' 
                        : 'bg-white border-gray-300 text-black focus:ring-black focus:border-black'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    نوع المادة المطلوبة
                  </label>
                  <select
                    name="materialType"
                    value={formData.materialType}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-offset-2 ${
                      darkMode 
                        ? 'bg-black border-gray-700 text-white focus:ring-white focus:border-white' 
                        : 'bg-white border-gray-300 text-black focus:ring-black focus:border-black'
                    }`}
                  >
                    <option value="">اختر نوع المادة</option>
                    <option value="ceramic">سيراميك فاخر</option>
                    <option value="marble">رخام طبيعي</option>
                    <option value="travertine">ترافرتين فاخر</option>
                    <option value="stone">أحجار طبيعية</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    تفاصيل المشروع
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-offset-2 ${
                      darkMode 
                        ? 'bg-black border-gray-700 text-white focus:ring-white focus:border-white' 
                        : 'bg-white border-gray-300 text-black focus:ring-black focus:border-black'
                    }`}
                    placeholder="اكتب تفاصيل مشروعك هنا..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-white text-black hover:bg-gray-200' 
                      : 'bg-black text-white hover:bg-gray-800'
                  } shadow-lg`}
                >
                  إرسال الطلب
                  <ArrowRight className="w-5 h-5 inline-block mr-2 rtl:mr-0 rtl:ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50 border border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-6">معلومات التواصل</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className={`w-6 h-6 ml-4 rtl:ml-0 rtl:mr-4 ${darkMode ? 'text-white' : 'text-black'}`} />
                    <div>
                      <p className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>رقم الهاتف</p>
                      <a 
                        href="tel:+96566303444"
                        className={`ltr-number transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                      >
                        <span className="ltr-number">+965 6630 3444</span>
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className={`w-6 h-6 ml-4 rtl:ml-0 rtl:mr-4 ${darkMode ? 'text-white' : 'text-black'}`} />
                    <div>
                      <p className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>البريد الإلكتروني</p>
                      <a 
                        href="mailto:contact@emar-demo.com"
                        className={`transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                      >
                        contact@emar-demo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className={`w-6 h-6 ml-4 rtl:ml-0 rtl:mr-4 ${darkMode ? 'text-white' : 'text-black'}`} />
                    <div>
                      <p className={`font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>الموقع</p>
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>الكويت</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold mb-4">تابعنا على وسائل التواصل</h4>
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61578949436142"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                        darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
                      }`}
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                    
                    <a 
                      href="https://www.instagram.com/emarkuwait?igsh=MWl0YmNxenl4ZTlzcA=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                        darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
                      }`}
                      aria-label="Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    
                    <a 
                      href="https://wa.me/96566303444"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                        darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
                      }`}
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-gray-50 border border-gray-200'}`}>
                <h3 className="text-2xl font-bold mb-6">موقعنا</h3>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894190.8901672251!2d47.0598!3d29.3759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9d00b8c8a0bb%3A0x8b4c3e3e3e3e3e3e!2sKuwait!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ 
                      border: 0,
                      filter: 'grayscale(100%) invert(' + (darkMode ? '1' : '0') + ')'
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EMAR Kuwait Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="https://i.ibb.co/PvhYzZL6/image.png" 
                alt="EMAR Kuwait Logo" 
                className={`h-24 w-auto mb-8 transition-all duration-600 ${darkMode ? 'filter invert' : ''}`}
              />
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-4`}>
                شركة إعمار الكويتية متخصصة في توريد وتركيب أجود أنواع مواد التشطيب الفاخرة
                من رخام وسيراميك وترافرتين وأحجار طبيعية لجميع أنواع المشاريع السكنية والتجارية.
              </p>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <a 
                  href="tel:+96566303444"
                  className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors ${
                    darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  <Phone className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                  <span className="ltr-number">+965 6630 3444</span>
                </a>
                <a 
                  href="https://wa.me/96566303444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors ${
                    darkMode ? 'border border-white text-white hover:bg-white hover:text-black' : 'border border-black text-black hover:bg-black hover:text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2" />
                  واتساب
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><a href="#home" className={`transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>الرئيسية</a></li>
                <li><a href="#materials" className={`transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>المواد</a></li>
                <li><a href="#projects" className={`transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>المشاريع</a></li>
                <li><a href="#contact" className={`transition-colors hover:${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>تواصل معنا</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">خدماتنا</h3>
              <ul className="space-y-2">
                <li className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>استشارات تصميم</li>
                <li className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>توريد وتركيب</li>
                <li className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>عينات مجانية</li>
                <li className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>ضمان الجودة</li>
              </ul>
            </div>
          </div>
          
          <div className={`mt-8 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'} text-center`}>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              © 2025 شركة إعمار الكويتية — جميع الحقوق محفوظة
            </p>
            <p className={`mt-2 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              تم التطوير بواسطة فريق إعمار التقني
            </p>
          </div>
        </div>
      </footer>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "EMAR KUWAIT COMPANY",
          "url": "https://emarkuwait.com",
          "telephone": "+96566303444",
          "email": "contact@emar-demo.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "KW",
            "addressLocality": "Kuwait"
          },
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61578949436142",
            "https://www.instagram.com/emarkuwait?igsh=MWl0YmNxenl4ZTlzcA=="
          ]
        })}
      </script>
    </div>
  );
}

export default App;