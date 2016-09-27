angular.module('quoteBook')
    .controller('mainCtrl', function($scope, quoteService) {
        $scope.test = "EloQuote";
        $scope.quotes = quoteService.getQuotes();
        $scope.deleteMe = function(textToDelete) {
            quoteService.removeData(textToDelete);
        }
        $scope.addQuote = function() {
            var newQuote = {
                text: $scope.newQuoteText,
                author: $scope.newQuoteAuthor
            }
            if (quoteService.addData(newQuote)) {
                $scope.newQuoteText = '';
                $scope.newQuoteAuthor = '';
            }
        }
    });
