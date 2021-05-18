var reverseBetween = function(head, left, right){

}

var reverseN = function(head, n){
    if(n == 1)return head;
    var tail = head.next;
    var ans = reverseN(head.next, n-1);
    head.next = tail.next;
    tail.next = head;
    return ans;
}