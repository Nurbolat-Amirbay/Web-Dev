N = int(input())
l=[]
for i in range(N):
    k=list(input().split())
    if(k[0]=="insert"):
        l.insert(int(k[1]), int(k[2]))
    if(k[0]=="print"):
        print(l)
    if(k[0]=="remove"):
        l.remove(int(k[1]))
    if(k[0]=="append"):
        l.append(int(k[1]))
    if(k[0]=="sort"):
        l.sort()
    if(k[0]=="pop"):
        l.pop()
    if(k[0]=="reverse"):
        l.reverse()