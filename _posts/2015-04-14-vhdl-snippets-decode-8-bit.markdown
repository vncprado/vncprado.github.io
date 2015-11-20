---
layout: post
title: VHDL Snippets - Decode 8-bit
date: 2015-04-14 00:05:27.000000000 -04:00
---
Following a 8-bit decode:

	LIBRARY ieee;
	USE ieee.std_logic_1164.ALL;
	ENTITY decode8 IS
    	PORT (	enable : IN STD_LOGIC;
				data   : IN STD_LOGIC_VECTOR (3 downto 0);  -- 3-bit input
				eq0    : OUT STD_LOGIC;
				eq1    : OUT STD_LOGIC;
				eq2    : OUT STD_LOGIC;
				eq3    : OUT STD_LOGIC;
				eq4    : OUT STD_LOGIC;
				eq5    : OUT STD_LOGIC;
				eq6    : OUT STD_LOGIC;
				eq7    : OUT STD_LOGIC);
	END decode8;
	ARCHITECTURE behavior OF decode8 IS
	BEGIN
		PROCESS (data)
		BEGIN
			eq0 <= '0'; eq1 <= '0'; eq2 <= '0'; eq3 <= '0'; eq4 <= '0'; eq5 <= '0'; eq6 <= '0'; eq7 <= '0';
			IF (enable = '1') THEN
				CASE data IS
					WHEN "000" => eq0 <= '1';
					WHEN "001" => eq1 <= '1';
					WHEN "010" => eq2 <= '1';
					WHEN "011" => eq3 <= '1';
					WHEN "100" => eq4 <= '1';
					WHEN "101" => eq5 <= '1';
					WHEN "110" => eq6 <= '1';
					WHEN "111" => eq7 <= '1';
					WHEN others => eq0<= '0';eq1<= '0';eq2<= '0';eq3<= '0';eq4<= '0';eq5<= '0';eq6<= '0';eq7<= '0';
				END CASE;
			END IF;
		END PROCESS;
	END;

That's all =]
