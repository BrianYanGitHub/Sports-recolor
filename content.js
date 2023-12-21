const currentUrl = window.location.href;
const obj = {'cleveland-cavaliers': 'red'}

for (let key in obj){
  if (currentUrl.indexOf(key) > -1){
    document.querySelector('body').style.color = obj[key]
  }
}
currentUrl.indexOf('cleveland-cavaliers')



const teamObj = {
    'boston-celtics': green ,
    'brooklyn-nets' : black ,
    'new-york-knicks' : orange,
    'philadelphia-76ers'
    toronto-raptors
    chicago-bulls
    cleveland-cavaliers


}