<template>
    <body>

      <header>
        <img class="badge" alt="hanshin tiger logo" src="@/assets/HanshinTigersLogo.jpg">
        <div class="title">
          <h1>Kaneru Sandasu no Noroi</h1>
          <h3>THE CURSE OF THE COLONEL</h3>
        </div>
      </header>

        <hr>

          <table class="timeline">
              <h2>Timeline of Pertinent Events</h2>
              <ul >
              <li>In the 1985 Japan Championship Series, underdog Hanshin Tigers of Kansai beat the Yomiuri Giants of Tokyo, widely considered the Kings of Japanese Baseball.</li>
              <li>Hanshin fans erupted in celebration at Ebisu Bridge in Osaka, where fans celerbrated by jumping in the river when a player's name was shouted out.</li>
              <li>Randy Bass did not have a fan that resembled him so fans seized a plastic statue of Colonel Sanders from the nearby KFC and threw it into the river.</li>
              <li>After 1985, the Hanshin Tigers endured a 16-year losing streak, often placing in the bottom two positions in their league.</li>
              <li>On March 10, 2009 while dredging the river, divers uncovered the remains of the Colonel Sanders statue. It was missing its left hand and glasses.</li>
              <li>The curse can only be lifted when the left hand and glasses of the original statue are returned to KFC.</li>
              </ul>
          </table>

        <hr>

        <div class="quotes">
          <h2>Quotes</h2>
          <blockquote>
              The colonel will be kept in police custody for the time being, but Yokakawa said KFC is considering donating him to the home stadium of the Tigers in Osaka.
            <br><a href="http://www.nbcnews.com/id/29629104/ns/world_news-weird_news/t/colonel-sanders-pulled-river-after-years/#.XwNudJNKhle">NBC News.com</a>
            </blockquote>
          <blockquote>
            The "Curse of the Colonel" has also been used as a bogeyman threat to those who would divulge the secret recipe of eleven herbs and spices that result in the unique taste of his chicken.
            <br><a href="https://en.wikipedia.org/wiki/Curse_of_the_Colonel">wikipedia: Curse of the Colonel</a>
          </blockquote>
          <blockquote>
            "He was apparently found standing upright, which is fitting, because although he was a nice man he could also be very strict and demanding," <br> ~ KFC Spokeswoman Sumeo Yokakawa upon recovery of Colonel Sanders statue.
            <br><a href="https://www.dispatch.com/article/20090311/NEWS/303119481">The Columbus Dispatch</a>
          </blockquote>
        </div>  

        <hr>

        <standings-comp />

    </body>
</template>

<script>
import StandingsComp from '@/components/StandingsComp.vue'

export default {
  name: 'Home',
  components: {
    StandingsComp,
  }
}
</script>

<style>
/* Cursed view CSS scoped */

h1 {
    color: #e7360c;
    font-size: 5rem;
    margin: 0px;
    font-weight: 500;
    text-decoration: underline;
    text-shadow: 1px -1px #e7360c, -1px 1px #e7360c, -1px -1px white, 1px 1px darkred;

}

h2 {
    color: #e7360c;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px -1px #e7360c, -1px 1px #e7360c, -1px -1px white, 1px 1px darkred;

}

h3 {
    font-weight: 400;
    font-size: 2.5rem;
    margin: 0px;
    text-shadow: 1px -1px #e7360c, -1px 1px #e7360c, -1px -1px white, 1px 1px darkred;
    position: relative;
    left: 100px;
}

hr {
  background: #e7360c;
  border: 2px inset #e7360c;
  margin-top: 20px;
  margin-bottom: 20px;
}

.title {
  width: auto;
  margin:auto;
  padding: auto;
}

.timeline>ul {
  border-left: 4px;
  border-color: black;
  border-style: none none none solid;
  padding-left: 0px;
  margin-left: 20px;
}

.timeline>ul>li {
  list-style-type: square;
}

.quotes {
  width: 90%;
  display: inline-block;
  margin: 40px;
}

</style>