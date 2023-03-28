n=int(input())
l=list(input().split())
k=0
if(n==len(l)):
    for i in range(1, len(l)-1):
        if(l[i-1]<l[i] and l[i]>l[i+1]):
            k+=1
print(k)