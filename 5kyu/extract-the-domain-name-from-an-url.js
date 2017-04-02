/*jshint esversion:6*/
function domainName(url) {
  return url.toString().replace('https://', '').replace('http://', '').replace('www.', '').split('.')[0];
}

console.log(domainName("http://github.com/carbonfive/raygun"));
