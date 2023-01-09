var detectCycle = function(head){
  let slow = head;
  let fast = head;
  while(fast && fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
      if(slow === fast){
          slow = head;
          while(slow !== fast){
              slow = slow.next;
              fast = fast.next;
          }
          return slow;
      }
  }
  return null;
}

// S          5->6
// F         /    \     
// 0->1->2->4      7
//           \    /
//            9<-8  

// Iteration 1

//            5->6
//    S  F   /    \     
// 0->1->2->4      7
//           \    /
//            9<-8

// Iteration 2

//            F
//            5->6
//       S   /    \     
// 0->1->2->4      7
//           \    /
//            9<-8  

// Iteration 3

//            5->6
//          S/    \     
// 0->1->2->4      7F
//           \    /
//            9<-8

// Iteration 4

//            S
//            5->6
//           /    \     
// 0->1->2->4      7
//           \    /
//           F9<-8 

// Iteration 5

//            F  S
//            5->6
//           /    \     
// 0->1->2->4      7
//           \    /
//            9<-8

//Iteration 6

//            5->6
//           /    \     
// 0->1->2->4      7SF
//           \    /
//            9<-8 

//               
//            5->6
// S         /    \     
// 0->1->2->4      7F
//           \    /
//            9<-8

//Reset the Slow Pointer to the Head

// Iteration 1

//            5->6
//    S      /    \     
// 0->1->2->4      7
//           \    /
//            9<-8F

// Iteration 2

//            5->6
//       S   /    \     
// 0->1->2->4      7
//           \    /
//           F9<-8 

// Iteration 3 - THE ANSWER

//            5->6
//          S/    \     
// 0->1->2->4      7
//          F\    /
//            9<-8 