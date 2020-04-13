/*
Single Linked List structure  
uses a node structure that has data
and a pointer to which Node is next

These lists fare much better if the access
is often only needed for the top and 
one-way insertions happen a lot(for example stack)
because those two operations are 
O(1) in a SLL, whereas they are 
O(n) worst case in an array since you'd
have to re-index the array
*/

class 