# How to listen to a hook
In a function that has access to the ModApi add the following to it:
```js
// Change the "start" string below to what hook you want to listen to.
ModApi.addEventListener("start", function gameStarted(ev){
    // Your code
})  
```
Some hooks will have parameters they will give your function. For example, the "start" hook will give an object as the first parameter. 

# How to create a hook and dispatch to it
Somewhere in your code that has access to the ModApi add the following:
```js
    // Register a hook with the following code:
    ModApi.registerHook("goober", mod)

    // Then you can do the following to dispatch the event.
    // You can also give as many parameters as you want, but I suggest just providing a single object.
    ModApi.dispatchEventToHook("goober", "Param 1", "Param 2")
```
For this you will need to store the mod param tht the RunMod function is given.


# Default Hooks
The following is a table of all the hooks that the ModApi has to offer.  

| Hook Name | Parameters | Description |
| --------- | ---------- | ----------- |
| Start | Event Object | Gets dispatched when the game starts. |
