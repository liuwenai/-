
//'Abc'=>'aBC'

function wapString(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] <= 'Z' && str[i] >= 'A') {
            result += str[i].toLowerCase()
        } else {
            result += str[i].toUpperCase()
        }
    }
    console.log(result)
}
wapString('AbC');



// example 1
var a={}, b='123', c=123;
a[b]='b';
a[c]='c';
console.log(a[b]);  //c

// example 2
var a={}, b=Symbol('123'), c=Symbol('123');
a[b]='b';
a[c]='c';
console.log(a[b]);   //b

// example 3
var a={}, b={key:'123'}, c={key:'456'};
a[b]='b';
a[c]='c';
console.log(a[b]);   //c

function changeObjProperty(o) {
    o.siteUrl = "http://www.baidu.com"
    o = new Object()
    o.siteUrl = "http://www.google.com"
  } 
  let webSite = new Object();
  changeObjProperty(webSite);
  console.log(webSite.siteUrl);  // http://www.baidu.com


  function Foo() {
    Foo.a = function() {
      console.log(1)
    }
    this.a = function() {
      console.log(2)
    }
    }
    Foo.prototype.a = function() {
    console.log(3)
    }
    Foo.a = function() {
    console.log(4)
    }
    Foo.a();    //4
    let obj = new Foo();
    obj.a();    //2
    Foo.a();     //1



  