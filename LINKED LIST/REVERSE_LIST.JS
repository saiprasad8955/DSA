// REVERSE LINKED LIST
reverseList = (head) => {
    let curr = head;
    let prev = null, next;
    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;  // Cause prev is now head
}


const result = reverseList(LinkedList)