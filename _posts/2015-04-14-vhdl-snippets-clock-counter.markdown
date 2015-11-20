---
layout: post
title: VHDL Snippets - Clock counter
date: 2015-04-14 00:36:26.000000000 -04:00
---
In our project this clock counter was user to counter 255 clock then forward a pulse: 

	LIBRARY ieee;
	USE ieee.std_logic_1164.ALL;
	USE IEEE.STD_LOGIC_ARITH.ALL;
	USE IEEE.STD_LOGIC_UNSIGNED.ALL;
	ENTITY clock_counter IS
		PORT (	sclr	: IN STD_LOGIC;
				clock   : IN STD_LOGIC;
				cout	: OUT STD_LOGIC;
				q 		: OUT STD_LOGIC_VECTOR (7 downto 0));
	END clock_counter;
	ARCHITECTURE behavior of clock_counter IS
		SIGNAL temp: STD_LOGIC_VECTOR (7 downto 0);
	BEGIN
		PROCESS(clock,sclr)
		BEGIN
			IF sclr='1' THEN
				cout <= '0';
				temp <= "00000000";
			ELSIF(clock'event and clock='1') THEN
				IF temp="11111111" THEN
					cout <= '1';
					temp <= "00000000";
				ELSE
					cout <= '0';
					temp <= temp + 1;
				END IF;
			END IF;
		END PROCESS;
		q <= temp;
	END;

That's all =]
