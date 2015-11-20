---
layout: post
title: C++ snippets
date: 2015-02-23 00:40:56.000000000 -05:00
---
Last year I worked for a lab at National Laboratory of Scientific Computing (LNCC) in Petrópolis, RJ, Brasil. Was a pleasant experience. My colleagues are good people and I like LNCC research environment.

My job there actually was manage and help to choose a cluster. A secondary role of my work (which became first because we had some problems buying the cluster) was help in the parallel implementation of cryptographic algorithms in C++.

I am not a fluent guy in C++ so many stuffs here are discoveries. We heavily used [NTL](http://www.shoup.net/ntl/) library which helped me a lot with the theorical part. From our implementation, there are two functions that helped me a lot and maybe useful for someone else.

	vec_GF2E slice_vec(vec_GF2E x, int n) {
		// Function that returns a subvector [0:n]
		
        vec_GF2E result;
		result.SetLength(n);
		for (int i = 0; i < n; i++) {
			result[i] = x[i];
		}
		return result;
	}

	mat_GF2E slice_mat(mat_GF2E O, int i_ini, int i_end, int j_ini, int j_end) {
		// Returns a submatrix M[i_ini:i_end][j_ini:j_end]
        
		mat_GF2E R;
		R.SetDims(i_end - i_ini, j_end - j_ini);

		for (int i = i_ini; i < i_end; i++) {
			vec_GF2E temp_vet;
			temp_vet.SetLength(j_end - j_ini);
			int j_vet = 0;
			for (int j = j_ini; j < j_end; j++) {
				temp_vet[j_vet] = O[i][j];
				j_vet += 1;
			}
			R[i - i_ini] = temp_vet;
		}
		return R;
	}

One can see that we try to emulate some matrix and vector slicing in C++.

There is more NTL implementation-specific stuff but probably I will make a mess trying to explain.

That's All.

	
