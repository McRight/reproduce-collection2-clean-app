import { renderApp } from '/imports/startup/client/renderApp'

Meteor.startup(() => {
  /*
   * Render App
   */

  console.log('before render')
  render(renderApp(), document.getElementById('render-target'))
})
