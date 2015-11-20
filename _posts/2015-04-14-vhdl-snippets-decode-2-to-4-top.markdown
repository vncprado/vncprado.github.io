---
layout: post
title: VHDL Snippets - Decode 2 to 4 top
date: 2015-04-14 00:14:41.000000000 -04:00
---
This decode 2 to 4 have a enable input and its output is low when activated.

	LIBRARY IEEE;
	USE IEEE.STD_LOGIC_1164.ALL;
	ENTITY decode_2to4_top IS
		PORT (	A  : IN STD_LOGIC_VECTOR (1 downto 0); -- 2-bit input
				EN : IN STD_LOGIC -- enable input
				X  : OUT STD_LOGIC_VECTOR (3 downto 0)); -- 4-bit output
	END decode_2to4_top;
	ARCHITECTURE behavior OF decode_2to4_top IS
	BEGIN
	PROCESS (A, EN)
	BEGIN
		X <= "1111";        -- default output value
		IF (EN = '1') THEN  -- active high enable pin
			case A is
				WHEN "00" => X(0) <= '0';
				WHEN "01" => X(1) <= '0';
				WHEN "10" => X(2) <= '0';
				WHEN "11" => X(3) <= '0';
				WHEN others => X <= "1111";
			END CASE;
		END IF;
	END PROCESS;
	END;

That's all =]
