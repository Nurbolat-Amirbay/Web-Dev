n=int(input())
l=list(input().split())
k=0
for i in range(1, n):
    if(l[i-1]<l[i]):
        k+=1
print(k)