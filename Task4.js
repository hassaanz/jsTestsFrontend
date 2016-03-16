/**
 * Task 4: Explain why the logs happen in the following order:
 * one, three, two
 */
(function () {
    console.log('one');
    setTimeout(function() {
      console.log('two');
    }, 0);
    console.log('three');
})();
/*
 * Javascript Theory
 * -----------------
 * The logs happen in the order one, three, two. Javascript hsa a concurrency model
 * based on an event loop. Each function call creates a 'frame'. Frames are maintained
 * in a stack data structure.
 * Javascript maintains a message queue which contains messages to be processed.
 * each message is associated with a function. A message is popped out of queue when
 * the stack is empty a message is taken out of the queue  and processed.
 * The processing consists   *of calling the associated function
 * (and thus creating an initial stack frame). The message processing ends
 * when the stack becomes empty again.
 * Calling setTimeout will add a message to the queue after
 * the time passed as second argument
 *
 * Explanation
 * -----------
 * In the mentioned scenaria, an anonymous function is defined and called. The JS
 * runtime creates a frame for the function. When the function calls console.log('one),
 * another frame is pushed in the stack. When the setTimeout is processed, a new message
 * is added in the queue which points to the function which contains console.log('two').
 * On processing console.log('three'), a frame is created in the stack. So the execution
 * is somehow represented by Javascript like.
 *
 * So the order of execution becomes:
 * - StackElement1 (console.log('one'))
 * - StackElement2 (console.log('three'))
 * Next message start getting processed
 * - StackElement1 (console.log('two'))
 *
 */
