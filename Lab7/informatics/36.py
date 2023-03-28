n=int(input())
l=list(input().split())
m=[]
while n>0:
    m.append(l[n-1])
    n-=1
print(*m)