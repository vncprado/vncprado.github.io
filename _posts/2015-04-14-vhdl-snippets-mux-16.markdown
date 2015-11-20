---
layout: post
title: VHDL Snippets - Mux 16
date: 2015-04-14 00:31:36.000000000 -04:00
---
Implementation of a Mux 16:
    
    LIBRARY ieee;
	USE ieee.std_logic_1164.ALL;

	ENTITY mux16_1 IS
		PORT (	sel    : IN STD_LOGIC_VECTOR (3 downto 0);
				data15 : IN STD_LOGIC;
				data14 : IN STD_LOGIC;
				data13 : IN STD_LOGIC;
				data12 : IN STD_LOGIC;
				data11 : IN STD_LOGIC;
				data10 : IN STD_LOGIC;
				data9  : IN STD_LOGIC;
				data8  : IN STD_LOGIC;
				data7  : IN STD_LOGIC;
				data6  : IN STD_LOGIC;
				data5  : IN STD_LOGIC;
				data4  : IN STD_LOGIC;
				data3  : IN STD_LOGIC;
				data2  : IN STD_LOGIC;
				data1  : IN STD_LOGIC;
				data0  : IN STD_LOGIC;
				result : OUT STD_LOGIC);
	END mux16_1;
	ARCHITECTURE behavior of mux16_1 IS
	BEGIN
		WITH sel SELECT
			result <= data15 WHEN "1111",
					  data14 WHEN "1110",
					  data13 WHEN "1101",
					  data12 WHEN "1100",
					  data11 WHEN "1011",
					  data10 WHEN "1010",
					  data9	 WHEN "1001",
					  data8	 WHEN "1000",
					  data7	 WHEN "0111",
					  data6	 WHEN "0110",
					  data5	 WHEN "0101",
					  data4	 WHEN "0100",
					  data3	 WHEN "0011",
					  data2	 WHEN "0010",
					  data1	 WHEN "0001",
					  data0	 WHEN "0000",
					  '0'    WHEN others;
	END;

That's all =]
