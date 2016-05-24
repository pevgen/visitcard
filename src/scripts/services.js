'use strict';

angular.module('library')

//    .constant("baseURL","https://google.com/library")

.constant("LIB_CONFIG", {
    "baseURL": "https://google.com/library",
    "finishedReadingState": "Прочитал",
    "nowReadingState": "Читаю сейчас"
})


// service stub
//    .service('aboutFactory', ['LIB_CONFIG', function(LIB_CONFIG) {
//            
//        
//        this.aboutData = 
//            {
//                firstName: 'Имя 1',
//                lastName: 'Фамилия 1'
//            };
//            
//        this.getAboutData = function(){
//            return this.aboutData;
//        };
//        
//    }]) 



;