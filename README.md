# Slider

Some will no doubt ask: _"what is a carousel?"_. A carousel, it's just a picture scroll, mostly present in the index of a website.

## Goals

You must realize yourself a carousel. Simple at first, you can always upgrade later if you're motivated! The carousel, which also called `slider` quite fluently, will just have some basic functions:

* It should have two buttons, one for the previous picture, the other to display the next;
* It will scroll only, that is to say that the images will scroll by themselves without anyone having to do something;
* It can be very flexible to extent, that it will be possible to put as many images as you want.

## `setTimeout()` or repeat function regularly

A native method of **JavaScript** will be useful to automatically scroll the images. This is `setTimeout()`, which takes two arguments: the name of the `function` to perform, and the time interval (in milliseconds) to wait before doing so. The trick is to recall the function inside itself to make an infinite loop:

```javascript
var myLoop = function () {
    setTimeout(function () {
        alert('Hello'); // Display "Hello!" every second
        myLoop(); // Recovery function
    }, 1000);
};

myLoop(); // We not forget to start the first time function
```

The images used here are from [lorempixel.com](http://lorempixel.com/) and are not all copyright free.

You now have all the keys to achieving this carousel!

Remember to consult **jQuery** documentation if you need it, and make use of a `debugger` to locate a bug in your code.

## Improvements

We just present you a very basic carousel. Most of the one you meet on the internet are much more sophisticated, but remember that they work almost all the same way! What would you say to improve your? Here are some ideas:

* The image scrolling is not very aesthetic: in place of the display system, try to establish cool animation effects!
for now, the controls are very basic: it is not possible to go to a specific image by clicking once. How about to make a list of buttons representing each slide?
* Similarly, it is possible to make thumbnails of the images and display them below the carousel for a much better browsing!

The possibilities are endless, you can always find new ideas, whether good or not.
