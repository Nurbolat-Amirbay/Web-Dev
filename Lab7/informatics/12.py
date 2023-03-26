a=int(input())
b=int(input())
c=int(input())
d=int(input())
l=[]
for i in range(a, b+1):
    if(i%d==c):
        l.append(i)
print(*l)