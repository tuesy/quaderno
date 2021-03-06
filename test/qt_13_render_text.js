
//
// testing quaderno
//
// Fri Oct 15 11:05:37 JST 2010
//

file = arguments[0];
dir = file.split('/').slice(0, -1).join('/');
load(dir + '/base.js');

// 0

var template = " \n\
group \n\
  text \"nada\" \n\
  text customer \n\
  text customer \"our dear customer\" \n\
"
var data = { "customer": "ninomiya" };

Quaderno.render('quad', template, data, {});

//print(document.documentElement);
//print(JSON.stringify(document.documentElement.toArray()));

assertEqual(
  ["div",{"class":"quad_root","id":"quad"},[
    ["div",{"class":"quad_element"},[
      ["input",{"class":"quad_type","type":"hidden","value":"group"},[]],
      ["input",{"class":"quad_template","type":"hidden","value":"[\"group\",{},[[\"text\",{\"text\":\"nada\"},[]],[\"text\",{\"_id\":\"customer\"},[]],[\"text\",{\"_id\":\"customer\",\"text\":\"our dear customer\"},[]]]]"},[]],
      ["div",{"class":"quad_element"},[
        ["input",{"class":"quad_type","type":"hidden","value":"text"},[]],
        ["input",{"class":"quad_template","type":"hidden","value":"[\"text\",{\"text\":\"nada\"},[]]"},[]],
        ["div",{"class":"quad_key quad_text"},["nada"]]]],
      ["div",{"class":"quad_element"},[
        ["input",{"class":"quad_id","type":"hidden","value":"customer"},[]],
        ["input",{"class":"quad_type","type":"hidden","value":"text"},[]],
        ["input",{"class":"quad_template","type":"hidden","value":"[\"text\",{\"_id\":\"customer\"},[]]"},[]],
        ["span",{"class":"quad_key"},["customer"]],
        ["span",{"class":"quad_value quad_text"},["ninomiya"]]]],
      ["div",{"class":"quad_element"},[
        ["input",{"class":"quad_id","type":"hidden","value":"customer"},[]],
        ["input",{"class":"quad_type","type":"hidden","value":"text"},[]],
        ["input",{"class":"quad_template","type":"hidden","value":"[\"text\",{\"_id\":\"customer\",\"text\":\"our dear customer\"},[]]"},[]],
        ["span",{"class":"quad_key"},["our dear customer"]],
        ["span",{"class":"quad_value quad_text"},["ninomiya"]]]]]]]],
  $('.quad_root')[0].toArray());

