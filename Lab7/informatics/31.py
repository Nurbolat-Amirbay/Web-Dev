n=int(input())
l=list(input().split())
m=[]
for i in l:
    if(int(i)%2==0):
        m.append(i)
print(*m)