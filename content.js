const currentUrl = window.location.href;
// const obj = {'cleveland-cavaliers': 'red'}
const teamObj = {
  'boston-celtics': 'green' ,
  'brooklyn-nets' : 'black' ,
  'new-york-knicks' : 'orange',
  'philadelphia-76ers' : 'blue',
  'toronto-raptors' : 'red',
  'chicago-bulls' : 'red',
  'cleveland-cavaliers' : 'brown',
  'detroit-pistons': 'blue',
  'indiana-pacers':'yellow',
  'milwaukee-bucks': 'green',
  'atlanta-hawks': 'red',
  'charlotte-hornets': 'purple',
  'miami-heat': 'red',
  'orlando-magic': 'blue',
  'washington-wizards': 'navy',
  'denver-nuggets': 'blue',
  'minnesota-timberwolves': 'navy',
  'oklahoma-city-thunder': 'aqua',
  'portland-trail-blazers': 'red',
  'utah-jazz': 'blue',
  'golden-state-warriors': 'yellow',
  'la-clippers': 'black',
  'los-angeles-lakers': 'purple',
  'phoenix-suns': 'orange',
  'sacramento-kings': 'purple',
  'dallas-mavericks': 'blue',
  'houston-rockets': 'red',
  'memphis-grizzlies': 'blue',
  'new-orleans-pelicans': 'blue',
  'san-antonio-spurs': 'grey'
}


for (let key in teamObj){
  if (currentUrl.indexOf(key) > -1){
    // document.querySelector('body').style.color = teamObj[key]
    // let allLinks = document.querySelectorAll('a') 
    // allLinks.forEach(link => link.style.color = teamObj[key])
    // allLinks = document.querySelectorAll('span')
    // allLinks.forEach(link => link.style.color = teamObj[key])
    // document.querySelectorAll('h3').forEach(link => link.style.color = teamObj[key])
    // document.querySelectorAll('h2').forEach(link => link.style.color = teamObj[key])
    document.querySelectorAll('*').forEach(link => link.style.color = teamObj[key])
  } 
  }





