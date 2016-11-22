var myApp = angular.module('wines', []);

myApp.controller('WineController', ['$scope', function ($scope) {
    $scope.wines = [
        /* Bubbles */
        {
            type: 'bubbles',
            name: 'Montaribaldi Moscato',
            location: 'Langhe, Italy',
            desc: '',
            price: '24',
            src: '../images/wine/bubbles/placeholder.jpg',
            buy: ''
        },
        {
            type: 'bubbles',
            name: 'Freixenet Cordon Negro 750ml',
            location: 'Catalonia, Spain',
            desc: '',
            price: '30',
            src: '../images/wine/bubbles/placeholder.jpg',
            buy: ''
        },
        {
            type: 'bubbles',
            name: 'Gloria Ferrer Blanc de Noirs',
            location: 'Sonoma, California',
            desc: '',
            price: '35',
            src: '../images/wine/bubbles/placeholder.jpg',
            buy: ''
        },
        {
            type: 'bubbles',
            name: 'Argyle Vintage Brut',
            location: 'Willamette Valley, Oregon',
            desc: '',
            price: '36',
            src: '../images/wine/bubbles/placeholder.jpg',
            buy: ''
        },
        {
            type: 'bubbles',
            name: 'Domaine Jean Vesselle Brut Reserve 375ml',
            location: 'Champagne, France',
            desc: '',
            price: '42',
            src: '../images/wine/bubbles/placeholder.jpg',
            buy: ''
        },

        /* Dessert */
        {
            type: 'dessert',
            name: 'Burmester 20yr Tawny Port 375ml	',
            location: 'Portugal',
            desc: '',
            price: '60',
            src: '../images/wine/dessert/placeholder.jpg',
            buy: ''
        },
        {
            type: 'dessert',
            name: 'Burmester Colheita 375ml	',
            location: 'Portugal',
            desc: '',
            price: '36',
            src: '../images/wine/dessert/placeholder.jpg',
            buy: ''
        },

        /* White */
        {
            type: 'white',
            name: 'Butternut Chardonnay',
            location: 'California',
            desc: '',
            price: '36',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Brooks Riesling',
            location: 'Willamette Valley, Oregon',
            desc: '',
            price: '32',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'JJ Prum GH Kabinett Riesling',
            location: 'Mosel, Germany',
            desc: '',
            price: '48',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Pfeffingen Dry Estate Riesling',
            location: 'Pfalz, Germany',
            desc: '',
            price: '28',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Witness Tree Pinot Blanc',
            location: 'Eola-Amity Hills, Oregon',
            desc: '',
            price: '28',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Conti di Buscareto Verdicchio dei Castelli di Jesi',
            location: 'Marche, Italy',
            desc: '',
            price: '26',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Clissom Muscadet Sevre-et Maine',
            location: 'Loire, France',
            desc: '',
            price: '29',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Isenhower Cellars Marsanne',
            location: 'Walla Walla, Washington',
            desc: '',
            price: '28',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Eyrie Vineyards Pinot Gris',
            location: 'Willamette Valley, Oregon',
            desc: '',
            price: '38',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Evesham Wood Blanc du Puits Sec Pinot Gris',
            location: 'Willamette Valley, Oregon',
            desc: '',
            price: '32',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Zelina Pinot Grigio',
            location: 'Friuli, Italy',
            desc: '',
            price: '24',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Bodegas Albamar Albarino',
            location: 'Rias Baixas, Spain',
            desc: '',
            price: '34',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Bernard Fouquet Vouvray',
            location: 'Loire, France',
            desc: '',
            price: '34',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Chalk Hill Sauvignon Blanc',
            location: 'Napa Valley, California',
            desc: '',
            price: '38',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },
        {
            type: 'white',
            name: 'Sanford Chardonnay',
            location: 'Santa Barbara, California',
            desc: '',
            price: '46',
            src: '../images/wine/white/placeholder.jpg',
            buy: ''
        },

        /* Rose */
        {
            type: 'rose',
            name: 'Quady North Rose',
            location: 'Rogue Valley, Oregon',
            desc: '',
            price: '28',
            src: '../images/wine/rose/placeholder.jpg',
            buy: ''
        },
        {
            type: 'rose',
            name: 'Domaine Couron Rose',
            location: 'Cotes du Rhone, France',
            desc: '',
            price: '22',
            src: '../images/wine/rose/placeholder.jpg',
            buy: ''
        },
        {
            type: 'rose',
            name: 'Triennes Rose',
            location: 'Provence, France',
            desc: '',
            price: '24',
            src: '../images/wine/rose/placeholder.jpg',
            buy: ''
        },

        /* Red */
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },
        {
            type: 'red',
            name: '',
            location: '',
            desc: '',
            price: '',
            src: '../images/wine/red/placeholder.jpg',
            buy: ''
        },


    ]
}]);