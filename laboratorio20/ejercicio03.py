n = int(input("N: "))
while n < 3:
    n = int(input("N: "))

mat = [[0]*n for _ in range(n)]
num = 1
i = 0
j = 0
d = 0

while num <= n*n:
    mat[i][j] = num
    num += 1
    if d == 0:
        if j+1 == n or mat[i][j+1] != 0:
            d = 1
            i += 1
        else:
            j += 1
    elif d == 1:
        if i+1 == n or mat[i+1][j] != 0:
            d = 2
            j -= 1
        else:
            i += 1
    elif d == 2:
        if j-1 < 0 or mat[i][j-1] != 0:
            d = 3
            i -= 1
        else:
            j -= 1
    else:
        if i-1 < 0 or mat[i-1][j] != 0:
            d = 0
            j += 1
        else:
            i -= 1

for f in mat:
    for x in f:
        print(x, end=" ")
    print()
