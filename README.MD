# no-cors-proxy

Simple proxy that add cors header to server responses.


### Using as global module

```
$ npm install no-cors-proxy -g

$ no-cors-proxy -p 8000 -t http://some.api.com
```
After executing this command:

 * Each request to localhost on port 8000 will be forwarded to _some.api.com_ on port 80
 * Responses from server will be provided with ___Access-Control-Allow-Origin: *___ http header
 * Each __OPTIONS__ request (see: [preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request)) will be replyed automatically by the proxy.

##### Available options:

  * __-h _host_ __		(default: localhost)
  * __-p _port_ __		(default: 3000)
  * __-t _target_ __	(default: localhost)


### Using as local dependency

```
npm install no-cors-proxy --save
```
