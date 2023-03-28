n=int(input())
i=1
l=[1]
while i<=n:
    if(2**i<n):
        l.append(2**i)
    i+=1
print(*l) 