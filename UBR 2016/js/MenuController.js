var myApp = angular.module('dishes', []);

myApp.controller('MenuController', ['$scope', function ($scope) {
    $scope.dishes = [
        /* ENTREES */
        {
            menu: 'dinner lunch',
            submenu: 'entrees',
            name: 'Pasta with Marinara Sauce',
            desc: 'pasta tossed with house-made marinara topped with parmesan cheese and served with garlic bread',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner',
            submenu: 'entrees',
            name: 'Pan Roasted Chicken',
            desc: 'half chicken roasted and served with pan jus,  fingerling potatoes, and garlic green beans',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner lunch',
            submenu: 'entrees',
            name: 'Philly Cheesesteak Sandwich',
            desc: 'Thin sliced roast beef with grilled onions, mushrooms and red peppers topped with melted provolone served with steak fries',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner lunch',
            submenu: 'entrees',
            name: '>> Angus Burger *',
            desc: '1/2 lbs served on brioche bun with mayo, beetroot relish, lettuce, tomato, and onion with choice of side',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner lunch',
            submenu: 'entrees',
            name: '>> Elk Burger *',
            desc: '1/2 lbs served on brioche bun with mayo, beetroot relish, lettuce, tomato, and onion with choice of side',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner',
            submenu: 'entrees',
            name: 'Bone in Pork Rib Chop',
            desc: 'seasoned and seared to perfection and served with Yukon gold and sweet potato mashed  and roasted brussel sprouts with pancetta cheese',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner',
            submenu: 'entrees',
            name: 'Pan Seared Halibut * ',
            desc: 'seared to a golden brown and served with julienned squash and zucchini on a bed of edamame pasta with creamy ginger-carrot sauce and garlic bread ',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner',
            submenu: 'entrees',
            name: 'Portobello Wellington',
            desc: 'pesto and mushroom duxelles stuffed portobello wrapped in puff pastry and baked to perfection, serve on a bed of julienned squash and zucchini and accompanied by a red wine reduction',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner',
            submenu: 'entrees',
            name: 'New York Strip Steak',
            desc: '10 oz strip topped with mushroom demi and served with fingerling potatoes and garlic green beans',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner lunch',
            submenu: 'entrees',
            name: 'Dungeness Crab Mac and Cheese',
            desc: 'baked Mac and Cheese loaded with Dungeness crab, served with side salad',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'lunch',
            submenu: 'entrees',
            name: 'Curried Chicken Salad Sandwich',
            desc: 'curried chicken with celery, onion, mayo, craisins, and cashews served on a toasted rustic sourdough bread with lettuce, tomato, and choice of side',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'lunch',
            submenu: 'entrees',
            name: 'Chicken Club Sandwich',
            desc: 'with pesto mayo, bacon, lettuce, tomato, and goat cheese on a brioche bun served with choice of side',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'lunch',
            submenu: 'entrees',
            name: 'Lamb Gyro',
            desc: 'served with lettuce, tomato, cucumber, and tzatziki sauce on a warm pita served with steak fries',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'lunch',
            submenu: 'entrees',
            name: 'Tuna Melt',
            desc: 'tuna salad with mayo, celery, onion, and sweet relish served on rustic sourdough bread and choice of side',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'lunch',
            submenu: 'entrees',
            name: 'Housemade Meatball Sandwich',
            desc: 'meatballs with house made marinara on soft french roll and topped with shredded mozzarella, served with steak fries',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'lunch',
            submenu: 'entrees',
            name: 'Pesto Chicken Pizza',
            desc: 'personal flat bread with creamy pesto sauce, white meat chicken, artichoke hearts, red peppers, and goat cheese crumbles',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'lunch',
            submenu: 'entrees',
            name: 'Personal Chicken Pot Pie',
            desc: 'roasted chicken with fresh carrots, celery, peas, and onions in a creamy sauce topped with puff pastry and baked to perfection. Served with side salad and choice of dressing',
            src: 'images/works/portfolio-1.jpg'
        },

        /* SIDE PLATES */
        {
            menu: 'dinner lunch',
            submenu: 'sideplates',
            name: 'Dungeness Crab Cocktail',
            desc: 'served with spicy cocktail sauce and lemon wedge',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner lunch',
            submenu: 'sideplates',
            name: 'Spicy Tequila Prawns',
            desc: 'sauteed with spicy tequila marinade',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner lunch',
            submenu: 'sideplates',
            name: 'Steak Bites with Mushrooms',
            desc: 'tender marinated beef sauteed with mushrooms',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner lunch',
            submenu: 'sideplates',
            name: 'Braised Pork Shank',
            desc: 'slow cooked pork shank topped with house-made spicy aioli',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner lunch',
            submenu: 'sideplates',
            name: 'Hot Crab Bread',
            desc: 'rustic bread smothered with Dungeness crab and melted Tillamook Cheddar cheese',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner lunch',
            submenu: 'sideplates',
            name: 'Cheese Fondue',
            desc: 'creamy cheese blend served with assorted breads',
            src: 'images/works/portfolio-1.jpg'
        },

        /* SALADS  */
        {
            menu: 'dinner lunch',
            submenu: 'salads',
            name: 'Poached Pear and Bleu Cheese Wedge Salad',
            desc: 'red wine poached pears, bleu cheese and hazelnuts with  bleu cheese dressing',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner lunch',
            submenu: 'salads',
            name: 'Green Salad',
            desc: 'with tomato, cucumber, and onion with choice of dressing',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner lunch',
            submenu: 'salads',
            name: 'Quinoa Salad',
            desc: 'with roasted red peppers and tomatoes tossed with basil-mint vinaigrette and mixed greens',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner lunch',
            submenu: 'salads',
            name: 'Kale Salad with Steak * ',
            desc: 'steak cooked to order and served on a bed of kale and mixed greens topped with warm Cranberry Almond vinaigrette and goat cheese crumbles',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'dinner',
            submenu: 'salads',
            name: 'Dungeness Crab Louie',
            desc: 'iceberg lettuce loaded with Dungeness Crab, hard-boiled egg, tomato wedges, cucumber, and house made Louie dressing',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'lunch',
            submenu: 'salads',
            name: 'Chicken Caesar Pasta Salad',
            desc: 'diced chicken breast and veggies tossed with creamy house made caesar dressing and pasta served over a bed of mixed greens',
            src: 'images/works/portfolio-1.jpg'
        },

        /* SIDES */

        {
            menu: 'sides',
            submenu: '',
            name: 'Steak Fries',
            desc: '',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'sides',
            submenu: '',
            name: 'Garlic Green Beans',
            desc: '',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'sides',
            submenu: '',
            name: 'Seasonal Vegetable',
            desc: '',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'sides',
            submenu: '',
            name: 'Side Salad',
            desc: '',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'sides',
            submenu: '',
            name: 'Baked Macaroni and Cheese',
            desc: '',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'sides',
            submenu: '',
            name: 'Roasted Brussel Sprouts with Pancetta',
            desc: '',
            src: 'images/works/portfolio-1.jpg'
        },       
        
        /* BRUNCH */
        {
            menu: 'brunch',
            submenu: 'brunch',
            name: 'Breakfast Sammy',
            desc: 'scrambled eggs, cheddar cheese, and choice of meat on english muffin with fruit cup',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'brunch',
            submenu: 'brunch',
            name: 'Beer Batter Pancakes',
            desc: 'with honey butter and warm maple syrup',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'brunch',
            submenu: 'brunch',
            name: 'Eggs Benedict',
            desc: 'poached eggs and ham on english muffin topped with hollandaise and served with hash browns ',
            src: 'images/food/brunch/eggsBenedict.jpg'
        },
        {
            menu: 'brunch',
            submenu: 'brunch',
            name: 'Corned Beef Hash',
            desc: 'topped with two poached eggs and cheddar cheese served with warm biscuit and honey butter',
            src: 'images/food/brunch/cornedBeefHash.jpg'
        },
        {
            menu: 'brunch',
            submenu: 'brunch',
            name: 'Biscuits and Sausage Gravy',
            desc: 'two biscuits topped with generous portion of our house made sausage gravy',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'brunch',
            submenu: 'brunch',
            name: 'Steel Cut Oats',
            desc: 'served with brown sugar and dried fruit',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'brunch',
            submenu: 'brunch',
            name: 'Traditional Breakfast',
            desc: 'two eggs any style, hash browns, and warm biscuit',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'brunch',
            submenu: 'brunch',
            name: '3 Egg Omelettes',
            desc: 'served with hash browns and warm biscuit',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'brunch',
            submenu: 'brunch',
            name: 'Stuffed French Toast',
            desc: 'peanut butter and banana stuffed french toast topped with warm maple syrup and bacon crumbles',
            src: 'images/food/brunch/pbBananaFrenchToast.jpg'
        },
        {
            menu: 'brunch',
            submenu: 'brunch',
            name: 'Chicken Fried Steak',
            desc: 'topped with sausage gravy and served with two eggs, hash browns, and warm biscuit',
            src: 'images/food/brunch/chickenFriedSteak.jpg'
        },
        {
            menu: 'brunch',
            submenu: 'brunch',
            name: '10 NY Strip and Eggs',
            desc: 'cooked to order with two eggs, hash browns, and biscuit',
            src: 'images/works/portfolio-1.jpg'
        },

        /* HAPPY HOUR */

        {
            menu: 'happyhr',
            submenu: 'happyhr',
            name: 'Brussels Sprouts with Pancetta',
            desc: '$4.50',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'happyhr',
            submenu: 'happyhr',
            name: 'Steak Fries',
            desc: '$3.50',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'happyhr',
            submenu: 'happyhr',
            name: 'Mac and Cheese',
            desc: '$5',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'happyhr',
            submenu: 'happyhr',
            name: 'Hummas with Pita Chips and Veggies',
            desc: '$6',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'happyhr',
            submenu: 'happyhr',
            name: '(3) Meatball Sliders',
            desc: '$6',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'happyhr',
            submenu: 'happyhr',
            name: 'Fondue with Bread',
            desc: '$5',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'happyhr',
            submenu: 'happyhr',
            name: 'Walla Walla Onion Rings',
            desc: '$5',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'happyhr',
            submenu: 'happyhr',
            name: 'Pork Shank with Spicy Aioli',
            desc: '$5',
            src: 'images/works/portfolio-1.jpg'
        },

        /* Cocktails */
        {
            menu: 'cocktails',
            submenu: 'cocktails',
            name: 'Survive Ginger',
            desc: 'Three olives vodka, lime, orange, cucumber, and ginger ale',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'cocktails',
            submenu: 'cocktails',
            name: 'Rusty Barrel',
            desc: 'Courvoisier, Cointreau, and lemon',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'cocktails',
            submenu: 'cocktails',
            name: 'Sazerac',
            desc: 'Templeton Rye, Absinthe, bitters, and orange',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'cocktails',
            submenu: 'cocktails',
            name: 'Uptown Coffee',
            desc: 'Tuaca, Kahlua, walnut, relevant cold brew, and whip',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'cocktails',
            submenu: 'cocktails',
            name: 'NW Peach Martini',
            desc: 'Three olives vodka, peach, cranberry, and lime',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'cocktails',
            submenu: 'cocktails',
            name: 'Fourth Plain',
            desc: 'Woodinville Rye, Campari, Dolin, and orange',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'cocktails',
            submenu: 'cocktails',
            name: 'Bramble',
            desc: 'Voyager Gin, blackberry, and lime',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'cocktails',
            submenu: 'cocktails',
            name: 'Pimms',
            desc: 'Voyager Gin, Pimms, cucumber, lime, lemon, orange, and ginger ale',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'cocktails',
            submenu: 'cocktails',
            name: 'Gunstock Iced Tea',
            desc: 'Evan Williams bourbon, sweet tea, and lemon',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'cocktails',
            submenu: 'cocktails',
            name: 'Form of Flattery',
            desc: 'Eldorado, Velvet Falernum, pineapple, lime, and beet juice',
            src: 'images/works/portfolio-1.jpg'
        },

        ///* PICTURE TO DISPLAY ON LOAD */

        //{
        //    menu: 'none col-md-12',
        //    submenu: 'none',
        //    name: 'Form of Flattery',
        //    desc: 'Eldorado, Velvet Falernum, pineapple, lime, and beet juice',
        //    src: 'images/works/portfolio-1.jpg'
        //}

        /* WINE */

        {
            menu: 'wine',
            submenu: 'bubbles',
            name: 'Bubbles',
            desc: 'Sparkling wine is a wine with significant levels of carbon dioxide in it, making it fizzy. The classic example of a sparkling wine is champagne, which is exclusively produced in the Champagne region of France. Click here to see our full selection of wines.',
            src: 'images/works/portfolio-1.jpg',
        },
        {
            menu: 'wine',
            submenu: 'dessert',
            name: 'Dessert Wines',
            desc: 'Dessert wines, sometimes called pudding wines, are sweet wines typically served with dessert. There is no simple definition of a dessert wine. Click here to see our full selection of wines.',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'wine',
            submenu: 'white',
            name: 'White Wines',
            desc: 'White wine is a wine whose color can be straw-yellow, yellow-green, or yellow-gold coloured. It is produced by the alcoholic fermentation of the non-colored pulp of grapes which may have a white or black skin. Click here to see our full selection of wines.',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'wine',
            submenu: 'rose',
            name: 'Rose Wines',
            desc: 'A rosé is a type of wine that incorporates some of the color from the grape skins, but not enough to qualify it as a red wine. It may be the oldest known type of wine, as it is the most straightforward to make with the skin contact method. Click here to see our full selection of wines.',
            src: 'images/works/portfolio-1.jpg'
        },
        {
            menu: 'wine',
            submenu: 'red',
            name: 'Red Wines',
            desc: 'Red wine is a type of wine made from dark-colored grape varieties. The actual color of the wine can range from intense violet, typical of young wines, through to brick red for mature wines and brown for older red wines. Click here to see our full selection of wines.',
            src: 'images/works/portfolio-1.jpg'
        },

    ]
}]);