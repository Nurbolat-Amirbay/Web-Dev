n=int(input())
l=list(input().split())
m=[]
for i in range(0, n, 2):
    m.append(l[i])
print(*m)