import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    KFCURL: "https://www.kfc.com/",
    wikipediaURL: "https://en.wikipedia.org/wiki/Curse_of_the_Colonel",
    standings: [
        {years : "1985 - 1989",
         stats : [
            {year: '1985', percent: '.602', rank: '2/12'},
            {year: '1986', percent: '.500', rank: '6/12'},
            {year: '1987', percent: '.331', rank: '12/12'},
            {year: '1988', percent: '.398', rank: '12/12'},
            {year: '1989', percent: '.419', rank: '10/12'}
          ]},
        {years : "1990 - 1994",
         stats : [
            {year: '1990', percent: '.400', rank: '11/12'},
            {year: '1991', percent: '.369', rank: '12/12'},
            {year: '1992', percent: '.515', rank: '9/12'},
            {year: '1993', percent: '.485', rank: '10/12'},
            {year: '1994', percent: '.477', rank: '10/12'}
          ]},
        {years : "1995 - 1999",
         stats : [
            {year: '1995', percent: '.354', rank: '12/12'},
            {year: '1996', percent: '.415', rank: '12/12'},
            {year: '1997', percent: '.460', rank: '11/12'},
            {year: '1998', percent: '.385', rank: '12/12'},
            {year: '1999', percent: '.407', rank: '12/12'}
         ]},
        {years : "2000 - 2005",
         stats : [
            {year: '2000', percent: '.423', rank: '12/12'},
            {year: '2001', percent: '.416', rank: '11/12'},
            {year: '2002', percent: '.485', rank: '8/12'},
            {year: '2003', percent: '.629', rank: '1/12'},
            {year: '2004', percent: '.416', rank: '11/12'}
            
         ]},
         {years : "2005 - 2009",
          stats : [
            {year: '2005', percent: '.617', rank: '3/12'},
            {year: '2006', percent: '.592', rank: '4/12'},
            {year: '2007', percent: '.529', rank: '5/12'},
            {year: '2008', percent: '.582', rank: '2/12'},
            {year: '2009', percent: '.479', rank: '8/12'}
          ]}
      ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
