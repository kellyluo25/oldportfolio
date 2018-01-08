var handlebars = require(['handlebars']);
var layouts = require('handlebars-layouts');

// Register helpers
handlebars.registerHelper(layouts(handlebars));

// Register partials
handlebars.registerPartial('layout', fs.readFileSync('layout.hbs', 'utf8'));

// Compile template
var template = handlebars.compile(fs.readFileSync('page.html.hbs', 'utf8'));

var content = {
    title: 'Layout Test'
}

// Render template
var html = template(content);

console.log(html);