console.log('\'Allo \'Allo!');

var data = {
	people:[{name:"john doe", age:35}, {name:"glen", age:5}, {name:"karen", age:35}]
}

var source = $("#data-template").html();
var template = Handlebars.compile(source);
$("#target").html(template(data));

