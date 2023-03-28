k, n = 2, int(input())
 
while k < n:
    l=2**k
    k+=1
print("YES" if l == n else "NO")
