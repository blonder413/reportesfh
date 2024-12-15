# Reportes con NestJs

PdfMake, Html a PDF, Temas personalizados, QR, Gráficas, paginación, encabezados, pie de página y mucho más

## Crear proyecto nest

```sh
nest new report-server
```

## Correr el servidor

```sh
npm run start:dev
```

# Postgresql

```sh
docker pull postgres:16.3
docker pull dpage/pgadmin4:8.6
```

# Crear contenedor

```sh
docker compose up -d
```

# Iniciar y detener contenedor

```sh
docker start postgres_database
docker stop postgres_database
```

## [Prisma](https://docs.nestjs.com/recipes/prisma)

```sh
npm install prisma --save-dev
npx prisma init
npm install @prisma/client
```

## Generar Resource

```sh
nest g resource basic-reports --no-spec
```

## Traer los cambios de la base de datos

```sh
npx prisma db pull
```

## Generar el cliente
```sh
npx prisma generate
```

[pdfmake](https://pdfmake.github.io/docs/0.1/)
```sh
npm i pdfmake
npm i --save-dev @types/pdfmake
```