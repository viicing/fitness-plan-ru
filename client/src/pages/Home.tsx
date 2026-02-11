import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Heart, Zap, Calendar, BookOpen } from "lucide-react";

/**
 * Design Philosophy: Wellness Minimalism
 * - Soft green (#4A9B6F) as primary, warm beige (#F5E6D3) as secondary
 * - Playfair Display for headers, Open Sans for body
 * - Large, breathing sections with soft rounded corners
 * - Supportive, warm tone
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-primary">Мой План Тренировок</h1>
          </div>
          <div className="text-sm text-muted-foreground">Персональный план для вас</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="container py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Ваш Путь к Здоровью и Благополучию
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                Этот план разработан специально для вас. Он учитывает ваши цели, ваши возможности и ваше психическое здоровье. Вы сможете улучшить выносливость, исправить осанку и избавиться от боли в шее, тренируясь дома всего 3-4 раза в неделю.
              </p>
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Начать Тренировку
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Узнать Больше
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/B4zhsoeewe9Gnne9emaZrq/sandbox/B4YBkgP3WBnnQzJLToavk9-img-1_1770812762000_na1fn_aGVyby1maXRuZXNzLXdvbWFu.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQjR6aHNvZWV3ZTlHbm5lOWVtYVpycS9zYW5kYm94L0I0WUJrZ1AzV0JublF6SkxUb2F2azktaW1nLTFfMTc3MDgxMjc2MjAwMF9uYTFmbl9hR1Z5YnkxbWFYUnVaWE56TFhkdmJXRnUucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ucdky9dH075l4yJhJW7bk8296xcjLbUNoW3kZdknkWitpo9M84KmccTXqo4YOBswwEDImEHKAzZHKqciDJiy3ZktZ-ou75i5Sl770x38lETuUhERqUHPGTfOAHsxTVw16O~WD6kSdHmrOd60UcAwzYezHn0XAKdLdRiwAJIaH6U0cTuJn6GoS4X8QfvD3O7wblm6Nz5crmw5gr6ZUCKIBL1Sgd6kPVH0aBLzLcwGQSuZzhHu5NuzVVsGsdc1dKwlv-X0JKgTrtgER3JVnvQugbZoyGMS1vLYdLGRoeIUhFefns2Qml9eenYOB1Prv0LePOAZnuuWau0qVXGupfukcQ__"
                alt="Woman doing neck stretch at home"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About You Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Ваш Профиль
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Heart className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-bold text-primary">Основные Данные</h3>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li><span className="font-semibold">Возраст:</span> 26 лет</li>
                <li><span className="font-semibold">Рост:</span> 158 см</li>
                <li><span className="font-semibold">Вес:</span> 52 кг</li>
                <li><span className="font-semibold">Уровень:</span> Начинающая</li>
              </ul>
            </Card>

            <Card className="p-8 border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-bold text-primary">Ваши Цели</h3>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Улучшение выносливости</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Коррекция осанки</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Избавление от боли в шее</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-8 h-8 text-secondary" />
                <h3 className="text-xl font-bold text-primary">Расписание</h3>
              </div>
              <ul className="space-y-3 text-foreground/80">
                <li><span className="font-semibold">Частота:</span> 3-4 раза в неделю</li>
                <li><span className="font-semibold">Длительность:</span> 15-30 минут</li>
                <li><span className="font-semibold">Место:</span> Дома</li>
                <li><span className="font-semibold">Оборудование:</span> Не требуется</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Workouts Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Ваши Тренировки
          </h2>
          
          <Tabs defaultValue="schedule" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="schedule">Расписание</TabsTrigger>
              <TabsTrigger value="details">Детали Тренировок</TabsTrigger>
            </TabsList>

            <TabsContent value="schedule">
              <Card className="p-8 border-border/50">
                <h3 className="text-2xl font-bold text-primary mb-6">Рекомендуемое Расписание</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="font-semibold text-primary">Понедельник</p>
                      <p className="text-foreground/80">Кардио + Коррекция Осанки</p>
                      <p className="text-sm text-muted-foreground">25 минут</p>
                    </div>
                    <div className="p-4 bg-secondary/20 rounded-lg border border-secondary/30">
                      <p className="font-semibold text-primary">Вторник</p>
                      <p className="text-foreground/80">Отдых</p>
                    </div>
                    <div className="p-4 bg-accent/10 rounded-lg border border-accent/30">
                      <p className="font-semibold text-primary">Среда</p>
                      <p className="text-foreground/80">Укрепление Шеи и Спины</p>
                      <p className="text-sm text-muted-foreground">20 минут</p>
                    </div>
                    <div className="p-4 bg-secondary/20 rounded-lg border border-secondary/30">
                      <p className="font-semibold text-primary">Четверг</p>
                      <p className="text-foreground/80">Отдых</p>
                    </div>
                    <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <p className="font-semibold text-primary">Пятница</p>
                      <p className="text-foreground/80">Кардио + Коррекция Осанки</p>
                      <p className="text-sm text-muted-foreground">25 минут</p>
                    </div>
                    <div className="p-4 bg-secondary/20 rounded-lg border border-secondary/30">
                      <p className="font-semibold text-primary">Суббота</p>
                      <p className="text-foreground/80">Отдых</p>
                    </div>
                    <div className="p-4 bg-accent/10 rounded-lg border border-accent/30">
                      <p className="font-semibold text-primary">Воскресенье</p>
                      <p className="text-foreground/80">Растяжка и Мобильность</p>
                      <p className="text-sm text-muted-foreground">20 минут</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="details">
              <div className="space-y-8">
                <Card className="p-8 border-border/50">
                  <h3 className="text-2xl font-bold text-primary mb-4">Тренировка 1: Кардио + Коррекция Осанки</h3>
                  <p className="text-foreground/80 mb-6">25 минут | Понедельник, Пятница</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Разминка (5 минут)</h4>
                      <ul className="text-foreground/80 space-y-1 ml-4">
                        <li>• Лёгкая ходьба на месте (1 минута)</li>
                        <li>• Круговые движения руками (1 минута)</li>
                        <li>• Наклоны туловища (1 минута)</li>
                        <li>• Динамическая растяжка ног (2 минуты)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Основная Часть (15 минут)</h4>
                      <p className="text-sm text-muted-foreground mb-2">3 цикла × 5 минут. 45 сек упражнение, 15 сек отдых</p>
                      <ul className="text-foreground/80 space-y-1 ml-4">
                        <li>• Марш на месте с высоким подниманием колен</li>
                        <li>• Отжимания от стены</li>
                        <li>• Приседания с руками вверх</li>
                        <li>• Боковые выпады</li>
                        <li>• Планка у стены</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Заминка (5 минут)</h4>
                      <ul className="text-foreground/80 space-y-1 ml-4">
                        <li>• Растяжка груди (1 минута)</li>
                        <li>• Растяжка плеч (1 минута)</li>
                        <li>• Наклоны вперёд (1 минута)</li>
                        <li>• Дыхательные упражнения (2 минуты)</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-border/50">
                  <h3 className="text-2xl font-bold text-primary mb-4">Тренировка 2: Укрепление Шеи и Спины</h3>
                  <p className="text-foreground/80 mb-6">20 минут | Среда, Воскресенье</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Разминка (3 минуты)</h4>
                      <ul className="text-foreground/80 space-y-1 ml-4">
                        <li>• Лёгкая ходьба (1 минута)</li>
                        <li>• Круговые движения плечами (1 минута)</li>
                        <li>• Наклоны головы (1 минута)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Основная Часть (14 минут)</h4>
                      <p className="text-sm text-muted-foreground mb-2">2 цикла × 7 минут. 45 сек упражнение, 15 сек отдых</p>
                      <ul className="text-foreground/80 space-y-1 ml-4">
                        <li>• Стена-ангел (Wall Angels)</li>
                        <li>• Сжатие лопаток (Scapular Squeeze)</li>
                        <li>• Тяга в наклоне (Bent-Over Row)</li>
                        <li>• Подъём рук в стороны (Lateral Raise)</li>
                        <li>• Растяжка верхней трапеции</li>
                        <li>• Растяжка мышцы, поднимающей лопатку</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Заминка (3 минуты)</h4>
                      <ul className="text-foreground/80 space-y-1 ml-4">
                        <li>• Растяжка груди (1 минута)</li>
                        <li>• Растяжка шеи (1 минута)</li>
                        <li>• Дыхание (1 минута)</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 border-border/50">
                  <h3 className="text-2xl font-bold text-primary mb-4">Тренировка 3: Растяжка и Мобильность</h3>
                  <p className="text-foreground/80 mb-6">20 минут | Воскресенье</p>
                  
                  <div className="space-y-4">
                    <p className="text-foreground/80">Выполняйте каждое упражнение в течение 30-45 секунд в спокойном темпе.</p>
                    <ul className="text-foreground/80 space-y-1 ml-4">
                      <li>• Кошка-корова (Cat-Cow)</li>
                      <li>• Растяжка груди</li>
                      <li>• Растяжка верхней трапеции</li>
                      <li>• Растяжка мышцы, поднимающей лопатку</li>
                      <li>• Растяжка спины</li>
                      <li>• Растяжка плеч</li>
                      <li>• Растяжка боков</li>
                      <li>• Растяжка шеи</li>
                      <li>• Дыхание и релаксация (9 минут)</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Key Principles Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Ключевые Принципы Вашего Плана
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="p-6 border-border/50 hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-primary mb-3">Для Управления Биполярным Расстройством</h3>
                <p className="text-foreground/80 mb-4">
                  Физические упражнения имеют мощный эффект на регуляцию настроения. Исследования показывают, что регулярные тренировки могут снизить симптомы депрессии на 50% и более.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Последовательность критична</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Утренние тренировки предпочтительнее</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Слушайте своё тело</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Отслеживайте своё настроение</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-border/50 hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-primary mb-3">Для Управления СДВГ</h3>
                <p className="text-foreground/80 mb-4">
                  Упражнения помогают улучшить концентрацию и внимание. Разнообразие и структура критичны.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Разнообразие в каждой тренировке</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Утренние тренировки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Сложные движения для активации мозга</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Структурированное расписание</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-border/50 hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-primary mb-3">Для Здоровья Шеи</h3>
                <p className="text-foreground/80 mb-4">
                  Боль в шее и хрусты часто вызваны мышечным напряжением и слабостью. Ваш план специально разработан для решения этой проблемы.
                </p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Укрепление мышц шеи и спины</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Регулярная растяжка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Безопасные, контролируемые движения</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Постепенное улучшение</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6 border-border/50 hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-primary mb-3">Советы по Успеху</h3>
                <ul className="space-y-2 text-sm text-foreground/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Установите напоминания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Создайте рутину</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Отслеживайте прогресс</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Будьте добры к себе</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Готовы Начать?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Помните, что это ваш персональный план, разработанный специально для вас. Вы уникальны, и ваше путешествие к здоровью будет уникальным. Будьте последовательны, будьте терпеливы, и вы увидите результаты.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
            Начать Первую Тренировку на Этой Неделе
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Этот план разработан с учётом ваших индивидуальных особенностей и целей.</p>
          <p className="mt-2">Если у вас есть вопросы или вам нужна помощь, обратитесь к врачу.</p>
        </div>
      </footer>
    </div>
  );
}
