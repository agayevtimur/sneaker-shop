import { useCartStore } from '@/stores/CartStore'
import { defineStore, storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

export const useProductsStore = defineStore('ProductsStore', () => {
  const products = ref([
    {
      id: 1,
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      imageUrl: '/sneakers/sneakers-1.jpg',
      isAdded: false
    },
    {
      id: 2,
      title: 'Мужские Кроссовки Nike Air Max 270',
      price: 15600,
      imageUrl: '/sneakers/sneakers-2.jpg',
      isAdded: false
    },
    {
      id: 3,
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 8499,
      imageUrl: '/sneakers/sneakers-3.jpg',
      isAdded: false
    },
    {
      id: 4,
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 7800,
      imageUrl: '/sneakers/sneakers-4.jpg',
      isAdded: false
    },
    {
      id: 5,
      title: 'Кроссовки Future Rider',
      price: 9550,
      imageUrl: '/sneakers/sneakers-5.jpg',
      isAdded: false
    },
    {
      id: 6,
      title: 'Кроссовки Black Edition',
      price: 16999,
      imageUrl: '/sneakers/sneakers-6.jpg',
      isAdded: false
    },
    {
      id: 7,
      title: 'Кроссовки Orange Boomb Edition',
      price: 7499,
      imageUrl: '/sneakers/sneakers-7.jpg',
      isAdded: false
    },
    {
      id: 8,
      title: 'Кроссовки Nike Air Max 270',
      price: 15600,
      imageUrl: '/sneakers/sneakers-8.jpg',
      isAdded: false
    },
    {
      id: 9,
      title: 'Кроссовки Nike Air Force 1',
      price: 5900,
      imageUrl: '/sneakers/sneakers-9.jpg',
      isAdded: false
    },
    {
      id: 10,
      title: 'Кроссовки Adidas Ultraboost',
      price: 11500,
      imageUrl: '/sneakers/sneakers-10.jpg',
      isAdded: false
    }
  ])
  const initialProducts = ref([
    {
      id: 1,
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 12999,
      imageUrl: '/sneakers/sneakers-1.jpg',
      isAdded: false
    },
    {
      id: 2,
      title: 'Мужские Кроссовки Nike Air Max 270',
      price: 15600,
      imageUrl: '/sneakers/sneakers-2.jpg',
      isAdded: false
    },
    {
      id: 3,
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: 8499,
      imageUrl: '/sneakers/sneakers-3.jpg',
      isAdded: false
    },
    {
      id: 4,
      title: 'Кроссовки Puma X Aka Boku Future Rider',
      price: 7800,
      imageUrl: '/sneakers/sneakers-4.jpg',
      isAdded: false
    },
    {
      id: 5,
      title: 'Кроссовки Future Rider',
      price: 9550,
      imageUrl: '/sneakers/sneakers-5.jpg',
      isAdded: false
    },
    {
      id: 6,
      title: 'Кроссовки Black Edition',
      price: 16999,
      imageUrl: '/sneakers/sneakers-6.jpg',
      isAdded: false
    },
    {
      id: 7,
      title: 'Кроссовки Orange Boomb Edition',
      price: 7499,
      imageUrl: '/sneakers/sneakers-7.jpg',
      isAdded: false
    },
    {
      id: 8,
      title: 'Кроссовки Nike Air Max 270',
      price: 15600,
      imageUrl: '/sneakers/sneakers-8.jpg',
      isAdded: false
    },
    {
      id: 9,
      title: 'Кроссовки Nike Air Force 1',
      price: 5900,
      imageUrl: '/sneakers/sneakers-9.jpg',
      isAdded: false
    },
    {
      id: 10,
      title: 'Кроссовки Adidas Ultraboost',
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


  return { products, filterProducts, searchProducts, }
})
