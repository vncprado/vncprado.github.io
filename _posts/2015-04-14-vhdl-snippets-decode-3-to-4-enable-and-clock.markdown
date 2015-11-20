---
layout: post
title: VHDL Snippets - Decode 3 to 4 Enable and Clock
date: 2015-04-14 00:23:39.000000000 -04:00
---
This decode 3 to 4 has outputs only for binary 1, 4, 5 and 6 (particularities of our project), enable input and clock.

	LIBRARY ieee;
	USE ieee.std_logic_1164.ALL;
	ENTITY decode3to4 IS
		PORT (	enable : IN STD_LOGIC;
				data   : IN STD_LOGIC_VECTOR (2 downto 0);  -- 3-bit input
				clock  : IN STD_LOGIC;
				eq1    : OUT STD_LOGIC;
				eq4    : OUT STD_LOGIC;
				eq5    : OUT STD_LOGIC;
				eq6    : OUT STD_LOGIC);
	END decode3to4;
	ARCHITECTURE behavior OF decode3to4 IS
    BEGIN
      PROCESS (clock,enable,data)
      BEGIN
          IF clock'EVENT AND clock='1' THEN
              eq1 <= '0'; eq4 <= '0'; eq5 <= '0'; eq6 <= '0';
              IF (enable = '1') THEN  -- active high enable pin
                  CASE data IS
                      WHEN "001" => eq1 <= '1';
                      WHEN "100" => eq4 <= '1';
                      WHEN "101" => eq5 <= '1';
                      WHEN "110" => eq6 <= '1';
                      WHEN others => eq1 <= '0'; eq4 <= '0'; eq5 <= '0'; eq6 <= '0';
                  END CASE;
              END IF;
          END IF;
      END PROCESS;
	END;

That's all =]
