-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-12-2021 a las 20:21:34
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.4.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laravel_tfm`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `animals`
--

CREATE TABLE `animals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `protectora_id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `especie` enum('gato','perro','roedor') COLLATE utf8mb4_unicode_ci NOT NULL,
  `tamano` enum('grande','mediano','pequeño') COLLATE utf8mb4_unicode_ci NOT NULL,
  `edad` enum('< 1 año','1 - 5 año','5 - 10 año','> 10 año') COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sexo` enum('macho','hembra') COLLATE utf8mb4_unicode_ci NOT NULL,
  `pais` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ciudad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provincia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adopcion` tinyint(1) NOT NULL,
  `acogida` tinyint(1) NOT NULL,
  `urgente` tinyint(1) NOT NULL,
  `vacunado` tinyint(1) NOT NULL,
  `desparasitado` tinyint(1) NOT NULL,
  `esterilizado` tinyint(1) NOT NULL,
  `microchip` tinyint(1) NOT NULL,
  `tasa_adopcion` enum('gratis','consultar','tasa') COLLATE utf8mb4_unicode_ci NOT NULL,
  `tasa` int(11) DEFAULT NULL,
  `envio` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `animals`
--

INSERT INTO `animals` (`id`, `protectora_id`, `nombre`, `especie`, `tamano`, `edad`, `imagen`, `descripcion`, `sexo`, `pais`, `ciudad`, `provincia`, `adopcion`, `acogida`, `urgente`, `vacunado`, `desparasitado`, `esterilizado`, `microchip`, `tasa_adopcion`, `tasa`, `envio`, `created_at`, `updated_at`) VALUES
(1, 1, 'Grady', 'gato', 'pequeño', '< 1 año', 'animales/6ceGq3ZLH9XkeFGhYcMsyD4wnhHkE27w0NtjmPlX.jpg', 'Fecha nacimiento: Junio 2021 Sexo : Hembra Grady es una gatita muy amorosa con un pelo suave, como terciopelo. Se entregará en adopción con el protocolo veterinario acorde a su edad.', 'hembra', 'España', 'Valencia', 'Valencia', 1, 0, 0, 1, 1, 1, 1, 'gratis', 0, 1, '2021-12-14 21:40:25', '2021-12-14 21:40:25'),
(2, 1, 'Donal', 'gato', 'pequeño', '1 - 5 año', 'animales/7g0iOZv4djSWr4wo2X7kmDmNeAKMl1FoSk9tngfe.jpg', 'Macho Donal, es un gato super bueno y super cariñoso, muy sociable. Guapísimo y con pelo semilargo. Se entregará en adopción con el protocolo veterinario acorde a su edad.', 'macho', 'España', 'Valencia', 'Valencia', 1, 0, 1, 1, 1, 1, 1, 'gratis', 0, 1, '2021-12-14 21:41:30', '2021-12-14 21:41:30'),
(3, 1, 'Enebro', 'gato', 'pequeño', '> 10 año', NULL, NULL, 'macho', 'España', 'Valencia', 'Valencia', 1, 0, 0, 1, 1, 1, 1, 'gratis', 0, 1, '2021-12-14 21:43:32', '2021-12-14 21:43:32'),
(4, 2, 'Gold', 'perro', 'mediano', '< 1 año', 'animales/nVAgC5bEKBU0TjK56KDkJiVeRbXhJuGsAN2sNegK.jpg', 'Gold es una cachorrita de 3 meses de edad cruce de galgo y shar pei. De mayor será de tamaño mediano-grande. Rescatamos a Gold y a sus tres hermanas de un huerto en Onda con problemas en la piel y de desnutrición. Después de un mes recuperándose en su casa de acogida ya están listas para encontrar un hogar y una familia que las quiera y mime como se merecen. Se entrega con las vacunas al día, desparasitada, con compromiso de esterilización, contrato y chip. ¿Serás tú su familia ideal?', 'macho', 'España', 'Valencia', 'Valencia', 1, 1, 0, 1, 1, 1, 1, 'consultar', 0, 1, '2021-12-14 21:47:35', '2021-12-14 21:47:45'),
(5, 2, 'Rodolfo', 'perro', 'grande', '5 - 10 año', 'animales/d1gOlrYhZS30dpw7EKdmdrX1zm6OYhZxTIBiXtLP.jpg', 'Rodolfo es un compañero fiel y leal, aunque no le gusta ni toda la gente ni todos los perros ¡no quiere a cualquiera, pero al que quiere, es para siempre! Es cariñosísimo, activo, juguetón y tiene mucha vitalidad. Castrado: Si. Situación actual: Acogido. Historia: Después de muchos años en el albergue de Mieres, por fin ha sido acogido y está demostrando ser un perro maravilloso, capaz de aprender y mejorar cada día.', 'macho', 'España', 'Valencia', 'Valencia', 1, 0, 1, 1, 0, 0, 0, 'tasa', 100, 1, '2021-12-14 21:49:00', '2021-12-14 21:49:00'),
(6, 2, 'Lana', 'perro', 'pequeño', '5 - 10 año', NULL, NULL, 'hembra', 'España', 'Granada', 'Granada', 1, 0, 0, 1, 1, 0, 0, 'consultar', 0, 1, '2021-12-14 21:50:28', '2021-12-14 21:50:28'),
(7, 3, 'Bolita', 'roedor', 'pequeño', '< 1 año', NULL, NULL, 'macho', 'España', 'Badajoz', 'Extremadura', 1, 0, 0, 0, 0, 0, 0, 'gratis', 0, 1, '2021-12-14 21:52:25', '2021-12-14 21:52:25'),
(10, 1, 'Juli', 'gato', 'mediano', '1 - 5 año', 'animales/Z821qWE04hyRXZ6if2NRgWRDyyvKEpDz8ain6ak7.jpg', 'null', 'macho', 'España', 'Valencia', 'Valencia', 1, 0, 1, 0, 0, 0, 0, 'consultar', 0, 1, '2021-12-30 13:56:34', '2021-12-30 13:57:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fav_animals`
--

CREATE TABLE `fav_animals` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `particular_id` bigint(20) UNSIGNED NOT NULL,
  `animal_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `fav_animals`
--

INSERT INTO `fav_animals` (`id`, `particular_id`, `animal_id`, `created_at`, `updated_at`) VALUES
(2, 1, 5, '2021-12-14 21:55:59', '2021-12-14 21:55:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fav_protectoras`
--

CREATE TABLE `fav_protectoras` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `particular_id` bigint(20) UNSIGNED NOT NULL,
  `protectora_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `fav_protectoras`
--

INSERT INTO `fav_protectoras` (`id`, `particular_id`, `protectora_id`, `created_at`, `updated_at`) VALUES
(3, 2, 1, '2021-12-29 16:35:52', '2021-12-29 16:35:52'),
(4, 1, 1, '2021-12-29 16:48:52', '2021-12-29 16:48:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(17, '2014_10_12_000000_create_users_table', 1),
(18, '2014_10_12_100000_create_password_resets_table', 1),
(19, '2019_08_19_000000_create_failed_jobs_table', 1),
(20, '2021_11_13_130000_create_protectoras_table', 1),
(21, '2021_11_13_134105_create_animals_table', 1),
(22, '2021_11_15_232722_create_particulars_table', 1),
(23, '2021_12_08_211333_create_fav_animals_table', 1),
(24, '2021_12_08_211402_create_fav_protectoras_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `particulars`
--

CREATE TABLE `particulars` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pais` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ciudad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provincia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `particulars`
--

INSERT INTO `particulars` (`id`, `user_id`, `nombre`, `apellido`, `imagen`, `telefono`, `pais`, `ciudad`, `provincia`, `created_at`, `updated_at`) VALUES
(1, 4, 'Marta Flores', 'Gimeno Dadiano', 'particular/Ozkl5n0LCd4COe8cmw9BJjY4VXa9XOQnpvRtxKzF.jpg', '664760100', 'España', 'Valencia', 'Valencia', '2021-12-14 21:55:06', '2021-12-14 21:55:06'),
(2, 6, 'Raquel', 'Martinez Gomes', '', '662090600', 'España', 'Valencia', 'Valencia', '2021-12-29 16:35:42', '2021-12-29 16:35:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `protectoras`
--

CREATE TABLE `protectoras` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `voluntariado` tinyint(1) NOT NULL,
  `req_voluntario` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `web` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `historia` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pais` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ciudad` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `provincia` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `protectoras`
--

INSERT INTO `protectoras` (`id`, `user_id`, `nombre`, `imagen`, `voluntariado`, `req_voluntario`, `telefono`, `web`, `facebook`, `instagram`, `historia`, `pais`, `ciudad`, `provincia`, `created_at`, `updated_at`) VALUES
(1, 1, 'Gatunlandia', 'protectoras/oK7lgaQhTMBmi4zRSYK9FayJAfWM7LjUISacmsRP.png', 1, 'Tener vehiculo propio', '665889208', 'https://www.facebook.com/?ref=logo', 'https://www.facebook.com/?ref=logo', 'https://www.facebook.com/?ref=logo', 'Trabajamos en el marco de la gestión integral ética de las colonias felinas, en aplicación de las buenas prácticas de dicha gestión se establece la de buscar adopción a los gatos sociables de la colonia.', 'España', 'Valencia', 'Valencia', '2021-12-14 21:26:36', '2021-12-29 16:48:13'),
(2, 2, 'Fabrica de las patas', NULL, 0, 'null', '696555888', 'https://www.facebook.com/?ref=logo', 'https://www.facebook.com/?ref=logo', 'https://www.facebook.com/?ref=logo', '¡Saludos y ladridos de nuestros amigos de cuatro patas! Os presentamos nuestra asociación sin ánimo de lucro dedicada, en la medida de lo posible, a rescatar, tratar, cuidar, albergar y buscar nuevos hogares a los peludos que han tenido la mala suerte de caer en las manos equivocadas y, por norma general, acaban abandonados.\n\nMuchos son los animales que llegan a nuestras casas de acogida y aun más numerosas, son las peticiones de ayuda, avisos y personas que quieren, literalmente, deshacerse de sus amigos de cuatro patas. A menudo, nos vemos desbordados y sin medios para atenderlas. Pero día a día, seguimos luchando para que esta situación mejore, para que los animales que hayan sufrido abandono tengan un final feliz y las personas mayor conciencia, sensibilidad y, simplemente, sentido común.\n\nLadridos Vagabundos no recibe subvención económica de ningún tipo y se mantiene a duras penas, gracias a las aportaciones de un número minoritario de socios, voluntarios y colaboradores puntuales que ofrecen su ayuda de manera altruista y desinteresada.\n\nTratamos que cada animal que llega a nuestras manos esté bien atendido y cuidado hasta que salga en adopción, pero somos pocas personas y no podemos dedicarles todo el tiempo que quisiéramos a nuestros inquilinos. Por ello siempre precisamos voluntarios, pues cuantos más seamos, más cuidados y atención podrán recibir los animales.', 'España', 'Granada', 'Costa', '2021-12-14 21:29:22', '2021-12-14 21:30:02'),
(3, 3, 'Alfa', 'protectoras/UGQahukKiHDVQmjgDOlfDBWF1thcCfvOcikk2ymu.jpg', 1, '-Tener vehiculo propio, \n-Disponibilidad los fines de semana', '664790155', 'https://www.facebook.com/?ref=logo', 'https://www.facebook.com/?ref=logo', 'https://www.facebook.com/?ref=logo', 'ALFA es una asociación sin ánimo de lucro con sede en Fuentes de León.\nNuestro equipo está formado por voluntarios amantes de los animales que compaginan\nsu vida personal y laboral con esta bonita iniciativa.\nEl objetivo principal es ayudar a salvar a los animales abandonados/ maltratados de\nnuestra localidad, promoviendo la adopción responsable.\nTenemos un lema: Si no puedes acoger, sé voluntario. Si no puedes ser voluntario, haz\nuna donación. Si no puedes hacer una donación, crea conciencia, difunde y comparte.', 'España', 'Badajoz', 'Extremadura', '2021-12-14 21:34:09', '2021-12-14 21:34:09'),
(4, 5, 'Protectora name', NULL, 0, 'null', '664780800', 'https://www.facebook.com/?ref=logo', 'https://www.facebook.com/?ref=logo', 'https://www.facebook.com/?ref=logo', 'portectora pequeña dedicada a la acogida de roedores', 'España', 'Valencia', 'Valencia', '2021-12-29 16:34:11', '2021-12-29 16:37:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `protectora` tinyint(1) NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `email_verified_at`, `password`, `protectora`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'luizaclara199618@gmail.com', NULL, '$2y$10$04ldjyPEBFjsRqBWxA62nuKw0XeYFAGltCrKZfMvJ2ermXma5yiMu', 1, NULL, '2021-12-14 21:23:01', '2021-12-14 21:23:01'),
(2, 'prote1@gmail.com', NULL, '$2y$10$63sXZjia0KKlyffpppO0QeYIfpo/5NDdULBc4RuHHw3eTWqcgk6jC', 1, NULL, '2021-12-14 21:27:18', '2021-12-14 21:27:18'),
(3, 'prote2@gmail.com', NULL, '$2y$10$P6Q.pkEFVx3OyWjgLZl3POcfM51IiNvL2AtlH2uEJAGw4VDpOfBIa', 1, NULL, '2021-12-14 21:30:24', '2021-12-14 21:30:24'),
(4, 'luizaclara1996@hotmail.es', NULL, '$2y$10$/CFINM1AjTToQIDW/WoUdeMIOHhWR8Ac.kjbwK8nM1saYHVf20oo.', 0, NULL, '2021-12-14 21:53:56', '2021-12-14 21:53:56'),
(5, 'user1@gmail.com', NULL, '$2y$10$J1cBJKvVGu9pj.mnpZF0fOeh1jJyuHOl/ElTh5yPMeKWhugMgicEW', 1, NULL, '2021-12-29 16:32:51', '2021-12-29 16:32:51'),
(6, 'user2@gmail.com', NULL, '$2y$10$2.7czRpeSJmMF3618UQl8.IADWAkRhDPtMulfU13/R80NtMC4sDbi', 0, NULL, '2021-12-29 16:34:56', '2021-12-29 16:34:56');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `animals`
--
ALTER TABLE `animals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `animals_protectora_id_foreign` (`protectora_id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `fav_animals`
--
ALTER TABLE `fav_animals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fav_animals_particular_id_foreign` (`particular_id`),
  ADD KEY `fav_animals_animal_id_foreign` (`animal_id`);

--
-- Indices de la tabla `fav_protectoras`
--
ALTER TABLE `fav_protectoras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fav_protectoras_particular_id_foreign` (`particular_id`),
  ADD KEY `fav_protectoras_protectora_id_foreign` (`protectora_id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `particulars`
--
ALTER TABLE `particulars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `particulars_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `protectoras`
--
ALTER TABLE `protectoras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `protectoras_user_id_foreign` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `animals`
--
ALTER TABLE `animals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `fav_animals`
--
ALTER TABLE `fav_animals`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `fav_protectoras`
--
ALTER TABLE `fav_protectoras`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `particulars`
--
ALTER TABLE `particulars`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `protectoras`
--
ALTER TABLE `protectoras`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `animals`
--
ALTER TABLE `animals`
  ADD CONSTRAINT `animals_protectora_id_foreign` FOREIGN KEY (`protectora_id`) REFERENCES `protectoras` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `fav_animals`
--
ALTER TABLE `fav_animals`
  ADD CONSTRAINT `fav_animals_animal_id_foreign` FOREIGN KEY (`animal_id`) REFERENCES `animals` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fav_animals_particular_id_foreign` FOREIGN KEY (`particular_id`) REFERENCES `particulars` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `fav_protectoras`
--
ALTER TABLE `fav_protectoras`
  ADD CONSTRAINT `fav_protectoras_particular_id_foreign` FOREIGN KEY (`particular_id`) REFERENCES `particulars` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fav_protectoras_protectora_id_foreign` FOREIGN KEY (`protectora_id`) REFERENCES `protectoras` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `particulars`
--
ALTER TABLE `particulars`
  ADD CONSTRAINT `particulars_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `protectoras`
--
ALTER TABLE `protectoras`
  ADD CONSTRAINT `protectoras_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
