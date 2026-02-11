import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, AlertCircle } from 'lucide-react';

/**
 * Design Philosophy: Wellness Minimalism
 * - Clear, organized video demonstrations
 * - Safety tips and proper form guidance
 * - Accessible, easy-to-follow instructions
 */

interface Exercise {
  id: string;
  name: string;
  category: 'cardio' | 'neck' | 'stretch';
  duration: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  instructions: string[];
  safetyTips: string[];
  videoUrl: string; // YouTube embed URL or placeholder
}

const EXERCISES: Exercise[] = [
  {
    id: 'march',
    name: 'Марш на Месте с Высоким Подниманием Колен',
    category: 'cardio',
    duration: '45 сек',
    difficulty: 'easy',
    description: 'Базовое кардио упражнение для разминки и повышения пульса.',
    instructions: [
      'Встаньте прямо, ноги на ширине плеч',
      'Начните поднимать колени поочередно, как при ходьбе',
      'Поднимайте колени как можно выше, но комфортно',
      'Двигайте руками в такт с ногами',
      'Поддерживайте ритмичное дыхание',
    ],
    safetyTips: [
      'Убедитесь, что у вас достаточно места для движения',
      'Не напрягайте шею и плечи',
      'Если чувствуете головокружение, замедлитесь',
    ],
    videoUrl: 'https://www.youtube.com/embed/placeholder-march',
  },
  {
    id: 'wall-pushups',
    name: 'Отжимания от Стены',
    category: 'cardio',
    duration: '45 сек',
    difficulty: 'easy',
    description: 'Безопасное упражнение для укрепления груди и рук без нагрузки на шею.',
    instructions: [
      'Встаньте лицом к стене на расстоянии вытянутых рук',
      'Положите ладони на стену на уровне плеч',
      'Согните локти и наклонитесь к стене',
      'Выпрямите руки и вернитесь в исходное положение',
      'Выполняйте движения контролируемо',
    ],
    safetyTips: [
      'Держите спину прямой',
      'Не поворачивайте голову во время упражнения',
      'Дышите равномерно',
    ],
    videoUrl: 'https://www.youtube.com/embed/placeholder-wall-pushups',
  },
  {
    id: 'wall-angels',
    name: 'Стена-Ангел (Wall Angels)',
    category: 'neck',
    duration: '45 сек',
    difficulty: 'easy',
    description: 'Отличное упражнение для коррекции осанки и укрепления мышц спины.',
    instructions: [
      'Встаньте спиной к стене, ноги на 15 см от стены',
      'Поднимите руки в стороны на уровне плеч, согнув локти на 90°',
      'Медленно поднимайте руки вверх, скользя по стене',
      'Вернитесь в исходное положение',
      'Выполняйте движения плавно и контролируемо',
    ],
    safetyTips: [
      'Спина должна быть прижата к стене',
      'Не отрывайте локти от стены',
      'Если чувствуете боль в плече, уменьшите амплитуду',
    ],
    videoUrl: 'https://www.youtube.com/embed/placeholder-wall-angels',
  },
  {
    id: 'scapular-squeeze',
    name: 'Сжатие Лопаток (Scapular Squeeze)',
    category: 'neck',
    duration: '45 сек',
    difficulty: 'easy',
    description: 'Упражнение для активации и укрепления мышц между лопатками.',
    instructions: [
      'Встаньте прямо, руки вдоль тела',
      'Сожмите лопатки вместе, как будто пытаясь спрятать их в карманы',
      'Удерживайте позицию 2-3 секунды',
      'Расслабьтесь и повторите',
      'Выполняйте движения медленно и осознанно',
    ],
    safetyTips: [
      'Не поднимайте плечи к ушам',
      'Дышите естественно, не задерживайте дыхание',
      'Сосредоточьтесь на ощущении мышц между лопатками',
    ],
    videoUrl: 'https://www.youtube.com/embed/placeholder-scapular-squeeze',
  },
  {
    id: 'neck-stretch-trapezius',
    name: 'Растяжка Верхней Трапеции',
    category: 'stretch',
    duration: '30 сек',
    difficulty: 'easy',
    description: 'Мягкая растяжка для снятия напряжения в верхней части спины и шеи.',
    instructions: [
      'Встаньте или сидите прямо',
      'Положите правую руку на левую сторону головы',
      'Медленно наклоняйте голову вправо, пока не почувствуете растяжку',
      'Удерживайте позицию 30 секунд',
      'Повторите с другой стороны',
    ],
    safetyTips: [
      'Не делайте резких движений',
      'Растяжка должна быть приятной, не болезненной',
      'Дышите глубоко и расслабляйтесь',
      'Не поворачивайте голову во время растяжки',
    ],
    videoUrl: 'https://www.youtube.com/embed/placeholder-trapezius-stretch',
  },
  {
    id: 'chest-stretch',
    name: 'Растяжка Груди',
    category: 'stretch',
    duration: '30 сек',
    difficulty: 'easy',
    description: 'Растяжка для открытия груди и улучшения осанки.',
    instructions: [
      'Встаньте в дверном проёме или рядом со стеной',
      'Поднимите руку на уровне плеча и положите предплечье на дверной косяк',
      'Медленно поворачивайте туловище вперёд',
      'Удерживайте позицию 30 секунд',
      'Повторите с другой стороны',
    ],
    safetyTips: [
      'Не делайте резких движений',
      'Растяжка должна быть приятной, не болезненной',
      'Дышите глубоко',
    ],
    videoUrl: 'https://www.youtube.com/embed/placeholder-chest-stretch',
  },
];

export default function ExerciseVideos() {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(EXERCISES[0]);

  const cardioExercises = EXERCISES.filter(e => e.category === 'cardio');
  const neckExercises = EXERCISES.filter(e => e.category === 'neck');
  const stretchExercises = EXERCISES.filter(e => e.category === 'stretch');

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-primary/20 text-primary';
      case 'medium':
        return 'bg-accent/20 text-accent';
      case 'hard':
        return 'bg-destructive/20 text-destructive';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'Легко';
      case 'medium':
        return 'Среднее';
      case 'hard':
        return 'Сложно';
      default:
        return difficulty;
    }
  };

  const renderExerciseList = (exercises: Exercise[]) => (
    <div className="space-y-3">
      {exercises.map((exercise) => (
        <button
          key={exercise.id}
          onClick={() => setSelectedExercise(exercise)}
          className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
            selectedExercise?.id === exercise.id
              ? 'border-primary bg-primary/5'
              : 'border-border/50 hover:border-primary/30'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h4 className="font-semibold text-primary mb-1">{exercise.name}</h4>
              <p className="text-sm text-muted-foreground">{exercise.description}</p>
            </div>
            <Play className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          </div>
        </button>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      <Tabs defaultValue="cardio" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="cardio">Кардио</TabsTrigger>
          <TabsTrigger value="neck">Шея и Спина</TabsTrigger>
          <TabsTrigger value="stretch">Растяжка</TabsTrigger>
        </TabsList>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Exercise List */}
          <div className="md:col-span-1">
            <TabsContent value="cardio" className="mt-0">
              {renderExerciseList(cardioExercises)}
            </TabsContent>
            <TabsContent value="neck" className="mt-0">
              {renderExerciseList(neckExercises)}
            </TabsContent>
            <TabsContent value="stretch" className="mt-0">
              {renderExerciseList(stretchExercises)}
            </TabsContent>
          </div>

          {/* Exercise Details */}
          <div className="md:col-span-2">
            {selectedExercise && (
              <div className="space-y-6">
                {/* Video Placeholder */}
                <Card className="p-0 border-border/50 overflow-hidden">
                  <div className="aspect-video bg-muted flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                      <p className="text-muted-foreground">
                        Видео-демонстрация упражнения
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Видео будут добавлены в ближайшее время
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Exercise Info */}
                <Card className="p-6 border-border/50">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {selectedExercise.name}
                      </h3>
                      <p className="text-foreground/80">{selectedExercise.description}</p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex gap-4 mb-6">
                    <div className="px-3 py-1 rounded-full bg-muted text-sm text-foreground/70">
                      ⏱️ {selectedExercise.duration}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(selectedExercise.difficulty)}`}>
                      {getDifficultyLabel(selectedExercise.difficulty)}
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">Инструкции</h4>
                    <ol className="space-y-2">
                      {selectedExercise.instructions.map((instruction, index) => (
                        <li key={index} className="flex gap-3 text-foreground/80">
                          <span className="font-semibold text-primary flex-shrink-0">
                            {index + 1}.
                          </span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Safety Tips */}
                  <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-accent mb-2">Советы Безопасности</h5>
                        <ul className="space-y-1">
                          {selectedExercise.safetyTips.map((tip, index) => (
                            <li key={index} className="text-sm text-foreground/80">
                              • {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </div>
        </div>
      </Tabs>

      {/* General Tips */}
      <Card className="p-6 border-border/50 bg-secondary/10">
        <h4 className="font-semibold text-primary mb-3">Общие Советы для Всех Упражнений</h4>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li>• Всегда начинайте с разминки</li>
          <li>• Слушайте своё тело и не переусложняйте</li>
          <li>• Если чувствуете боль, остановитесь и отдохните</li>
          <li>• Дышите естественно, не задерживайте дыхание</li>
          <li>• Выполняйте упражнения в контролируемом темпе</li>
          <li>• Пейте воду до, во время и после тренировки</li>
        </ul>
      </Card>
    </div>
  );
}
