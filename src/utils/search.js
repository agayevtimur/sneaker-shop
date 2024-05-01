export default function search(event, items, initialItems) {
  const searchValue = event.target.value.trim().toLowerCase()
  if (!searchValue) {
    items.value = Array.from(initialItems)
  } else {
    const filteredItems = initialItems.filter((item) => {
      return item.title.toLowerCase().includes(searchValue)
    })
    items.value = filteredItems
  }
}
