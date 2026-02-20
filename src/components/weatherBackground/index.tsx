'use client';

import { useEffect, useState } from 'react';
import styles from './index.module.scss';

type WeatherType = 'clear' | 'clouds' | 'rain' | 'snow' | 'thunder' | 'mist';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  symbol: string;
};

const WEATHER_SYMBOLS: Record<WeatherType, string[]> = {
  clear: ['☀', '✦', '⋆', '✧', '○'],
  clouds: ['☁', '⋆', '✧', '○', '◌'],
  rain: ['/', '/', '/', '⋆', '✧'],
  snow: ['❅', '❆', '✧', '⋆', '*'],
  thunder: ['⚡', '✦', '⋆', '/', '/'],
  mist: ['◌', '○', '⋆', '·', '✧'],
};

const WEATHER_CITY = 'Tokyo';

const getWeatherType = (weatherId: number): WeatherType => {
  if (weatherId >= 200 && weatherId < 300) return 'thunder';
  if (weatherId >= 300 && weatherId < 600) return 'rain';
  if (weatherId >= 600 && weatherId < 700) return 'snow';
  if (weatherId >= 700 && weatherId < 800) return 'mist';
  if (weatherId === 800) return 'clear';
  return 'clouds';
};

const getWeatherFromTime = (): WeatherType => {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 10) return 'mist';
  if (hour >= 10 && hour < 17) return 'clear';
  if (hour >= 17 && hour < 20) return 'clouds';
  return 'clear';
};

const WeatherBackground = () => {
  const [weather, setWeather] = useState<WeatherType>('clear');
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${WEATHER_CITY}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY || ''}&units=metric`,
        );
        if (res.ok) {
          const data = await res.json();
          const type = getWeatherType(data.weather[0].id);
          setWeather(type);
          return;
        }
      } catch {
        // API失敗時は時間帯ベースにフォールバック
      }
      setWeather(getWeatherFromTime());
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    const symbols = WEATHER_SYMBOLS[weather];
    const count = weather === 'rain' || weather === 'snow' ? 30 : 15;

    const generated: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size:
        weather === 'rain'
          ? Math.random() * 8 + 8
          : weather === 'snow'
            ? Math.random() * 10 + 10
            : Math.random() * 12 + 10,
      duration:
        weather === 'rain'
          ? Math.random() * 1.5 + 1
          : weather === 'snow'
            ? Math.random() * 6 + 4
            : Math.random() * 8 + 6,
      delay: Math.random() * 5,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
    }));
    setParticles(generated);
  }, [weather]);

  if (particles.length === 0) return null;

  return (
    <div
      className={`${styles.container} ${styles[weather]}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className={`${styles.particle} ${styles[`particle_${weather}`]}`}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
};

export default WeatherBackground;
