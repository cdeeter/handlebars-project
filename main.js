$(function() {
    var shoesData = {
        allShoes:
        [
            {
                name: "Nike",
                price: 199.00,
                color: "black",
                size: 8
            },
            {
                name: "Loafers",
                price: 59.00,
                color: "tan",
                size: 7.5
            },
            {
                name: "Doc Martens",
                price: 259.00,
                color: "floral pattern",
                size: 7.5
            }
        ]
    };
    
    var theTemplateScript = $("#shoe-template").html();
    
    var theTemplate = Handlebars.compile(theTemplateScript);
    
    Handlebars.registerPartial("description", $("#shoe-description").html());
                               
    $(".shoesNav").append(theTemplate(shoesData));
    
    // =================================
    
    var favoriteFruits = {
        allFruits: [
            {
                fruitName: "Tangerine",
                nativeTo: [
                    {
                        country: "Venezuela"
                    }
                ]
            },
            {
                fruitName: "Mango"
            }
        ]
    };
    
    var fruitTemplateScript = $("#fruits-template").html();
    
    var fruitTemplate = Handlebars.compile(fruitTemplateScript);
    
    $(".fruitsNav").append(fruitTemplate(favoriteFruits));
    
    // ==============================
    
    var celebData = {
        groupName: "Celebrities",
        celebrity: {
            firstName: "Felicia",
            lastName: "Day"
        }
    }
    
    var celebTemplateScript = $("#celeb-template").html();
    
    var celebTemplate = Handlebars.compile(celebTemplateScript);
    
    $(".celebNav").append(celebTemplate(celebData));
    
    // =====================
    
    var contextObj = {
        scores:
        [
            {
                firstName: "Celia",
                lastName: "Deeter",
                score: [75, 93, 88, 81]
            },
            {
                firstName: "Marcos",
                lastName: "Ramirez",
                score: [85, 79, 65, 77]
            }
        ]
    };
    
    Handlebars.registerHelper("theNameOfTheHelper", function(theScore) {
        console.log("Grade: "+theScore);
        var userGrade = "C";
        
        if (theScore >= 90) {
            return "A";
        } else if (theScore >= 80 && theScore < 90) {
            return "B";
        } else if (theScore >= 70 && theScore < 80) {
            return "C";
        } else {
            return "D";
        }
    });
    
    Handlebars.registerHelper("userScore", function(dataObject, options) {
        var templateWithInterpolatedData = "";
        
        for (var i = dataObject.length - 1; i >= 0; i--) {
            dataObject[i].score = dataObject[i].score.reduce(function(prev, cur, index, array) {
                return prev + cur;
            });
            
            templateWithInterpolatedData += options.fn(dataObject[i]);
        }
        
        return templateWithInterpolatedData;
    });
    
    var scoreTemplateScript = $("#score-template").html();
    
    var scoreTemplate = Handlebars.compile(scoreTemplateScript);
    
    $(".scoreNav").append(scoreTemplate(contextObj));
});