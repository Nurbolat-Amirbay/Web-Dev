n=int(input())
l=list(input().split())
k=0
if(len(l)==n):
    for i in range(len(l)-1):
        if(l[i]==l[i+1]):
            print("YES")
            break
    else:
        print("NO")