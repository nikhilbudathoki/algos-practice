def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    num_1 = 0
    num_2 = 0

    # loop to create num_1
    i = 0
    curnode = l1
    while(True):
        currnum = curnode.val
        num_1 += (currnum * (10**i))
        if not curnode.next:
            break
        curnode = curnode.next
        i += 1

    # loop to create num_2
    j = 0
    curnode = l2
    while(True):
        currnum = curnode.val
        num_2 += (currnum * (10**j))
        if not curnode.next:
            break
        curnode = curnode.next
        j += 1

    final_num = num_1 + num_2

    result = ListNode(0)
    result_node = result

    if not final_num:
        return result

    while final_num:
        digit = final_num % 10
        result_node.next = ListNode(digit)
        result_node = result_node.next
        final_num //= 10
    return result.next
