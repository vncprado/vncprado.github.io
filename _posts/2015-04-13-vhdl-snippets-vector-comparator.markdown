---
layout: post
title: VHDL Snippets - Vector Comparator
date: 2015-04-13 23:38:59.000000000 -04:00
---
I've been working with some VHDL code for a Digital Logic Design course for my Ph.D. My project was to implement some kind of artificial neural network in hardware.

I have used one thesis as a basis, but I've been thinking to put here some code that I actually had to implement. Simple stuff that you actually can find online, but that could help someone, how knows!?

Starting with a simple vector comparator:

	LIBRARY ieee;
    USE ieee.std_logic_1164.ALL;
	ENTITY comp_pulse IS
    	PORT (	dataa : IN STD_LOGIC_VECTOR (7 downto 0);
				datab : IN STD_LOGIC_VECTOR (7 downto 0);
				alb	: OUT STD_LOGIC);
	END comp_pulse;
    ARCHITECTURE behavior of comp_pulse IS
    BEGIN
		alb <= '1' when (dataa < datab) else '0';
	END;

This entity performs the unsigned comparison a < b.

That's all =]
