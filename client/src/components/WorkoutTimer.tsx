import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';

/**
 * Design Philosophy: Wellness Minimalism
 * - Large, easy-to-read timer display
 * - Smooth animations and transitions
 * - Supportive feedback with sound options
 */

interface TimerPhase {
  name: string;
  duration: number; // in seconds
}

const WORKOUT_PHASES: TimerPhase[] = [
  { name: 'Разминка', duration: 300 }, // 5 minutes
  { name: 'Упражнение 1', duration: 45 },
  { name: 'Отдых', duration: 15 },
  { name: 'Упражнение 2', duration: 45 },
  { name: 'Отдых', duration: 15 },
  { name: 'Упражнение 3', duration: 45 },
  { name: 'Отдых', duration: 15 },
  { name: 'Упражнение 4', duration: 45 },
  { name: 'Отдых', duration: 15 },
  { name: 'Упражнение 5', duration: 45 },
  { name: 'Заминка', duration: 300 }, // 5 minutes
];

export default function WorkoutTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(WORKOUT_PHASES[0].duration);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [totalTimeSpent, setTotalTimeSpent] = useState(0);

  const currentPhase = WORKOUT_PHASES[currentPhaseIndex];
  const progress = ((currentPhase.duration - timeLeft) / currentPhase.duration) * 100;
  const isRestPhase = currentPhase.name.includes('Отдых');

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        setTotalTimeSpent((prev) => prev + 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      // Move to next phase
      playSound();
      if (currentPhaseIndex < WORKOUT_PHASES.length - 1) {
        setCurrentPhaseIndex((prev) => prev + 1);
        setTimeLeft(WORKOUT_PHASES[currentPhaseIndex + 1].duration);
      } else {
        // Workout complete
        setIsRunning(false);
        playSound();
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, currentPhaseIndex]);

  const playSound = () => {
    if (!soundEnabled) return;

    // Create a simple beep sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = 800;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCurrentPhaseIndex(0);
    setTimeLeft(WORKOUT_PHASES[0].duration);
    setTotalTimeSpent(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const totalWorkoutTime = WORKOUT_PHASES.reduce((sum, phase) => sum + phase.duration, 0);
  const overallProgress = ((totalWorkoutTime - (WORKOUT_PHASES.slice(currentPhaseIndex).reduce((sum, phase) => sum + phase.duration, 0) + timeLeft)) / totalWorkoutTime) * 100;

  return (
    <div className="space-y-8">
      <Card className={`p-12 border-2 transition-all ${
        isRestPhase
          ? 'border-accent/50 bg-accent/5'
          : 'border-primary/50 bg-primary/5'
      }`}>
        {/* Phase Name */}
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground mb-2">Текущий Этап</p>
          <h2 className={`text-4xl font-bold ${isRestPhase ? 'text-accent' : 'text-primary'}`}>
            {currentPhase.name}
          </h2>
        </div>

        {/* Timer Display */}
        <div className="text-center mb-8">
          <div className={`text-8xl font-bold font-mono mb-4 transition-colors ${
            isRestPhase ? 'text-accent' : 'text-primary'
          }`}>
            {formatTime(timeLeft)}
          </div>

          {/* Phase Progress Bar */}
          <div className="w-full bg-border rounded-full h-3 overflow-hidden mb-4">
            <div
              className={`h-full transition-all duration-300 ${
                isRestPhase ? 'bg-accent' : 'bg-primary'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Overall Progress */}
          <div className="text-sm text-muted-foreground mb-6">
            Фаза {currentPhaseIndex + 1} из {WORKOUT_PHASES.length}
          </div>

          {/* Overall Progress Bar */}
          <div className="w-full bg-border rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-8 py-3 text-lg font-semibold transition-all ${
              isRunning
                ? 'bg-destructive hover:bg-destructive/90 text-white'
                : 'bg-primary hover:bg-primary/90 text-white'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-5 h-5 mr-2" />
                Пауза
              </>
            ) : (
              <>
                <Play className="w-5 h-5 mr-2" />
                Старт
              </>
            )}
          </Button>

          <Button
            onClick={handleReset}
            variant="outline"
            className="px-8 py-3 text-lg font-semibold"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Сброс
          </Button>

          <Button
            onClick={() => setSoundEnabled(!soundEnabled)}
            variant="outline"
            className="px-6 py-3"
          >
            {soundEnabled ? (
              <Volume2 className="w-5 h-5" />
            ) : (
              <VolumeX className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Total Time Spent */}
        <div className="text-center text-sm text-muted-foreground">
          Всего потрачено: {formatTime(totalTimeSpent)}
        </div>
      </Card>

      {/* Workout Phases List */}
      <div>
        <h3 className="text-2xl font-bold text-primary mb-6">План Тренировки</h3>
        <div className="space-y-2">
          {WORKOUT_PHASES.map((phase, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border transition-all ${
                index === currentPhaseIndex
                  ? `border-primary bg-primary/10 ${isRestPhase ? 'border-accent bg-accent/10' : ''}`
                  : index < currentPhaseIndex
                  ? 'border-border/50 bg-muted/30'
                  : 'border-border/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    index === currentPhaseIndex
                      ? 'bg-primary text-white'
                      : index < currentPhaseIndex
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-border text-foreground/50'
                  }`}>
                    {index < currentPhaseIndex ? '✓' : index + 1}
                  </div>
                  <span className="font-semibold text-foreground">{phase.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{formatTime(phase.duration)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <Card className="p-6 border-border/50 bg-secondary/10">
        <h4 className="font-semibold text-primary mb-3">Советы для Успешной Тренировки</h4>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li>• Убедитесь, что у вас есть вода рядом</li>
          <li>• Слушайте своё тело и не переусложняйте</li>
          <li>• Во время отдыха дышите глубоко и восстанавливайтесь</li>
          <li>• Звуковые сигналы помогут вам отслеживать время</li>
        </ul>
      </Card>
    </div>
  );
}
