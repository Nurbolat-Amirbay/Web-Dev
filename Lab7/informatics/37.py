l=list(input().split())

def min(li):
    m=li[0]
    for i in range(1, len(li)):
        if(m>li[i]):
            m=li[i]
    return m
print(min(l))