-- phpMyAdmin SQL Dump
-- version 4.4.15.10
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2024-03-19 13:12:12
-- 服务器版本： 5.6.50-log
-- PHP Version: 7.0.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bs240519`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`, `addtime`) VALUES
(1, 'admin', 'admin', '2024-03-16 14:12:09');

-- --------------------------------------------------------

--
-- 表的结构 `didian`
--

CREATE TABLE IF NOT EXISTS `didian` (
  `id` int(11) NOT NULL,
  `qid` int(11) NOT NULL,
  `name` text NOT NULL,
  `lat` text NOT NULL,
  `lng` text NOT NULL,
  `juli` int(11) NOT NULL,
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `jilu`
--

CREATE TABLE IF NOT EXISTS `jilu` (
  `id` int(11) NOT NULL,
  `xid` int(11) NOT NULL,
  `qid` int(11) NOT NULL,
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `kecheng`
--

CREATE TABLE IF NOT EXISTS `kecheng` (
  `id` int(11) NOT NULL,
  `lid` int(11) NOT NULL DEFAULT '0',
  `name` text NOT NULL,
  `shijian` text NOT NULL,
  `jiaoshi` text NOT NULL,
  `lat` text NOT NULL,
  `lng` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `updatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `laoshi`
--

CREATE TABLE IF NOT EXISTS `laoshi` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `name` text NOT NULL,
  `phone` text NOT NULL,
  `img` text NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `updatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- 表的结构 `qiandao`
--

CREATE TABLE IF NOT EXISTS `qiandao` (
  `id` int(11) NOT NULL,
  `kid` int(11) NOT NULL,
  `jieshu` time NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `xuanke`
--

CREATE TABLE IF NOT EXISTS `xuanke` (
  `id` int(11) NOT NULL,
  `kid` int(11) NOT NULL,
  `xid` int(11) NOT NULL,
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `xuesheng`
--

CREATE TABLE IF NOT EXISTS `xuesheng` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `xuehao` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `updatetime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `didian`
--
ALTER TABLE `didian`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jilu`
--
ALTER TABLE `jilu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kecheng`
--
ALTER TABLE `kecheng`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `laoshi`
--
ALTER TABLE `laoshi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qiandao`
--
ALTER TABLE `qiandao`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `xuanke`
--
ALTER TABLE `xuanke`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `xuesheng`
--
ALTER TABLE `xuesheng`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `didian`
--
ALTER TABLE `didian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `jilu`
--
ALTER TABLE `jilu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `kecheng`
--
ALTER TABLE `kecheng`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `laoshi`
--
ALTER TABLE `laoshi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `qiandao`
--
ALTER TABLE `qiandao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `xuanke`
--
ALTER TABLE `xuanke`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `xuesheng`
--
ALTER TABLE `xuesheng`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
