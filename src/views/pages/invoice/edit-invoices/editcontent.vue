<template>
  <div class="row">
    <div class="col-lg-7 col-md-6">
      <div class="invoice-fields">
        <h4 class="field-title">More Fields</h4>
        <div class="payment-details">
          <p>Debit Card XXXXXXXXXXXX-2541 HDFC Bank</p>
          <a
            href="javascript:void(0);"
            data-bs-toggle="modal"
            data-bs-target="#delete_bank_details"
            ><i class="fas fa-trash"></i
          ></a>
        </div>
      </div>
      <div class="invoice-faq">
        <div
          class="panel-group"
          id="accordion"
          role="tablist"
          aria-multiselectable="true"
        >
          <div class="faq-tab">
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingTwo">
                <p class="panel-title">
                  <a
                    class="collapsed"
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <i class="fas fa-plus-circle me-1"></i> Add Terms & Conditions
                  </a>
                </p>
              </div>
              <div
                id="collapseTwo"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordion"
              >
                <div class="panel-body">
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="faq-tab">
            <div class="panel panel-default">
              <div class="panel-heading" role="tab" id="headingThree">
                <p class="panel-title">
                  <a
                    class="collapsed"
                    data-bs-toggle="collapse"
                    data-bs-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <i class="fas fa-plus-circle me-1"></i> Add Notes
                  </a>
                </p>
              </div>
              <div
                id="collapseThree"
                class="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingThree"
                data-bs-parent="#accordion"
              >
                <div class="panel-body">
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5 col-md-6">
      <div class="invoice-total-card">
        <h4 class="invoice-total-title">Summary</h4>
        <div class="invoice-total-box">
          <div class="invoice-total-inner">
            <p>Taxable Amount <span>$21</span></p>
            <p>
              Round Off
              <input type="checkbox" id="status_1" class="check" />
              <label for="status_1" class="checktoggles">checkbox</label>
              <span>$54</span>
            </p>
            <div class="links-info-one">
              <div v-for="item in events" :key="item.id">
                <div class="links-cont">
                  <div class="service-amount" @click="deleteEvent1(events)">
                    <a href="javascript:void(0);" class="service-trash"
                      ><i :class="item.class"></i>{{ item.name }}</a
                    >
                    <span>{{ item.num }}</span>
                  </div>
                </div>
              </div>
              <a href="javascript:void(0);" class="add-links1" @click="addNew()">
                <i class="fas fa-plus-circle me-1"></i> Additional Charges
              </a>
            </div>

            <div class="links-info-discount">
              <div class="links-cont-discount" @click="add()">
                <a href="javascript:void(0);" class="add-links-one">
                  <i class="fas fa-plus-circle me-1"></i> Add more Discount
                </a>
              </div>
              <div v-for="item in event" :key="item.id">
                <div class="links-cont-discount" @click="deleteEvent(event)">
                  <div class="service-amount">
                    <a href="javascript:void(0);" class="service-trash"
                      ><i :class="item.class"></i>{{ item.name }}</a
                    >
                    <span>{{ item.num }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="invoice-total-footer">
            <h4>Total Amount <span>$ 894.00</span></h4>
          </div>
        </div>
      </div>
      <div class="upload-sign">
        <div class="form-group service-upload">
          <span>Upload Sign</span>
          <input type="file" multiple />
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Name of the Signatuaory" />
        </div>
        <div class="form-group float-end mb-0">
          <b-button variant="primary" type="submit">Save Invoice</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const event = [
  {
    id: 1,
    name: "",
    num: "",
    class: "",
  },
];
const events = [
  {
    id: 1,
    name: "",
    num: "",
    class: "",
  },
];
export default {
  mounted() {},
  data() {
    return {
      event,
      events,
    };
  },
  methods: {
    deleteEvent: function (event) {
      this.event.splice(this.event.indexOf(event), 1);
    },
    deleteEvent1: function (events) {
      this.events.splice(this.events.indexOf(events), 1);
    },
    add() {
      this.event.push({
        id: 2,
        name: "Off new",
        num: "$ 4 %",
        class: "fas fa-minus-circle me-1",
      });
    },
    addNew() {
      this.events.push({
        id: 2,
        name: "Service Charge",
        num: "$ 4",
        class: "fas fa-minus-circle me-1",
      });
    },
  },
};
</script>
