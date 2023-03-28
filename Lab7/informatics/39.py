def xor(x, y):
    if(int(x)==int(y)):
        return 0
    else:
        return 1
a, b = input().split()
print(xor(a, b))