CREATE DATABASE  IF NOT EXISTS `health_center_database` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `health_center_database`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: health_center_database
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `Appointment_ID` bigint unsigned NOT NULL AUTO_INCREMENT,
  `Patient_ID` bigint NOT NULL,
  `Staff_ID` bigint NOT NULL,
  `Date` date NOT NULL,
  `Time` time NOT NULL,
  `Reason_for_Visit` varchar(255) NOT NULL,
  PRIMARY KEY (`Appointment_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1,23,15,'2024-01-04','12:00:00','Emergency'),(2,13,33,'2024-07-20','12:00:00','Follow-up'),(3,31,20,'2024-11-13','14:00:00','Check-up'),(4,13,12,'2024-03-21','10:30:00','Follow-up'),(5,47,11,'2024-11-24','15:30:00','Vaccination'),(6,48,45,'2024-10-19','11:00:00','Consultation'),(7,21,44,'2024-10-03','11:00:00','Consultation'),(8,42,14,'2024-12-20','16:30:00','Vaccination'),(9,25,43,'2024-06-11','11:00:00','Emergency'),(10,41,15,'2024-10-25','09:00:00','Consultation'),(11,23,43,'2024-04-01','08:00:00','Check-up'),(12,43,3,'2024-01-11','10:00:00','Physical'),(13,37,17,'2024-03-24','15:00:00','Follow-up'),(14,26,41,'2024-02-19','09:30:00','Check-up'),(15,48,33,'2024-01-15','11:30:00','Consultation'),(16,39,7,'2024-12-26','13:30:00','Follow-up'),(17,4,44,'2024-09-15','14:00:00','Physical'),(18,22,42,'2024-04-15','14:00:00','Physical'),(19,6,19,'2024-01-06','13:30:00','Check-up'),(20,12,23,'2024-10-20','14:00:00','Consultation'),(21,18,22,'2024-05-15','11:00:00','Emergency'),(22,3,15,'2024-10-28','13:30:00','Emergency'),(23,38,45,'2024-04-10','16:30:00','Physical'),(24,12,10,'2024-06-03','13:00:00','Vaccination'),(25,9,21,'2024-08-21','10:30:00','Consultation'),(26,41,39,'2024-06-30','13:30:00','Physical'),(27,16,32,'2024-09-23','13:00:00','Check-up'),(28,45,42,'2024-06-09','09:30:00','Emergency'),(29,21,20,'2024-09-26','11:30:00','Check-up'),(30,15,22,'2024-10-02','09:00:00','Consultation'),(31,41,5,'2024-09-03','15:00:00','Follow-up'),(32,29,22,'2024-04-22','14:00:00','Vaccination'),(33,13,37,'2024-04-27','15:30:00','Check-up'),(34,36,40,'2024-08-27','15:00:00','Physical'),(35,33,41,'2024-04-16','10:30:00','Consultation'),(36,23,32,'2024-03-26','08:30:00','Vaccination'),(37,26,15,'2024-06-29','10:30:00','Follow-up'),(38,42,8,'2024-03-02','15:00:00','Check-up'),(39,26,1,'2024-07-26','09:00:00','Emergency'),(40,8,34,'2024-02-12','12:30:00','Emergency'),(41,8,25,'2024-05-15','09:30:00','Emergency'),(42,30,20,'2024-01-27','16:00:00','Vaccination'),(43,5,27,'2024-05-03','16:30:00','Consultation'),(44,14,49,'2024-01-13','12:30:00','Check-up'),(45,34,33,'2024-06-04','09:30:00','Physical'),(46,20,50,'2024-05-01','13:30:00','Vaccination'),(47,5,43,'2024-12-20','15:30:00','Physical'),(48,29,26,'2024-11-06','12:30:00','Check-up'),(49,48,6,'2024-03-03','12:30:00','Consultation'),(50,22,19,'2024-10-05','09:30:00','Consultation');
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billing/invoices`
--

DROP TABLE IF EXISTS `billing/invoices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billing/invoices` (
  `Invoice_ID` bigint unsigned NOT NULL AUTO_INCREMENT,
  `Patient_ID` bigint NOT NULL,
  `Amount` varchar(255) NOT NULL,
  `Payment_Status` varchar(255) NOT NULL,
  `Payment_Date` date DEFAULT NULL,
  PRIMARY KEY (`Invoice_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing/invoices`
--

LOCK TABLES `billing/invoices` WRITE;
/*!40000 ALTER TABLE `billing/invoices` DISABLE KEYS */;
INSERT INTO `billing/invoices` VALUES (1,40,'114.00','Pending','2024-09-03'),(2,4,'271.00','Pending','2024-11-03'),(3,35,'495.00','Pending','2024-01-30'),(4,9,'357.00','Pending',NULL),(5,17,'447.00','Pending','2024-06-14'),(6,26,'260.00','Paid','2024-08-03'),(7,5,'483.00','Pending','2024-06-14'),(8,19,'83.00','Pending',NULL),(9,10,'462.00','Paid','2024-09-29'),(10,5,'141.00','Paid','2024-06-16'),(11,22,'448.00','Paid',NULL),(12,35,'102.00','Pending',NULL),(13,15,'81.00','Paid','2024-10-14'),(14,21,'315.00','Pending','2024-06-18'),(15,11,'307.00','Pending',NULL),(16,37,'389.00','Pending',NULL),(17,22,'371.00','Pending',NULL),(18,44,'205.00','Paid',NULL),(19,43,'341.00','Pending','2024-04-01'),(20,20,'348.00','Paid','2024-05-19'),(21,27,'152.00','Pending','2024-02-07'),(22,5,'389.00','Paid',NULL),(23,3,'265.00','Pending',NULL),(24,14,'168.00','Paid',NULL),(25,19,'498.00','Pending',NULL),(26,32,'142.00','Pending',NULL),(27,7,'266.00','Pending',NULL),(28,39,'173.00','Paid','2024-07-10'),(29,9,'164.00','Pending',NULL),(30,25,'388.00','Pending','2024-06-17'),(31,26,'254.00','Pending','2024-06-27'),(32,27,'222.00','Paid',NULL),(33,46,'80.00','Pending','2024-07-28'),(34,13,'69.00','Paid','2024-06-27'),(35,12,'130.00','Paid','2024-06-02'),(36,10,'50.00','Pending','2024-12-11'),(37,19,'176.00','Pending',NULL),(38,25,'459.00','Paid','2024-12-05'),(39,30,'293.00','Paid',NULL),(40,5,'252.00','Paid',NULL),(41,16,'421.00','Paid',NULL),(42,50,'356.00','Pending','2024-09-06'),(43,5,'76.00','Paid',NULL),(44,3,'494.00','Paid','2024-07-09'),(45,6,'82.00','Paid',NULL),(46,20,'381.00','Pending',NULL),(47,39,'278.00','Pending','2024-12-16'),(48,9,'159.00','Paid',NULL),(49,45,'495.00','Pending',NULL),(50,23,'150.00','Paid',NULL);
/*!40000 ALTER TABLE `billing/invoices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creds`
--

DROP TABLE IF EXISTS `creds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `creds` (
  `Staff_ID` bigint unsigned NOT NULL,
  `First_Name` varchar(255) NOT NULL,
  `Last_Name` varchar(255) NOT NULL,
  `Password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Staff_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creds`
--

LOCK TABLES `creds` WRITE;
/*!40000 ALTER TABLE `creds` DISABLE KEYS */;
INSERT INTO `creds` VALUES (0,'Ezra','Minty','$2b$10$QFv.KYxpB07w0saZJ0fo5.yq3p/MdyMLeOpuOV1Y8OtquG0jlJTp.'),(1,'James','Johnson','$2b$10$SmlmddAbJXXrf7D6xmmPnu.v6Zvpz7m0KUp1w3.zqlY2oR.ZVAwKu'),(2,'James','Miller','$2b$10$XZ8C07.JxCX6v2UlPA2Yn.kfJszC2AOuWy0X9yCgyNWXE1tGIfd/K'),(3,'Chris','Miller','$2b$10$8OSPV5Zokm5GLZdgkxjZ3OxxNyoMO8bB7vszz2JFRrfVBF7hLeLtm'),(4,'Emily','Brown','$2b$10$fRjpIaGRusCV/0gyc5ADaucltCQFTHFALkEiKdFPPDtmVPbrXk7xO'),(5,'Emily','Clark','$2b$10$/YelU96pfh2zXq/Tf9q11eoCYV5d.dSEaHBxQCV/IYbdQSOLoPLpy'),(6,'Jane','Brown','$2b$10$Uerwfgu/yUs1NRtHJMSc6.PLHRgzvVxLdxWUGhPvuAafoQREjHaPy'),(7,'Emily','Smith','$2b$10$kwcq7z.hTogRa4Aaoec7mePhWMWBRCGJCq/qmf7HRjT4WVhDAyPVy'),(8,'Laura','Moore','$2b$10$ftQRJTiI/9VPvDvbxzoO1e0/87TdpRRHFEB9ugDT.CXXCwk2ul6fm'),(9,'Sarah','Moore','$2b$10$kDebEiKkadHvJFbKVP.c2e2aW5SCINfhwkOOdgLjWNmW4UAspTx3W'),(10,'James','Doe','$2b$10$1mIG6tEMxNgeSyr74XKAn.hRO/3/vMiq.uRrOjvV3iQtMP12iZWCS'),(11,'Anna','Johnson','$2b$10$MPxmiV0tlJjEYSHfM28uPOI8R199wTib4es10IblWs3dRspe6W8Uy'),(12,'Michael','Johnson','$2b$10$l27Z9eitf00y7q3j7kuCV.Pbk0IoRA8FTUtKqHydJpijAE1yRxSx6'),(13,'Sarah','Davis','$2b$10$XfUsp68Ii.NCAivqNcXAveVZLtbTxRVnknFyv7UT2PMolAW9rzKLm'),(14,'Chris','Doe','$2b$10$CFQ7/s6468.0ll9trRjCQOqEQ7ERt01eMiJINrpYoInV6vSLsZ6Wu'),(15,'Sarah','Clark','$2b$10$2cmWPmJIT0Ln9xnNDDCts.o5NmF4Zk6Ozyn7oe2Yn8ig/4llp.mny'),(16,'Laura','Smith','$2b$10$4esD1f1vh4VkHbB7O4BM4.OnWTl5INXCtV0qFum3vQWJ1bCEXJf2a'),(17,'James','Wilson','$2b$10$FwaYUV/pbvWYwqzW/SGRQeM3Zgp5dizdULQEwlCg8UFu6FcTtFYLK'),(18,'Emily','Johnson','$2b$10$wOM0ojGU0MhuHABXIBPb0.Shdjf7ZuCLQaFBfOJPhokNoU73f3zty'),(19,'Sarah','Taylor','$2b$10$EiHQrJC9znISUrTNeOD8qeABJvKip7Q3xSoPaHASrScXM0NPZ..s6'),(20,'Chris','Brown','$2b$10$F2ppxVsKnMS9dOHnARY.geHRs3vovoc3t0h/4bdCCNdfhslYaDKDm'),(21,'James','Taylor','$2b$10$.wl9GKJHprAKqrDijDjMMuv1DhwggOEVADn03rUeKtWofara6Bute'),(22,'Alex','Miller','$2b$10$5EKRFru.JwJJj2vP0Z3et.zXpGi18M9.Hp/V5X8VhRCWFqapyUJMa'),(23,'Laura','Davis','$2b$10$k8GaVUqAMiuYh.vKc/.6juB4k6s0M00Z10b6MpHbCrkB7BGJC/./2'),(24,'John','Smith','$2b$10$SHyXCZeGa/PZb48jOTLZ8uYVvNkT.bNRKczbYaCVORFKcksShyHqC'),(25,'Emily','Johnson','$2b$10$rQoyK8PoSwSz4KD1Nieeb.6fZMIWZOwx/Rws1eh1QWI.hkzV3IqA6'),(26,'Chris','Taylor','$2b$10$ZPLtXfDekI6oU6d8QFlmReIS5PFJYK9jDqlzcdjxaoUOG1MxeMF2u'),(27,'Michael','Moore','$2b$10$FnlGNmBz98mwwYaC1fHGFOy2FyOtsK390/jZbGHAVL4Jaz7gmOyCC'),(28,'Michael','Moore','$2b$10$UVPGZqMUekuCWEktTDfKbu2T0kkFcZFncaUim4GtDuaIOwTUR9yTG'),(29,'Laura','Miller','$2b$10$KM8utlbSQUgmwTF87HQKWu/bqr2uLJ0p1WstYioJuXrtQzURUkbIC'),(30,'Laura','Miller','$2b$10$gNBQqtGXSoJojE3o8fIZPOE8ClA60bVUYUWm29IfBC1oLcRUOt7tC'),(31,'Laura','Moore','$2b$10$JNtFHWdWc89LqBgC2Ht7..QYxbebZQnCJMBDVtDFh/DCcw.f3Vvl.'),(32,'Emily','Wilson','$2b$10$JxkCsnjhi6jdwfdUENPhGOji9kvdB/wlNEWnFPEtFAqBIJdqbOnMm'),(33,'Alex','Wilson','$2b$10$hyTS1JNZL8vFHg3UuZfAFeLHpKd8gEpMNNj/bsRFqLfP2FXkC30ea'),(34,'James','Johnson','$2b$10$kT.ozz1RTy7ZEXSu1B.xyu4mb/guiDxzH8n6C3glqYZn7Olf3f7Cy'),(35,'Michael','Clark','$2b$10$lfrzYpaaO.ceJhwoE.GwyeYYwrkQUpIm/9JQr0Oh1wxtnrqLv7CX2'),(36,'Chris','Brown','$2b$10$KZD8Em1jO4RTjnaXjXxAhO65n1RoAb6C4gybrSGCj9VOVCPRRnx26'),(37,'Sarah','Moore','$2b$10$OYw.T3Hg9t6X08o1Vs8Ms.H9.zSCzL0PVtb5srpgAkufjZqBSDHzO'),(38,'Anna','Davis','$2b$10$2ZNUFe.qyzRq8uxwOEyVkeVIedE3fDW1ZtNHsFktmfIK0C0pSq2ry'),(39,'Michael','Brown','$2b$10$9IcVsNx3cQIr4ssTrrgAmuK6CizZ6.iV21x25GI6/nMAkkJCXx1dm'),(40,'Alex','Johnson','$2b$10$zqGAXyLXPxtA2lG980q4E.YVp3w4.6vkEZs2p8DRnfUp.Rb6pbgSe'),(41,'Chris','Doe','$2b$10$PkdUAT1lJnn8A.pj68cBge1sbD10lnYhZxgIwX/Ha2Zidnog9C4nS'),(42,'Laura','Johnson','$2b$10$XMfpdA1LtarGPMBPL7Ae3..VtJYmpiHtVKQypkZ6js3SBJHS0tcea'),(43,'John','Smith','$2b$10$iic6TVbQUXyYBUdNC7PLEeYgu0YX.AOteYP/pdLNEj.U3qjt.Pj7S'),(44,'Emily','Davis','$2b$10$Unniuz0l6iFhJTHqtxmXDebCuPETBiDR1t8/HFf4vtcR3Tctz84pK'),(45,'Alex','Moore','$2b$10$Q9Ktg87HGrNyZchALkzAeeizWE3wQ0e4I.Gl/DfBqDemYkx1.XqoW'),(46,'Jane','Davis','$2b$10$CTM2vZ8ZFr5R.p5x3ASdzOeIGNbAMNuGAcpvMzMSUmRJ88XNmHlby'),(47,'Emily','Taylor','$2b$10$..g/vcxGUSPVu/zBqwzR1up/3Lfz6gUrxNsg9LUE90hdEZZ5rfyXe'),(48,'Laura','Doe','$2b$10$FvOhgwImYIxxSDjBXbWiu.lbWJUg2RViELHrmZ89S1ZgqX1SRHSeq'),(49,'Chris','Davis','$2b$10$8a45USHdxcETJ6Jbh0AMYuVaXf9hmYmgoeC3wFgSxfUVQ9CzydNeu'),(50,'James','Johnson','$2b$10$8Ccsh70b/v7yYB22y9GQS.zkRXy/FGJJO551VLPChY0yD5gUrWlkK');
/*!40000 ALTER TABLE `creds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medical records`
--

DROP TABLE IF EXISTS `medical records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medical records` (
  `Record_ID` bigint unsigned NOT NULL AUTO_INCREMENT,
  `Patient_ID` bigint NOT NULL,
  `Staff_ID` bigint NOT NULL,
  `Diagnosis` varchar(255) NOT NULL,
  `Treatment` varchar(255) NOT NULL,
  `Visit_Date` date NOT NULL,
  `Notes` varchar(255) NOT NULL,
  PRIMARY KEY (`Record_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical records`
--

LOCK TABLES `medical records` WRITE;
/*!40000 ALTER TABLE `medical records` DISABLE KEYS */;
INSERT INTO `medical records` VALUES (1,42,44,'Fracture','Amoxicillin 460 mg','2024-08-05','Follow-up needed'),(2,20,29,'Migraine','Amoxicillin 270 mg','2024-09-30','Prescribed bed rest'),(3,34,36,'Migraine','Metformin 315 mg','2024-01-31','Refer to specialist'),(4,2,40,'Hypertension','Amoxicillin 112 mg','2024-07-09','Patient stable'),(5,39,49,'Allergy','Lisinopril 235 mg','2024-07-06','Follow-up needed'),(6,30,12,'Migraine','Paracetamol 172 mg','2024-12-04','Follow-up needed'),(7,37,30,'Fracture','Lisinopril 226 mg','2024-08-04','Patient stable'),(8,43,12,'Infection','Aspirin 454 mg','2024-01-10','Refer to specialist'),(9,6,30,'Diabetes','Amoxicillin 275 mg','2024-06-29','Follow-up needed'),(10,30,30,'Migraine','Paracetamol 439 mg','2024-07-07','Follow-up needed'),(11,12,3,'Hypertension','Lisinopril 151 mg','2024-07-09','Follow-up needed'),(12,23,47,'Migraine','Lisinopril 168 mg','2024-05-06','Refer to specialist'),(13,42,39,'Hypertension','Metformin 409 mg','2024-10-21','Follow-up needed'),(14,8,47,'Hypertension','Aspirin 142 mg','2024-11-23','Refer to specialist'),(15,42,5,'Fracture','Lisinopril 296 mg','2024-04-06','Follow-up needed'),(16,34,14,'Infection','Ibuprofen 473 mg','2024-06-30','Refer to specialist'),(17,27,44,'Allergy','Ibuprofen 140 mg','2024-12-09','Refer to specialist'),(18,9,35,'Allergy','Ibuprofen 164 mg','2024-12-11','Prescribed bed rest'),(19,20,43,'Diabetes','Paracetamol 473 mg','2024-10-02','Follow-up needed'),(20,24,13,'Fracture','Paracetamol 146 mg','2024-07-30','Refer to specialist'),(21,2,17,'Fracture','Paracetamol 211 mg','2024-04-28','Follow-up needed'),(22,19,48,'Infection','Metformin 296 mg','2024-03-19','Refer to specialist'),(23,21,20,'Hypertension','Lisinopril 333 mg','2024-04-14','Prescribed bed rest'),(24,23,28,'Allergy','Lisinopril 237 mg','2024-06-22','Follow-up needed'),(25,1,45,'Infection','Aspirin 316 mg','2024-02-19','Refer to specialist'),(26,16,42,'Allergy','Amoxicillin 108 mg','2024-08-22','Prescribed bed rest'),(27,44,10,'Infection','Ibuprofen 123 mg','2024-08-05','Follow-up needed'),(28,33,21,'Infection','Metformin 259 mg','2024-06-28','Follow-up needed'),(29,48,6,'Diabetes','Ibuprofen 211 mg','2024-02-23','Prescribed bed rest'),(30,9,7,'Hypertension','Lisinopril 295 mg','2024-07-10','Follow-up needed'),(31,29,8,'Allergy','Amoxicillin 431 mg','2024-05-05','Refer to specialist'),(32,7,1,'Diabetes','Ibuprofen 119 mg','2024-02-23','Refer to specialist'),(33,6,35,'Fracture','Lisinopril 191 mg','2024-02-20','Prescribed bed rest'),(34,31,30,'Allergy','Aspirin 400 mg','2024-10-19','Patient stable'),(35,5,24,'Migraine','Aspirin 151 mg','2024-12-09','Prescribed bed rest'),(36,17,19,'Migraine','Amoxicillin 311 mg','2024-10-12','Refer to specialist'),(37,15,33,'Hypertension','Paracetamol 242 mg','2024-02-09','Patient stable'),(38,11,49,'Hypertension','Paracetamol 460 mg','2024-04-19','Refer to specialist'),(39,14,20,'Allergy','Ibuprofen 276 mg','2024-03-24','Patient stable'),(40,41,32,'Fracture','Metformin 350 mg','2024-11-17','Prescribed bed rest'),(41,6,13,'Hypertension','Metformin 230 mg','2024-04-27','Refer to specialist'),(42,50,30,'Allergy','Lisinopril 311 mg','2024-10-09','Refer to specialist'),(43,47,29,'Fracture','Lisinopril 266 mg','2024-06-25','Patient stable'),(44,45,13,'Hypertension','Lisinopril 394 mg','2024-08-02','Prescribed bed rest'),(45,17,15,'Diabetes','Lisinopril 236 mg','2024-06-24','Follow-up needed'),(46,39,38,'Hypertension','Amoxicillin 439 mg','2024-03-23','Follow-up needed'),(47,25,40,'Diabetes','Ibuprofen 486 mg','2024-05-15','Prescribed bed rest'),(48,50,32,'Allergy','Aspirin 353 mg','2024-06-10','Prescribed bed rest'),(49,33,10,'Migraine','Ibuprofen 402 mg','2024-09-22','Patient stable'),(50,38,36,'Migraine','Lisinopril 299 mg','2024-01-08','Follow-up needed');
/*!40000 ALTER TABLE `medical records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patients` (
  `Patient_ID` bigint unsigned NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(255) NOT NULL,
  `Last_Name` varchar(255) NOT NULL,
  `Date_of_Birth` date NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `Contact_Number` varchar(255) NOT NULL,
  `Address` varchar(255) NOT NULL,
  `Emergency_Contact` varchar(255) NOT NULL,
  PRIMARY KEY (`Patient_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1,'Emily','Wilson','1972-08-22','Female','555-6945','823 Maple St, Springfield','555-1765'),(2,'Anna','Miller','1962-09-12','Female','555-6504','320 Maple St, Springfield','555-6753'),(3,'Jane','Davis','1979-03-04','Male','555-6820','327 Pine St, Springfield','555-2942'),(4,'John','Wilson','1963-09-30','Other','555-5587','793 Maple St, Springfield','555-7088'),(5,'Jane','Davis','1962-08-31','Male','555-7098','817 Pine St, Springfield','555-5164'),(6,'Emily','Taylor','1985-10-21','Female','555-5716','140 Oak St, Springfield','555-3049'),(7,'Sarah','Moore','1985-10-13','Female','555-4172','834 Pine St, Springfield','555-6924'),(8,'Michael','Wilson','1991-03-10','Male','555-9089','512 Pine St, Springfield','555-5527'),(9,'Jane','Johnson','1976-09-27','Other','555-1575','757 Elm St, Springfield','555-4958'),(10,'James','Moore','1958-06-04','Female','555-8840','151 Oak St, Springfield','555-6751'),(11,'Chris','Wilson','1996-08-06','Male','555-9495','244 Pine St, Springfield','555-1872'),(12,'John','Clark','2003-09-10','Other','555-3648','363 Pine St, Springfield','555-3953'),(13,'Michael','Davis','1976-03-23','Male','555-1673','794 Oak St, Springfield','555-8943'),(14,'Laura','Wilson','1976-03-14','Female','555-8651','713 Pine St, Springfield','555-3762'),(15,'Anna','Doe','1969-09-24','Other','555-9797','100 Maple St, Springfield','555-3359'),(16,'John','Taylor','1959-02-05','Other','555-1370','144 Elm St, Springfield','555-1250'),(17,'Alex','Wilson','2000-05-24','Other','555-7272','517 Pine St, Springfield','555-3298'),(18,'Sarah','Smith','1986-05-11','Other','555-9862','218 Elm St, Springfield','555-8030'),(19,'Anna','Doe','1976-03-03','Male','555-8931','809 Pine St, Springfield','555-9938'),(20,'Laura','Miller','1987-05-27','Male','555-9433','106 Maple St, Springfield','555-9933'),(21,'Michael','Brown','1970-08-26','Female','555-2696','402 Elm St, Springfield','555-9889'),(22,'Sarah','Doe','1998-04-02','Other','555-8912','965 Oak St, Springfield','555-9854'),(23,'Laura','Clark','1973-03-17','Male','555-6608','319 Maple St, Springfield','555-8846'),(24,'Anna','Smith','1956-06-03','Male','555-1964','813 Maple St, Springfield','555-2376'),(25,'Michael','Johnson','1988-02-06','Male','555-7591','939 Maple St, Springfield','555-2662'),(26,'Michael','Davis','1967-01-24','Male','555-6031','146 Pine St, Springfield','555-1291'),(27,'Michael','Moore','1963-10-19','Other','555-3381','658 Maple St, Springfield','555-3412'),(28,'Emily','Davis','2000-08-01','Female','555-5097','932 Pine St, Springfield','555-9642'),(29,'Alex','Moore','1965-12-25','Male','555-7627','701 Elm St, Springfield','555-1162'),(30,'Alex','Miller','1966-10-15','Other','555-4318','363 Maple St, Springfield','555-5584'),(31,'Chris','Johnson','1955-09-15','Female','555-8908','460 Pine St, Springfield','555-8440'),(32,'Sarah','Doe','1973-02-13','Other','555-4254','922 Oak St, Springfield','555-9654'),(33,'John','Moore','1974-11-04','Other','555-8859','117 Oak St, Springfield','555-3664'),(34,'Emily','Taylor','1969-03-06','Male','555-7432','406 Oak St, Springfield','555-3468'),(35,'Chris','Wilson','1989-09-29','Male','555-2649','190 Pine St, Springfield','555-9254'),(36,'James','Miller','1961-12-10','Female','555-4395','387 Elm St, Springfield','555-1453'),(37,'Alex','Doe','2005-02-14','Female','555-8180','438 Maple St, Springfield','555-7575'),(38,'Michael','Taylor','1952-04-26','Other','555-9317','554 Elm St, Springfield','555-4563'),(39,'Sarah','Taylor','1996-02-13','Male','555-4775','217 Maple St, Springfield','555-7277'),(40,'James','Clark','1964-02-04','Female','555-2893','196 Maple St, Springfield','555-4693'),(41,'Laura','Wilson','1997-06-16','Female','555-6833','953 Maple St, Springfield','555-6367'),(42,'Laura','Wilson','2001-05-19','Female','555-9294','343 Elm St, Springfield','555-6134'),(43,'Laura','Davis','1976-10-31','Male','555-7361','478 Oak St, Springfield','555-5412'),(44,'John','Taylor','1984-02-13','Other','555-2248','757 Maple St, Springfield','555-3043'),(45,'Laura','Moore','1981-03-09','Male','555-2824','624 Maple St, Springfield','555-8454'),(46,'John','Doe','1980-05-04','Female','555-6795','997 Pine St, Springfield','555-8499'),(47,'James','Wilson','1974-08-13','Female','555-2845','555 Pine St, Springfield','555-6817'),(48,'Chris','Clark','1971-01-22','Other','555-1199','498 Maple St, Springfield','555-8242'),(49,'Alex','Clark','1973-07-24','Female','555-1105','344 Maple St, Springfield','555-8856'),(50,'Emily','Clark','1970-03-19','Female','555-5713','435 Maple St, Springfield','555-1485');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescriptions`
--

DROP TABLE IF EXISTS `prescriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescriptions` (
  `Prescription_ID` bigint unsigned NOT NULL AUTO_INCREMENT,
  `Patient_ID` bigint NOT NULL,
  `Staff_ID` bigint NOT NULL,
  `Medication_Name` varchar(255) NOT NULL,
  `Dosage` varchar(255) NOT NULL,
  `Instructions` varchar(255) NOT NULL,
  `Date_Issued` date NOT NULL,
  PRIMARY KEY (`Prescription_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescriptions`
--

LOCK TABLES `prescriptions` WRITE;
/*!40000 ALTER TABLE `prescriptions` DISABLE KEYS */;
INSERT INTO `prescriptions` VALUES (1,12,23,'Amoxicillin','13 mg','Take at bedtime','2024-05-21'),(2,1,1,'Lisinopril','74 mg','Take once daily','2024-05-19'),(3,36,39,'Ibuprofen','22 mg','Take at bedtime','2024-01-14'),(4,49,46,'Lisinopril','72 mg','Take once daily','2024-10-20'),(5,22,11,'Lisinopril','41 mg','Take every 6 hours','2024-01-22'),(6,32,11,'Amoxicillin','94 mg','Take every 6 hours','2024-07-07'),(7,42,11,'Ibuprofen','97 mg','Take every 6 hours','2024-05-07'),(8,49,3,'Paracetamol','87 mg','Take once daily','2024-09-12'),(9,25,48,'Amoxicillin','42 mg','Take once daily','2024-08-12'),(10,11,1,'Aspirin','53 mg','Take every 6 hours','2024-02-17'),(11,49,27,'Lisinopril','69 mg','Take at bedtime','2024-11-21'),(12,31,10,'Metformin','32 mg','Take every 6 hours','2024-09-28'),(13,17,9,'Lisinopril','55 mg','Take once daily','2024-05-08'),(14,32,30,'Paracetamol','57 mg','Take once daily','2024-06-18'),(15,16,39,'Ibuprofen','99 mg','Take once daily','2024-02-06'),(16,37,14,'Lisinopril','26 mg','Take every 6 hours','2024-03-08'),(17,45,8,'Aspirin','75 mg','Take every 6 hours','2024-07-07'),(18,6,22,'Lisinopril','54 mg','Take every 6 hours','2024-02-07'),(19,14,21,'Ibuprofen','99 mg','Take at bedtime','2024-05-13'),(20,14,36,'Paracetamol','69 mg','Take with food','2024-06-13'),(21,28,8,'Paracetamol','23 mg','Take at bedtime','2024-12-25'),(22,17,1,'Aspirin','14 mg','Take once daily','2024-01-01'),(23,7,43,'Amoxicillin','96 mg','Take every 6 hours','2024-10-11'),(24,41,46,'Lisinopril','84 mg','Take every 6 hours','2024-08-27'),(25,28,11,'Metformin','58 mg','Take with food','2024-03-12'),(26,4,3,'Paracetamol','58 mg','Take with food','2024-01-26'),(27,1,47,'Paracetamol','31 mg','Take once daily','2024-04-22'),(28,23,40,'Metformin','84 mg','Take every 6 hours','2024-06-22'),(29,14,17,'Lisinopril','23 mg','Take every 6 hours','2024-12-03'),(30,48,20,'Amoxicillin','26 mg','Take at bedtime','2024-08-04'),(31,5,3,'Ibuprofen','54 mg','Take at bedtime','2024-07-01'),(32,16,46,'Amoxicillin','43 mg','Take at bedtime','2024-01-06'),(33,44,23,'Amoxicillin','59 mg','Take every 6 hours','2024-08-01'),(34,41,40,'Aspirin','97 mg','Take at bedtime','2024-05-04'),(35,10,8,'Ibuprofen','13 mg','Take with food','2024-07-31'),(36,5,6,'Metformin','63 mg','Take with food','2024-07-11'),(37,33,8,'Ibuprofen','70 mg','Take at bedtime','2024-11-11'),(38,18,38,'Ibuprofen','80 mg','Take at bedtime','2024-07-05'),(39,50,33,'Amoxicillin','95 mg','Take every 6 hours','2024-09-18'),(40,39,16,'Metformin','87 mg','Take every 6 hours','2024-11-10'),(41,19,36,'Aspirin','59 mg','Take with food','2024-11-16'),(42,11,4,'Amoxicillin','24 mg','Take at bedtime','2024-05-15'),(43,30,42,'Paracetamol','68 mg','Take once daily','2024-05-12'),(44,32,38,'Amoxicillin','59 mg','Take once daily','2024-07-29'),(45,6,12,'Paracetamol','16 mg','Take at bedtime','2024-12-03'),(46,18,4,'Ibuprofen','60 mg','Take every 6 hours','2024-10-18'),(47,22,45,'Lisinopril','52 mg','Take at bedtime','2024-08-10'),(48,21,30,'Aspirin','33 mg','Take every 6 hours','2024-02-18'),(49,7,3,'Aspirin','30 mg','Take every 6 hours','2024-11-22'),(50,20,21,'Paracetamol','44 mg','Take once daily','2024-12-07');
/*!40000 ALTER TABLE `prescriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `staff` (
  `Staff_ID` bigint unsigned NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(255) NOT NULL,
  `Last_Name` varchar(255) NOT NULL,
  `Role` varchar(255) NOT NULL,
  `Specialty` varchar(255) NOT NULL,
  `Contact_Number` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  PRIMARY KEY (`Staff_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (1,'James','Johnson','Nurse','Oncology','555-9420','jane.smith@hospital.com'),(2,'James','Miller','Nurse','Cardiology','555-4393','alex.johnson@hospital.com'),(3,'Chris','Miller','Receptionist','Neurology','555-7761','emily.clark@hospital.com'),(4,'Emily','Brown','Technician','Dermatology','555-8013','michael.brown@hospital.com'),(5,'Emily','Clark','Doctor','Pediatrics','555-8357','sarah.wilson@hospital.com'),(6,'Jane','Brown','Doctor','Oncology','555-9884','chris.davis@hospital.com'),(7,'Emily','Smith','Doctor','Pediatrics','555-6193','anna.miller@hospital.com'),(8,'Laura','Moore','Technician','Cardiology','555-2730','james.moore@hospital.com'),(9,'Sarah','Moore','Nurse','Neurology','555-4406','laura.taylor@hospital.com'),(10,'James','Doe','Nurse','Oncology','555-9780','john.doe@hospital.com'),(11,'Anna','Johnson','Doctor','Dermatology','555-4636','jane.smith@hospital.com'),(12,'Michael','Johnson','Nurse','Neurology','555-9854','alex.johnson@hospital.com'),(13,'Sarah','Davis','Doctor','Neurology','555-7420','emily.clark@hospital.com'),(14,'Chris','Doe','Nurse','Neurology','555-2079','michael.brown@hospital.com'),(15,'Sarah','Clark','Nurse','Pediatrics','555-6807','sarah.wilson@hospital.com'),(16,'Laura','Smith','Nurse','Orthopedics','555-8426','chris.davis@hospital.com'),(17,'James','Wilson','Technician','Orthopedics','555-2619','anna.miller@hospital.com'),(18,'Emily','Johnson','Receptionist','Oncology','555-6922','james.moore@hospital.com'),(19,'Sarah','Taylor','Technician','Orthopedics','555-4865','laura.taylor@hospital.com'),(20,'Chris','Brown','Doctor','Neurology','555-6663','john.doe@hospital.com'),(21,'James','Taylor','Receptionist','Pediatrics','555-5734','jane.smith@hospital.com'),(22,'Alex','Miller','Technician','Neurology','555-2920','alex.johnson@hospital.com'),(23,'Laura','Davis','Receptionist','Cardiology','555-5937','emily.clark@hospital.com'),(24,'John','Smith','Doctor','Oncology','555-7169','michael.brown@hospital.com'),(25,'Emily','Johnson','Doctor','Cardiology','555-9794','sarah.wilson@hospital.com'),(26,'Chris','Taylor','Doctor','Cardiology','555-8773','chris.davis@hospital.com'),(27,'Michael','Moore','Nurse','Neurology','555-1228','anna.miller@hospital.com'),(28,'Michael','Moore','Nurse','Pediatrics','555-6076','james.moore@hospital.com'),(29,'Laura','Miller','Doctor','Dermatology','555-4364','laura.taylor@hospital.com'),(30,'Laura','Miller','Receptionist','Cardiology','555-2796','john.doe@hospital.com'),(31,'Laura','Moore','Receptionist','Neurology','555-7328','jane.smith@hospital.com'),(32,'Emily','Wilson','Technician','Pediatrics','555-3137','alex.johnson@hospital.com'),(33,'Alex','Wilson','Nurse','Cardiology','555-5939','emily.clark@hospital.com'),(34,'James','Johnson','Receptionist','Oncology','555-8820','michael.brown@hospital.com'),(35,'Michael','Clark','Doctor','Pediatrics','555-2587','sarah.wilson@hospital.com'),(36,'Chris','Brown','Doctor','Pediatrics','555-8280','chris.davis@hospital.com'),(37,'Sarah','Moore','Technician','Neurology','555-1509','anna.miller@hospital.com'),(38,'Anna','Davis','Technician','Cardiology','555-4893','james.moore@hospital.com'),(39,'Michael','Brown','Doctor','Oncology','555-4326','laura.taylor@hospital.com'),(40,'Alex','Johnson','Doctor','Pediatrics','555-7496','john.doe@hospital.com'),(41,'Chris','Doe','Nurse','Pediatrics','555-1584','jane.smith@hospital.com'),(42,'Laura','Johnson','Technician','Oncology','555-2366','alex.johnson@hospital.com'),(43,'John','Smith','Doctor','Neurology','555-3705','emily.clark@hospital.com'),(44,'Emily','Davis','Nurse','Neurology','555-3616','michael.brown@hospital.com'),(45,'Alex','Moore','Doctor','Pediatrics','555-2055','sarah.wilson@hospital.com'),(46,'Jane','Davis','Technician','Cardiology','555-1917','chris.davis@hospital.com'),(47,'Emily','Taylor','Nurse','Pediatrics','555-6469','anna.miller@hospital.com'),(48,'Laura','Doe','Doctor','Dermatology','555-2759','james.moore@hospital.com'),(49,'Chris','Davis','Nurse','Cardiology','555-6610','laura.taylor@hospital.com'),(50,'James','Johnson','Receptionist','Dermatology','555-5939','john.doe@hospital.com');
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-16 19:16:55
