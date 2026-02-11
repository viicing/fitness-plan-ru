import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';

/**
 * Design Philosophy: Wellness Minimalism
 * - Soft green primary color for completed items
 * - Smooth transitions and hover effects
 * - Supportive, encouraging feedback
 */

interface WorkoutLog {
  id: string;
  date: string;
  workoutType: string;
  duration: number;
  mood: 'excellent' | 'good' | 'neutral' | 'difficult';
  neckPain: number; // 0-10 scale
  notes: string;
}

export default function ProgressTracker() {
  const [logs, setLogs] = useState<WorkoutLog[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<{
    date: string;
    workoutType: string;
    duration: number;
    mood: 'excellent' | 'good' | 'neutral' | 'difficult';
    neckPain: number;
    notes: string;
  }>({
    date: new Date().toISOString().split('T')[0],
    workoutType: 'Кардио + Коррекция Осанки',
    duration: 25,
    mood: 'good',
    neckPain: 5,
    notes: '',
  });

  const handleAddLog = () => {
    if (!formData.date) return;

    const newLog: WorkoutLog = {
      id: Date.now().toString(),
      date: formData.date,
      workoutType: formData.workoutType,
      duration: formData.duration,
      mood: formData.mood,
      neckPain: formData.neckPain,
      notes: formData.notes,
    };

    setLogs([newLog, ...logs]);
    setFormData({
      date: new Date().toISOString().split('T')[0],
      workoutType: 'Кардио + Коррекция Осанки',
      duration: 25,
      mood: 'good',
      neckPain: 5,
      notes: '',
    });
    setShowForm(false);
  };

  const handleDeleteLog = (id: string) => {
    setLogs(logs.filter(log => log.id !== id));
  };

  const getMoodEmoji = (mood: string) => {
    const moods: Record<string, string> = {
      excellent: '😄',
      good: '😊',
      neutral: '😐',
      difficult: '😔',
    };
    return moods[mood] || '😐';
  };

  const getMoodLabel = (mood: string) => {
    const labels: Record<string, string> = {
      excellent: 'Отлично',
      good: 'Хорошо',
      neutral: 'Нейтрально',
      difficult: 'Сложно',
    };
    return labels[mood] || mood;
  };

  const stats = {
    totalWorkouts: logs.length,
    totalMinutes: logs.reduce((sum, log) => sum + log.duration, 0),
    avgNeckPain: logs.length > 0 
      ? Math.round(logs.reduce((sum, log) => sum + log.neckPain, 0) / logs.length)
      : 0,
    goodMoodCount: logs.filter(log => log.mood === 'excellent' || log.mood === 'good').length,
  };

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="p-6 border-border/50 bg-primary/5">
          <p className="text-sm text-muted-foreground mb-2">Всего Тренировок</p>
          <p className="text-3xl font-bold text-primary">{stats.totalWorkouts}</p>
        </Card>
        <Card className="p-6 border-border/50 bg-accent/10">
          <p className="text-sm text-muted-foreground mb-2">Всего Минут</p>
          <p className="text-3xl font-bold text-accent">{stats.totalMinutes}</p>
        </Card>
        <Card className="p-6 border-border/50 bg-secondary/20">
          <p className="text-sm text-muted-foreground mb-2">Средняя Боль в Шее</p>
          <p className="text-3xl font-bold text-primary">{stats.avgNeckPain}/10</p>
        </Card>
        <Card className="p-6 border-border/50 bg-primary/5">
          <p className="text-sm text-muted-foreground mb-2">Хорошее Настроение</p>
          <p className="text-3xl font-bold text-primary">{stats.goodMoodCount}</p>
        </Card>
      </div>

      {/* Add Workout Button */}
      <div>
        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-primary hover:bg-primary/90 text-white w-full md:w-auto"
        >
          {showForm ? 'Отменить' : '+ Добавить Тренировку'}
        </Button>
      </div>

      {/* Add Workout Form */}
      {showForm && (
        <Card className="p-8 border-border/50">
          <h3 className="text-2xl font-bold text-primary mb-6">Добавить Тренировку</h3>
          
          <div className="space-y-6">
            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Дата</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Workout Type */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Тип Тренировки</label>
              <select
                value={formData.workoutType}
                onChange={(e) => setFormData({ ...formData, workoutType: e.target.value })}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option>Кардио + Коррекция Осанки</option>
                <option>Укрепление Шеи и Спины</option>
                <option>Растяжка и Мобильность</option>
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Длительность (минут): {formData.duration}
              </label>
              <input
                type="range"
                min="5"
                max="60"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                className="w-full"
              />
            </div>

            {/* Mood */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-3">Настроение</label>
              <div className="grid grid-cols-4 gap-2">
                {(['excellent', 'good', 'neutral', 'difficult'] as const).map((mood: 'excellent' | 'good' | 'neutral' | 'difficult') => (
                  <button
                    key={mood}
                    onClick={() => setFormData({ ...formData, mood })}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      formData.mood === mood
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{getMoodEmoji(mood)}</span>
                    <span className="text-xs text-foreground/70">{getMoodLabel(mood)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Neck Pain */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                Боль в Шее (0-10): {formData.neckPain}
              </label>
              <input
                type="range"
                min="0"
                max="10"
                value={formData.neckPain}
                onChange={(e) => setFormData({ ...formData, neckPain: parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Нет боли</span>
                <span>Максимальная боль</span>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">Заметки</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Как вы себя чувствовали? Какие-нибудь наблюдения?"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                rows={3}
              />
            </div>

            <Button
              onClick={handleAddLog}
              className="w-full bg-primary hover:bg-primary/90 text-white"
            >
              Сохранить Тренировку
            </Button>
          </div>
        </Card>
      )}

      {/* Workout History */}
      {logs.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-primary mb-6">История Тренировок</h3>
          <div className="space-y-4">
            {logs.map((log) => (
              <Card key={log.id} className="p-6 border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary">{log.workoutType}</h4>
                        <p className="text-sm text-muted-foreground">{log.date}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Длительность</p>
                        <p className="font-semibold text-foreground">{log.duration} минут</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Настроение</p>
                        <p className="font-semibold text-foreground">
                          {getMoodEmoji(log.mood)} {getMoodLabel(log.mood)}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Боль в Шее</p>
                        <p className="font-semibold text-foreground">{log.neckPain}/10</p>
                      </div>
                    </div>

                    {log.notes && (
                      <div className="mt-4 p-3 bg-secondary/10 rounded-lg">
                        <p className="text-sm text-foreground/80">{log.notes}</p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleDeleteLog(log.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors flex-shrink-0"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {logs.length === 0 && !showForm && (
        <Card className="p-12 border-border/50 text-center">
          <Circle className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
          <p className="text-muted-foreground mb-4">Ещё нет записей о тренировках</p>
          <p className="text-sm text-muted-foreground">
            Начните отслеживать свои тренировки, чтобы видеть прогресс!
          </p>
        </Card>
      )}
    </div>
  );
}
