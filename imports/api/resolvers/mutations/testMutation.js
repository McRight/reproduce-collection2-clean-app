// Utils
// import { updatePage } from 'meteor/reproduce-collection2-clean-model';

export const testMutation = async function (root, { input }, { userId }) {
  const { name, url, isShop, isSession } = input

  let links = []

  let newTeaserLink = {
    url,
    name,
    isShop,
    isSession,
  }

  links.unshift(newTeaserLink)

  let values = {
    content: {
      teaserLinks: {
        list: links,
      },
    },
  }

  /*
   * Update page
   */

  console.log(JSON.stringify({ valuesAADD: values }, null, 2))

  console.log('link add before update')
  // updatePage({ page, userId, values });
  console.log('link add after update')

  return links
}
