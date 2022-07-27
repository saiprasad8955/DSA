
// find cycle/LOOP in linked list 
const hasCycle = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if (slow === fast) return true;
    }
    return false;
}