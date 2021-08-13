"""
Given the head of a linked list, remove the nth node from the end and return its head
"""
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def removeNthFromEnd(head: ListNode, n: int) -> ListNode:
    list_length = 0
    curr = head

    while curr is not None:
        curr = curr.next 
        list_length += 1

    to_remove = list_length - n 
    if to_remove == 0:
        return head.next 

    i = 0
    curr = head 
    prev = head 
    while i <= to_remove:
        prev = curr 
        curr = curr.next
        i += 1
    prev.next = curr.next 
    curr.next = None 
    
    return head

    






