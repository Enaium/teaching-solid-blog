-- MariaDB dump 10.19  Distrib 10.11.3-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	10.11.3-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` uuid NOT NULL,
  `name` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES
('08059abf-f99b-11ed-884e-c5ceba38ebf1','Category 1'),
('08076439-f99b-11ed-884e-c5ceba38ebf1','Category 2'),
('080b06cb-f99b-11ed-884e-c5ceba38ebf1','Category 3');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `id` uuid NOT NULL,
  `user_id` uuid NOT NULL,
  `category_id` uuid NOT NULL,
  `title` varchar(50) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `post_user_id_fk` (`user_id`),
  KEY `post_category_id_fk` (`category_id`),
  CONSTRAINT `post_category_id_fk` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  CONSTRAINT `post_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES
('1827d9b0-d043-41ce-b488-19821c32828d','d1de9b6a-6c09-4f09-b919-511648410f0f','08059abf-f99b-11ed-884e-c5ceba38ebf1','t','t'),
('e64f7099-b914-42d8-9699-20b0144202c9','d1de9b6a-6c09-4f09-b919-511648410f0f','08059abf-f99b-11ed-884e-c5ceba38ebf1','test','test'),
('a8378af5-1281-4cc1-bec2-364126380ac3','d1de9b6a-6c09-4f09-b919-511648410f0f','08059abf-f99b-11ed-884e-c5ceba38ebf1','test','test'),
('13bb4409-fbf7-4f52-8f46-51725c5d089c','d1de9b6a-6c09-4f09-b919-511648410f0f','08059abf-f99b-11ed-884e-c5ceba38ebf1','t','t'),
('947e93d1-5654-4e38-a335-7120bd98ee4e','d1de9b6a-6c09-4f09-b919-511648410f0f','080b06cb-f99b-11ed-884e-c5ceba38ebf1','test','test'),
('cc1a37b9-e80c-46b5-82f9-751b1cf6d6b5','d1de9b6a-6c09-4f09-b919-511648410f0f','08059abf-f99b-11ed-884e-c5ceba38ebf1','t','t'),
('340da3af-8b91-4b9e-9078-81180eb381b5','d1de9b6a-6c09-4f09-b919-511648410f0f','08059abf-f99b-11ed-884e-c5ceba38ebf1','test','test'),
('8403a77c-fbbb-411c-bf96-add87e3e4e68','d1de9b6a-6c09-4f09-b919-511648410f0f','080b06cb-f99b-11ed-884e-c5ceba38ebf1','test','test'),
('b8594230-e086-4de5-bbcc-b42aa115e57c','d1de9b6a-6c09-4f09-b919-511648410f0f','08059abf-f99b-11ed-884e-c5ceba38ebf1','t','t'),
('67979322-2b62-458c-a584-c79c6e04cddf','d1de9b6a-6c09-4f09-b919-511648410f0f','08059abf-f99b-11ed-884e-c5ceba38ebf1','t','t'),
('a4835bb3-cd70-45d7-9c2a-e56ef420fa71','d1de9b6a-6c09-4f09-b919-511648410f0f','08076439-f99b-11ed-884e-c5ceba38ebf1','123','123');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reply`
--

DROP TABLE IF EXISTS `reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reply` (
  `id` uuid NOT NULL,
  `user_id` uuid NOT NULL,
  `post_id` uuid NOT NULL,
  `content` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `reply_post_id_fk` (`post_id`),
  KEY `reply_user_id_fk` (`user_id`),
  CONSTRAINT `reply_post_id_fk` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  CONSTRAINT `reply_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reply`
--

LOCK TABLES `reply` WRITE;
/*!40000 ALTER TABLE `reply` DISABLE KEYS */;
INSERT INTO `reply` VALUES
('40355ab7-b032-4dde-a24c-0b243fa36828','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('3f61462f-2713-4012-ab55-0b73bf8dafe1','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('5b129b15-dfb7-4fd0-bb4b-15e282e41433','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('f1e8481f-9cf3-4e68-93bd-212e65443ffb','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('3859fac1-913e-4108-a8d5-2fa5946bab6a','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('684b0cab-69b4-4f90-9aaf-2fe8a1ca09c7','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','12312313'),
('75c5e31b-1eec-474e-9c85-584f6d92c891','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('75cd5ef6-a760-4430-bb6d-5bf881af8fce','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('aea4b54a-b0b1-4cce-93c2-6a6bc55e62cd','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('e591c847-c050-4fe0-b56b-6bf054d00dfa','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('6bf3eec4-22e2-427b-899e-7d792dbda962','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('06895fc2-b8f9-4a9a-a631-7ff0ceee7c64','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('ef07c5bc-aa70-4178-8287-861f9a72c370','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('80ada9a3-c893-4d4b-a63a-9aaaa44eb773','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('5c6a248a-286c-4782-adf4-9e938feaff76','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','43434'),
('82c26fba-becb-457c-97a0-a83db8a1941d','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('b0cc9f30-50ed-4456-8b21-b29cac31904d','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('3c74ca21-2865-47a3-b7ef-b337d9bfca34','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('25513d0e-90ef-4305-84b9-b3a0fd982967','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('7e21c124-2109-4a28-9458-b5e68f0e72fc','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('424fc466-f626-45fa-81d7-d081e954e4e7','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('88713d7e-1cea-4f4b-a069-d6daa1c6a331','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123'),
('2dbe2e0a-049e-4d49-b3cd-f2ede4f43e1b','d1de9b6a-6c09-4f09-b919-511648410f0f','1827d9b0-d043-41ce-b488-19821c32828d','123');
/*!40000 ALTER TABLE `reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` uuid NOT NULL,
  `username` varchar(18) NOT NULL,
  `password` varchar(18) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES
('d1de9b6a-6c09-4f09-b919-511648410f0f','123','123');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-24 18:26:28
