def make_chocolate(small, big, goal):
    big_needed = min(big, goal // 5)
    return goal - (big_needed * 5) <= small