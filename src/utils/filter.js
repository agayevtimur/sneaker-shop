export default function filter(category, items, initialItems) {
  console.log(category, items, initialItems);
  if (category === 'cheap') {
    items = Array.from(initialItems).sort((a, b) => a.price - b.price)
  } else if (category === 'expensive') {
    items = Array.from(initialItems).sort((a, b) => b.price - a.price)
  } else if (category === 'name') {
    items= Array.from(initialItems)
  }
}
