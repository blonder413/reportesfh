# Ejecutar en Dev

1. Clonar el respositorio
2. Instalar las dependencias `npm install`
3. Duplicar `.env.example` a `.env` y establecer los valores
4. Levantar la base de datos `docker compose up -d`
5. Generar el Prisma Client `npmx prisma generate`
6. Ejecutar proyecto `npm run start:dev`