const currentUrl = window.location.href;
// const obj = {'cleveland-cavaliers': 'red'}
const teamObj = {
  'boston-celtics': green ,
  'brooklyn-nets' : black ,
  'new-york-knicks' : orange,
  'philadelphia-76ers' : blue,
  'toronto-raptors' : red,
  'chicago-bulls' : red,
  'cleveland-cavaliers' : red,
  'detroit-pistons': blue,
  'indiana-pacers':yellow,
  'milwaukee-bucks': green,
  'atlanta-hawks': red,
  'charlotte-hornets': purple,
  'miami-heat': red,
  'orlando-magic': lightblue,
  'washington-wizards': navy,
  'denver-nuggets': blue,
  'minnesota-timberwolves': navy,
  'oklahoma-city-thunder': aqua,
  'portland-trail-blazers': red,
  'utah-jazz': blue,
  'golden-state-warriors': yellow,
  'la-clippers': black,
  'los-angeles-lakers': gold,
  'phoenix-suns': orange,
  'sacramento-kings': purple,
  'dallas-mavericks': blue,
  'houston-rockets': red,
  'memphis-grizzlies': lightblue,
  'new-orleans-pelicans': navy,
  'san-antonio-spurs': grey,
}


for (let key in obj){
  if (currentUrl.indexOf(key) > -1){
    document.querySelector('body').style.color = obj[key]
  }
}




