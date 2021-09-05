import Vue from 'vue';
const moment =require('moment');
moment.locale('id_ID');

Vue.mixin({
    methods: {
        capitalizeFirstLetter: str => str.charAt(0).toUpperCase() + str.slice(1),
        indonesianDate(my_date) {

            // return my_date
        
            // return my_date[2] + my_date[1] + my_date[0];
            if (!my_date) {
                return false
            }
        
            let str = my_date;
            let date = moment(str);
        
            return date.format('Do MMMM YYYY')
        
        },

        dateFromNow: date => moment(date).fromNow(),
    }
});
