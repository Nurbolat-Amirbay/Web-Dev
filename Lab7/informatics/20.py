x=int(input())
k=2
for i in range(2, (x//2)+1):
    if(x%i==0):
        k+=1
print(k)