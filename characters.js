// CHARACTERS

var candidates = {
	"Barack Obama": "Jon Snow",
	"Obama": "Jon Snow",
	"Jeb Bush": "Stannis Baratheon",
	"Bush": "Stannis",
	"Mr. Bush": "Stannis",
	"Hillary Rodham Clinton": "Cersei Lannister",
	"Hillary Clinton": "Cersei Lannister",
	"Hillary": "Cersei",
	"Mrs. Clinton": "Cersei",
	"Clinton": "Cersei",
	"Ben Carson": "Petyr Baelish",
	"Carson": "Baelish",
	"Bernie Sanders": "The High Sparrow",
	"Mr. Sanders": "The High Sparrow",
	"Sanders": "The High Sparrow",
	"Bernie": "The High Sparrow",
	"The Bern": "The Hish Sparrow",
	"Chris Christie": "Robert Baratheon",
	"Christie": "Robert Baratheon",
	"Ted Cruz": "Ramsay Bolton",
	"Mr. Cruz": "Ramsay",
	"Cruz": "Ramsay",
	"Jim Webb": "Eddard Stark",
	"Mr. Webb": "Eddard",
	"Webb": "Eddard",
	"Carly Fiorina": "Ygritte the Wildling",
	"Mr. Fiorina": "Ygritte the Wilding",
	"Fiorina": "Ygritte",
	"Joseph R. Biden Jr.": "Jorah Mormont",
	"Joe Biden": "Jorah Mormont",
	"Mr. Biden": "Jorah",
	"Biden": "Jorah",
	"Lindsey Graham": "Lord Varys",
	"Mr. Graham": "Varys",
	"Graham": "Varys",
	"Rick Santorum": "Hodor",
	"Mr. Santorum": "Hodor",
	"Santorum": "Hodor",
	"Lincoln Chafee": "Bronn",
	"Mr. Chafee": "Bronn",
	"Chafee": "Bronn",
	"Martin O’Malley": "Oberyn Martell",
	"Mr. O'Malley": "Oberyn",
	"O’Malley": "Oberyn",
    "O'Malley": "Oberyn",
	"OMalley": "Oberyn",
	"Jim Gilmore": "Podrick Payne",
	"Mr. Gilmore": "Podrick",
	"Gilmore": "Podrick",
	"Donald Trump": "Joffrey Baratheon",
	"Mr. Trump": "Joffrey",
	"Trump": "Joffrey",
	"Marco Rubio": "Samwell Tarly",
	"Mr. Rubio": "Samwell Tarly",
	"Rubio": "Tarly",
	"Mitt Romney": "Maester Aemon",
	"Mr. Romney": "Maester Aemon",
	"Romney": "Maester Aemon",
	"Mike Huckabee": "Sandor Clegane",
	"Mr. Huckabee": "The Hound",
	"Huckabee": "The Hound",
	"Bobby Jindal": "Sansa Stark",
	"Mr. Jindal": "Sansa Stark",
	"Jindal": "Sansa",
	"John Kasich": "Grey Worm",
	"Mr. Kasich": "Grey Worm",
	"Kasich": "Grey Worm",
	"George Pataki": "Jojen Reed",
	"Mr. Pataki": "Jojen",
	"Pataki": "Jojen",
	"Rand Paul": "Theon Greyjoy",
	"Mr. Paul": "Theon",
	"Paul": "Theon",
	"Rick Perry": "Ellaria Sand",
	"Mr. Perry": "Ellaria",
	"Perry": "Ellaria",
	"Scott Walker": "Ser Davos",
	"Mr. Walker": "Ser Davos",
	"Walker": "Ser Davos"

}


/*

$("body").contents().each(function () {
    if (this.nodeType === 3) {
        var text = $.trim($(this).text());
        
        for (key in rules) {
            console.log(key +"-> " + rules[key]);
            text = text.replace(key,rules[key]);
        }
        this.nodeValue = text;
    }
    if (this.nodeType === 1) {
        var text = $(this).html();
        for (key in rules) {
            text = text.replace(key,rules[key]);
        }
        $(this).html( text )
    }
    // To reduce calls just do


})
*/
var html = $("body").html();
console.log(html);
for (candidate in candidates) {
    var re = new RegExp(candidate, 'g');
    html = html.replace(re,candidates[candidate])
}
$("body").html(html);
