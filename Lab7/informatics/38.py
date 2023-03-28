def degree(a, n):
    return int(a)**int(n)
a, n = input().split()
if(int(n)>=0):
    print(degree(a, n))