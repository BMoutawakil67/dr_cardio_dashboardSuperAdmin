<template>
  <div class="invoice-add-table">
    <h4>Item Details</h4>
    <div class="table-responsive">
      <table class="table table-center add-table-items">
        <thead>
          <tr>
            <th>Items</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Discount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="add-row" v-for="(event, index) in event">
            <td>
              <input type="text" class="form-control" />
            </td>
            <td>
              <input type="text" class="form-control" />
            </td>
            <td>
              <input type="text" class="form-control" />
            </td>
            <td>
              <input type="text" class="form-control" />
            </td>
            <td>
              <input type="text" class="form-control" />
            </td>
            <td>
              <input type="text" class="form-control" />
            </td>
            <td class="add-remove text-end">
              <a href="javascript:void(0);" class="add-btns me-2" @click="add()"
                ><i class="fas fa-plus-circle"></i
              ></a>
              <a href="javascript:;" class="copy-btn me-2"><i class="fas fa-copy"></i></a>
              <a href="javascript:void(0);" class="remove-btn" @click="deleteEvent()"
                ><i class="fa fa-trash-alt"></i
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
const event = [
  {
    id: 1,
  },
];
export default {
  mounted() {},
  data() {
    return {
      event,
    };
  },
  methods: {
    deleteEvent: function (event) {
      this.event.splice(this.event.indexOf(event), 1);
    },
    add() {
      this.event.push({ id: 2 });
    },
  },
};
</script>
