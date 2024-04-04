---
title: Arrow-Regular Function Differences
description: Magna eiusmod sint eiusmod anim sunt et est ipsum quis reprehenderit.
---

# ARROW - REGULAR FUNCTION DIFFERENCES

## **Access arguments**

- The arguments objesine arrow function default olarak erişim sağlayamayız.
- Arrow function es6 ile hayatımıza girmiştir.

```jsx
/** REGULAR FUNCTION */
function logNumbers(num1, num2) {
  console.log(arguments)
}

logNumbers(8, 24)

OUTPUT :
Arguments(2)
	0 : 8,
	1 : 24
```

```jsx
/** ARROW FUNCTION */
const logNumbers = (num1, num2) => {
  console.log(arguments);
};

logNumbers(8, 24); // Uncaught ReferenceError: arguments is not defined
```

Erişim sağlayabilmemiz için, args parametre olarak spread etmemiz gerekmektedir.

```jsx
const logNumbers = (...args) => {
  console.log(args);
};

logNumbers(8, 24);

OUTPUT: [8, 24];
```

## Duplicated Names

- Regular fonksiyonlarda aynı isimde verilen parametreler eğer ‘use Strict’ mode aktif değilse, override eder. USE STRICT kullanarak compile zamanında hata vermesine olanak sağlayabiliriz.

```jsx
function exampleFunction(a, b, a) {
  console.log(a, b);
}

exampleFunction("first", "second", "third");

OUTPUT: third, second;
```

- Arrow function’da ise aynı isimde parametre vermemize izin verilmez.

```jsx
const exampleFunction = (a, b, a) => {
  console.log(a, b)
}

exampleFunction("first", "second", "third")

OUTPUT : Duplicate parametres name not allowed in this context.
```

## Function Hoisting

Regular fonksiyonlar ‘function’ keyword dolayı tanımlamalarından dolayı hoisting sırasında yukarı taşınır. önce cagrılabilir, hata oluşturmaz.

```jsx
regularFunction();

function regularFunction() {
  console.log("This is a regular function.");
}
```

Arrow functionlarda bu böyle işlemez. Cağrıldığı yer önemlidir.

```jsx
arrowFunction()

const arrowFunction = () => {
  console.log("This is an arrow function.")
}

OUTPUT : cannot acces 'arrowFunction' before initialization
```

## Setting ‘this’ function call

- Regular function this kullanıldığında eğer ‘strict mode’ aktif değilse, global window penceresini göstermektedir.

```jsx
function myRegularFunction() {
  console.log(this)
}

myRegularFunction()

OUTPUT : Eğer 'use strict' aktifse -> undefined, değilse window
```

- Arrow function’da context , window objecttidir.
- Değeri Regular bir fonksiyon olan bir yöntemi çağırdığınızda, bu değer, yöntemin çağrıldığı nesneye ayarlanır. Ancak yöntemin değeri bir arrow function olduğunda, bu değer global pencere nesnesine ayarlanır.

```jsx
const myObject = {
  regularExample: function() {
    console.log("REGULAR: ", this)
  },

  arrowExample: () => {
    console.log("ARROW: ", this)
  }
}

myObject.regularExample()
myObject.arrowExample()

OUTPUT :
Regular : { regularExample : f, arrowExample : f}
ARROW : Window || undefined
```

- ARROW FUNCTION CONSTRUCTOR OLARAK KULLANILAMAZ!

OZET :

- new, this,arguments kullanılması gerektiğinde REGULAR FUNCTION
- non-method functions ARROW
