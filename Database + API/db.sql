-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb4 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`post` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NULL DEFAULT NULL,
  `detail` TEXT NULL DEFAULT NULL,
  `picture_url` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`post_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `mydb`.`egg`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`egg` (
  `egg_id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NULL DEFAULT NULL,
  `detail` TEXT NULL DEFAULT NULL,
  `picture_url` VARCHAR(100) NULL DEFAULT NULL,
  `post_id` INT NOT NULL,
  PRIMARY KEY (`egg_id`),
  INDEX `fk_egg_post_idx` (`post_id` ASC),
  CONSTRAINT `fk_egg_post`
    FOREIGN KEY (`post_id`)
    REFERENCES `mydb`.`post` (`post_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
