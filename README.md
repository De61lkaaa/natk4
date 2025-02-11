
# Руководство разработчика для проекта NATK_APP

## Оглавление
1. [Обзор проекта](#обзор-проекта)
2. [Требования к окружению](#требования-к-окружению)
3. [Установка и запуск](#установка-и-запуск)
4. [Структура проекта](#структура-проекта)
5. [Основные технологии](#основные-технологии)
6. [Конфигурация](#конфигурация)
7. [Работа со стилями](#работа-со-стилями)
8. [Линтинг и форматирование](#линтинг-и-форматирование)
9. [Деплой](#деплой)

---

## Обзор проекта
Проект представляет собой Next.js приложение с использованием:
- React 19
- Tailwind CSS для стилизации
- Карусельных компонентов через react-slick


```11:17:package.json
  "dependencies": {
    "next": "15.1.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-slick": "^0.30.3",
    "slick-carousel": "^1.8.1"
  },
```


---

## Требования к окружению
- Node.js 18+
- npm 9+ или yarn 1.22+
- Рекомендуется использовать VS Code // WebStorm

---

## Установка и запуск
1. Установите зависимости:
```bash
npm install
# или
yarn
```

2. Доступные скрипты:

```5:9:package.json
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
```


3. Запуск в development режиме:
```bash
npm run dev
```

---

## Структура проекта
Основные директории:
- `/src` - исходный код приложения
  - `/components` - React компоненты
  - `/pages` - роутинг Next.js
  - `/app` (предположительно) - структура App Router
- Конфигурационные файлы в корне

Алиасы для путей:

```3:5:jsconfig.json
    "paths": {
      "@/*": ["./src/*"]
    }
```


---

## Основные технологии
### Next.js 15
- Рендеринг на стороне сервера (SSR)
- Статическая генерация (SSG)
- API роуты

### Tailwind CSS
- Кастомные цвета и анимации
- Конфигурация:

```8:21:tailwind.config.js
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
```


---

## Конфигурация
### PostCSS
Обработка CSS через:

```2:5:postcss.config.js
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
```


### Сборка
Production сборка:
```bash
npm run build
```

---

## Работа со стилями
1. Используйте Tailwind классы напрямую в JSX
2. Кастомные свойства CSS:

```8:11:tailwind.config.js
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
```


3. Анимации:

```12:20:tailwind.config.js
      animation: {
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
```


---

## Линтинг и форматирование
Конфигурация ESLint:

```12:12:eslint.config.mjs
const eslintConfig = [...compat.extends("next/core-web-vitals")];
```


Запуск проверки:
```bash
npm run lint
```

---

## Деплой
1. Production сборка:
```bash
npm run build
```

2. Запуск production сервера:
```bash
npm run start
```

3. Рекомендуемые платформы:
- Vercel (оптимизирован для Next.js)
- Docker-контейнер
- Статический хостинг для SSG

---

## Советы по разработке
1. Используйте алиасы для импортов:
```javascript
import Button from '@/components/Button'
```

2. Для каруселей используйте готовые компоненты из react-slick

3. Не коммитьте файлы окружения (см. .gitignore):

```34:34:.gitignore
.env*
```


