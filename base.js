import "/lib.js"

function add_titles() {
  $('img').each( function() {
    var o = $(this)
    if( ! o.attr('title') && o.attr('alt') ) o.attr('title', o.attr('alt') )
  })

  $('#tagcloud span').each( function() {
    var o = $(this)
    var c = o.attr('class')
    c = c.substr(0,1).toUpperCase() + c.substr(1)
    o.attr('title', c)
  });
}

const ws = /[ \t\n]+/
const skills = {
	good: "ASP AWS C++ C CVS Hotwire Chef Cucumber Debian Delphi Ferret IRC MSSQL Mason MongoDB OLE POP3 Puppet RMI SOAP Scala VBA WINAPI WSDL XP backbone.js go/golang merb mod_perl redis Mongrel NNTP Oracle Sybase lighttpd React".split(ws),

	excellent: "Bulma UnoCSS GIS Elixir GraphQL IIS IMAP Jade Java PHP Passenger PostgreSQL REST SMTP SQL SQLite3 Scrum Sphinx Stylus TailwindCSS Ubuntu Visual Basic awk bash mSQL mod_rails node.js sed".split(ws),

	expert: `Slim AJAX Agile Batman.js CGI CSS Capistrano CoffeeScript CouchDB HTML HTTP JSON JavaScript Linux MySQL OSX Perl Phoenix xUnit Test::Unit Ruby on Rails Windows XHTML XML Ubuntu gentoo git haml heroku htmx jQuery nginx Apache prototype regex rspec scss/sass Vue`.split(ws),
}

const skills_map = Object.entries(skills).reduce((h, [level, skills]) => {
	skills.forEach(skill => h[skill.toLowerCase()] = { skill: skill, level: level })
	return h
}, {})

const skills_tags = Object.entries(skills_map).sort().map(([_,o]) => `<span class="${o.level}">${o.skill}</span>`).join("\n")

function add_cloud() {
	$('#tagcloud').html(skills_tags)
}

$(function() {
	add_cloud()
  add_titles()
})
