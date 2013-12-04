/**!
 * AngularJS file upload shim for angular XHR HTML5 browsers
 * @author  Danial  <danial.farid@gmail.com>
<<<<<<< HEAD
 * @version 1.1.10
=======
 * @version 1.1.9
>>>>>>> ce16c5ae2f9cc9dea541c84dea8bc8116cfd773a
 */
if (window.XMLHttpRequest) {
        if (window.FormData) {
                // allow access to Angular XHR private field: https://github.com/angular/angular.js/issues/1934
                XMLHttpRequest = (function(origXHR) {
                        return function() {
                                var xhr = new origXHR();
                                xhr.send = (function(orig) {
                                        return function() {
                                                if (arguments[0] instanceof FormData && arguments[0].__setXHR_) {
                                                        var formData = arguments[0];
                                                        formData.__setXHR_(xhr);
                                                }
                                                orig.apply(xhr, arguments);
                                        }
                                })(xhr.send);
                                return xhr;
                        }
                })(XMLHttpRequest);
        }
}
