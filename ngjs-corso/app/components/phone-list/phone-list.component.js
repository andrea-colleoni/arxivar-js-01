angular.module('phoneList')
    .component('phoneList', {
        templateUrl: 'components/phone-list/phone-list.template.html',
        controller: ['$http', function PhoneListController($http) {
            // PhoneListController.$inject = ['$http'];
            this.orderProp = 'age';

            this.compare = (phone, query) => { 
                return !query || (phone && phone.name && phone.name.toLowerCase().indexOf(query.toLowerCase()) >= 0); 
            }
            // per evitare problemi con this nella lambda callback
            var self = this;
            // this.phoneList = $http.get('data/phones.json'); => NON FUNZIONEREBBE!
            $http.get('data/phones.json').then((phones) => {
                self.phoneList = phones.data;
            })
            .catch(() => console.warn('errore'));
        }]
    });