import { useCartStore } from '@/stores/CartStore'
import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

export const useProductsStore = defineStore('ProductsStore', () => {
  const products = ref([
    {
      id: 1,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      price: 12999,
      imageUrl: '/sneakers/sneakers-1.jpg',
      isAdded: false
    },
    {
      id: 2,
      title: "Men's Nike Air Max 270 Sneakers",
      price: 15600,
      imageUrl: '/sneakers/sneakers-2.jpg',
      isAdded: false
    },
    {
      id: 3,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      price: 8499,
      imageUrl: '/sneakers/sneakers-3.jpg',
      isAdded: false
    },
    {
      id: 4,
      title: 'Puma X Aka Boku Future Rider Sneakers',
      price: 7800,
      imageUrl: '/sneakers/sneakers-4.jpg',
      isAdded: false
    },
    {
      id: 5,
      title: 'Future Rider Sneakers',
      price: 9550,
      imageUrl: '/sneakers/sneakers-5.jpg',
      isAdded: false
    },
    {
      id: 6,
      title: 'Black Edition Sneakers',
      price: 16999,
      imageUrl: '/sneakers/sneakers-6.jpg',
      isAdded: false
    },
    {
      id: 7,
      title: 'Orange Boomb Edition Sneakers',
      price: 7499,
      imageUrl: '/sneakers/sneakers-7.jpg',
      isAdded: false
    },
    {
      id: 8,
      title: 'Nike Air Max 270 Sneakers',
      price: 15600,
      imageUrl: '/sneakers/sneakers-8.jpg',
      isAdded: false
    },
    {
      id: 9,
      title: 'Nike Air Force 1 Sneakers',
      price: 5900,
      imageUrl: '/sneakers/sneakers-9.jpg',
      isAdded: false
    },
    {
      id: 10,
      title: 'Adidas Ultraboost Sneakers',
      price: 11500,
      imageUrl: '/sneakers/sneakers-10.jpg',
      isAdded: false
    }
  ])
  const initialProducts = ref([
    {
      id: 1,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      price: 12999,
      imageUrl: '/sneakers/sneakers-1.jpg',
      isAdded: false
    },
    {
      id: 2,
      title: "Men's Nike Air Max 270 Sneakers",
      price: 15600,
      imageUrl: '/sneakers/sneakers-2.jpg',
      isAdded: false
    },
    {
      id: 3,
      title: "Men's Nike Blazer Mid Suede Sneakers",
      price: 8499,
      imageUrl: '/sneakers/sneakers-3.jpg',
      isAdded: false
    },
    {
      id: 4,
      title: 'Puma X Aka Boku Future Rider Sneakers',
      price: 7800,
      imageUrl: '/sneakers/sneakers-4.jpg',
      isAdded: false
    },
    {
      id: 5,
      title: 'Future Rider Sneakers',
      price: 9550,
      imageUrl: '/sneakers/sneakers-5.jpg',
      isAdded: false
    },
    {
      id: 6,
      title: 'Black Edition Sneakers',
      price: 16999,
      imageUrl: '/sneakers/sneakers-6.jpg',
      isAdded: false
    },
    {
      id: 7,
      title: 'Orange Boomb Edition Sneakers',
      price: 7499,
      imageUrl: '/sneakers/sneakers-7.jpg',
      isAdded: false
    },
    {
      id: 8,
      title: 'Nike Air Max 270 Sneakers',
      price: 15600,
      imageUrl: '/sneakers/sneakers-8.jpg',
      isAdded: false
    },
    {
      id: 9,
      title: 'Nike Air Force 1 Sneakers',
      price: 5900,
      imageUrl: '/sneakers/sneakers-9.jpg',
      isAdded: false
    },
    {
      id: 10,
      title: 'Adidas Ultraboost Sneakers',
      price: 11500,
      imageUrl: '/sneakers/sneakers-10.jpg',
      isAdded: false
    }
  ])

  const filterProducts = (category) => {
    if (category === 'expensive') {
      products.value = initialProducts.value.sort((a, b) => b.price - a.price)
    } else if (category === 'cheap') {
      products.value = initialProducts.value.sort((a, b) => a.price - b.price)
    }
  }

  const searchProducts = (searchValue) => {
    if (!searchValue) {
      products.value = initialProducts.value
    } else {
      const filteredItems = products.value.filter((product) => {
        return product.title.toLowerCase().includes(searchValue)
      })
      products.value = filteredItems
    }
  }

  return { products, filterProducts, searchProducts }
})
