InputBox, plaintext, Demo, Enter a super secret string:
InputBox, password, Demo, Enter a super secret password:
cyphertext := encrypt(plaintext, password)
MsgBox, % "Your encrypted super secret string:`r`n" cyphertext
MsgBox, % "Your decryted encrypted super secret string:`r`n" decrypt(cyphertext, password)
MsgBox, % "Your decryted encrypted super secret string with the wrong password:`r`n" decrypt(cyphertext, "this took way too long to do")

encrypt(plaintext, password)
{
	permutations1:=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4]
	permutations2:=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32]
	permutations3:=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7]
	permutations4:=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1]
	map1:=[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]]
	map2:=[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]]
	map3:=[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]]
	map4:=[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]]
	map5:=[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]]
	map6:=[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]]
	map7:=[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]]
	map8:=[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]
	permutations5:=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25]
	permutations6:=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25]
	cyphertext := ""
	key := 0
	while(password)
	{
		key := 31 * key + Ord(password)
		password := SubStr(password, 2)
	}
	jumbledKey := 0
	;get keys
	loop 56
	{
		jumbledKey <<= 1
		jumbledKey |= key >> 64 - permutations1[A_Index] & 1
	}
	lK0 := jumbledKey >> 28
	rK0 := jumbledKey & 0xFFFFFFF
	loop 16
	{
		k := A_Index
		rotateTwice := !(A_Index == 1 OR A_Index == 2 OR A_Index == 9 OR A_Index == 16)
		prevLK := "lK" . (k - 1)
		prevRK := "rK" . (k - 1)
		lK%k% := %prevLK% << 1 + rotateTwice & 0xFFFFFFF | %prevLK% >> 28 - (1 + rotateTwice)
		rK%k% := %prevRK% << 1 + rotateTwice & 0xFFFFFFF | %prevRK% >> 28 - (1 + rotateTwice)
		key%k% := (lK%k% << 28) | rK%k%
		jumbledKey%k% := 0
		loop 48
		{
			jumbledKey%k% <<= 1
			jumbledKey%k% |= key%k% >> 56 - permutations2[A_Index] & 1
		}
	}
	while(plaintext)
	{
		block := 0
		jumbledBlock := 0
		permutedBlock := 0
		loop 8
		{
			block <<= 8
			if(plaintext)
				block |= Ord(plaintext)
			plaintext := SubStr(plaintext, 2)
		}
		;encrypt blocks
		loop 64
		{
			jumbledBlock <<= 1
			jumbledBlock |= block >> 64 - permutations3[A_Index] & 1
		}
		lB0 := jumbledBlock >> 32 & 0xFFFFFFFF
		rB0 := jumbledBlock & 0xFFFFFFFF
		loop 16
		{
			prevLB := "lB" . (A_Index - 1)
			prevRB := "rB" . (A_Index - 1)
			lB%A_Index% := %prevRB%
			extendedSubBlock := 0
			newSubBlock := 0
			permutedSubBlock := 0
			k := A_Index
			loop 48
			{
				extendedSubBlock <<= 1
				extendedSubBlock |= %prevRB% >> 32 - permutations4[A_Index] & 1
			}
			loop 8
			{
				k%A_Index% := (extendedSubBlock ^ jumbledKey%k%) >> (8 - A_Index) * 6 & 0x3F
				i := k%A_Index% >> 5 << 1 | k%A_Index% & 1
				j := k%A_Index% >> 1 & 0xF
				newSubBlock <<= 4
				newSubBlock |= map%A_Index%[i + 1][j + 1]
			}
			loop 32
			{
				permutedSubBlock <<= 1
				permutedSubBlock |= newSubBlock >> 32 - permutations5[A_Index] & 1
			}
			rB%A_Index% := %prevLB% ^ permutedSubBlock
		}
		newBlock := rB16 << 32 | lB16
		loop 64
		{
			permutedBlock <<= 1
			permutedBlock |= newBlock >> 64 - permutations6[A_Index] & 1
		}
		;converting to string
		loop 8
		{
			cyphertext .= Chr(permutedBlock >> 56 & 0xFF)
			permutedBlock <<= 8
		}
	}
	return cyphertext
}

decrypt(cyphertext, password)
{
	permutations1:=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4]
	permutations2:=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32]
	permutations3:=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7]
	permutations4:=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1]
	map1:=[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]]
	map2:=[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]]
	map3:=[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]]
	map4:=[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]]
	map5:=[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]]
	map6:=[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]]
	map7:=[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]]
	map8:=[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]
	permutations5:=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25]
	permutations6:=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25]
	plaintext := ""
	key := 0
	while(password)
	{
		key := 31 * key + Ord(password)
		password := SubStr(password, 2)
	}
	jumbledKey := 0
	;get keys
	loop 56
	{
		jumbledKey <<= 1
		jumbledKey |= key >> 64 - permutations1[A_Index] & 1
	}
	lK0 := jumbledKey >> 28
	rK0 := jumbledKey & 0xFFFFFFF
	loop 16
	{
		k := A_Index
		rotateTwice := !(A_Index == 1 OR A_Index == 2 OR A_Index == 9 OR A_Index == 16)
		prevLK := "lK" . (k - 1)
		prevRK := "rK" . (k - 1)
		lK%k% := %prevLK% << 1 + rotateTwice & 0xFFFFFFF | %prevLK% >> 28 - (1 + rotateTwice)
		rK%k% := %prevRK% << 1 + rotateTwice & 0xFFFFFFF | %prevRK% >> 28 - (1 + rotateTwice)
		key%k% := (lK%k% << 28) | rK%k%
		jumbledKey%k% := 0
		loop 48
		{
			jumbledKey%k% <<= 1
			jumbledKey%k% |= key%k% >> 56 - permutations2[A_Index] & 1
		}
	}
	while(cyphertext)
	{
		permutedBlock := 0
		newBlock := 0
		block := 0
		loop 8
		{
			permutedBlock <<= 8
			if(cyphertext)
				permutedBlock |= Ord(cyphertext)
			cyphertext := SubStr(cyphertext, 2)
		}
		;decrypt cyphertext
		loop 64
			if(permutedBlock & 1 << A_Index - 1)
				newBlock |= 1 << permutations6[A_Index] - 1
		lB0 := newBlock & 0xFFFFFFFF
		rB0 := newBlock >> 32 & 0xFFFFFFFF
		loop 16
		{
			prevLB := "lB" . (A_Index - 1)
			prevRB := "rB" . (A_Index - 1)
			rB%A_Index% := %prevLB%
			extendedSubBlock := 0
			newSubBlock := 0
			permutedSubBlock := 0
			i := A_Index
			k := 17 - A_Index
			loop 48
			{
				extendedSubBlock <<= 1
				extendedSubBlock |= rB%i% >> 32 - permutations4[A_Index] & 1
			}
			loop 8
			{
				k%A_Index% := (extendedSubBlock ^ jumbledKey%k%) >> (8 - A_Index) * 6 & 0x3F
				i := k%A_Index% >> 5 << 1 | k%A_Index% & 1
				j := k%A_Index% >> 1 & 0xF
				newSubBlock <<= 4
				newSubBlock |= map%A_Index%[i + 1][j + 1]
			}
			loop 32
			{
				permutedSubBlock <<= 1
				permutedSubBlock |= newSubBlock >> 32 - permutations5[A_Index] & 1
			}
			lB%A_Index% := %prevRB% ^ permutedSubBlock
		}
		jumbledBlock := lB16 << 32 | rB16
		loop 64
			if(jumbledBlock & 1 << A_Index - 1)
				block |= 1 << permutations3[A_Index] - 1
		;converting to string
		loop 8
		{
			plaintext .= Chr(block >> 56 & 0xFF)
			block <<= 8
		}
	}
	return plaintext
}