import orders from '@/views/orders_services/data/orders'

export default {
    state: {
        orders: [],
    },
    mutations: {
        deleteOrder(state, id) {
            console.log('deleteOrder commit')
            const i = state.orders.findIndex(item => item.id == id)
            state.orders.splice(i, 1)
        },
        updateOrder(state, updatedOrder) {
            console.log('update Order commit')

            const i = state.orders.findIndex(value => value.id === updatedOrder.id)
                // state.orders[i] = updatedOrder
            state.orders.splice(i, 1, updatedOrder)
                // state.orders[key] = orderUpdated
        },
        storeOrder(state, newOrder) {
            console.log('store Order commit')
            state.orders.push(newOrder)
            console.log(state.orders[state.orders.length - 1])
        }
    },
    actions: {
        deleteOrder(context, id) {
            console.log('deleteOrder dispatch')
                // scopo for delete with axios
            context.commit('deleteOrder', id)
        },
        updateOrder({ commit }, order) {
            console.log('update Order dispatch')
                // scopo for delete with axios
            commit('updateOrder', order)
        },
        storeOrder({ commit }, newOrder) {
            console.log('store Order dispatch')
            commit('storeOrder', newOrder)
        }
    },
    getters: {
        getOrders(state) {
            return state.orders;
        },
        setOrdersAPI(state) {
            return state.orders = orders
        },
    }
}