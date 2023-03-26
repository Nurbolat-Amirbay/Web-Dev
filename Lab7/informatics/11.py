n=int(input())
k=int(input())
l=[]
for i in range(n, k+1):
    if(i%2==0):
        l.append(i)
print(*l)