import math
a=int(input())
b=int(input())
l=[]
for i in range(a, b+1):
    if(i%math.sqrt(i)==0):
        l.append(i)
print(*l)