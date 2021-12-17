import { createStore } from 'vuex'
const storeData = createStore({
    state: {
        name: 'aweia',
        list: [{
            name: "11-name",
            value: "11-value",
            status: false,
        },
        {
            name: "22-name",
            value: "22-value",
            status: false,
        }, {
            name: "33-name",
            value: "33-value",
            status: false,
        }
        ]
    },
    mutations: {
        addTodo(state, payload) {
            state.list.push(payload)
        },
        editTodo(state, payload) {
            state.list[payload.index] = payload.data
        },
        delTodo(state, payload) {
            // 删除splice(下标,个数)
            state.list.splice(payload, 1)
        },
        // 清除已完成 payload过滤后的数组
        clearTodo(state, payload) {
            payload.forEach((item, index) => {
                    console.log(item.status,index)

                if (item.status) {
                    state.list.splice(index, 1);
                }
            });
        }
    },
    actions: {
        actionAddTodo(store, params) {
            setTimeout(() => {
                store.commit('addTodo', params)
            }, 1000);
        }
    },
    // 模块化 以后讲解
    modules: {
    }
})
export default storeData