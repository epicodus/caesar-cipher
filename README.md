A Caesar cipher.
=======================

I'm Eric Johnson, and this is my [JavaScript BDD assessment](http://www.learnhowtoprogram.com/lessons/javascript-bdd-assessment) for [Epicodus](http://www.epicodus.com/).

The project itself is a [Caesar cipher](http://en.wikipedia.org/wiki/Caesar_cipher), a simple form of encryption where each letter in a message is replaced by a letter that is _x_ number of positions down the alphabet.  

So _a_ would equal _b_ in a cipher which uses +1.

I tried to avoid regular expressions for this assessment but ended up using `.replace(/\s+/g, '-')` to handle whitespace characters.

All dependencies for this project are included in the repo:
* [jquery](http://jquery.com/)
* [bootstrap](http://getbootstrap.com/)
* [mocha](http://visionmedia.github.io/mocha/)
* [chai](http://chaijs.com/)
