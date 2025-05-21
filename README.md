# Исторические даты

Онлайн-версия сайта: https://antim0118.github.io/only-test/

Сайт деплоится через Github Actions (CI/CD).

## Запуск проекта
Для запуска надо установить пакеты и выполнить запуск webpack.
```js
npm install
npm run dev
```

## Сборка проекта
Для сборки проекта надо установить пакеты и выполнить запуск сборки webpack.
Собранный проект появится в папке `dist/`
```js
npm install
npm run build
```

## Даты

Даты прогружаются через файл `src/assets/data/dates.json`.

Их можно менять по структуре, описанной в `src/types/TimelineType.ts`

## Зависимости / Пакеты

- webpack 5.73
- react v18.2
- sass 1.53
- swiper v11.2.6
- gsap v3.13
- axios v1.9
