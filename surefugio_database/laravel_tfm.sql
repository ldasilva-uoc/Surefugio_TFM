-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-12-2021 a las 15:27:11
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
  `tamaño` enum('grande','mediano','pequeño') COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
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
  `tasa` int(11) NOT NULL,
  `envio` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `animals`
--

INSERT INTO `animals` (`id`, `protectora_id`, `nombre`, `especie`, `tamaño`, `fecha_nacimiento`, `imagen`, `descripcion`, `sexo`, `pais`, `ciudad`, `provincia`, `adopcion`, `acogida`, `urgente`, `vacunado`, `desparasitado`, `esterilizado`, `microchip`, `tasa_adopcion`, `tasa`, `envio`, `created_at`, `updated_at`) VALUES
(2, 1, 'Belo', 'perro', 'pequeño', NULL, '', NULL, 'macho', 'España', 'Valencia', 'Valencia', 1, 0, 0, 1, 1, 1, 1, 'tasa', 20, 0, '2021-11-22 19:12:47', '2021-12-03 19:46:28'),
(4, 1, 'Lana', 'perro', 'grande', NULL, '', NULL, 'macho', 'España', 'VALENCIA', 'Communidad Valencian', 1, 1, 1, 1, 1, 1, 1, 'gratis', 25, 1, '2021-12-01 18:40:48', '2021-12-05 12:25:12'),
(5, 1, 'Ray', 'perro', 'mediano', NULL, '', 'descripcion de Ray', 'macho', 'España', 'Valencia', 'Valencia', 1, 1, 1, 1, 1, 1, 1, 'consultar', 25, 1, '2021-12-05 12:28:14', '2021-12-05 12:30:38');

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
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2021_11_13_130000_create_protectoras_table', 1),
(5, '2021_11_13_134105_create_animals_table', 1),
(6, '2021_11_15_232722_create_particulars_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `particulars`
--

CREATE TABLE `particulars` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellido` tinyint(1) NOT NULL,
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
(1, 2, 'Luiza alquilada', 0, 'particulars/usKgCDYrmfa1G5FwL1Z7AGtDrQS3JTaaVBpsErMz.png', '664790100', 'España', 'Valencia', 'Valencia', '2021-11-22 18:13:43', '2021-11-22 18:47:28');

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
(1, 1, 'Colmillo Blancoi', 'protectoras/sji1s55bDEoWO4vcqeHSvqhBzgrAOcGHTLSZIwHW.png', 1, 'Requisito Voluntariado', '664790100', 'https://es.wikipedia.org/wiki/Colmillo_Blanco', 'https://es-es.facebook.com/', 'https://www.instagram.com/?hl=es', 'Historia protectora', 'España', 'Valencia', 'Valencia', '2021-11-22 18:05:21', '2021-11-22 18:41:59');

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
(1, 'luiza@hotmail.es', NULL, '$2y$10$ZbmAZyFhiLckGeDdbYTEZusvI/WkE6eOtS0zu8rDdg6vUQGZyawqe', 1, NULL, '2021-11-22 18:00:11', '2021-11-22 18:00:11'),
(2, 'luiza2@hotmail.es', NULL, '$2y$10$fFziri4qQRfk7MdKl0MR8OWfLqmmerQ1S0NkegUn.ldKMm4/fC6QW', 0, NULL, '2021-11-22 18:00:28', '2021-11-22 18:00:28');

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `particulars`
--
ALTER TABLE `particulars`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `protectoras`
--
ALTER TABLE `protectoras`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `animals`
--
ALTER TABLE `animals`
  ADD CONSTRAINT `animals_protectora_id_foreign` FOREIGN KEY (`protectora_id`) REFERENCES `protectoras` (`id`);

--
-- Filtros para la tabla `particulars`
--
ALTER TABLE `particulars`
  ADD CONSTRAINT `particulars_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `protectoras`
--
ALTER TABLE `protectoras`
  ADD CONSTRAINT `protectoras_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
