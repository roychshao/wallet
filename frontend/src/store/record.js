import ajax from "../api"

const record = {
  namespaced: true,
  state: {
    modal: false,
    data: {},
    mode: "create"
  },
  mutations: {
    setModal(state, status) {
      state.modal = status;
    },
    setMode(state, mode) {
      state.mode = mode;
    },
    setData(state, data) {
      state.data = data
    }
  },
  actions: {
    openModal({ commit }) {
      commit("setModal", true);
    },
    closeModal({ commit }) {
      commit("setModal", false);
    },
    createMode({ commit }) {
      commit("setMode", "create");
    },
    editMode({ commit }) {
      commit("setMode", "edit");
    },
    importMode({ commit }) {
      commit("setMode", "import");
    },
    setData({ commit }, data) {
      commit("setData", data)
    },
    async createRecord({ rootGetters, dispatch }, record) {
      if (record?.record_type == "expense" && record?.record_debtors) {
        let len = Object.keys(record.record_debtors).length;
        for (let i = 0; i < len; ++i)
          record.record_debtors[i].debtor_record_amount *= -1;
      }
      ajax("/api/record/create", "post", {
        data: {
          wallet_id: rootGetters["wallet/getWalletId"],
          wallet_record_tag_id: record?.wallet_record_tag_id,
          record_ordinary: 1,
          record_name: record?.record_name,
          record_description: record?.record_description,
          record_amount: (record?.record_type == "expense" ? -1 : 1) * record?.record_amount,
          record_type: record?.record_type,
          record_date: new Date(record?.record_date).toISOString().split("Z")[0],
          record_debtors: record?.record_debtors,
        }
      }).then(res => {
        console.log(res.data);
        dispatch("auth/getProfile", null, { root: true });
      }).catch((err) => {
        console.log(err);
      }).then(() => {
        dispatch("closeModal");
      })
    },
    async editRecord({ rootGetters, getters, dispatch }, record) {
      const old_record = getters.getData;
      const new_record_amount = (record?.record_type == "expense" ? -1 : 1) * record?.record_amount;
      const old_record_amount = old_record?.record_amount;

      if (record?.record_type != old_record?.record_type && record?.record_debtors) {
        let len = record.record_debtors.length;
        for (let i = 0; i < len; ++i)
          record.record_debtors[i].debtor_record_amount *= -1;
      }

      ajax("/api/record/edit", "post", {
        data: {
          record_id: record?.record_id,
          record_wallet_id: rootGetters["wallet/getWalletId"],
          wallet_record_tag_id: record?.wallet_record_tag_id,
          record_ordinary: 1,
          record_name: record?.record_name,
          record_description: record?.record_description,
          record_amount: new_record_amount,
          record_type: record?.record_type,
          record_date: new Date(record?.record_date).toISOString().split("Z")[0],
          record_amount_diff: new_record_amount - old_record_amount,
          record_debtors: record?.record_debtors,
        }
      }).then(res => {
        console.log(res.data);
        dispatch("auth/getProfile", null, { root: true });
      }).catch((err) => {
        console.log(err);
      }).then(() => {
        dispatch("closeModal");
      })
    },
    async deleteRecord({ rootGetters, dispatch }, record) {
      ajax("/api/record/delete", "post", {
        data: {
          record_id: record?.record_id,
          record_wallet_id: rootGetters["wallet/getWalletId"],
          record_amount: record?.record_amount,
          record_debtors: record?.record_debtors
        }
      }).then(res => {
        console.log(res.data);
        dispatch("closeModal");
        dispatch("auth/getProfile", null, { root: true });
      }).catch((err) => {
        console.log(err);
        throw (err);
      })
    }
  },
  getters: {
    getModal(state) {
      return state.modal;
    },
    getMode(state) {
      return state.mode;
    },
    getData(state) {
      return state.data
    }
  }
}

export default record;