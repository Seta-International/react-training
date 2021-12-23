let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  completed: false,
  title: text
})

export const updateTodo = (id, text) => ({
  type: 'UPDATE_TODO',
  id: id,
  completed: false,
  title: text
})

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id: id,
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id: id
})

export const fetchProductsPending = ({
      type: 'FETCH_PRODUCTS_PENDING'
  })


  export const fetchProductsSuccess = products => ({
      type: 'FETCH_PRODUCTS_SUCCESS',
      products: products
})

export const fetchProductsError = error => ({
      type: 'FETCH_PRODUCTS_ERROR',
      error: error
})



