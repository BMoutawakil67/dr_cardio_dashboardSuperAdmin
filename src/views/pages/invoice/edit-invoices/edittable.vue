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
          <tr class="table-form-control add-row" v-for="item in event" :key="item.id">
            <td>
              <input type="text" class="form-control" :placeholder="item.name" />
            </td>
            <td>
              <input type="text" class="form-control" :placeholder="item.category" />
            </td>
            <td>
              <input type="text" class="form-control" :placeholder="item.num" />
            </td>
            <td>
              <input type="text" class="form-control" :placeholder="item.num1" />
            </td>
            <td>
              <input type="text" class="form-control" :placeholder="item.num2" />
            </td>
            <td>
              <input type="text" class="form-control" :placeholder="item.num3" />
            </td>
            <td class="add-remove text-end">
              <a href="javascript:void(0);" class="add-btn me-2" @click="add()"
                ><i class="fas fa-plus-circle"></i
              ></a>
              <a href="javascript:void(0);" class="copy-btn me-2"
                ><i class="fas fa-copy"></i></a
              ><a
                href="javascript:void(0);"
                class="remove-btn"
                @click="deleteEvent(event)"
                ><i class="fas fa-trash"></i
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
    name: "Item Name",
    category: "Category Name",
    num: "2",
    num1: "$10",
    num2: "$20",
    num3: "4%",
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
      this.event.push({
        name: "",
        category: "",
        num: "",
        num1: "",
        num2: "",
        num3: "",
      });
    },
  },
};
</script>
