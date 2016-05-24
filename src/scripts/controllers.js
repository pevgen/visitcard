'use strict';

angular.module('library')



//////////////////////////////////////////////////////////////////////////////////////
//       Контроллер для работы
//       с формой заметок (review) на книгу
///////////////////////////////////////////////////////////////////////////////////////
.controller('ReviewBookController', ['$scope', 'bookService', 'stateService', '$uibModal', function ($scope, bookService, stateService, $uibModal) {


    /////////////////////////////////////////////////////////////////////
    //      Функция показа модального окна Редактирования книги
    /////////////////////////////////////////////////////////////////////        
    $scope.showEditForm = function (book) {

        $scope.editBook = book;
        console.log('!!! $scope.editBook/title = ' + $scope.editBook.title);

        var modalInstance = $uibModal.open({
            //      animation: $scope.animationsEnabled,
            templateUrl: 'templates/review.html',
            controller: 'ReviewModalBookForm',
            //                size: size,           
            resolve: {
                // это параметр, передаваемый в модальное окно                     
                editBook: function () {
                    return $scope.editBook;
                }
            }
        });

        modalInstance.result.then(
            // Если выбран close(newBook) в контроллере ModalInstanceCtrl (тот что указан в open())
            // newBookResult - значение параметра newBook, переданного в методе close(newBook)
            function (updatedBook) {
                //                    $scope.newBook = newBookResult;
                //                    console.log('Before updatedBook.state='+ updatedBook.state);
                //                    console.log("updatedBook.$id =  " + updatedBook.$id); 
                // добавить новую книгу-объект в список
                bookService.updateBook(updatedBook);
                //                    $scope.$parent.gridOptions.data = $scope.$parent.books;
                //                    console.log('After update $scope.$parent.books='+ $scope.$parent.books.length);

            }, // Если выбран dismiss() в контроллере ModalInstanceCtrl (тот что указан в open())
            function () {
                //$log.info('Modal dismissed at: ' + new Date());
                console.log('!!! not select'); // Если не выбран select
            });
    };

    }])

.controller('ReviewModalBookForm', ['$scope', '$uibModalInstance', 'editBook', 'genreService', 'stateService', function ($scope, $uibModalInstance, editBook, genreService, stateService) {

    // clone object
    // иначе из-за ссылки на editBook и связывания в angular, сразу меняется содержимое editBook
    // получается: выбор а затем cancel всё-равно изменяет объект
    $scope.oneBook = JSON.parse(JSON.stringify(editBook));


    $scope.ok = function () {
        $uibModalInstance.close($scope.oneBook);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    }]);