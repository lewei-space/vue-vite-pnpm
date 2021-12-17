import { createStore } from 'vuex'
export default createStore({
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
        },
        ]
    },
    mutations: {
        setName(state, params) {
            state.name = name
        },
        addTodo(state, payload) {
            state.list.push(payload)
        },
        delTodo(state, payload) {
            // 删除splice(下标,个数)
            state.list.splice(payload, 1)
        },
        // 清除已完成 payload过滤后的数组
        clear(state, payload) {
            state.list = payload
        }
    },
    actions: {
        asyncSetName(store, params) {
            setTimeout(() => {
                // commit 提交mutations
                store.commit('setName', params)
            }, 3000)
        }
    },
    // 模块化 以后讲解
    modules: {
    }
})